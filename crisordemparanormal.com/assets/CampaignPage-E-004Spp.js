import {
  d as ba,
  o as n,
  c as i,
  a as e,
  j as f,
  Z as Ba,
  p as Ca,
  b as ka,
  _ as ya,
  g as Ga,
  M as Za,
  u as qa,
  S as Ja,
  r as l,
  e as za,
  A as ua,
  P as k,
  R as J,
  F as z,
  B as S,
  $ as ma,
  a0 as Ka,
  w as va,
  i as Ya,
  m as p,
  L as ta,
  t as pa,
  k as h,
  n as oa,
  q as sa,
  x as $,
  v as ha,
  T as Qa,
  N as V,
  l as ga,
  O as _a,
  J as K,
} from "./index-fqOV2Os2.js";
import { L as fa } from "./LoadingView-H3Q1po81.js";
import { C as Wa } from "./CharacterCard-Q6k0MBtR.js";
import { T as Xa } from "./ToastNotification-E6g073Ap.js";
import { P as ae } from "./PictureModal-tmAlMhGN.js";
import { T as ee } from "./TabNav-GB7V06r-.js";
import { P as te } from "./PlayerCard-GIcOFn_m.js";
import { C as oe } from "./CombatCard-nWeijYXp.js";
import { g as se } from "./firebase-lVLc_m94.js";
import { _ as ne } from "./vtt-modal-close-icon-A-6lhVcU.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./exit-icon-7lL51GVi.js";
import "./index.esm2017-ZmoTU-BS.js";
import "./browser-image-compression-9kymdGFS.js";
import "./v4-cyCr5FZV.js";
const ie = "/assets/vtt-campaing-page-button-A0EY-0g2.svg",
  le =
    "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Capa_1'%3e%3cg%20id='Group'%3e%3cg%20id='Group_2'%3e%3cpath%20id='Vector'%20d='M5.39062%2024.6094V60H54.6094V24.6094H5.39062ZM22.5928%2052.8516L24.488%2043.1407C23.5027%2041.903%2022.9688%2040.3907%2022.9688%2038.7891C22.9688%2034.9112%2026.1221%2031.7578%2030%2031.7578C33.8779%2031.7578%2037.0312%2034.9112%2037.0312%2038.7891C37.0312%2040.3907%2036.4973%2041.903%2035.512%2043.1407L37.4072%2052.8516H22.5928Z'%20fill='%23A347FF'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Group_3'%3e%3cg%20id='Group_4'%3e%3cpath%20id='Vector_2'%20d='M32.4084%2041.3348C33.1226%2040.6568%2033.5156%2039.7537%2033.5156%2038.7891C33.5156%2036.851%2031.938%2035.2734%2030%2035.2734C28.062%2035.2734%2026.4844%2036.851%2026.4844%2038.7891C26.4844%2039.7537%2026.8774%2040.6568%2027.5916%2041.3348L28.2936%2041.9992L26.8603%2049.3359H33.1397L31.7064%2041.9992L32.4084%2041.3348Z'%20fill='%23A347FF'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Group_5'%3e%3cg%20id='Group_6'%3e%3cpath%20id='Vector_3'%20d='M30%200C18.3682%200%208.90625%209.46195%208.90625%2021.0938H15.9375C15.9375%2013.3271%2022.2334%207.03125%2030%207.03125C37.7666%207.03125%2044.0625%2013.3271%2044.0625%2021.0938H51.0938C51.0938%209.46195%2041.6318%200%2030%200Z'%20fill='%23A347FF'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  de = "/assets/agente-especial-banner-icon-gHcyK4vO.png",
  wa = (y) => (Ca("data-v-7c9dc66a"), (y = y()), ka(), y),
  ce = { class: "close-button-container" },
  re = wa(() =>
    e("img", { src: ne, alt: "fechar", draggable: "false" }, null, -1)
  ),
  ue = [re],
  me = Ba(
    '<div class="locked-img-container" data-v-7c9dc66a><img src="' +
      le +
      '" alt="cadeado" draggable="false" data-v-7c9dc66a></div><div class="modal-text" data-v-7c9dc66a> Nenhum jogador nessa campanha possui a patente necessária para utilizar a Mesa Virtual </div><div class="main-text" data-v-7c9dc66a> Você pode mudar isso! </div><div class="info-label" data-v-7c9dc66a> Torne-se um AGENTE ESPECIAL ou superior e libere o acesso para todos os jogadores </div>',
    4
  ),
  ve = { class: "modal-button-container" },
  pe = ["onMouseup"],
  he = wa(() =>
    e(
      "div",
      { class: "patente-banner-container" },
      [
        e("img", {
          class: "patente-banner-img",
          src: de,
          alt: "agente especial",
          draggable: "false",
        }),
      ],
      -1
    )
  ),
  ge = ba({
    __name: "VirtualTableModal",
    emits: ["closeModal"],
    setup(y) {
      const v = () => {
        window.open("https://www.catarse.me/crisordemparanormal", "_blank");
      };
      return (r, d) => (
        n(),
        i(
          "div",
          {
            class: "vtt-modal-container",
            onClick: d[2] || (d[2] = (na) => r.$emit("closeModal")),
          },
          [
            e(
              "div",
              {
                class: "vtt-modal-content",
                onClick: d[1] || (d[1] = f(() => {}, ["stop"])),
              },
              [
                e("div", ce, [
                  e(
                    "button",
                    {
                      class: "button-naked",
                      onClick: d[0] || (d[0] = (na) => r.$emit("closeModal")),
                    },
                    ue
                  ),
                ]),
                me,
                e("div", ve, [
                  e(
                    "button",
                    {
                      class: "modal-button",
                      onClick: v,
                      onMouseup: f(v, ["middle"]),
                    },
                    " GET VTT ",
                    40,
                    pe
                  ),
                ]),
                he,
              ]
            ),
          ]
        )
      );
    },
  }),
  _e = ya(ge, [["__scopeId", "data-v-7c9dc66a"]]),
  u = (y) => (Ca("data-v-6a89e8a1"), (y = y()), ka(), y),
  fe = { key: 0, class: "container" },
  be = { class: "header-buttons" },
  Ce = ["onMouseup"],
  ke = u(() => e("div", { class: "vtt-new" }, " New! ", -1)),
  ye = u(() => e("img", { src: ie, alt: "Mesa Virtual" }, null, -1)),
  we = [ke, ye],
  Me = ["onMouseup"],
  Ve = ["onMouseup"],
  Ie = ["onMouseup"],
  Re = { class: "campaign-name" },
  Ue = { class: "campaign-content" },
  Te = { key: 0, class: "campaign-img-container" },
  Le = ["src"],
  Se = { class: "campaign-description" },
  $e = ["innerHTML"],
  Pe = { key: 0, class: "campaign-list-container" },
  Ae = { key: 0 },
  De = { key: 0 },
  He = { class: "cards-container" },
  Ne = { key: 1 },
  xe = u(() =>
    e(
      "div",
      { class: "no-agents-container" },
      [e("h3", null, "There are no agents on this campaign!")],
      -1
    )
  ),
  Ee = [xe],
  Fe = { key: 1 },
  Oe = { key: 0 },
  je = { class: "cards-container" },
  Be = { key: 1 },
  Ge = u(() =>
    e(
      "div",
      { class: "no-agents-container" },
      [e("h3", null, "There are no players on this campaign!")],
      -1
    )
  ),
  Ze = [Ge],
  qe = { key: 2 },
  Je = { key: 0 },
  ze = { class: "cards-container" },
  Ke = { key: 1 },
  Ye = { class: "no-agents-container" },
  Qe = u(() => e("h3", null, "There are no encounters on this campaign!", -1)),
  We = ["onMouseup"],
  Xe = { key: 1 },
  at = { key: 2 },
  et = u(() => e("h2", null, "Remove agent from campaign?", -1)),
  tt = u(() =>
    e("img", { class: "close-icon", src: K, alt: "fechar" }, null, -1)
  ),
  ot = [tt],
  st = u(() => e("h4", null, "The agent can be re-added to the campaign", -1)),
  nt = { key: 3 },
  it = u(() => e("h2", null, "Remove player from campaign?", -1)),
  lt = u(() =>
    e("img", { class: "close-icon", src: K, alt: "fechar" }, null, -1)
  ),
  dt = [lt],
  ct = u(() =>
    e(
      "h4",
      null,
      "All agents of this player will be removed. The player can re-join the campaign if they have access to the invite link",
      -1
    )
  ),
  rt = { class: "modal-content modal-width" },
  ut = u(() =>
    e("h2", { class: "modal-title" }, " Link to join the Campaign ", -1)
  ),
  mt = u(() =>
    e("img", { class: "close-icon", src: K, alt: "fechar" }, null, -1)
  ),
  vt = [mt],
  pt = { class: "modal-body" },
  ht = { class: "campaign-link-container" },
  gt = ["href"],
  _t = { key: 0, class: "campaign-link-buttons" },
  ft = { key: 1, class: "campaign-link-buttons-no-dm" },
  bt = u(() => e("h2", null, "Leave campaign?", -1)),
  Ct = u(() =>
    e("img", { class: "close-icon", src: K, alt: "fechar" }, null, -1)
  ),
  kt = [Ct],
  yt = u(() =>
    e(
      "h4",
      null,
      "All your agents will be removed from this campaign. You can re-join the campaign if you have access to the invite link",
      -1
    )
  ),
  wt = { key: 1 },
  Mt = ba({
    __name: "CampaignPage",
    setup(y) {
      const v = Ga(),
        r = Za(),
        d = qa(),
        ia = Ja().params.id,
        Y = "https://crisordemparanormal.com/",
        I = l(!0),
        j = l(!1),
        P = l(!1),
        R = l(!1),
        B = l(!1),
        A = l(!1),
        D = l(),
        U = l(),
        T = l(!1),
        t = l(),
        H = l([]),
        N = l([]),
        L = l(0),
        Q = l(),
        W = l(),
        _ = l(!1),
        Ma = l(0),
        X = l(!1),
        G = l(!1),
        la = l([
          { label: "Agents", value: 0 },
          { label: "Players", value: 1 },
        ]),
        x = l(0),
        m = l({ message: "", type: "info", alive: !1, timeout: 0 });
      (za(async () => {
        var E, s, M;
        if (!v.currentUser) return;
        Ma.value = await se((E = v.currentUser) == null ? void 0 : E.uid);
        const o = await ua(k(r, "campaigns", ia));
        o.data() || d.push({ name: "not-found" }),
          (t.value = o.data()),
          (t.value.id = o.id),
          (await ua(k(r, "users", v.currentUser.uid)))
            .data()
            .campaignsId.includes(ia) ||
            d.push({ name: "campaign-page-denied" }),
          ((s = v.currentUser) == null ? void 0 : s.uid) ===
            ((M = t.value) == null ? void 0 : M.uid) &&
            ((_.value = !0), la.value.push({ label: "Encounters", value: 2 }));
        const g = J(r, "characters"),
          b = z(g, S("campaignDocId", "==", t.value.id));
        Q.value = ma(b, (aa) => {
          const F = [];
          for (const O of aa.docs) {
            const q = O.data();
            ((q.id = O.id), F.push(q));
          }
          ((H.value = F), L.value < 2 && L.value++);
        });
        const C = J(r, "users"),
          Z = z(C, S("campaignsId", "array-contains", t.value.id));
        W.value = ma(Z, (aa) => {
          var O;
          const F = [];
          for (const q of aa.docs) {
            const ea = q.data();
            (ea.tier >= 4 && (X.value = !0),
              ea.uid !== ((O = t.value) == null ? void 0 : O.uid) &&
                F.push(ea));
          }
          ((N.value = F), L.value < 2 && L.value++);
        });
      }),
        Ka(() => {
          (Q.value && Q.value(), W.value && W.value());
        }),
        va(L, () => {
          I.value !== !1 && L.value >= 2 && (I.value = !1);
        }));
      const Va = () => {
          t.value &&
            _.value &&
            ((t.value.joinId = crypto.randomUUID().substring(0, 13)),
            V(k(r, "campaigns", t.value.id), t.value));
        },
        da = async () => {
          t.value &&
            (await navigator.clipboard.writeText(
              Y + "campanha/entrar/" + t.value.joinId
            ),
            (m.value.message = "Link copied"),
            (m.value.alive = !0),
            w());
        };
      va(
        () => m.value.alive,
        () => {
          m.value.alive === !0 &&
            (m.value.timeout = window.setTimeout(
              () => (m.value.alive = !1),
              3e3
            ));
        }
      );
      const Ia = () => {
          ((m.value.alive = !1), clearTimeout(m.value.timeout));
        },
        Ra = (o) => {
          var a;
          if (v.currentUser && o)
            return (
              v.currentUser.uid === o ||
              v.currentUser.uid === ((a = t.value) == null ? void 0 : a.uid)
            );
        },
        Ua = async () => {
          var a, c;
          if (!((a = D.value) != null && a.id)) return;
          T.value = !0;
          const o = (c = D.value) == null ? void 0 : c.id;
          (await V(k(r, "characters", o), { campaignDocId: "" }),
            w(),
            (T.value = !1),
            (m.value.message = "Agent removed from the campaign!"),
            (m.value.alive = !0));
        },
        Ta = async () => {
          var g;
          if (!t.value || !U.value) return;
          T.value = !0;
          const o = J(r, "characters"),
            a = z(
              o,
              S("campaignDocId", "==", t.value.id),
              S("uid", "==", (g = U.value) == null ? void 0 : g.uid)
            ),
            c = await ga(a);
          for (const b of c.docs) {
            const C = b.data();
            ((C.id = b.id),
              await V(k(r, "characters", C.id), { campaignDocId: "" }));
          }
          (await V(k(r, "users", U.value.uid), { campaignsId: _a(t.value.id) }),
            w(),
            (T.value = !1),
            (m.value.message = "Player removed from the campaign!"),
            (m.value.alive = !0));
        },
        La = async () => {
          var g;
          if (_.value || !t.value || !v.currentUser) return;
          (w(), (T.value = !0));
          const o = J(r, "characters"),
            a = z(
              o,
              S("campaignDocId", "==", t.value.id),
              S("uid", "==", (g = v.currentUser) == null ? void 0 : g.uid)
            ),
            c = await ga(a);
          for (const b of c.docs) {
            const C = b.data();
            ((C.id = b.id),
              await V(k(r, "characters", C.id), { campaignDocId: "" }));
          }
          (await V(k(r, "users", v.currentUser.uid), {
            campaignsId: _a(t.value.id),
          }),
            d.push({ name: "campaigns-list" }));
        },
        Sa = () => {
          var o;
          ((I.value = !0),
            d.push({
              name: "campaign-edit",
              params: { id: (o = t.value) == null ? void 0 : o.id },
            }));
        },
        $a = () => {
          var a;
          const o = d.resolve({
            name: "campaign-edit",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          window.open(o.href, "_blank");
        },
        ca = () => {
          var o;
          ((I.value = !0),
            d.push({
              name: "campaign-create-combat",
              params: { id: (o = t.value) == null ? void 0 : o.id },
            }));
        },
        ra = () => {
          var a;
          const o = d.resolve({
            name: "campaign-create-combat",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          window.open(o.href, "_blank");
        },
        Pa = () => {
          var o;
          ((I.value = !0),
            d.push({
              name: "master-screen",
              params: { id: (o = t.value) == null ? void 0 : o.id },
            }));
        },
        Aa = () => {
          var a;
          const o = d.resolve({
            name: "master-screen",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          window.open(o.href, "_blank");
        },
        Da = (o) => {
          const a = d.resolve({ name: "character-sheet", params: { id: o } });
          window.open(a.href, "_blank");
        },
        Ha = (o) => {
          const a = H.value.findIndex((c) => c.id === o);
          ((D.value = H.value[a]), (j.value = !0));
        },
        Na = (o) => {
          const a = N.value.findIndex((c) => (c.uid = o));
          ((U.value = N.value[a]), (B.value = !0));
        },
        w = () => {
          ((B.value = !1),
            (P.value = !1),
            (R.value = !1),
            (j.value = !1),
            (A.value = !1),
            (D.value = void 0),
            (U.value = void 0));
        },
        xa = (o, a) => {
          t.value &&
            _.value &&
            ((t.value.pictureURL = o),
            (t.value.pictureFullPath = a),
            V(k(r, "campaigns", t.value.id), t.value),
            w());
        },
        Ea = async (o) => {
          var c;
          if (!t.value || !((c = t.value) != null && c.id) || !t.value.combats)
            return;
          const a = t.value.combats.findIndex((g) => g.id === o);
          (t.value.currentCombat === a && (t.value.currentCombat = -1),
            t.value.combats.splice(a, 1),
            await V(k(r, "campaigns", t.value.id), t.value));
        },
        Fa = (o) => {
          var a;
          ((I.value = !0),
            d.push({
              name: "campaign-edit-combat",
              params: {
                campaignId: (a = t.value) == null ? void 0 : a.id,
                combatId: o,
              },
            }));
        },
        Oa = () => {
          var o;
          X.value
            ? d.push({
                name: "vtt",
                params: { id: (o = t.value) == null ? void 0 : o.id },
              })
            : (G.value = !0);
        },
        ja = () => {
          var a;
          const o = d.resolve({
            name: "vtt",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          X.value ? window.open(o.href, "_blank") : (G.value = !0);
        };
      return (o, a) => {
        var g, b, C, Z, E;
        const c = Ya("vue-final-modal");
        return I.value
          ? (n(), i("div", wt, [h(fa, { "page-loading": "" })]))
          : (n(),
            i("div", fe, [
              e("div", be, [
                e(
                  "div",
                  {
                    class: "vtt-button",
                    onClick: Oa,
                    onMouseup: f(ja, ["middle"]),
                  },
                  we,
                  40,
                  Ce
                ),
                _.value
                  ? p("", !0)
                  : (n(),
                    i(
                      "button",
                      {
                        key: 0,
                        class: "button-secondary campaign-buttons",
                        onClick: a[0] || (a[0] = (s) => (A.value = !A.value)),
                      },
                      " Leave Campaign "
                    )),
                _.value
                  ? (n(),
                    i(
                      "button",
                      {
                        key: 1,
                        class: "button-secondary campaign-buttons",
                        onClick: a[1] || (a[1] = (s) => (R.value = !R.value)),
                      },
                      " Cover Photo "
                    ))
                  : p("", !0),
                e(
                  "button",
                  {
                    class: "button-secondary campaign-buttons",
                    onClick:
                      a[2] ||
                      (a[2] = (s) => {
                        var M;
                        return ta(d).push({
                          name: "campaign-add-agent",
                          params: { id: (M = t.value) == null ? void 0 : M.id },
                        });
                      }),
                  },
                  " Add Agents "
                ),
                e(
                  "button",
                  {
                    class: "button-secondary campaign-buttons",
                    onClick: a[3] || (a[3] = (s) => (P.value = !P.value)),
                  },
                  " Invite Players "
                ),
                _.value
                  ? (n(),
                    i(
                      "button",
                      {
                        key: 2,
                        class: "button-secondary campaign-buttons",
                        onClick: Sa,
                        onMouseup: f($a, ["middle"]),
                        onMousedown:
                          a[4] ||
                          (a[4] = f(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " Edit Campaign ",
                      40,
                      Me
                    ))
                  : p("", !0),
                _.value
                  ? (n(),
                    i(
                      "button",
                      {
                        key: 3,
                        class: "button-secondary campaign-buttons",
                        onClick: ca,
                        onMouseup: f(ra, ["middle"]),
                        onMousedown:
                          a[5] ||
                          (a[5] = f(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " Create Encounter ",
                      40,
                      Ve
                    ))
                  : p("", !0),
                !((g = t.value) != null && g.privateMasterScreen) || _.value
                  ? (n(),
                    i(
                      "button",
                      {
                        key: 4,
                        class: "button-secondary campaign-buttons",
                        onClick: Pa,
                        onMouseup: f(Aa, ["middle"]),
                        onMousedown:
                          a[6] ||
                          (a[6] = f(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " GM Screen ",
                      40,
                      Ie
                    ))
                  : p("", !0),
              ]),
              e("div", Re, pa((b = t.value) == null ? void 0 : b.name), 1),
              e("div", Ue, [
                (C = t.value) != null && C.pictureURL
                  ? (n(),
                    i("div", Te, [
                      e(
                        "img",
                        {
                          class: "campaign-img",
                          src: t.value.pictureURL,
                          alt: "foto de capa",
                        },
                        null,
                        8,
                        Le
                      ),
                    ]))
                  : p("", !0),
                e("div", Se, [
                  e(
                    "div",
                    {
                      class: "description",
                      innerHTML: (Z = t.value) == null ? void 0 : Z.description,
                    },
                    null,
                    8,
                    $e
                  ),
                ]),
              ]),
              T.value
                ? (n(), i("div", Xe, [h(fa, { "page-loading": "" })]))
                : (n(),
                  i("div", Pe, [
                    h(
                      ee,
                      {
                        "font-size-big": "",
                        "current-tab": x.value,
                        "tab-options": la.value,
                        onHandleNavigation:
                          a[7] || (a[7] = (s) => (x.value = s)),
                      },
                      null,
                      8,
                      ["current-tab", "tab-options"]
                    ),
                    x.value === 0
                      ? (n(),
                        i("div", Ae, [
                          H.value.length > 0
                            ? (n(),
                              i("div", De, [
                                e("div", He, [
                                  (n(!0),
                                  i(
                                    oa,
                                    null,
                                    sa(
                                      H.value,
                                      (s) => (
                                        n(),
                                        i("div", { key: s.id }, [
                                          h(
                                            Wa,
                                            {
                                              "campaign-page": "",
                                              "char-id": s.id,
                                              name: s.name,
                                              "char-class": s.className,
                                              timestamp: s.timestamp.seconds,
                                              "sheet-picture":
                                                s.sheetPictureURL,
                                              "can-remove-from-campaign": Ra(
                                                s.uid
                                              ),
                                              onHandleOpenSheetMidClick: Da,
                                              onHandleOpenSheet: (M) =>
                                                o.$router.push({
                                                  name: "character-sheet",
                                                  params: { id: s.id },
                                                }),
                                              onHandleRemoveFromCampaign: Ha,
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
                            : (n(), i("div", Ne, Ee)),
                        ]))
                      : p("", !0),
                    x.value === 1
                      ? (n(),
                        i("div", Fe, [
                          N.value.length > 0
                            ? (n(),
                              i("div", Oe, [
                                e("div", je, [
                                  (n(!0),
                                  i(
                                    oa,
                                    null,
                                    sa(
                                      N.value,
                                      (s) => (
                                        n(),
                                        i("div", { key: s.uid }, [
                                          h(
                                            te,
                                            {
                                              user: s,
                                              "can-remove-from-campaign":
                                                _.value,
                                              onHandleRemove: Na,
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
                            : (n(), i("div", Be, Ze)),
                        ]))
                      : p("", !0),
                    x.value === 2
                      ? (n(),
                        i("div", qe, [
                          (E = t.value) != null &&
                          E.combats &&
                          t.value.combats.length > 0
                            ? (n(),
                              i("div", Je, [
                                e("div", ze, [
                                  (n(!0),
                                  i(
                                    oa,
                                    null,
                                    sa(
                                      t.value.combats,
                                      (s) => (
                                        n(),
                                        i("div", { key: s.id }, [
                                          h(
                                            oe,
                                            {
                                              combat: s,
                                              onHandleRemove: Ea,
                                              onHandleEdit: Fa,
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
                            : (n(),
                              i("div", Ke, [
                                e("div", Ye, [
                                  Qe,
                                  e(
                                    "button",
                                    {
                                      class: "button-primary",
                                      onClick: ca,
                                      onMouseup: f(ra, ["middle"]),
                                      onMousedown:
                                        a[8] ||
                                        (a[8] = f(() => {}, [
                                          "middle",
                                          "prevent",
                                          "stop",
                                        ])),
                                    },
                                    " Create Encounter ",
                                    40,
                                    We
                                  ),
                                ]),
                              ])),
                        ]))
                      : p("", !0),
                  ])),
              D.value
                ? (n(),
                  i("div", at, [
                    h(
                      c,
                      {
                        modelValue: j.value,
                        "onUpdate:modelValue":
                          a[9] || (a[9] = (s) => (j.value = s)),
                        classes: "modal-container",
                      },
                      {
                        default: $(() => [
                          e("div", { class: "modal-content modal-width" }, [
                            e("div", { class: "modal-header" }, [
                              et,
                              e("button", { onClick: w }, ot),
                            ]),
                            e("div", { class: "modal-body" }, [
                              st,
                              e("div", { class: "button-container" }, [
                                e(
                                  "button",
                                  { class: "button-primary", onClick: Ua },
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
                : p("", !0),
              U.value
                ? (n(),
                  i("div", nt, [
                    h(
                      c,
                      {
                        modelValue: B.value,
                        "onUpdate:modelValue":
                          a[10] || (a[10] = (s) => (B.value = s)),
                        classes: "modal-container",
                      },
                      {
                        default: $(() => [
                          e("div", { class: "modal-content modal-width" }, [
                            e("div", { class: "modal-header" }, [
                              it,
                              e("button", { onClick: w }, dt),
                            ]),
                            e("div", { class: "modal-body" }, [
                              ct,
                              e("div", { class: "button-container" }, [
                                e(
                                  "button",
                                  { class: "button-primary", onClick: Ta },
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
                : p("", !0),
              h(
                c,
                {
                  modelValue: P.value,
                  "onUpdate:modelValue":
                    a[11] || (a[11] = (s) => (P.value = s)),
                  classes: "modal-container",
                },
                {
                  default: $(() => {
                    var s, M;
                    return [
                      e("div", rt, [
                        e("div", { class: "modal-header" }, [
                          ut,
                          e("button", { onClick: w }, vt),
                        ]),
                        e("div", pt, [
                          e("div", ht, [
                            e(
                              "a",
                              {
                                class: "campaign-link",
                                href:
                                  ta(Y) +
                                  "campanha/entrar/" +
                                  ((s = t.value) == null ? void 0 : s.joinId),
                              },
                              pa(
                                ta(Y) +
                                  "campanha/entrar/" +
                                  ((M = t.value) == null ? void 0 : M.joinId)
                              ),
                              9,
                              gt
                            ),
                          ]),
                          _.value
                            ? (n(),
                              i("div", _t, [
                                e(
                                  "button",
                                  {
                                    class: "button-naked reset-button",
                                    onClick: Va,
                                  },
                                  " Reset "
                                ),
                                e(
                                  "button",
                                  {
                                    class: "button-primary share-button",
                                    onClick: da,
                                  },
                                  " Copy "
                                ),
                              ]))
                            : (n(),
                              i("div", ft, [
                                e(
                                  "button",
                                  {
                                    class: "button-primary share-button",
                                    onClick: da,
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
              h(
                c,
                {
                  modelValue: R.value,
                  "onUpdate:modelValue":
                    a[13] || (a[13] = (s) => (R.value = s)),
                  classes: "modal-container",
                },
                {
                  default: $(() => [
                    h(
                      ae,
                      {
                        campaign: t.value,
                        "is-campaign": "",
                        onHandleCloseModal:
                          a[12] || (a[12] = (s) => (R.value = !R.value)),
                        onHandleUpdatePicture: xa,
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
              h(
                c,
                {
                  modelValue: A.value,
                  "onUpdate:modelValue":
                    a[14] || (a[14] = (s) => (A.value = s)),
                  classes: "modal-container",
                },
                {
                  default: $(() => [
                    e("div", { class: "modal-content modal-width" }, [
                      e("div", { class: "modal-header" }, [
                        bt,
                        e("button", { onClick: w }, kt),
                      ]),
                      e("div", { class: "modal-body" }, [
                        yt,
                        e("div", { class: "button-container" }, [
                          e(
                            "button",
                            { class: "button-primary", onClick: La },
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
              G.value
                ? (n(),
                  ha(_e, {
                    key: 4,
                    onCloseModal: a[15] || (a[15] = (s) => (G.value = !1)),
                  }))
                : p("", !0),
              h(
                Qa,
                { name: "toast" },
                {
                  default: $(() => [
                    m.value.alive
                      ? (n(),
                        ha(
                          Xa,
                          {
                            key: 0,
                            toast: m.value,
                            type: m.value.type,
                            onDismiss: Ia,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : p("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
      };
    },
  }),
  Ot = ya(Mt, [["__scopeId", "data-v-6a89e8a1"]]);
export { Ot as default };

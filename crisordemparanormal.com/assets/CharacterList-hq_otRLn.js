import {
  d as Y,
  g as Z,
  M as ee,
  u as ae,
  r,
  e as te,
  R as U,
  F as se,
  B as oe,
  l as ne,
  f as H,
  h as ie,
  w as le,
  i as re,
  o as l,
  c as u,
  a as s,
  j as B,
  t as T,
  k as I,
  m as D,
  n as ue,
  q as ce,
  v as O,
  x as P,
  T as de,
  y as me,
  z as ve,
  A as he,
  P as E,
  C as pe,
  D as _e,
  E as fe,
  p as ge,
  b as we,
  H as F,
  I as Ce,
  J as ye,
  _ as be,
} from "./index-G0kqgsTS.js";
import { L as ke } from "./LoadingView-KgVPmtmJ.js";
import { S as xe } from "./SearchInput-WoSt6VsK.js";
import { T as Me } from "./ToastNotification-ywErXxhn.js";
import { C as Ie } from "./CharacterCard-yICF6vxs.js";
import { g as Re, C as K, h as Te } from "./firebase-IQne05Px.js";
import { _ as De } from "./lodash-gzw5KmHd.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./_commonjsHelpers-4gQjN7DL.js";
const _ = (f) => (ge("data-v-ea4b29be"), (f = f()), we(), f),
  Le = { key: 0, class: "agents-container" },
  Se = { key: 0 },
  Ae = ["disabled", "onMouseup"],
  Ne = { key: 0 },
  Ve = { key: 1 },
  Ue = { key: 2 },
  He = { class: "cards-container" },
  Be = { key: 1, class: "no-agents-container" },
  Oe = _(() => s("h3", null, "No agent found!", -1)),
  Pe = { key: 2 },
  Ee = { class: "modal-content modal-width" },
  Fe = _(() => s("h2", null, "Remove agent from the Ordo?", -1)),
  Ke = _(() =>
    s("img", { class: "close-icon", src: ye, alt: "fechar" }, null, -1)
  ),
  qe = [Ke],
  $e = { class: "modal-body" },
  je = _(() =>
    s(
      "h3",
      null,
      [
        F("To confirm this action type "),
        s("b", null, "REMOVER"),
        F(" on the field below:"),
      ],
      -1
    )
  ),
  ze = _(() =>
    s("h4", null, "Atention: this action is permanent and irreversible!", -1)
  ),
  Je = { class: "input-container" },
  Ge = ["onKeyup"],
  Qe = ["disabled"],
  We = { key: 1 },
  Xe = Y({
    __name: "CharacterList",
    setup(f) {
      const m = Z(),
        g = ee(),
        w = ae(),
        o = r([]),
        C = r(!0),
        y = r(!1),
        c = r(),
        b = r(""),
        R = r(""),
        k = r(K),
        d = r(0),
        n = r({ message: "", type: "info", alive: !1, timeout: 0 });
      te(async () => {
        var v, h, p;
        if (!((v = m.currentUser) != null && v.email)) return;
        const e = [],
          a = U(g, "characters"),
          i = se(
            a,
            oe("uid", "==", (h = m.currentUser) == null ? void 0 : h.uid)
          ),
          t = await ne(i);
        for (const x of t.docs) {
          const M = x.data();
          (M.id = x.id), e.push(M);
        }
        e.sort((x, M) => {
          var N, V;
          return (
            ((N = M.timestamp) == null ? void 0 : N.seconds) * 1e3 -
            ((V = x.timestamp) == null ? void 0 : V.seconds) * 1e3
          );
        }),
          (o.value = e),
          (d.value = await Re((p = m.currentUser) == null ? void 0 : p.uid)),
          (C.value = !1);
      });
      const L = H(() => b.value.toLocaleLowerCase().trim() === "remover"),
        q = H(() => o.value.filter((e) => ie(e.name, R.value))),
        $ = (e) => {
          y.value = !0;
          const a = o.value.findIndex((i) => i.id === e);
          c.value = o.value[a];
        },
        S = () => {
          (y.value = !1), (c.value = void 0), (b.value = "");
        },
        j = () => {
          (o.value.length > k.value && d.value < 3) ||
            ((C.value = !0), w.push({ name: "character-creation" }));
        },
        z = () => {
          if (o.value.length > k.value && d.value < 3) return;
          const e = w.resolve({ name: "character-creation" });
          window.open(e.href, "_blank");
        },
        J = (e) => {
          (C.value = !0),
            w.push({ name: "character-sheet", params: { id: e } });
        },
        G = (e) => {
          const a = w.resolve({ name: "character-sheet", params: { id: e } });
          window.open(a.href, "_blank");
        },
        A = async () => {
          if (!L.value || !c.value) return;
          await Ce(E(g, "characters", c.value.id));
          const e = o.value.findIndex((a) => {
            var i;
            return (
              a.id ===
              ((i = c == null ? void 0 : c.value) == null ? void 0 : i.id)
            );
          });
          o.value.splice(e, 1), S();
        },
        Q = async (e) => {
          if (!m.currentUser) return;
          if (
            d.value < 3 &&
            (await Te("uid", m.currentUser.uid, "characters", K))
          ) {
            (n.value.message = "Agent limit reached!"),
              (n.value.alive = !0);
            return;
          }
          const a = o.value.findIndex((p) => p.id === e),
            i = De.cloneDeep(o.value[a]);
          (i.campaignDocId = ""), (i.timestamp = me());
          const t = await ve(U(g, "characters"), i),
            v = await he(E(g, "characters", t.id));
          if (!v.data()) return;
          const h = v.data();
          (h.id = t.id),
            o.value.unshift(h),
            (n.value.message = "Agent duplicated succefully"),
            (n.value.alive = !0);
        },
        W = async (e) => {
          await navigator.clipboard.writeText(
            "https://crisordemparanormal.com/agente/" + e
          ),
            (n.value.message = "Link copiado"),
            (n.value.alive = !0);
        };
      le(
        () => n.value.alive,
        () => {
          n.value.alive === !0 &&
            (n.value.timeout = window.setTimeout(
              () => (n.value.alive = !1),
              3e3
            ));
        }
      );
      const X = () => {
        (n.value.alive = !1), clearTimeout(n.value.timeout);
      };
      return (e, a) => {
        const i = re("vue-final-modal");
        return C.value
          ? (l(), u("div", We, [I(ke, { "page-loading": "" })]))
          : (l(),
            u("div", Le, [
              o.value.length > 0
                ? (l(),
                  u("div", Se, [
                    s(
                      "button",
                      {
                        class: "button-primary new-button",
                        disabled: o.value.length >= k.value && d.value < 3,
                        onClick: j,
                        onMouseup: B(z, ["middle"]),
                        onMousedown:
                          a[0] ||
                          (a[0] = B(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " New Agent ",
                      40,
                      Ae
                    ),
                    s("div", null, [
                      d.value < 3
                        ? (l(),
                          u(
                            "h3",
                            Ne,
                            " Agents: " + T(o.value.length) + "/" + T(k.value),
                            1
                          ))
                        : (l(),
                          u("h3", Ve, " Agents: " + T(o.value.length), 1)),
                      o.value.length > 6
                        ? (l(),
                          u("div", Ue, [
                            I(
                              xe,
                              {
                                value: R.value,
                                onUpdate: a[1] || (a[1] = (t) => (R.value = t)),
                              },
                              null,
                              8,
                              ["value"]
                            ),
                          ]))
                        : D("", !0),
                      s("div", He, [
                        (l(!0),
                        u(
                          ue,
                          null,
                          ce(
                            q.value,
                            (t) => (
                              l(),
                              O(
                                Ie,
                                {
                                  key: t.id,
                                  "char-id": t.id,
                                  name: t.name,
                                  "char-class": t.className,
                                  timestamp: t.timestamp.seconds,
                                  "sheet-picture": t.sheetPictureURL,
                                  onHandleOpenSheet: J,
                                  onHandleOpenSheetMidClick: G,
                                  onHandleRemove: $,
                                  onHandleShareCharacter: W,
                                  onHandleDuplicate: Q,
                                },
                                null,
                                8,
                                [
                                  "char-id",
                                  "name",
                                  "char-class",
                                  "timestamp",
                                  "sheet-picture",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : (l(),
                  u("div", Be, [
                    Oe,
                    s(
                      "button",
                      {
                        class: "button-primary",
                        onClick:
                          a[2] ||
                          (a[2] = (t) =>
                            e.$router.push({ name: "character-creation" })),
                      },
                      " New agent "
                    ),
                  ])),
              c.value
                ? (l(),
                  u("div", Pe, [
                    I(
                      i,
                      {
                        modelValue: y.value,
                        "onUpdate:modelValue":
                          a[4] || (a[4] = (t) => (y.value = t)),
                        classes: "modal-container",
                      },
                      {
                        default: P(() => [
                          s("div", Ee, [
                            s("div", { class: "modal-header" }, [
                              Fe,
                              s("button", { onClick: S }, qe),
                            ]),
                            s("div", $e, [
                              je,
                              ze,
                              s("div", Je, [
                                pe(
                                  s(
                                    "input",
                                    {
                                      "onUpdate:modelValue":
                                        a[3] || (a[3] = (t) => (b.value = t)),
                                      type: "text",
                                      class: "input-primary",
                                      onKeyup: fe(A, ["enter"]),
                                    },
                                    null,
                                    40,
                                    Ge
                                  ),
                                  [[_e, b.value]]
                                ),
                                s(
                                  "button",
                                  {
                                    class: "button-remove",
                                    disabled: !L.value,
                                    onClick: A,
                                  },
                                  " Confirm ",
                                  8,
                                  Qe
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
                : D("", !0),
              I(
                de,
                { name: "toast" },
                {
                  default: P(() => [
                    n.value.alive
                      ? (l(),
                        O(
                          Me,
                          {
                            key: 0,
                            toast: n.value,
                            type: n.value.type,
                            onDismiss: X,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : D("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
      };
    },
  }),
  ra = be(Xe, [["__scopeId", "data-v-ea4b29be"]]);
export { ra as default };

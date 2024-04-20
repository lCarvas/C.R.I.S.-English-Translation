import {
  d as z,
  g as G,
  M as J,
  u as Q,
  r,
  e as W,
  R as X,
  F as Y,
  B as Z,
  l as ee,
  f as D,
  h as ae,
  w as te,
  i as se,
  o as l,
  c as i,
  a,
  j as oe,
  t as M,
  k as v,
  m as x,
  n as ne,
  q as le,
  v as O,
  T as ie,
  x as re,
  y as ue,
  z as ce,
  A as de,
  p as ve,
  b as me,
  C as B,
  D as he,
  P as pe,
  E as _e,
  _ as fe,
} from "./index-R0omtfCh.js";
import { L as ge } from "./LoadingView-3PnmBxfB.js";
import { S as ye } from "./SearchInput-QmHiECy4.js";
import { T as Ce } from "./ToastNotification-UC8TDHNU.js";
import { C as we } from "./CharacterCard-dR4RLit4.js";
import { g as ke, C as be } from "./firebase-M2_dwsIb.js";
import "./open-in-new-icon-p91krxL-.js";
const m = (h) => (ve("data-v-a15b80ae"), (h = h()), me(), h),
  Me = { key: 0, class: "agents-container" },
  xe = { key: 0 },
  Te = ["disabled", "onMouseup"],
  Se = { key: 0 },
  Ie = { key: 1 },
  Re = { key: 2 },
  Le = { class: "cards-container" },
  Ne = { key: 1, class: "no-agents-container" },
  Ve = m(() => a("h3", null, "No agent found!", -1)),
  Ae = { key: 2 },
  Ue = { class: "modal-content modal-width" },
  De = m(() => a("h2", null, "Desligar este agente da Ordem?", -1)),
  Oe = m(() =>
    a("img", { class: "close-icon", src: _e, alt: "fechar" }, null, -1)
  ),
  Be = [Oe],
  Pe = { class: "modal-body" },
  He = m(() =>
    a(
      "h3",
      null,
      [
        B("To confirm this action type "),
        a("b", null, "REMOVER"),
        B(" on the field below:"),
      ],
      -1
    )
  ),
  Ee = m(() =>
    a("h4", null, "Atention: this action is permanent and irreversible!", -1)
  ),
  Fe = { class: "input-container" },
  Ke = ["onKeyup"],
  qe = ["disabled"],
  $e = { key: 1 },
  je = z({
    __name: "CharacterList",
    setup(h) {
      const k = G(),
        T = J(),
        p = Q(),
        o = r([]),
        _ = r(!0),
        f = r(!1),
        u = r(),
        g = r(""),
        b = r(""),
        y = r(be),
        d = r(0),
        n = r({ message: "", type: "info", alive: !1, timeout: 0 });
      W(async () => {
        var L, N, V;
        if (!((L = k.currentUser) != null && L.email)) return;
        const e = [],
          t = X(T, "characters"),
          c = Y(
            t,
            Z("uid", "==", (N = k.currentUser) == null ? void 0 : N.uid)
          ),
          s = await ee(c);
        for (const C of s.docs) {
          const w = C.data();
          (w.id = C.id), e.push(w);
        }
        e.sort((C, w) => {
          var A, U;
          return (
            ((A = w.timestamp) == null ? void 0 : A.seconds) * 1e3 -
            ((U = C.timestamp) == null ? void 0 : U.seconds) * 1e3
          );
        }),
          (o.value = e),
          (d.value = await ke((V = k.currentUser) == null ? void 0 : V.uid)),
          (_.value = !1);
      });
      const S = D(() => g.value.toLocaleLowerCase().trim() === "remover"),
        P = D(() => o.value.filter((e) => ae(e.name, b.value))),
        H = (e) => {
          f.value = !0;
          const t = o.value.findIndex((c) => c.id === e);
          u.value = o.value[t];
        },
        I = () => {
          (f.value = !1), (u.value = void 0), (g.value = "");
        },
        E = () => {
          (o.value.length > y.value && d.value < 3) ||
            ((_.value = !0), p.push({ name: "character-creation" }));
        },
        F = () => {
          if (o.value.length > y.value && d.value < 3) return;
          const e = p.resolve({ name: "character-creation" });
          window.open(e.href, "_blank");
        },
        K = (e) => {
          (_.value = !0),
            p.push({ name: "character-sheet", params: { id: e } });
        },
        q = (e) => {
          const t = p.resolve({ name: "character-sheet", params: { id: e } });
          window.open(t.href, "_blank");
        },
        R = async () => {
          if (!S.value || !u.value) return;
          await he(pe(T, "characters", u.value.id));
          const e = o.value.findIndex((t) => {
            var c;
            return (
              t.id ===
              ((c = u == null ? void 0 : u.value) == null ? void 0 : c.id)
            );
          });
          o.value.splice(e, 1), I();
        },
        $ = async (e) => {
          await navigator.clipboard.writeText(
            "https://crisordemparanormal.com/agente/" + e
          ),
            (n.value.message = "Link copied"),
            (n.value.alive = !0);
        };
      te(
        () => n.value.alive,
        () => {
          n.value.alive === !0 &&
            (n.value.timeout = window.setTimeout(
              () => (n.value.alive = !1),
              3e3
            ));
        }
      );
      const j = () => {
        (n.value.alive = !1), clearTimeout(n.value.timeout);
      };
      return (e, t) => {
        const c = se("vue-final-modal");
        return _.value
          ? (l(), i("div", $e, [v(ge, { "page-loading": "" })]))
          : (l(),
            i("div", Me, [
              o.value.length > 0
                ? (l(),
                  i("div", xe, [
                    a(
                      "button",
                      {
                        class: "button-primary new-button",
                        disabled: o.value.length >= y.value && d.value < 3,
                        onClick: E,
                        onMouseup: oe(F, ["middle"]),
                      },
                      " New Agent ",
                      40,
                      Te
                    ),
                    a("div", null, [
                      d.value < 3
                        ? (l(),
                          i(
                            "h3",
                            Se,
                            " Agents: " + M(o.value.length) + "/" + M(y.value),
                            1
                          ))
                        : (l(),
                          i("h3", Ie, " Agents: " + M(o.value.length), 1)),
                      o.value.length > 6
                        ? (l(),
                          i("div", Re, [
                            v(
                              ye,
                              {
                                value: b.value,
                                onUpdate: t[0] || (t[0] = (s) => (b.value = s)),
                              },
                              null,
                              8,
                              ["value"]
                            ),
                          ]))
                        : x("", !0),
                      a("div", Le, [
                        (l(!0),
                        i(
                          ne,
                          null,
                          le(
                            P.value,
                            (s) => (
                              l(),
                              i("div", { key: s.id }, [
                                v(
                                  we,
                                  {
                                    "char-id": s.id,
                                    name: s.name,
                                    "char-class": s.className,
                                    timestamp: s.timestamp.seconds,
                                    "sheet-picture": s.sheetPictureURL,
                                    onHandleOpenSheet: K,
                                    onHandleOpenSheetMidClick: q,
                                    onHandleRemove: H,
                                    onHandleShareCharacter: $,
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
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : (l(),
                  i("div", Ne, [
                    Ve,
                    a(
                      "button",
                      {
                        class: "button-primary",
                        onClick:
                          t[1] ||
                          (t[1] = (s) =>
                            e.$router.push({ name: "character-creation" })),
                      },
                      " New agent "
                    ),
                  ])),
              u.value
                ? (l(),
                  i("div", Ae, [
                    v(
                      c,
                      {
                        modelValue: f.value,
                        "onUpdate:modelValue":
                          t[3] || (t[3] = (s) => (f.value = s)),
                        classes: "modal-container",
                      },
                      {
                        default: O(() => [
                          a("div", Ue, [
                            a("div", { class: "modal-header" }, [
                              De,
                              a("button", { onClick: I }, Be),
                            ]),
                            a("div", Pe, [
                              He,
                              Ee,
                              a("div", Fe, [
                                re(
                                  a(
                                    "input",
                                    {
                                      "onUpdate:modelValue":
                                        t[2] || (t[2] = (s) => (g.value = s)),
                                      type: "text",
                                      class: "input-primary",
                                      onKeyup: ce(R, ["enter"]),
                                    },
                                    null,
                                    40,
                                    Ke
                                  ),
                                  [[ue, g.value]]
                                ),
                                a(
                                  "button",
                                  {
                                    class: "button-remove",
                                    disabled: !S.value,
                                    onClick: R,
                                  },
                                  " Confirm ",
                                  8,
                                  qe
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
                : x("", !0),
              v(
                ie,
                { name: "toast" },
                {
                  default: O(() => [
                    n.value.alive
                      ? (l(),
                        de(
                          Ce,
                          {
                            key: 0,
                            toast: n.value,
                            type: n.value.type,
                            onDismiss: j,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : x("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
      };
    },
  }),
  Ze = fe(je, [["__scopeId", "data-v-a15b80ae"]]);
export { Ze as default };

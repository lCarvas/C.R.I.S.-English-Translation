import {
  d as p,
  M as _,
  o as a,
  c as s,
  H as o,
  a as r,
  t as n,
  m as c,
  N as u,
  ao as k,
  P as f,
  _ as m,
} from "./index-_IEBVZw3.js";
const b = { class: "card-source-container" },
  h = { key: 0 },
  C = { key: 1 },
  V = ["href"],
  N = p({
    __name: "CardSource",
    props: { label: {}, adLabel: {}, link: {}, extra: {} },
    setup(l) {
      const t = l,
        d = _(),
        i = () => {
          t.adLabel !== "" && u(f(d, "ads", t.adLabel), { clicks: k(1) });
        };
      return (e, y) => (
        a(),
        s("div", b, [
          o(" This content was made by "),
          r("b", null, n(e.label), 1),
          o(". "),
          e.extra ? (a(), s("span", h, n(e.extra) + "! ", 1)) : c("", !0),
          e.link !== ""
            ? (a(),
              s("span", C, [
                o(" See more "),
                r(
                  "a",
                  {
                    class: "source-link",
                    href: e.link,
                    target: "_blank",
                    onClick: i,
                  },
                  " here ",
                  8,
                  V
                ),
              ]))
            : c("", !0),
        ])
      );
    },
  }),
  L = m(N, [["__scopeId", "data-v-8237ab33"]]);
export { L as C };

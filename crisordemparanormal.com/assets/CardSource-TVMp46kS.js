import {
  d as r,
  M as l,
  o as d,
  c as i,
  H as e,
  a as s,
  t as p,
  N as _,
  ao as u,
  P as f,
  _ as k,
} from "./index-IvR42Nn2.js";
const b = { class: "card-source-container" },
  m = ["href"],
  h = r({
    __name: "CardSource",
    props: { label: {}, adLabel: {}, link: {} },
    setup(o) {
      const t = o,
        c = l(),
        n = () => {
          _(f(c, "ads", t.adLabel), { clicks: u(1) });
        };
      return (a, C) => (
        d(),
        i("div", b, [
          e(" This content was made by "),
          s("b", null, p(a.label), 1),
          e(". See more "),
          s(
            "a",
            {
              class: "source-link",
              href: a.link,
              target: "_blank",
              onClick: n,
            },
            " here ",
            8,
            m
          ),
        ])
      );
    },
  }),
  B = k(h, [["__scopeId", "data-v-b92c2126"]]);
export { B as C };

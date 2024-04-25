import {
  d as n,
  o as r,
  c as p,
  a as t,
  J as A,
  p as u,
  b as d,
  _ as i,
} from "./index-A5FIV-A8.js";
const l =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABQElEQVRYw+2WO27CQBCGt6AEydRJa1GkpEvhy8AZcMTzAknly6x4iWMAisQdsCgowpci9sQoEGcNY6Xw31j2/jvfzs56d42pVElV+IRYtsTEbLGE+PcL3mbBJS1o3x68RsSJazoRUbslfJMleVrSLD76bPgZHXzq1PHpMDtDFMuCSEJsCH60BmykPSpW2nTuV3gXHR4rqYV7uZnL6L2rHk+ymLuGb0n6wa++QHwtN0Av6TbNdU4TZ88NkK6Sbq6zm64yN8D6r4nLZK7dAPukWyPX2Uice21ArD1F7/+syO7LNNT+0Z50twqru9l98Ky7Xb/qHjhHHjWPzGPynOgc+m88yNv43tcW+1XazJeiiLOL14Edlpfvdc8kgxjp3PvG5SKGOohRuYiBDmJYLqKvgxgoAwShFd4YY+irhq9USU+fTvn7Yv4/rEAAAAAASUVORK5CYII=",
  m = (a) => (u("data-v-ca3ca2af"), (a = a()), d(), a),
  S = m(() => t("img", { class: "icon", src: l, alt: "buscar" }, null, -1)),
  v = ["value"],
  _ = n({
    __name: "SearchInput",
    props: { value: { type: String, required: !0 }, dark: Boolean },
    emits: ["update"],
    setup(a, { emit: s }) {
      const c = s,
        o = (e) => {
          c("update", e.target.value);
        };
      return (e, g) => (
        r(),
        p(
          "div",
          { class: A(["container", { dark: a.dark }]) },
          [
            S,
            t(
              "input",
              {
                class: "input",
                type: "text",
                placeholder: "Search",
                value: a.value,
                onInput: o,
              },
              null,
              40,
              v
            ),
          ],
          2
        )
      );
    },
  }),
  E = i(_, [["__scopeId", "data-v-ca3ca2af"]]);
export { E as S };

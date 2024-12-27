import {
  d as o,
  o as r,
  c as A,
  a as s,
  a1 as e,
  _ as u,
} from "./index-y5xotY6D.js";
const i =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABQElEQVRYw+2WO27CQBCGt6AEydRJa1GkpEvhy8AZcMTzAknly6x4iWMAisQdsCgowpci9sQoEGcNY6Xw31j2/jvfzs56d42pVElV+IRYtsTEbLGE+PcL3mbBJS1o3x68RsSJazoRUbslfJMleVrSLD76bPgZHXzq1PHpMDtDFMuCSEJsCH60BmykPSpW2nTuV3gXHR4rqYV7uZnL6L2rHk+ymLuGb0n6wa++QHwtN0Av6TbNdU4TZ88NkK6Sbq6zm64yN8D6r4nLZK7dAPukWyPX2Uice21ArD1F7/+syO7LNNT+0Z50twqru9l98Ky7Xb/qHjhHHjWPzGPynOgc+m88yNv43tcW+1XazJeiiLOL14Edlpfvdc8kgxjp3PvG5SKGOohRuYiBDmJYLqKvgxgoAwShFd4YY+irhq9USU+fTvn7Yv4/rEAAAAAASUVORK5CYII=",
  d = ["value"],
  m = o({
    __name: "SearchInput",
    props: {
      value: { type: String, required: !0 },
      dark: Boolean,
      small: Boolean,
    },
    emits: ["update"],
    setup(a, { emit: n }) {
      const l = n,
        c = (t) => {
          l("update", t.target.value);
        };
      return (t, p) => (
        r(),
        A(
          "div",
          { class: e(["container", { dark: a.dark }]) },
          [
            s(
              "img",
              {
                class: e(["icon", { "small-icon": a.small }]),
                src: i,
                alt: "buscar",
              },
              null,
              2
            ),
            s(
              "input",
              {
                class: e(["input", { "small-input": a.small }]),
                type: "text",
                placeholder: "Search",
                value: a.value,
                onInput: c,
              },
              null,
              42,
              d
            ),
          ],
          2
        )
      );
    },
  }),
  S = u(m, [["__scopeId", "data-v-2163d916"]]);
export { S };

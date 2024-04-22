import {
  d as i,
  o as s,
  c as a,
  a as o,
  t as d,
  _ as r,
} from "./index-R0omtfCh.js";
const l = { class: "card" },
  m = { class: "content" },
  c = { class: "player-info" },
  b = { key: 0, class: "footer" },
  v = { key: 1, class: "footer" },
  p = i({
    __name: "CombatCard",
    props: { combat: {}, isMasterScreen: { type: Boolean } },
    emits: ["handleStart", "handleEdit", "handleRemove"],
    setup(u) {
      return (t, e) => (
        s(),
        a("div", l, [
          o("div", m, [o("div", c, [o("h3", null, d(t.combat.name), 1)])]),
          t.isMasterScreen
            ? (s(),
              a("div", v, [
                o(
                  "button",
                  {
                    class: "button-remove button-edit button-start",
                    onClick:
                      e[2] ||
                      (e[2] = (n) => t.$emit("handleStart", t.combat.id)),
                  },
                  " Start encounter "
                ),
              ]))
            : (s(),
              a("div", b, [
                o(
                  "button",
                  {
                    class: "button-remove",
                    onClick:
                      e[0] ||
                      (e[0] = (n) => t.$emit("handleRemove", t.combat.id)),
                  },
                  " Remove "
                ),
                o(
                  "button",
                  {
                    class: "button-remove button-edit",
                    onClick:
                      e[1] ||
                      (e[1] = (n) => t.$emit("handleEdit", t.combat.id)),
                  },
                  " Edit "
                ),
              ])),
        ])
      );
    },
  }),
  _ = r(p, [["__scopeId", "data-v-cac9860f"]]);
export { _ as C };

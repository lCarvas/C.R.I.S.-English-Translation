import { d, o as s, c as a, a as o, t as i, _ as r } from "./index-4XNPBkfT.js";
const l = { class: "card" },
  m = { class: "content" },
  c = { class: "player-info" },
  b = { class: "player-info small" },
  v = { key: 0, class: "footer" },
  p = { key: 1, class: "footer" },
  u = d({
    __name: "CombatCard",
    props: { combat: {}, isMasterScreen: { type: Boolean } },
    emits: ["handleStart", "handleEdit", "handleRemove"],
    setup(_) {
      return (t, e) => (
        s(),
        a("div", l, [
          o("div", m, [
            o("div", c, i(t.combat.name), 1),
            o("div", b, " VD: " + i(t.combat.vdTotal), 1),
          ]),
          t.isMasterScreen
            ? (s(),
              a("div", p, [
                o(
                  "button",
                  {
                    class: "button",
                    onClick:
                      e[2] ||
                      (e[2] = (n) => t.$emit("handleStart", t.combat.id)),
                  },
                  " Start encounter "
                ),
              ]))
            : (s(),
              a("div", v, [
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
  C = r(u, [["__scopeId", "data-v-1defab8a"]]);
export { C };

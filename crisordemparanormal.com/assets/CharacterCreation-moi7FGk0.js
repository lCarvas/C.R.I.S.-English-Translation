import {
  d as _,
  o,
  c as l,
  n as w,
  q as I,
  a as e,
  J as T,
  t as v,
  p as y,
  b as B,
  _ as C,
  a1 as Y,
  C as f,
  r as b,
  j as Z,
  k as g,
  v as D,
  I as L,
  m as M,
  T as N,
  f as ee,
  h as ae,
  A as k,
  K as x,
  g as se,
  M as te,
  u as ne,
  e as oe,
  w as re,
  a2 as ie,
  a0 as le,
  X as ce,
  Q as de,
  R as ue,
} from "./index-HbpdJoqE.js";
import { _ as me } from "./lodash-gzw5KmHd.js";
import { _ as he, m as pe, c as ve } from "./classes-j7W_HvC7.js";
import { b as _e, C as ge, a as be, c as U } from "./ClassCard-KcSsNsso.js";
import { _ as ke } from "./show-more-icon-VvUXKiHG.js";
import { S as Ce } from "./SearchInput-cD7ru1ts.js";
import { T as $e } from "./ToastNotification-g0beyh9J.js";
import { L as fe } from "./LoadingView-GKgWZSkS.js";
import {
  c as ye,
  a as Be,
  u as Ae,
  b as we,
  d as Ie,
} from "./characterCreationUtils-kbvKVme1.js";
import { g as Re, h as He, C as Te } from "./firebase-SJ2lnfZf.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./PowerCard-TBGAUay6.js";
import "./add-icon-fJ4uQHUZ.js";
import "./skills-siTAQjCS.js";
import "./v4-cyCr5FZV.js";
const qe = (a) => (y("data-v-e0f1eafc"), (a = a()), B(), a),
  Pe = { class: "stepper-container" },
  Oe = ["onClick"],
  Se = { key: 0, class: "step-wrapper" },
  xe = { class: "step-container" },
  De = qe(() => e("div", { class: "line" }, null, -1)),
  Le = { key: 1 },
  Me = { class: "step-container" },
  Ne = _({
    __name: "StepperView",
    props: {
      currentStep: { type: Number, required: !0 },
      stepperOptions: { type: Array, required: !0 },
    },
    emits: ["handleNavigation"],
    setup(a) {
      return (d, c) => (
        o(),
        l("div", Pe, [
          (o(!0),
          l(
            w,
            null,
            I(
              a.stepperOptions,
              (r, i) => (
                o(),
                l(
                  "div",
                  {
                    key: r.value,
                    onClick: (t) => d.$emit("handleNavigation", r.value),
                  },
                  [
                    i !== a.stepperOptions.length - 1
                      ? (o(),
                        l("div", Se, [
                          e("div", xe, [
                            e(
                              "h2",
                              {
                                class: T([
                                  "title",
                                  { active: r.value === a.currentStep },
                                ]),
                              },
                              v(r.label),
                              3
                            ),
                          ]),
                          De,
                        ]))
                      : (o(),
                        l("div", Le, [
                          e("div", Me, [
                            e(
                              "h2",
                              {
                                class: T([
                                  "title",
                                  { active: r.value === a.currentStep },
                                ]),
                              },
                              v(r.label),
                              3
                            ),
                          ]),
                        ])),
                  ],
                  8,
                  Oe
                )
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  Ue = C(Ne, [["__scopeId", "data-v-e0f1eafc"]]),
  V = (a) => (y("data-v-25c92e5f"), (a = a()), B(), a),
  Ve = { class: "container" },
  je = V(() =>
    e(
      "div",
      { class: "text-container" },
      [
        e(
          "p",
          null,
          " When you create a character, all your attributes start at 1 and you get 4 points to spread across these however you deem fit. You can also reduce one attribute to 0 to receive 1 extra point. The maximum initial value you can have on each attribute is 3. "
        ),
      ],
      -1
    )
  ),
  Fe = { class: "image-container" },
  Ee = V(() =>
    e("img", { class: "att-image", src: he, alt: "atributos" }, null, -1)
  ),
  ze = ["value"],
  Je = ["value"],
  Ke = ["value"],
  Qe = ["value"],
  Xe = ["value"],
  Ge = _({
    __name: "ChooseAttributes",
    props: { character: {}, userPremiumTier: {} },
    emits: ["handleChangeAttribute"],
    setup(a, { emit: d }) {
      const c = d,
        r = Y(),
        i = (t, s) => {
          var m;
          const n = { value: t.target.valueAsNumber, attribute: s };
          c("handleChangeAttribute", n),
            (m = r == null ? void 0 : r.proxy) == null || m.$forceUpdate();
        };
      return (t, s) => (
        o(),
        l("div", null, [
          e("div", Ve, [
            je,
            e("div", Fe, [
              Ee,
              e(
                "input",
                {
                  type: "number",
                  class: "input str",
                  value: t.character.attributes.str,
                  onBlur: s[0] || (s[0] = (n) => i(n, "str")),
                },
                null,
                40,
                ze
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input dex",
                  value: t.character.attributes.dex,
                  onBlur: s[1] || (s[1] = (n) => i(n, "dex")),
                },
                null,
                40,
                Je
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input int",
                  value: t.character.attributes.int,
                  onBlur: s[2] || (s[2] = (n) => i(n, "int")),
                },
                null,
                40,
                Ke
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input con",
                  value: t.character.attributes.con,
                  onBlur: s[3] || (s[3] = (n) => i(n, "con")),
                },
                null,
                40,
                Qe
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input pre",
                  value: t.character.attributes.pre,
                  onBlur: s[4] || (s[4] = (n) => i(n, "pre")),
                },
                null,
                40,
                Xe
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  We = C(Ge, [["__scopeId", "data-v-25c92e5f"]]),
  q = (a) => (y("data-v-d7d2a7a1"), (a = a()), B(), a),
  Ye = { class: "container" },
  Ze = { class: "card-gray" },
  ea = { class: "title" },
  aa = q(() => e("div", { class: "divider" }, null, -1)),
  sa = { class: "content" },
  ta = ["innerHTML"],
  na = { key: 0 },
  oa = q(() => e("span", null, "Trained skills. ", -1)),
  ra = { key: 1 },
  ia = q(() =>
    e(
      "p",
      null,
      [
        e("span", null, "Trained skills. "),
        f(" Two skills chosen by the GM. "),
      ],
      -1
    )
  ),
  la = [ia],
  ca = _({
    __name: "CurrentBackground",
    props: { background: { type: Object, required: !0 } },
    emits: ["handleRemoveBackground"],
    setup(a, { emit: d }) {
      const c = a,
        r = d,
        i = () => {
          r("handleRemoveBackground", c.background);
        };
      return (t, s) => (
        o(),
        l("div", Ye, [
          e(
            "button",
            { class: "button button-primary", onClick: i },
            " Change Background "
          ),
          e("div", Ze, [
            e("h1", ea, v(a.background.name), 1),
            aa,
            e("div", sa, [
              e("div", { innerHTML: a.background.description }, null, 8, ta),
              a.background.skills.length > 0
                ? (o(),
                  l("div", na, [
                    e("p", null, [
                      oa,
                      f(
                        " " +
                          v(a.background.skills[0]) +
                          " e " +
                          v(a.background.skills[1]) +
                          ". ",
                        1
                      ),
                    ]),
                  ]))
                : (o(), l("div", ra, la)),
              e("p", null, [
                e("span", null, v(a.background.power.name) + ". ", 1),
                f(" " + v(a.background.power.description), 1),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  da = C(ca, [["__scopeId", "data-v-d7d2a7a1"]]),
  P = (a) => (y("data-v-fbec3d7b"), (a = a()), B(), a),
  ua = { class: "card-gray" },
  ma = P(() => e("img", { src: ke, alt: "ver mais" }, null, -1)),
  ha = [ma],
  pa = { class: "title" },
  va = ["onClick"],
  _a = { key: 0 },
  ga = { class: "content" },
  ba = ["innerHTML"],
  ka = { key: 0 },
  Ca = P(() => e("span", null, "Trained skills. ", -1)),
  $a = { key: 1 },
  fa = P(() =>
    e(
      "p",
      null,
      [
        e("span", null, "Trained skills. "),
        f(" Two skills chosen by the GM. "),
      ],
      -1
    )
  ),
  ya = [fa],
  Ba = _({
    __name: "BackgroundCard",
    props: { background: { type: Object, required: !0 } },
    emits: ["handleAdd"],
    setup(a, { emit: d }) {
      const c = a,
        r = d,
        i = b(!1),
        t = () => {
          r("handleAdd", c.background);
        };
      return (s, n) => (
        o(),
        l("div", ua, [
          e(
            "div",
            {
              class: "header",
              onClick: n[0] || (n[0] = (m) => (i.value = !i.value)),
            },
            [
              e("div", { class: T(["show-more", { rotate: i.value }]) }, ha, 2),
              e("h3", pa, v(a.background.name), 1),
              e(
                "button",
                { class: "button button-primary", onClick: Z(t, ["stop"]) },
                " Choose ",
                8,
                va
              ),
            ]
          ),
          g(
            N,
            { name: "fadeHeight", mode: "out-in" },
            {
              default: D(() => [
                i.value
                  ? (o(),
                    l("div", _a, [
                      g(L),
                      e("div", ga, [
                        e(
                          "div",
                          { innerHTML: a.background.description },
                          null,
                          8,
                          ba
                        ),
                        a.background.skills.length > 0
                          ? (o(),
                            l("div", ka, [
                              e("p", null, [
                                Ca,
                                f(
                                  " " +
                                    v(a.background.skills[0]) +
                                    " e " +
                                    v(a.background.skills[1]) +
                                    ". ",
                                  1
                                ),
                              ]),
                            ]))
                          : (o(), l("div", $a, ya)),
                        e("p", null, [
                          e("span", null, v(a.background.power.name) + ". ", 1),
                          f(" " + v(a.background.power.description), 1),
                        ]),
                      ]),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  Aa = C(Ba, [["__scopeId", "data-v-fbec3d7b"]]),
  R = (a) => (y("data-v-3615813b"), (a = a()), B(), a),
  wa = { class: "text-container" },
  Ia = R(() =>
    e(
      "p",
      null,
      " What did your character do before they involved themselves with the paranormal and joined Ordo Realitas? The background represents how your past life influences your investigator career. Choose a background that fits the concept of your character or pick one at random. ",
      -1
    )
  ),
  Ra = R(() =>
    e(
      "h4",
      null,
      "By choosing a background, your recieve two trained skills and a background ability.",
      -1
    )
  ),
  Ha = R(() =>
    e(
      "p",
      null,
      " All background shown below are intentionally vague, just an idea of where to begin with. You can use them as is, to start playing faster, or create innumerable details, according to the concept of your agent. ",
      -1
    )
  ),
  Ta = R(() =>
    e(
      "h4",
      { class: "info-text" },
      " Gained skills are added automatically. Other skills can be added to your agent after creation. ",
      -1
    )
  ),
  qa = { class: "background-container" },
  Pa = _({
    __name: "BackgroundsList",
    emits: ["handleAddBackground"],
    setup(a, { emit: d }) {
      const c = d,
        r = (s) => {
          c("handleAddBackground", s);
        },
        i = b(""),
        t = ee(() => _e.filter((s) => ae(s.name, i.value)));
      return (s, n) => (
        o(),
        l("div", wa, [
          Ia,
          Ra,
          Ha,
          Ta,
          g(
            Ce,
            { value: i.value, onUpdate: n[0] || (n[0] = (m) => (i.value = m)) },
            null,
            8,
            ["value"]
          ),
          e("div", qa, [
            (o(!0),
            l(
              w,
              null,
              I(
                t.value,
                (m) => (
                  o(),
                  l("div", { key: m.name, class: "background" }, [
                    g(Aa, { background: m, onHandleAdd: r }, null, 8, [
                      "background",
                    ]),
                  ])
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  }),
  Oa = C(Pa, [["__scopeId", "data-v-3615813b"]]),
  Sa = _({
    __name: "ChooseBackground",
    props: { chosenBackground: {}, userPremiumTier: {} },
    emits: ["handleAddBackground", "handleRemoveBackground"],
    setup(a, { emit: d }) {
      const c = d,
        r = (t) => {
          c("handleAddBackground", t);
        },
        i = () => {
          c("handleRemoveBackground");
        };
      return (t, s) => (
        o(),
        l("div", null, [
          t.chosenBackground
            ? (o(),
              k(
                da,
                {
                  key: 0,
                  background: t.chosenBackground,
                  onHandleRemoveBackground: i,
                },
                null,
                8,
                ["background"]
              ))
            : (o(),
              k(
                Oa,
                {
                  key: 1,
                  "user-premium-tier": t.userPremiumTier,
                  onHandleAddBackground: r,
                },
                null,
                8,
                ["user-premium-tier"]
              )),
        ])
      );
    },
  }),
  xa = { class: "card-gray" },
  Da = { class: "header" },
  La = { class: "card-content" },
  Ma = { class: "short-description" },
  Na = _({
    __name: "MundanoClassCard",
    props: { charClass: { type: Object, required: !0 } },
    setup(a) {
      return (d, c) => (
        o(),
        l("div", xa, [
          e("div", Da, [e("h1", null, v(a.charClass.name), 1)]),
          g(L, { "no-margin": "" }),
          e("div", La, [
            e("p", Ma, v(a.charClass.shortDescription), 1),
            e("div", null, [
              g(ge, { "char-class": a.charClass, "is-mundano": "" }, null, 8, [
                "char-class",
              ]),
            ]),
            e("div", null, [
              g(be, { "char-class": a.charClass, "is-mundano": "" }, null, 8, [
                "char-class",
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Ua = C(Na, [["__scopeId", "data-v-58cab3c6"]]),
  Va = { class: "current-class-container" },
  ja = _({
    __name: "CurrentClass",
    props: { charClass: { type: Object, required: !0 } },
    emits: ["handleRemoveClass"],
    setup(a, { emit: d }) {
      const c = a,
        r = d,
        i = () => {
          r("handleRemoveClass", c.charClass);
        };
      return (t, s) => (
        o(),
        l("div", Va, [
          e(
            "button",
            { class: "button button-primary", onClick: i },
            " Change Class "
          ),
          a.charClass.name !== "Mundane"
            ? (o(),
              k(
                U,
                { key: 0, "char-class": a.charClass, "only-view": "" },
                null,
                8,
                ["char-class"]
              ))
            : (o(),
              k(Ua, { key: 1, "char-class": a.charClass }, null, 8, [
                "char-class",
              ])),
        ])
      );
    },
  }),
  Fa = C(ja, [["__scopeId", "data-v-e5b7395a"]]),
  O = (a) => (y("data-v-393772ea"), (a = a()), B(), a),
  Ea = { class: "class-wrapper" },
  za = { class: "text-container" },
  Ja = O(() =>
    e(
      "p",
      null,
      [
        f(
          " Your class indicates the trainment you recieved after joining the Order, in order to face the dangers of the Other Side. "
        ),
        e("br"),
        f(
          " In game terms, it's your most important characteristic, as it defines what you do and what your role is in the investigator group"
        ),
      ],
      -1
    )
  ),
  Ka = O(() =>
    e(
      "h4",
      { class: "info-text" },
      " Gained skills are added automatically. Other skills can be added to your agent after creation. ",
      -1
    )
  ),
  Qa = { class: "mundano-container" },
  Xa = O(() =>
    e(
      "p",
      null,
      "Alternatively, you can decide not to choose a clas and begin as a normal person. Start as",
      -1
    )
  ),
  Ga = { class: "classes-container" },
  Wa = { class: "classes-flex" },
  Ya = _({
    __name: "ClassList",
    emits: ["handleAddClass"],
    setup(a, { emit: d }) {
      const c = d,
        r = (i) => {
          c("handleAddClass", i);
        };
      return (i, t) => (
        o(),
        l("div", Ea, [
          e("div", za, [
            Ja,
            Ka,
            e("div", Qa, [
              Xa,
              e(
                "button",
                {
                  class: "button-primary mundano-button",
                  onClick: t[0] || (t[0] = (s) => r(x(pe))),
                },
                " Mundane "
              ),
            ]),
          ]),
          e("div", Ga, [
            e("div", Wa, [
              (o(!0),
              l(
                w,
                null,
                I(
                  x(ve),
                  (s) => (
                    o(),
                    l("div", { key: s.name }, [
                      g(U, { "char-class": s, onHandleAddClass: r }, null, 8, [
                        "char-class",
                      ]),
                    ])
                  )
                ),
                128
              )),
            ]),
          ]),
        ])
      );
    },
  }),
  Za = C(Ya, [["__scopeId", "data-v-393772ea"]]),
  es = _({
    __name: "ChooseClass",
    props: { chosenClass: {}, userPremiumTier: {} },
    emits: ["handleAddClass", "handleRemoveClass"],
    setup(a, { emit: d }) {
      const c = d,
        r = (t) => {
          c("handleAddClass", t);
        },
        i = () => {
          c("handleRemoveClass");
        };
      return (t, s) => (
        o(),
        l("div", null, [
          t.chosenClass
            ? (o(),
              k(
                Fa,
                { key: 0, "char-class": t.chosenClass, onHandleRemoveClass: i },
                null,
                8,
                ["char-class"]
              ))
            : (o(), k(Za, { key: 1, onHandleAddClass: r })),
        ])
      );
    },
  }),
  S = (a) => (y("data-v-cf3ab16f"), (a = a()), B(), a),
  as = { class: "content" },
  ss = S(() =>
    e(
      "p",
      null,
      " So far, you've defined the mechanical characteristics of your sheet — but a good character is more than just numbers. Now, let's work on describing your agent, defining aspects such as name, gender and age. These aspects have no effect on the rules, but they make the game more engaging and fun. ",
      -1
    )
  ),
  ts = ["disabled"],
  ns = { class: "inputs-row" },
  os = { class: "input-container" },
  rs = S(() => e("h3", null, "Character", -1)),
  is = ["value"],
  ls = { class: "input-container" },
  cs = S(() => e("h3", null, "Player", -1)),
  ds = ["value"],
  us = { class: "textarea-container" },
  ms = ["placeholder", "value", "onBlur"],
  hs = _({
    __name: "ChooseDescription",
    props: { character: {}, loading: { type: Boolean }, userPremiumTier: {} },
    emits: [
      "handleUpdateDescription",
      "handleFinishCreation",
      "handleChangeChar",
    ],
    setup(a, { emit: d }) {
      const c = d,
        r = (t, s) => {
          const n = { value: t.target.value, key: s };
          c("handleUpdateDescription", n);
        },
        i = [
          {
            title: "Appearance",
            key: "physical",
            placeholder: "Name, gender, age, physical description...",
          },
          {
            title: "Personality",
            key: "personal",
            placeholder: "Striking features, opinions, ideals...",
          },
          {
            title: "History",
            key: "history",
            placeholder:
              "Childhood, family relations, Paranormal contact, good and bad events...",
          },
          {
            title: "Objetive",
            key: "goal",
            placeholder:
              "Why did the agent join the Order? Why do they fight against the Other Side?",
          },
        ];
      return (t, s) => {
        var n, m;
        return (
          o(),
          l("div", null, [
            e("div", as, [
              ss,
              e(
                "button",
                {
                  class: "button-primary finish-button",
                  disabled: t.loading,
                  onClick:
                    s[0] || (s[0] = (h) => t.$emit("handleFinishCreation")),
                },
                " Finish ",
                8,
                ts
              ),
              e("div", ns, [
                e("div", os, [
                  rs,
                  e(
                    "input",
                    {
                      type: "text",
                      class: "input-primary",
                      placeholder: "Character name",
                      value: (n = t.character) == null ? void 0 : n.name,
                      onBlur:
                        s[1] ||
                        (s[1] = (h) =>
                          t.$emit("handleChangeChar", { e: h, key: "name" })),
                    },
                    null,
                    40,
                    is
                  ),
                ]),
                e("div", ls, [
                  cs,
                  e(
                    "input",
                    {
                      type: "text",
                      class: "input-primary",
                      placeholder: "Player name",
                      value: (m = t.character) == null ? void 0 : m.player,
                      onBlur:
                        s[2] ||
                        (s[2] = (h) =>
                          t.$emit("handleChangeChar", { e: h, key: "player" })),
                    },
                    null,
                    40,
                    ds
                  ),
                ]),
              ]),
              (o(),
              l(
                w,
                null,
                I(i, (h) => {
                  var $;
                  return e("div", { key: h.title }, [
                    e("div", us, [
                      e("h3", null, v(h.title), 1),
                      e(
                        "textarea",
                        {
                          class: "textarea",
                          rows: "6",
                          placeholder: h.placeholder,
                          value:
                            ($ = t.character) == null
                              ? void 0
                              : $.description[h.key],
                          onBlur: (A) => r(A, h.key),
                        },
                        `\r
          `,
                        40,
                        ms
                      ),
                    ]),
                  ]);
                }),
                64
              )),
            ]),
          ])
        );
      };
    },
  }),
  ps = C(hs, [["__scopeId", "data-v-cf3ab16f"]]),
  vs = { key: 0 },
  _s = { key: 1 },
  Ps = _({
    __name: "CharacterCreation",
    setup(a) {
      const d = [
          { label: "Attributes", value: 0 },
          { label: "Background", value: 1 },
          { label: "Class", value: 2 },
          { label: "Final Touches", value: 3 },
        ],
        c = [We, Sa, es, ps],
        r = se(),
        i = te(),
        t = ne(),
        s = b(0),
        n = b(me.cloneDeep(ye)),
        m = b(null),
        h = b(null),
        $ = b(!0),
        A = b(0),
        p = b({ message: "", type: "error", alive: !1, timeout: 0 }),
        j = (u) => (s.value = u),
        F = (u) => {
          Be(n.value, u);
        },
        E = (u) => {
          (m.value = u), (s.value = 2);
        },
        z = () => {
          m.value = null;
        },
        J = (u) => {
          (h.value = u), (s.value = 3);
        },
        K = () => {
          h.value = null;
        },
        Q = (u) => {
          const H = u.e.target.value;
          n.value[u.key] = H.trim();
        },
        X = (u) => {
          Ae(n.value, u);
        },
        G = async () => {
          if (!r.currentUser) return;
          if (m.value === null) {
            (p.value.message = "Choose a background"), (p.value.alive = !0);
            return;
          }
          if (h.value === null) {
            (p.value.message = "Choose a class"), (p.value.alive = !0);
            return;
          }
          if (
            (($.value = !0),
            A.value < 3 &&
              (await He("uid", r.currentUser.uid, "characters", Te)))
          ) {
            ($.value = !1),
              (p.value.message = "Character limit reached"),
              (p.value.alive = !0);
            return;
          }
          we(n.value, h.value),
            Ie(n.value, m.value),
            (n.value.statsClass = h.value.name),
            (n.value.uid = r.currentUser.uid),
            (n.value.timestamp = ce()),
            (n.value.block = n.value.skills[9].bonus),
            (n.value.evade =
              n.value.skills[22].bonus + n.value.attributes.dex + 10);
          const u = await de(ue(i, "characters"), n.value);
          t.push({ name: "character-sheet", params: { id: u.id } });
        };
      oe(async () => {
        var u;
        r.currentUser &&
          ((A.value = await Re((u = r.currentUser) == null ? void 0 : u.uid)),
          ($.value = !1));
      }),
        re(
          () => p.value.alive,
          () => {
            p.value.alive === !0 &&
              (p.value.timeout = window.setTimeout(
                () => (p.value.alive = !1),
                3e3
              ));
          }
        );
      const W = () => {
        (p.value.alive = !1), clearTimeout(p.value.timeout);
      };
      return (u, H) => (
        o(),
        l(
          w,
          null,
          [
            $.value
              ? (o(), l("div", _s, [g(fe, { "page-loading": "" })]))
              : (o(),
                l("div", vs, [
                  g(
                    Ue,
                    {
                      "current-step": s.value,
                      "stepper-options": d,
                      onHandleNavigation: j,
                    },
                    null,
                    8,
                    ["current-step"]
                  ),
                  (o(),
                  k(
                    le,
                    null,
                    [
                      (o(),
                      k(
                        ie(c[s.value]),
                        {
                          character: n.value,
                          "chosen-background": m.value,
                          "chosen-class": h.value,
                          "user-premium-tier": A.value,
                          loading: $.value,
                          onHandleChangeAttribute: F,
                          onHandleAddBackground: E,
                          onHandleRemoveBackground: z,
                          onHandleAddClass: J,
                          onHandleRemoveClass: K,
                          onHandleChangeChar: Q,
                          onHandleUpdateDescription: X,
                          onHandleFinishCreation: G,
                        },
                        null,
                        40,
                        [
                          "character",
                          "chosen-background",
                          "chosen-class",
                          "user-premium-tier",
                          "loading",
                        ]
                      )),
                    ],
                    1024
                  )),
                ])),
            g(
              N,
              { name: "toast" },
              {
                default: D(() => [
                  p.value.alive
                    ? (o(),
                      k(
                        $e,
                        {
                          key: 0,
                          toast: p.value,
                          type: p.value.type,
                          onDismiss: W,
                        },
                        null,
                        8,
                        ["toast", "type"]
                      ))
                    : M("", !0),
                ]),
                _: 1,
              }
            ),
          ],
          64
        )
      );
    },
  });
export { Ps as default };

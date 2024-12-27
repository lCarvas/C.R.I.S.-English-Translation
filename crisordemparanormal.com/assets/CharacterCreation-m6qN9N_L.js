import {
  d as g,
  o as n,
  c as l,
  n as w,
  q as I,
  a as e,
  a1 as S,
  t as _,
  p as y,
  b as B,
  _ as f,
  a3 as ee,
  H as $,
  r as k,
  j as ae,
  k as C,
  x as N,
  a4 as U,
  m as H,
  T as F,
  f as se,
  h as D,
  v as b,
  L,
  g as te,
  M as ne,
  u as oe,
  e as re,
  w as ie,
  a5 as le,
  a2 as ce,
  y as de,
  z as ue,
  R as me,
} from "./index-y5xotY6D.js";
import { _ as he } from "./lodash-gzw5KmHd.js";
import { _ as pe, m as ve, c as _e } from "./attributes-pd1IMHTT.js";
import { b as ge, C as ke, a as Ce, c as V } from "./ClassCard-O2snK8YX.js";
import { _ as be } from "./show-more-icon-VvUXKiHG.js";
import { S as M } from "./SearchInput-3Ri4XWJo.js";
import { S as fe } from "./SourcesNavigation-yVGJmsen.js";
import { a as $e } from "./marcasFragmentadas-KD4kpdFJ.js";
import { T as ye } from "./ToastNotification-xk7gRJX_.js";
import { L as Be } from "./LoadingView-ZLD11fC3.js";
import {
  c as Ae,
  a as we,
  u as He,
  b as Ie,
  d as Re,
} from "./characterCreationUtils-SAvFPrg8.js";
import { g as Te, h as Se, C as Pe } from "./firebase-EbSNH8SK.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./PowerCard-phkt84gx.js";
import "./add-icon-fJ4uQHUZ.js";
import "./characterAutomations-VjVSWhq1.js";
import "./v4-cyCr5FZV.js";
const qe = (a) => (y("data-v-e0f1eafc"), (a = a()), B(), a),
  xe = { class: "stepper-container" },
  Oe = ["onClick"],
  De = { key: 0, class: "step-wrapper" },
  Le = { class: "step-container" },
  Me = qe(() => e("div", { class: "line" }, null, -1)),
  Ne = { key: 1 },
  Ue = { class: "step-container" },
  Fe = g({
    __name: "StepperView",
    props: {
      currentStep: { type: Number, required: !0 },
      stepperOptions: { type: Array, required: !0 },
    },
    emits: ["handleNavigation"],
    setup(a) {
      return (u, d) => (
        n(),
        l("div", xe, [
          (n(!0),
          l(
            w,
            null,
            I(
              a.stepperOptions,
              (r, i) => (
                n(),
                l(
                  "div",
                  {
                    key: r.value,
                    onClick: (s) => u.$emit("handleNavigation", r.value),
                  },
                  [
                    i !== a.stepperOptions.length - 1
                      ? (n(),
                        l("div", De, [
                          e("div", Le, [
                            e(
                              "h2",
                              {
                                class: S([
                                  "title",
                                  { active: r.value === a.currentStep },
                                ]),
                              },
                              _(r.label),
                              3
                            ),
                          ]),
                          Me,
                        ]))
                      : (n(),
                        l("div", Ne, [
                          e("div", Ue, [
                            e(
                              "h2",
                              {
                                class: S([
                                  "title",
                                  { active: r.value === a.currentStep },
                                ]),
                              },
                              _(r.label),
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
  Ve = f(Fe, [["__scopeId", "data-v-e0f1eafc"]]),
  j = (a) => (y("data-v-25c92e5f"), (a = a()), B(), a),
  je = { class: "container" },
  ze = j(() =>
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
  Ee = { class: "image-container" },
  Je = j(() =>
    e("img", { class: "att-image", src: pe, alt: "atributos" }, null, -1)
  ),
  Ke = ["value"],
  Qe = ["value"],
  Ge = ["value"],
  We = ["value"],
  Xe = ["value"],
  Ye = g({
    __name: "ChooseAttributes",
    props: { character: {}, userPremiumTier: {} },
    emits: ["handleChangeAttribute"],
    setup(a, { emit: u }) {
      const d = u,
        r = ee(),
        i = (s, t) => {
          var m;
          const o = { value: s.target.valueAsNumber, attribute: t };
          d("handleChangeAttribute", o),
            (m = r == null ? void 0 : r.proxy) == null || m.$forceUpdate();
        };
      return (s, t) => (
        n(),
        l("div", null, [
          e("div", je, [
            ze,
            e("div", Ee, [
              Je,
              e(
                "input",
                {
                  type: "number",
                  class: "input str",
                  value: s.character.attributes.str,
                  onBlur: t[0] || (t[0] = (o) => i(o, "str")),
                },
                null,
                40,
                Ke
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input dex",
                  value: s.character.attributes.dex,
                  onBlur: t[1] || (t[1] = (o) => i(o, "dex")),
                },
                null,
                40,
                Qe
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input int",
                  value: s.character.attributes.int,
                  onBlur: t[2] || (t[2] = (o) => i(o, "int")),
                },
                null,
                40,
                Ge
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input con",
                  value: s.character.attributes.con,
                  onBlur: t[3] || (t[3] = (o) => i(o, "con")),
                },
                null,
                40,
                We
              ),
              e(
                "input",
                {
                  type: "number",
                  class: "input pre",
                  value: s.character.attributes.pre,
                  onBlur: t[4] || (t[4] = (o) => i(o, "pre")),
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
  Ze = f(Ye, [["__scopeId", "data-v-25c92e5f"]]),
  P = (a) => (y("data-v-513e4499"), (a = a()), B(), a),
  ea = { class: "container" },
  aa = { class: "card-gray" },
  sa = { class: "title" },
  ta = P(() => e("div", { class: "divider" }, null, -1)),
  na = { class: "content" },
  oa = ["innerHTML"],
  ra = { key: 0 },
  ia = P(() => e("span", null, "Trained skills. ", -1)),
  la = { key: 1 },
  ca = P(() =>
    e(
      "p",
      null,
      [
        e("span", null, "Trained skills. "),
        $(" Two skills chosen by the GM. "),
      ],
      -1
    )
  ),
  da = [ca],
  ua = g({
    __name: "CurrentBackground",
    props: { background: { type: Object, required: !0 } },
    emits: ["handleRemoveBackground"],
    setup(a, { emit: u }) {
      const d = a,
        r = u,
        i = () => {
          r("handleRemoveBackground", d.background);
        };
      return (s, t) => (
        n(),
        l("div", ea, [
          e(
            "button",
            { class: "button button-primary", onClick: i },
            " Change Background "
          ),
          e("div", aa, [
            e("h1", sa, _(a.background.name), 1),
            ta,
            e("div", na, [
              e(
                "div",
                { class: "description", innerHTML: a.background.description },
                null,
                8,
                oa
              ),
              a.background.skills.length > 0
                ? (n(),
                  l("div", ra, [
                    e("p", null, [
                      ia,
                      $(
                        " " +
                          _(a.background.skills[0]) +
                          " e " +
                          _(a.background.skills[1]) +
                          ". ",
                        1
                      ),
                    ]),
                  ]))
                : (n(), l("div", la, da)),
              e("p", null, [
                e("span", null, _(a.background.power.name) + ". ", 1),
                $(" " + _(a.background.power.description), 1),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  ma = f(ua, [["__scopeId", "data-v-513e4499"]]),
  q = (a) => (y("data-v-12cd4f6d"), (a = a()), B(), a),
  ha = { class: "card-gray" },
  pa = q(() => e("img", { src: be, alt: "ver mais" }, null, -1)),
  va = [pa],
  _a = { class: "title" },
  ga = ["onClick"],
  ka = { key: 0 },
  Ca = { class: "content" },
  ba = ["innerHTML"],
  fa = { key: 0 },
  $a = q(() => e("span", null, "Trained skills. ", -1)),
  ya = { key: 1 },
  Ba = q(() =>
    e(
      "p",
      null,
      [
        e("span", null, "Trained skills. "),
        $(" Two skills chosen by the GM. "),
      ],
      -1
    )
  ),
  Aa = [Ba],
  wa = g({
    __name: "BackgroundCard",
    props: { background: { type: Object, required: !0 } },
    emits: ["handleAdd"],
    setup(a, { emit: u }) {
      const d = a,
        r = u,
        i = k(!1),
        s = () => {
          r("handleAdd", d.background);
        };
      return (t, o) => (
        n(),
        l("div", ha, [
          e(
            "div",
            {
              class: "header",
              onClick: o[0] || (o[0] = (m) => (i.value = !i.value)),
            },
            [
              e("div", { class: S(["show-more", { rotate: i.value }]) }, va, 2),
              e("h3", _a, _(a.background.name), 1),
              e(
                "button",
                { class: "button button-primary", onClick: ae(s, ["stop"]) },
                " Choose ",
                8,
                ga
              ),
            ]
          ),
          C(
            F,
            { name: "fadeHeight", mode: "out-in" },
            {
              default: N(() => [
                i.value
                  ? (n(),
                    l("div", ka, [
                      C(U),
                      e("div", Ca, [
                        e(
                          "div",
                          {
                            class: "description",
                            innerHTML: a.background.description,
                          },
                          null,
                          8,
                          ba
                        ),
                        a.background.skills.length > 0
                          ? (n(),
                            l("div", fa, [
                              e("p", null, [
                                $a,
                                $(
                                  " " +
                                    _(a.background.skills[0]) +
                                    " e " +
                                    _(a.background.skills[1]) +
                                    ". ",
                                  1
                                ),
                              ]),
                            ]))
                          : (n(), l("div", ya, Aa)),
                        e("p", null, [
                          e("span", null, _(a.background.power.name) + ". ", 1),
                          $(" " + _(a.background.power.description), 1),
                        ]),
                      ]),
                    ]))
                  : H("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  Ha = f(wa, [["__scopeId", "data-v-12cd4f6d"]]),
  R = (a) => (y("data-v-153b5d88"), (a = a()), B(), a),
  Ia = { class: "text-container" },
  Ra = R(() =>
    e(
      "p",
      null,
      " What did your character do before they involved themselves with the paranormal and joined Ordo Realitas? The background represents how your past life influences your investigator career. Choose a background that fits the concept of your character or pick one at random. ",
      -1
    )
  ),
  Ta = R(() =>
    e(
      "h4",
      null,
      "By choosing a background, your recieve two trained skills and a background ability.",
      -1
    )
  ),
  Sa = R(() =>
    e(
      "p",
      null,
      " All background shown below are intentionally vague, just an idea of where to begin with. You can use them as is, to start playing faster, or create innumerable details, according to the concept of your agent. ",
      -1
    )
  ),
  Pa = R(() =>
    e(
      "h4",
      { class: "info-text" },
      " Gained skills are added automatically. Other skills can be added to your agent after creation. ",
      -1
    )
  ),
  qa = { class: "background-container" },
  xa = g({
    __name: "BackgroundsList",
    emits: ["handleAddBackground"],
    setup(a, { emit: u }) {
      const d = u,
        r = (m) => {
          d("handleAddBackground", m);
        },
        i = k(""),
        s = k(""),
        t = k("ordemParanormal"),
        o = se(() =>
          t.value === "marcasFragmentadas"
            ? $e.filter((m) => D(m.name, s.value))
            : ge.filter((m) => D(m.name, i.value))
        );
      return (m, c) => (
        n(),
        l("div", Ia, [
          Ra,
          Ta,
          Sa,
          Pa,
          C(
            fe,
            {
              "current-source": t.value,
              "show-marcas-fragmentadas": "",
              onHandleChangeCurrentSource:
                c[0] || (c[0] = (p) => (t.value = p)),
            },
            null,
            8,
            ["current-source"]
          ),
          t.value === "ordemParanormal"
            ? (n(),
              b(
                M,
                {
                  key: 0,
                  value: i.value,
                  onUpdate: c[1] || (c[1] = (p) => (i.value = p)),
                },
                null,
                8,
                ["value"]
              ))
            : H("", !0),
          t.value === "marcasFragmentadas"
            ? (n(),
              b(
                M,
                {
                  key: 1,
                  value: s.value,
                  onUpdate: c[2] || (c[2] = (p) => (s.value = p)),
                },
                null,
                8,
                ["value"]
              ))
            : H("", !0),
          e("div", qa, [
            (n(!0),
            l(
              w,
              null,
              I(
                o.value,
                (p) => (
                  n(),
                  l("div", { key: p.name, class: "background" }, [
                    C(Ha, { background: p, onHandleAdd: r }, null, 8, [
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
  Oa = f(xa, [["__scopeId", "data-v-153b5d88"]]),
  Da = g({
    __name: "ChooseBackground",
    props: { chosenBackground: {}, userPremiumTier: {} },
    emits: ["handleAddBackground", "handleRemoveBackground"],
    setup(a, { emit: u }) {
      const d = u,
        r = (s) => {
          d("handleAddBackground", s);
        },
        i = () => {
          d("handleRemoveBackground");
        };
      return (s, t) => (
        n(),
        l("div", null, [
          s.chosenBackground
            ? (n(),
              b(
                ma,
                {
                  key: 0,
                  background: s.chosenBackground,
                  onHandleRemoveBackground: i,
                },
                null,
                8,
                ["background"]
              ))
            : (n(),
              b(
                Oa,
                {
                  key: 1,
                  "user-premium-tier": s.userPremiumTier,
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
  La = { class: "card-gray" },
  Ma = { class: "header" },
  Na = { class: "card-content" },
  Ua = { class: "short-description" },
  Fa = g({
    __name: "MundanoClassCard",
    props: { charClass: { type: Object, required: !0 } },
    setup(a) {
      return (u, d) => (
        n(),
        l("div", La, [
          e("div", Ma, [e("h1", null, _(a.charClass.name), 1)]),
          C(U, { "no-margin": "" }),
          e("div", Na, [
            e("p", Ua, _(a.charClass.shortDescription), 1),
            e("div", null, [
              C(ke, { "char-class": a.charClass, "is-mundano": "" }, null, 8, [
                "char-class",
              ]),
            ]),
            e("div", null, [
              C(Ce, { "char-class": a.charClass, "is-mundano": "" }, null, 8, [
                "char-class",
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Va = f(Fa, [["__scopeId", "data-v-58cab3c6"]]),
  ja = { class: "current-class-container" },
  za = g({
    __name: "CurrentClass",
    props: { charClass: { type: Object, required: !0 } },
    emits: ["handleRemoveClass"],
    setup(a, { emit: u }) {
      const d = a,
        r = u,
        i = () => {
          r("handleRemoveClass", d.charClass);
        };
      return (s, t) => (
        n(),
        l("div", ja, [
          e(
            "button",
            { class: "button button-primary", onClick: i },
            " Change Class "
          ),
          a.charClass.name !== "Mundano"
            ? (n(),
              b(
                V,
                { key: 0, "char-class": a.charClass, "only-view": "" },
                null,
                8,
                ["char-class"]
              ))
            : (n(),
              b(Va, { key: 1, "char-class": a.charClass }, null, 8, [
                "char-class",
              ])),
        ])
      );
    },
  }),
  Ea = f(za, [["__scopeId", "data-v-e5b7395a"]]),
  x = (a) => (y("data-v-393772ea"), (a = a()), B(), a),
  Ja = { class: "class-wrapper" },
  Ka = { class: "text-container" },
  Qa = x(() =>
    e(
      "p",
      null,
      [
        $(
          " Your class indicates the trainment you recieved after joining the Order, in order to face the dangers of the Other Side. "
        ),
        e("br"),
        $(
          " In game terms, it's your most important characteristic, as it defines what you do and what your role is in the investigator group"
        ),
      ],
      -1
    )
  ),
  Ga = x(() =>
    e(
      "h4",
      { class: "info-text" },
      " Gained skills are added automatically. Other skills can be added to your agent after creation. ",
      -1
    )
  ),
  Wa = { class: "mundano-container" },
  Xa = x(() =>
    e(
      "p",
      null,
      "Alternatively, you can decide not to choose a clas and begin as a normal person. Start as",
      -1
    )
  ),
  Ya = { class: "classes-container" },
  Za = { class: "classes-flex" },
  es = g({
    __name: "ClassList",
    emits: ["handleAddClass"],
    setup(a, { emit: u }) {
      const d = u,
        r = (i) => {
          d("handleAddClass", i);
        };
      return (i, s) => (
        n(),
        l("div", Ja, [
          e("div", Ka, [
            Qa,
            Ga,
            e("div", Wa, [
              Xa,
              e(
                "button",
                {
                  class: "button-primary mundano-button",
                  onClick: s[0] || (s[0] = (t) => r(L(ve))),
                },
                " Mundane "
              ),
            ]),
          ]),
          e("div", Ya, [
            e("div", Za, [
              (n(!0),
              l(
                w,
                null,
                I(
                  L(_e),
                  (t) => (
                    n(),
                    l("div", { key: t.name }, [
                      C(V, { "char-class": t, onHandleAddClass: r }, null, 8, [
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
  as = f(es, [["__scopeId", "data-v-393772ea"]]),
  ss = g({
    __name: "ChooseClass",
    props: { chosenClass: {}, userPremiumTier: {} },
    emits: ["handleAddClass", "handleRemoveClass"],
    setup(a, { emit: u }) {
      const d = u,
        r = (s) => {
          d("handleAddClass", s);
        },
        i = () => {
          d("handleRemoveClass");
        };
      return (s, t) => (
        n(),
        l("div", null, [
          s.chosenClass
            ? (n(),
              b(
                Ea,
                { key: 0, "char-class": s.chosenClass, onHandleRemoveClass: i },
                null,
                8,
                ["char-class"]
              ))
            : (n(), b(as, { key: 1, onHandleAddClass: r })),
        ])
      );
    },
  }),
  O = (a) => (y("data-v-cf3ab16f"), (a = a()), B(), a),
  ts = { class: "content" },
  ns = O(() =>
    e(
      "p",
      null,
      " So far, you've defined the mechanical characteristics of your sheet — but a good character is more than just numbers. Now, let's work on describing your agent, defining aspects such as name, gender and age. These aspects have no effect on the rules, but they make the game more engaging and fun. ",
      -1
    )
  ),
  os = ["disabled"],
  rs = { class: "inputs-row" },
  is = { class: "input-container" },
  ls = O(() => e("h3", null, "Character", -1)),
  cs = ["value"],
  ds = { class: "input-container" },
  us = O(() => e("h3", null, "Player", -1)),
  ms = ["value"],
  hs = { class: "textarea-container" },
  ps = ["placeholder", "value", "onBlur"],
  vs = g({
    __name: "ChooseDescription",
    props: { character: {}, loading: { type: Boolean }, userPremiumTier: {} },
    emits: [
      "handleUpdateDescription",
      "handleFinishCreation",
      "handleChangeChar",
    ],
    setup(a, { emit: u }) {
      const d = u,
        r = (s, t) => {
          const o = { value: s.target.value, key: t };
          d("handleUpdateDescription", o);
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
      return (s, t) => {
        var o, m;
        return (
          n(),
          l("div", null, [
            e("div", ts, [
              ns,
              e(
                "button",
                {
                  class: "button-primary finish-button",
                  disabled: s.loading,
                  onClick:
                    t[0] || (t[0] = (c) => s.$emit("handleFinishCreation")),
                },
                " Finish ",
                8,
                os
              ),
              e("div", rs, [
                e("div", is, [
                  ls,
                  e(
                    "input",
                    {
                      type: "text",
                      class: "input-primary",
                      placeholder: "Character name",
                      value: (o = s.character) == null ? void 0 : o.name,
                      onBlur:
                        t[1] ||
                        (t[1] = (c) =>
                          s.$emit("handleChangeChar", { e: c, key: "name" })),
                    },
                    null,
                    40,
                    cs
                  ),
                ]),
                e("div", ds, [
                  us,
                  e(
                    "input",
                    {
                      type: "text",
                      class: "input-primary",
                      placeholder: "Player name",
                      value: (m = s.character) == null ? void 0 : m.player,
                      onBlur:
                        t[2] ||
                        (t[2] = (c) =>
                          s.$emit("handleChangeChar", { e: c, key: "player" })),
                    },
                    null,
                    40,
                    ms
                  ),
                ]),
              ]),
              (n(),
              l(
                w,
                null,
                I(i, (c) => {
                  var p;
                  return e("div", { key: c.title }, [
                    e("div", hs, [
                      e("h3", null, _(c.title), 1),
                      e(
                        "textarea",
                        {
                          class: "textarea",
                          rows: "6",
                          placeholder: c.placeholder,
                          value:
                            (p = s.character) == null
                              ? void 0
                              : p.description[c.key],
                          onBlur: (A) => r(A, c.key),
                        },
                        `\r
          `,
                        40,
                        ps
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
  _s = f(vs, [["__scopeId", "data-v-cf3ab16f"]]),
  gs = { key: 0 },
  ks = { key: 1 },
  Ds = g({
    __name: "CharacterCreation",
    setup(a) {
      const u = [
          { label: "Attributes", value: 0 },
          { label: "Background", value: 1 },
          { label: "Class", value: 2 },
          { label: "Final Touches", value: 3 },
        ],
        d = [Ze, Da, ss, _s],
        r = te(),
        i = ne(),
        s = oe(),
        t = k(0),
        o = k(he.cloneDeep(Ae)),
        m = k(null),
        c = k(null),
        p = k(!0),
        A = k(0),
        v = k({ message: "", type: "error", alive: !1, timeout: 0 }),
        z = (h) => (t.value = h),
        E = (h) => {
          we(o.value, h);
        },
        J = (h) => {
          (m.value = h), (t.value = 2);
        },
        K = () => {
          m.value = null;
        },
        Q = (h) => {
          (c.value = h), (t.value = 3);
        },
        G = () => {
          c.value = null;
        },
        W = (h) => {
          const T = h.e.target.value;
          o.value[h.key] = T.trim();
        },
        X = (h) => {
          He(o.value, h);
        },
        Y = async () => {
          if (!r.currentUser) return;
          if (m.value === null) {
            (v.value.message = "Choose a background"), (v.value.alive = !0);
            return;
          }
          if (c.value === null) {
            (v.value.message = "Choose a class"), (v.value.alive = !0);
            return;
          }
          if (
            ((p.value = !0),
            A.value < 3 &&
              (await Se("uid", r.currentUser.uid, "characters", Pe)))
          ) {
            (p.value = !1),
              (v.value.message = "Character limit reached"),
              (v.value.alive = !0);
            return;
          }
          Ie(o.value, c.value),
            Re(o.value, m.value),
            (o.value.statsClass = c.value.name),
            (o.value.uid = r.currentUser.uid),
            (o.value.timestamp = de()),
            (o.value.block = o.value.skills[9].bonus),
            (o.value.evade =
              o.value.skills[22].bonus + o.value.attributes.dex + 10);
          const h = await ue(me(i, "characters"), o.value);
          s.push({ name: "character-sheet", params: { id: h.id } });
        };
      re(async () => {
        var h;
        r.currentUser &&
          ((A.value = await Te((h = r.currentUser) == null ? void 0 : h.uid)),
          (p.value = !1));
      }),
        ie(
          () => v.value.alive,
          () => {
            v.value.alive === !0 &&
              (v.value.timeout = window.setTimeout(
                () => (v.value.alive = !1),
                3e3
              ));
          }
        );
      const Z = () => {
        (v.value.alive = !1), clearTimeout(v.value.timeout);
      };
      return (h, T) => (
        n(),
        l(
          w,
          null,
          [
            p.value
              ? (n(), l("div", ks, [C(Be, { "page-loading": "" })]))
              : (n(),
                l("div", gs, [
                  C(
                    Ve,
                    {
                      "current-step": t.value,
                      "stepper-options": u,
                      onHandleNavigation: z,
                    },
                    null,
                    8,
                    ["current-step"]
                  ),
                  (n(),
                  b(
                    ce,
                    null,
                    [
                      (n(),
                      b(
                        le(d[t.value]),
                        {
                          character: o.value,
                          "chosen-background": m.value,
                          "chosen-class": c.value,
                          "user-premium-tier": A.value,
                          loading: p.value,
                          onHandleChangeAttribute: E,
                          onHandleAddBackground: J,
                          onHandleRemoveBackground: K,
                          onHandleAddClass: Q,
                          onHandleRemoveClass: G,
                          onHandleChangeChar: W,
                          onHandleUpdateDescription: X,
                          onHandleFinishCreation: Y,
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
            C(
              F,
              { name: "toast" },
              {
                default: N(() => [
                  v.value.alive
                    ? (n(),
                      b(
                        ye,
                        {
                          key: 0,
                          toast: v.value,
                          type: v.value.type,
                          onDismiss: Z,
                        },
                        null,
                        8,
                        ["toast", "type"]
                      ))
                    : H("", !0),
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
export { Ds as default };

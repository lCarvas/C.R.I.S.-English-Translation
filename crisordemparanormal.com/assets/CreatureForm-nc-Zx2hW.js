import {
  d as J,
  r as k,
  f as K,
  i as M,
  o as u,
  c as d,
  a as e,
  C as i,
  D as n,
  k as p,
  n as m,
  q as f,
  t as V,
  L as D,
  x as g,
  a2 as Q,
  m as W,
  p as Y,
  b as Z,
  H as A,
  _ as ee,
} from "./index-t0mq17pV.js";
import { _ as T } from "./blank-profile-picture-wMh28flS.js";
import { f as N } from "./default-s9aktn1T.js";
import { a as te, b as le } from "./creatureData-R8saWVyd.js";
import { g as se } from "./forms-elmqtkmr.js";
import { P as ae } from "./PictureModal-KjvpKroR.js";
import { _ as U, l as y } from "./lodash-gzw5KmHd.js";
import { D as _ } from "./DropdownSimple-zxeRj9hV.js";
import { v as ie } from "./v4-cyCr5FZV.js";
const a = (v) => (Y("data-v-de3e4779"), (v = v()), Z(), v),
  ne = { class: "form-container" },
  oe = { class: "input-container" },
  re = a(() => e("div", { class: "label" }, " Name* ", -1)),
  ue = { class: "input-row" },
  de = { class: "input-container" },
  ce = a(() => e("div", { class: "label" }, " Type* ", -1)),
  pe = { class: "input-container" },
  ve = a(() => e("div", { class: "label" }, " Size* ", -1)),
  me = { class: "input-row" },
  _e = { class: "input-container" },
  be = a(() => e("div", { class: "label" }, " Element* ", -1)),
  he = { class: "input-row" },
  fe = { class: "input-container" },
  ye = a(() => e("div", { class: "label" }, " Secondary elements ", -1)),
  ke = { class: "input-row" },
  Ve = { class: "input-container" },
  ge = a(() => e("div", { class: "label" }, " DV* ", -1)),
  Ne = { class: "input-row" },
  Ue = { class: "input-container" },
  xe = a(() => e("div", { class: "label" }, " Current Health* ", -1)),
  we = { class: "input-container" },
  Se = a(() => e("div", { class: "label" }, " Maximum Health* ", -1)),
  Ce = { class: "input-row" },
  Pe = { class: "input-container" },
  Me = a(() => e("div", { class: "label" }, " STR* ", -1)),
  De = { class: "input-container" },
  Ae = a(() => e("div", { class: "label" }, " AGI* ", -1)),
  Te = { class: "input-container" },
  Ee = a(() => e("div", { class: "label" }, " INT* ", -1)),
  Re = { class: "input-container" },
  qe = a(() => e("div", { class: "label" }, " PRE* ", -1)),
  Be = { class: "input-container" },
  Ie = a(() => e("div", { class: "label" }, " VIG* ", -1)),
  Oe = { class: "input-row" },
  ze = { class: "input-container" },
  Le = a(() => e("div", { class: "label" }, " Defense* ", -1)),
  Fe = { class: "input-container" },
  $e = a(() => e("div", { class: "label" }, " Speed* ", -1)),
  He = a(() => e("div", { class: "title" }, " Alternative Speed ", -1)),
  Ge = { class: "input-row mobile-column" },
  je = { class: "input-container" },
  Xe = a(() => e("div", { class: "label" }, " Name* ", -1)),
  Je = ["onUpdate:modelValue"],
  Ke = { class: "input-container" },
  Qe = a(() => e("div", { class: "label" }, " Speed* ", -1)),
  We = ["onUpdate:modelValue"],
  Ye = ["onClick"],
  Ze = { class: "input-row" },
  et = { class: "input-container" },
  tt = a(() => e("div", { class: "label" }, " Senses ", -1)),
  lt = a(() =>
    e(
      "div",
      { class: "title-container" },
      [e("div", { class: "title" }, " Skills ")],
      -1
    )
  ),
  st = { class: "input-row" },
  at = { class: "input-container" },
  it = a(() => e("div", { class: "label" }, " Dice* ", -1)),
  nt = ["onUpdate:modelValue"],
  ot = { class: "input-container" },
  rt = a(() => e("div", { class: "label" }, " Bonus ", -1)),
  ut = ["onUpdate:modelValue"],
  dt = a(() => e("div", { class: "title" }, " Additional skills ", -1)),
  ct = { class: "input-row mobile-column" },
  pt = { class: "input-container" },
  vt = a(() => e("div", { class: "label" }, " Name* ", -1)),
  mt = ["onUpdate:modelValue"],
  _t = { class: "input-container" },
  bt = a(() => e("div", { class: "label" }, " Dice* ", -1)),
  ht = ["onUpdate:modelValue"],
  ft = { class: "input-container" },
  yt = a(() => e("div", { class: "label" }, " Bonus ", -1)),
  kt = ["onUpdate:modelValue"],
  Vt = ["onClick"],
  gt = { class: "input-row" },
  Nt = { class: "input-container" },
  Ut = a(() => e("div", { class: "label" }, " Immunities ", -1)),
  xt = { class: "input-row" },
  wt = { class: "input-container" },
  St = a(() => e("div", { class: "label" }, " Additional immunities ", -1)),
  Ct = a(() =>
    e(
      "div",
      { class: "title-container" },
      [e("div", { class: "title" }, " Resistances ")],
      -1
    )
  ),
  Pt = { class: "input-row flex-wrap" },
  Mt = { class: "input-container" },
  Dt = { class: "label" },
  At = ["onUpdate:modelValue"],
  Tt = { class: "input-row" },
  Et = { class: "input-container" },
  Rt = a(() => e("div", { class: "label" }, " Vulnerabilities ", -1)),
  qt = a(() =>
    e(
      "div",
      { class: "title-container" },
      [e("div", { class: "title" }, " Disturbing presence ")],
      -1
    )
  ),
  Bt = { class: "input-row flex-wrap" },
  It = { class: "input-container" },
  Ot = a(() => e("div", { class: "label" }, " DC ", -1)),
  zt = { class: "input-container" },
  Lt = a(() => e("div", { class: "label" }, " Damage ", -1)),
  Ft = { class: "input-container" },
  $t = a(() => e("div", { class: "label" }, " LPE imune ", -1)),
  Ht = { class: "editor-container" },
  Gt = a(() =>
    e(
      "div",
      { class: "label" },
      [
        A(" Description"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  jt = a(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  Xt = { class: "editor-container" },
  Jt = a(() =>
    e(
      "div",
      { class: "label" },
      [
        A(" Enigma of Fear"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Kt = a(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  Qt = { class: "content-container" },
  Wt = a(() => e("div", { class: "title" }, " Profile picture ", -1)),
  Yt = { key: 0 },
  Zt = ["src"],
  el = { key: 1 },
  tl = a(() =>
    e(
      "img",
      { class: "creature-picture", src: T, alt: "imagem em branco" },
      null,
      -1
    )
  ),
  ll = [tl],
  sl = { class: "content-container" },
  al = a(() => e("div", { class: "title" }, " Full picture ", -1)),
  il = { key: 0 },
  nl = ["src"],
  ol = { key: 1 },
  rl = a(() =>
    e(
      "img",
      { class: "creature-picture", src: T, alt: "imagem em branco" },
      null,
      -1
    )
  ),
  ul = [rl],
  dl = { class: "buttons-container" },
  cl = ["disabled"],
  pl = { key: 0 },
  vl = J({
    __name: "CreatureForm",
    props: {
      creature: { type: Object, default: N },
      noPadding: Boolean,
      addMode: Boolean,
    },
    emits: ["handleEdit", "handleClose"],
    setup(v, { emit: E }) {
      const x = v,
        w = E,
        R = ["tiny", "small", "medium", "big", "huge", "colossal"],
        q = [
          "damage",
          "ballistic",
          "blood",
          "bludgeoning",
          "chemical",
          "cold",
          "death",
          "electricity",
          "energy",
          "fire",
          "knowledge",
          "mental",
          "piercing",
          "slashing",
        ],
        B = [
          "damage",
          "ballistic",
          "blood",
          "bludgeoning",
          "chemical",
          "cold",
          "death",
          "electricity",
          "energy",
          "fire",
          "knowledge",
          "mental",
          "piercing",
          "slashing",
        ],
        I = ["none", "blood", "death", "energy", "fear", "knowledge"],
        O = ["blood", "death", "energy", "fear", "knowledge"],
        t = k(U.cloneDeep(x.creature)),
        c = k(!1),
        b = k(),
        z = () => {
          y.isArray(t.value.altMovements) || (t.value.altMovements = []),
            t.value.altMovements.push({ title: "New movement", value: 8 });
        },
        L = (o) => {
          y.isArray(t.value.altMovements) && t.value.altMovements.splice(o, 1);
        },
        F = () => {
          y.isArray(t.value.extraSkills) || (t.value.extraSkills = []),
            t.value.extraSkills.push({
              id: ie(),
              name: "New skill",
              rollNumber: 1,
              rollBonus: 0,
            });
        },
        $ = (o) => {
          y.isArray(t.value.extraSkills) &&
            t.value.extraSkills.splice(
              t.value.extraSkills.findIndex((s) => s.id === o),
              1
            );
        },
        S = (o) => {
          (b.value = o), (c.value = !c.value);
        },
        H = (o) => {
          b.value === "profile" && (t.value.sheetPictureURL = o),
            b.value === "full" && (t.value.fullPictureURL = o),
            (c.value = !c.value);
        },
        C = K(() => {
          if (
            !t.value.name ||
            !t.value.creatureType ||
            !t.value.vd ||
            !t.value.pvCurrent ||
            !t.value.pvMax ||
            isNaN(t.value.attributes.str) ||
            t.value.attributes.str.toString() === "" ||
            isNaN(t.value.attributes.dex) ||
            t.value.attributes.dex.toString() === "" ||
            isNaN(t.value.attributes.int) ||
            t.value.attributes.int.toString() === "" ||
            isNaN(t.value.attributes.pre) ||
            t.value.attributes.pre.toString() === "" ||
            isNaN(t.value.attributes.con) ||
            t.value.attributes.con.toString() === "" ||
            !t.value.defense ||
            t.value.movement.toString() === "" ||
            isNaN(t.value.skills.fortitude.rollNumber) ||
            t.value.skills.fortitude.rollNumber.toString() === "" ||
            isNaN(t.value.skills.initiative.rollNumber) ||
            t.value.skills.initiative.rollNumber.toString() === "" ||
            isNaN(t.value.skills.perception.rollNumber) ||
            t.value.skills.perception.rollNumber.toString() === "" ||
            isNaN(t.value.skills.reflex.rollNumber) ||
            t.value.skills.reflex.rollNumber.toString() === "" ||
            isNaN(t.value.skills.will.rollNumber) ||
            t.value.skills.will.rollNumber.toString() === ""
          )
            return !0;
          if (t.value.altMovements) {
            for (const o of t.value.altMovements)
              if (!o.title || isNaN(o.value)) return !0;
          }
          if (t.value.extraSkills) {
            for (const o of t.value.extraSkills)
              if (o.name.toString() === "" || isNaN(o.rollNumber)) return !0;
          }
          return !1;
        }),
        G = () => {
          (t.value = U.clone(N)), w("handleClose");
        },
        j = () => {
          C.value ||
            (se(t.value), w("handleEdit", t.value), (t.value = U.cloneDeep(N)));
        };
      return (o, s) => {
        const P = M("p-editor"),
          X = M("vue-final-modal");
        return (
          u(),
          d(
            m,
            null,
            [
              e(
                "div",
                {
                  class: Q([
                    "form-background-color",
                    { padding: !v.noPadding },
                  ]),
                },
                [
                  e("div", ne, [
                    e("div", oe, [
                      re,
                      i(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              s[0] || (s[0] = (l) => (t.value.name = l)),
                            type: "text",
                            class: "input-primary dark big-input",
                          },
                          null,
                          512
                        ),
                        [[n, t.value.name]]
                      ),
                    ]),
                    e("div", ue, [
                      e("div", de, [
                        ce,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[1] ||
                                (s[1] = (l) => (t.value.creatureType = l)),
                              type: "text",
                              class: "input-primary dark dropdown-sized",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.creatureType]]
                        ),
                      ]),
                      e("div", pe, [
                        ve,
                        p(
                          _,
                          {
                            value: t.value.creatureSize,
                            options: R,
                            width: "7.5rem",
                            "content-width": "7.5rem",
                            "form-input": "",
                            onUpdateValue:
                              s[2] ||
                              (s[2] = (l) => (t.value.creatureSize = l)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]),
                    e("div", me, [
                      e("div", _e, [
                        be,
                        p(
                          _,
                          {
                            value: t.value.element,
                            options: I,
                            width: "7.5rem",
                            "content-width": "7.5rem",
                            "form-input": "",
                            onUpdateValue:
                              s[3] || (s[3] = (l) => (t.value.element = l)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]),
                    e("div", he, [
                      e("div", fe, [
                        ye,
                        p(
                          _,
                          {
                            value: t.value.secondaryElements,
                            options: O,
                            width: "100%",
                            "content-width": "100%",
                            "form-input": "",
                            multiple: "",
                            onUpdateValue:
                              s[4] ||
                              (s[4] = (l) => (t.value.secondaryElements = l)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]),
                    e("div", ke, [
                      e("div", Ve, [
                        ge,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[5] || (s[5] = (l) => (t.value.vd = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.vd]]
                        ),
                      ]),
                    ]),
                    e("div", Ne, [
                      e("div", Ue, [
                        xe,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[6] || (s[6] = (l) => (t.value.pvCurrent = l)),
                              type: "number",
                              class: "input-primary dark",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.pvCurrent]]
                        ),
                      ]),
                      e("div", we, [
                        Se,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[7] || (s[7] = (l) => (t.value.pvMax = l)),
                              type: "number",
                              class: "input-primary dark",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.pvMax]]
                        ),
                      ]),
                    ]),
                    e("div", Ce, [
                      e("div", Pe, [
                        Me,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[8] ||
                                (s[8] = (l) => (t.value.attributes.dex = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.attributes.dex]]
                        ),
                      ]),
                      e("div", De, [
                        Ae,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[9] ||
                                (s[9] = (l) => (t.value.attributes.str = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.attributes.str]]
                        ),
                      ]),
                      e("div", Te, [
                        Ee,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[10] ||
                                (s[10] = (l) => (t.value.attributes.int = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.attributes.int]]
                        ),
                      ]),
                      e("div", Re, [
                        qe,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[11] ||
                                (s[11] = (l) => (t.value.attributes.pre = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.attributes.pre]]
                        ),
                      ]),
                      e("div", Be, [
                        Ie,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[12] ||
                                (s[12] = (l) => (t.value.attributes.con = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.attributes.con]]
                        ),
                      ]),
                    ]),
                    e("div", Oe, [
                      e("div", ze, [
                        Le,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[13] || (s[13] = (l) => (t.value.defense = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.defense]]
                        ),
                      ]),
                      e("div", Fe, [
                        $e,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[14] ||
                                (s[14] = (l) => (t.value.movement = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.movement]]
                        ),
                      ]),
                    ]),
                    e("div", { class: "title-container" }, [
                      He,
                      e(
                        "button",
                        { class: "button-primary", onClick: z },
                        " Add New "
                      ),
                    ]),
                    (u(!0),
                    d(
                      m,
                      null,
                      f(
                        t.value.altMovements,
                        (l, r) => (
                          u(),
                          d("div", { key: r, class: "extra-damage-card" }, [
                            e("div", Ge, [
                              e("div", je, [
                                Xe,
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (h) =>
                                        (l.title = h),
                                      type: "text",
                                      class: "input-primary dark",
                                    },
                                    null,
                                    8,
                                    Je
                                  ),
                                  [[n, l.title]]
                                ),
                              ]),
                              e("div", Ke, [
                                Qe,
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (h) =>
                                        (l.value = h),
                                      type: "number",
                                      class: "input-primary dark small",
                                    },
                                    null,
                                    8,
                                    We
                                  ),
                                  [[n, l.value]]
                                ),
                              ]),
                            ]),
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: (h) => L(r),
                              },
                              " Remove ",
                              8,
                              Ye
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                    e("div", Ze, [
                      e("div", et, [
                        tt,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[15] ||
                                (s[15] = (l) => (t.value.perceptionType = l)),
                              type: "text",
                              class: "input-primary dark",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.perceptionType]]
                        ),
                      ]),
                    ]),
                    lt,
                    (u(!0),
                    d(
                      m,
                      null,
                      f(
                        D(te),
                        (l) => (
                          u(),
                          d("div", { key: l.key }, [
                            e("div", null, [e("b", null, V(l.label), 1)]),
                            e("div", st, [
                              e("div", at, [
                                it,
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (r) =>
                                        (t.value.skills[l.key].rollNumber = r),
                                      type: "number",
                                      class: "input-primary dark small",
                                    },
                                    null,
                                    8,
                                    nt
                                  ),
                                  [[n, t.value.skills[l.key].rollNumber]]
                                ),
                              ]),
                              e("div", ot, [
                                rt,
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (r) =>
                                        (t.value.skills[l.key].rollBonus = r),
                                      type: "number",
                                      class: "input-primary dark small",
                                    },
                                    null,
                                    8,
                                    ut
                                  ),
                                  [[n, t.value.skills[l.key].rollBonus]]
                                ),
                              ]),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                    e("div", { class: "title-container" }, [
                      dt,
                      e(
                        "button",
                        { class: "button-primary", onClick: F },
                        " Add "
                      ),
                    ]),
                    (u(!0),
                    d(
                      m,
                      null,
                      f(
                        t.value.extraSkills,
                        (l) => (
                          u(),
                          d("div", { key: l.id, class: "extra-damage-card" }, [
                            e("div", ct, [
                              e("div", pt, [
                                vt,
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (r) =>
                                        (l.name = r),
                                      type: "text",
                                      class: "input-primary dark",
                                    },
                                    null,
                                    8,
                                    mt
                                  ),
                                  [[n, l.name]]
                                ),
                              ]),
                              e("div", _t, [
                                bt,
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (r) =>
                                        (l.rollNumber = r),
                                      type: "number",
                                      class: "input-primary dark small",
                                    },
                                    null,
                                    8,
                                    ht
                                  ),
                                  [[n, l.rollNumber]]
                                ),
                              ]),
                              e("div", ft, [
                                yt,
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (r) =>
                                        (l.rollBonus = r),
                                      type: "number",
                                      class: "input-primary dark small",
                                    },
                                    null,
                                    8,
                                    kt
                                  ),
                                  [[n, l.rollBonus]]
                                ),
                              ]),
                            ]),
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: (r) => $(l.id),
                              },
                              " Remove ",
                              8,
                              Vt
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                    e("div", gt, [
                      e("div", Nt, [
                        Ut,
                        p(
                          _,
                          {
                            value: t.value.imunidades,
                            options: q,
                            width: "100%",
                            "content-width": "100%",
                            "form-input": "",
                            multiple: "",
                            onUpdateValue:
                              s[16] ||
                              (s[16] = (l) => (t.value.imunidades = l)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]),
                    e("div", xt, [
                      e("div", wt, [
                        St,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[17] ||
                                (s[17] = (l) =>
                                  (t.value.imunidadesAditional = l)),
                              type: "text",
                              class: "input-primary dark",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.imunidadesAditional]]
                        ),
                      ]),
                    ]),
                    Ct,
                    e("div", Pt, [
                      (u(!0),
                      d(
                        m,
                        null,
                        f(
                          D(le),
                          (l) => (
                            u(),
                            d("div", { key: l.key }, [
                              e("div", Mt, [
                                e("div", Dt, V(l.label), 1),
                                i(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (r) =>
                                        (t.value.resistencias[l.key] = r),
                                      type: "number",
                                      class: "input-primary dark small",
                                    },
                                    null,
                                    8,
                                    At
                                  ),
                                  [[n, t.value.resistencias[l.key]]]
                                ),
                              ]),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                    e("div", Tt, [
                      e("div", Et, [
                        Rt,
                        p(
                          _,
                          {
                            value: t.value.vulnerabilidades,
                            options: B,
                            width: "100%",
                            "content-width": "100%",
                            "form-input": "",
                            multiple: "",
                            onUpdateValue:
                              s[18] ||
                              (s[18] = (l) => (t.value.vulnerabilidades = l)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]),
                    qt,
                    e("div", Bt, [
                      e("div", It, [
                        Ot,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[19] ||
                                (s[19] = (l) =>
                                  (t.value.presencaPerturbadora.dt = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.presencaPerturbadora.dt]]
                        ),
                      ]),
                      e("div", zt, [
                        Lt,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[20] ||
                                (s[20] = (l) =>
                                  (t.value.presencaPerturbadora.dice = l)),
                              type: "text",
                              class: "input-primary dark",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.presencaPerturbadora.dice]]
                        ),
                      ]),
                      e("div", Ft, [
                        $t,
                        i(
                          e(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[21] ||
                                (s[21] = (l) =>
                                  (t.value.presencaPerturbadora.nex = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.presencaPerturbadora.nex]]
                        ),
                      ]),
                    ]),
                    e("div", Ht, [
                      Gt,
                      p(
                        P,
                        {
                          modelValue: t.value.description,
                          "onUpdate:modelValue":
                            s[22] || (s[22] = (l) => (t.value.description = l)),
                          "editor-style": "height: 12rem",
                        },
                        { toolbar: g(() => [jt]), _: 1 },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    e("div", Xt, [
                      Jt,
                      p(
                        P,
                        {
                          modelValue: t.value.enigmaDoMedo,
                          "onUpdate:modelValue":
                            s[23] ||
                            (s[23] = (l) => (t.value.enigmaDoMedo = l)),
                          "editor-style": "height: 12rem",
                        },
                        { toolbar: g(() => [Kt]), _: 1 },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    e("div", Qt, [
                      Wt,
                      e(
                        "button",
                        {
                          class: "button-naked",
                          onClick: s[24] || (s[24] = (l) => S("profile")),
                        },
                        [
                          t.value.sheetPictureURL
                            ? (u(),
                              d("div", Yt, [
                                e(
                                  "img",
                                  {
                                    class: "creature-picture",
                                    src: t.value.sheetPictureURL,
                                    alt: "imagem",
                                  },
                                  null,
                                  8,
                                  Zt
                                ),
                              ]))
                            : (u(), d("div", el, ll)),
                        ]
                      ),
                    ]),
                    e("div", sl, [
                      al,
                      e(
                        "button",
                        {
                          class: "button-naked",
                          onClick: s[25] || (s[25] = (l) => S("full")),
                        },
                        [
                          t.value.fullPictureURL
                            ? (u(),
                              d("div", il, [
                                e(
                                  "img",
                                  {
                                    class: "full-picture",
                                    src: t.value.fullPictureURL,
                                    alt: "imagem",
                                  },
                                  null,
                                  8,
                                  nl
                                ),
                              ]))
                            : (u(), d("div", ol, ul)),
                        ]
                      ),
                    ]),
                  ]),
                  e("div", dl, [
                    e(
                      "button",
                      { class: "button-cancel", onClick: G },
                      " Cancel "
                    ),
                    e(
                      "button",
                      {
                        class: "button-primary big",
                        disabled: C.value,
                        onClick: j,
                      },
                      V(x.addMode ? "Add" : "Edit"),
                      9,
                      cl
                    ),
                  ]),
                ],
                2
              ),
              c.value
                ? (u(),
                  d("div", pl, [
                    p(
                      X,
                      {
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          s[27] || (s[27] = (l) => (c.value = l)),
                        classes: "modal-container",
                      },
                      {
                        default: g(() => [
                          p(
                            ae,
                            {
                              "is-free-style": b.value === "full",
                              onHandleCloseModal:
                                s[26] || (s[26] = (l) => (c.value = !c.value)),
                              onHandleUpdatePicture: H,
                            },
                            null,
                            8,
                            ["is-free-style"]
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : W("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  Nl = ee(vl, [["__scopeId", "data-v-de3e4779"]]);
export { Nl as C };

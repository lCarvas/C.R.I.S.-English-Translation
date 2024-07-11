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
  a1 as Q,
  m as W,
  p as Y,
  b as Z,
  H as A,
  _ as ee,
} from "./index-CCe7Lu-B.js";
import { _ as T } from "./blank-profile-picture-wMh28flS.js";
import { b as N } from "./default-dSfWXGfL.js";
import { c as te, a as le } from "./creatureData-ozdxpDUT.js";
import { a as se } from "./forms-8DDAOOVU.js";
import { P as ae } from "./PictureModal-aYibvNls.js";
import { _ as U, l as y } from "./lodash-gzw5KmHd.js";
import { D as _ } from "./DropdownSimple-1_2dpnbs.js";
import { v as ie } from "./v4-cyCr5FZV.js";
const a = (v) => (Y("data-v-c895e3ad"), (v = v()), Z(), v),
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
  Fe = { class: "input-row" },
  $e = { class: "input-container" },
  He = a(() => e("div", { class: "label" }, " Movement* ", -1)),
  Ge = a(() => e("div", { class: "title" }, " Alternative Movement ", -1)),
  je = { class: "input-container" },
  Xe = a(() => e("div", { class: "label" }, " Name* ", -1)),
  Je = ["onUpdate:modelValue"],
  Ke = { class: "input-container" },
  Qe = a(() => e("div", { class: "label" }, " Movement* ", -1)),
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
  dt = a(() => e("div", { class: "title" }, " Aditional skills ", -1)),
  ct = { class: "input-container" },
  pt = a(() => e("div", { class: "label" }, " Name* ", -1)),
  vt = ["onUpdate:modelValue"],
  mt = { class: "input-container" },
  _t = a(() => e("div", { class: "label" }, " Dice* ", -1)),
  bt = ["onUpdate:modelValue"],
  ht = { class: "input-container" },
  ft = a(() => e("div", { class: "label" }, " Bonus ", -1)),
  yt = ["onUpdate:modelValue"],
  kt = ["onClick"],
  Vt = { class: "input-row" },
  gt = { class: "input-container" },
  Nt = a(() => e("div", { class: "label" }, " Immunities ", -1)),
  Ut = { class: "input-row" },
  xt = { class: "input-container" },
  wt = a(() => e("div", { class: "label" }, " Aditional immunities ", -1)),
  St = a(() =>
    e(
      "div",
      { class: "title-container" },
      [e("div", { class: "title" }, " Resistences ")],
      -1
    )
  ),
  Ct = { class: "input-row flex-wrap" },
  Pt = { class: "input-container" },
  Mt = { class: "label" },
  Dt = ["onUpdate:modelValue"],
  At = { class: "input-row" },
  Tt = { class: "input-container" },
  Et = a(() => e("div", { class: "label" }, " Vulnerabilities ", -1)),
  Rt = a(() =>
    e(
      "div",
      { class: "title-container" },
      [e("div", { class: "title" }, " Disturbing presence ")],
      -1
    )
  ),
  qt = { class: "input-row flex-wrap" },
  Bt = { class: "input-container" },
  It = a(() => e("div", { class: "label" }, " DC ", -1)),
  Ot = { class: "input-container" },
  zt = a(() => e("div", { class: "label" }, " Damage ", -1)),
  Lt = { class: "input-container" },
  Ft = a(() => e("div", { class: "label" }, " EXP imune ", -1)),
  $t = { class: "editor-container" },
  Ht = a(() =>
    e(
      "div",
      { class: "label" },
      [
        A(" Descrição"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Gt = a(() =>
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
  jt = { class: "editor-container" },
  Xt = a(() =>
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
  Jt = a(() =>
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
  Kt = { class: "content-container" },
  Qt = a(() => e("div", { class: "title" }, " Profile picture ", -1)),
  Wt = { key: 0 },
  Yt = ["src"],
  Zt = { key: 1 },
  el = a(() =>
    e(
      "img",
      { class: "creature-picture", src: T, alt: "imagem em branco" },
      null,
      -1
    )
  ),
  tl = [el],
  ll = { class: "content-container" },
  sl = a(() => e("div", { class: "title" }, " Full picture ", -1)),
  al = { key: 0 },
  il = ["src"],
  nl = { key: 1 },
  ol = a(() =>
    e(
      "img",
      { class: "creature-picture", src: T, alt: "imagem em branco" },
      null,
      -1
    )
  ),
  rl = [ol],
  ul = { class: "buttons-container" },
  dl = ["disabled"],
  cl = { key: 0 },
  pl = J({
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
            "eletricity",
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
            "eletricity",
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
            !t.value.movement ||
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
                                (s[8] = (l) => (t.value.attributes.str = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.attributes.str]]
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
                                (s[9] = (l) => (t.value.attributes.dex = l)),
                              type: "number",
                              class: "input-primary dark small",
                            },
                            null,
                            512
                          ),
                          [[n, t.value.attributes.dex]]
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
                    ]),
                    e("div", Fe, [
                      e("div", $e, [
                        He,
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
                      Ge,
                      e(
                        "button",
                        { class: "button-secondary", onClick: z },
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
                          d("div", { key: r, class: "input-row" }, [
                            e("div", je, [
                              Xe,
                              i(
                                e(
                                  "input",
                                  {
                                    "onUpdate:modelValue": (h) => (l.title = h),
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
                                    "onUpdate:modelValue": (h) => (l.value = h),
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
                            e("div", null, V(l.label), 1),
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
                        { class: "button-secondary", onClick: F },
                        " Add New "
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
                          d("div", { key: l.id, class: "input-row" }, [
                            e("div", ct, [
                              pt,
                              i(
                                e(
                                  "input",
                                  {
                                    "onUpdate:modelValue": (r) => (l.name = r),
                                    type: "text",
                                    class: "input-primary dark",
                                  },
                                  null,
                                  8,
                                  vt
                                ),
                                [[n, l.name]]
                              ),
                            ]),
                            e("div", mt, [
                              _t,
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
                                  bt
                                ),
                                [[n, l.rollNumber]]
                              ),
                            ]),
                            e("div", ht, [
                              ft,
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
                                  yt
                                ),
                                [[n, l.rollBonus]]
                              ),
                            ]),
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: (r) => $(l.id),
                              },
                              " Remove ",
                              8,
                              kt
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                    e("div", Vt, [
                      e("div", gt, [
                        Nt,
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
                    e("div", Ut, [
                      e("div", xt, [
                        wt,
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
                    St,
                    e("div", Ct, [
                      (u(!0),
                      d(
                        m,
                        null,
                        f(
                          D(le),
                          (l) => (
                            u(),
                            d("div", { key: l.key }, [
                              e("div", Pt, [
                                e("div", Mt, V(l.label), 1),
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
                                    Dt
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
                    e("div", At, [
                      e("div", Tt, [
                        Et,
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
                    Rt,
                    e("div", qt, [
                      e("div", Bt, [
                        It,
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
                      e("div", Ot, [
                        zt,
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
                      e("div", Lt, [
                        Ft,
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
                    e("div", $t, [
                      Ht,
                      p(
                        P,
                        {
                          modelValue: t.value.description,
                          "onUpdate:modelValue":
                            s[22] || (s[22] = (l) => (t.value.description = l)),
                          "editor-style": "height: 12rem",
                        },
                        { toolbar: g(() => [Gt]), _: 1 },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    e("div", jt, [
                      Xt,
                      p(
                        P,
                        {
                          modelValue: t.value.enigmaDoMedo,
                          "onUpdate:modelValue":
                            s[23] ||
                            (s[23] = (l) => (t.value.enigmaDoMedo = l)),
                          "editor-style": "height: 12rem",
                        },
                        { toolbar: g(() => [Jt]), _: 1 },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    e("div", Kt, [
                      Qt,
                      e(
                        "button",
                        {
                          class: "button-naked",
                          onClick: s[24] || (s[24] = (l) => S("profile")),
                        },
                        [
                          t.value.sheetPictureURL
                            ? (u(),
                              d("div", Wt, [
                                e(
                                  "img",
                                  {
                                    class: "creature-picture",
                                    src: t.value.sheetPictureURL,
                                    alt: "imagem",
                                  },
                                  null,
                                  8,
                                  Yt
                                ),
                              ]))
                            : (u(), d("div", Zt, tl)),
                        ]
                      ),
                    ]),
                    e("div", ll, [
                      sl,
                      e(
                        "button",
                        {
                          class: "button-naked",
                          onClick: s[25] || (s[25] = (l) => S("full")),
                        },
                        [
                          t.value.fullPictureURL
                            ? (u(),
                              d("div", al, [
                                e(
                                  "img",
                                  {
                                    class: "full-picture",
                                    src: t.value.fullPictureURL,
                                    alt: "imagem",
                                  },
                                  null,
                                  8,
                                  il
                                ),
                              ]))
                            : (u(), d("div", nl, rl)),
                        ]
                      ),
                    ]),
                  ]),
                  e("div", ul, [
                    e(
                      "button",
                      { class: "button-cancel", onClick: G },
                      " Cancelar "
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
                      dl
                    ),
                  ]),
                ],
                2
              ),
              c.value
                ? (u(),
                  d("div", cl, [
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
                              "is-campaign": b.value === "full",
                              onHandleCloseModal:
                                s[26] || (s[26] = (l) => (c.value = !c.value)),
                              onHandleUpdatePicture: H,
                            },
                            null,
                            8,
                            ["is-campaign"]
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
  gl = ee(pl, [["__scopeId", "data-v-c895e3ad"]]);
export { gl as C };

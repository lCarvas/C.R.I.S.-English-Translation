import {
  d as B,
  r,
  o,
  c as l,
  a as t,
  k as P,
  A as g,
  K as _,
  C as f,
  p as U,
  b as w,
  E as L,
  _ as R,
} from "./index-sE6ml22p.js";
import {
  g as $,
  f as v,
  r as S,
  u as V,
  a as E,
} from "./index.esm2017-YDfvp0os.js";
import { L as M } from "./LoadingView-ZyngFh7H.js";
import { v as j } from "./v4-cyCr5FZV.js";
const h = (i) => (U("data-v-4078832a"), (i = i()), w(), i),
  F = { class: "modal-content modal-width" },
  N = { class: "modal-header" },
  x = h(() => t("h2", null, " Image ", -1)),
  A = h(() =>
    t("img", { class: "close-icon", src: L, alt: "fechar" }, null, -1)
  ),
  D = [A],
  K = { class: "modal-body" },
  O = { key: 0, class: "loading-container" },
  T = { key: 1 },
  q = { key: 0 },
  z = { class: "preview-img-container" },
  G = { class: "buttons-container" },
  H = { key: 1, class: "select-button-container" },
  J = B({
    __name: "PictureModal",
    props: { isCampaign: { type: Boolean } },
    emits: ["handleCloseModal", "handleUpdatePicture"],
    setup(i, { emit: k }) {
      const C = k,
        y = $(),
        s = r(),
        d = r(),
        n = r(),
        p = r(!1),
        u = (a) => {
          const e = a.target.files;
          e && e[0] && (s.value = URL.createObjectURL(e[0]));
        },
        m = ({ canvas: a }) => {
          a.toBlob((e) => (d.value = e));
        },
        b = (a, e) => {
          (s.value = null),
            (d.value = null),
            (n.value = null),
            (p.value = !1),
            C("handleUpdatePicture", a, e);
        },
        I = () => {
          p.value = !0;
          const a = S(y, `images/${j()}`);
          V(a, d.value).then(async (e) => {
            const c = await E(e.ref);
            b(c, e.metadata.fullPath);
          });
        };
      return (a, e) => (
        o(),
        l("div", F, [
          t("div", N, [
            x,
            t(
              "button",
              { onClick: e[0] || (e[0] = (c) => a.$emit("handleCloseModal")) },
              D
            ),
          ]),
          t("div", K, [
            p.value
              ? (o(), l("div", O, [P(M)]))
              : (o(),
                l("div", T, [
                  s.value
                    ? (o(),
                      l("div", q, [
                        t("div", z, [
                          a.isCampaign
                            ? (o(),
                              g(
                                _(v),
                                {
                                  key: 1,
                                  class: "cropper cropper-img",
                                  src: s.value,
                                  onChange: m,
                                },
                                null,
                                8,
                                ["src"]
                              ))
                            : (o(),
                              g(
                                _(v),
                                {
                                  key: 0,
                                  class: "cropper cropper-img",
                                  src: s.value,
                                  "stencil-props": { aspectRatio: 1 / 1 },
                                  onChange: m,
                                },
                                null,
                                8,
                                ["src"]
                              )),
                        ]),
                        t("div", G, [
                          t(
                            "button",
                            {
                              class: "button-naked",
                              onClick: e[1] || (e[1] = (c) => n.value.click()),
                            },
                            [
                              f(" Choose different image "),
                              t(
                                "input",
                                {
                                  ref_key: "imgFileInput",
                                  ref: n,
                                  type: "file",
                                  class: "input-file",
                                  accept: "image/png, image/jpeg",
                                  onChange: u,
                                },
                                null,
                                544
                              ),
                            ]
                          ),
                          t(
                            "button",
                            {
                              class: "button-primary confirm-button",
                              onClick: I,
                            },
                            " Confirm "
                          ),
                        ]),
                      ]))
                    : (o(),
                      l("div", H, [
                        t(
                          "button",
                          {
                            class: "button-primary",
                            onClick: e[2] || (e[2] = (c) => n.value.click()),
                          },
                          [
                            f(" Select Image "),
                            t(
                              "input",
                              {
                                ref_key: "imgFileInput",
                                ref: n,
                                type: "file",
                                class: "input-file",
                                accept: "image/png, image/jpeg",
                                onChange: u,
                              },
                              null,
                              544
                            ),
                          ]
                        ),
                      ])),
                ])),
          ]),
        ])
      );
    },
  }),
  Z = R(J, [["__scopeId", "data-v-4078832a"]]);
export { Z as P };

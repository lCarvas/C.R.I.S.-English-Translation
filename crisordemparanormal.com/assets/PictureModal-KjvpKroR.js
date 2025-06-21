import {
  d as S,
  r,
  o,
  c as i,
  a,
  k as L,
  v as u,
  L as g,
  m as P,
  H as _,
  p as R,
  b as U,
  J as F,
  _ as V,
} from "./index-t0mq17pV.js";
import { g as $, f, r as M, u as N, a as j } from "./index.esm2017-LS-LQ1N8.js";
import { L as E } from "./LoadingView-_iqLshHh.js";
import { i as W } from "./browser-image-compression-9kymdGFS.js";
import { v as H } from "./v4-cyCr5FZV.js";
const y = (l) => (R("data-v-78210b75"), (l = l()), U(), l),
  O = { class: "modal-content modal-width" },
  T = { class: "modal-header" },
  x = y(() => a("h2", null, " Image ", -1)),
  z = y(() =>
    a("img", { class: "close-icon", src: F, alt: "fechar" }, null, -1)
  ),
  D = [z],
  J = { class: "modal-body" },
  q = { key: 0, class: "loading-container" },
  A = { key: 1 },
  G = { key: 0 },
  K = { class: "preview-img-container" },
  Q = { class: "buttons-container" },
  X = { key: 1, class: "select-button-container" },
  Y = S({
    __name: "PictureModal",
    props: { isCampaign: { type: Boolean }, isFreeStyle: { type: Boolean } },
    emits: ["handleCloseModal", "handleUpdatePicture"],
    setup(l, { emit: k }) {
      const C = k,
        b = $(),
        s = r(),
        p = r(),
        n = r(),
        d = r(!1),
        v = (t) => {
          const e = t.target.files;
          e && e[0] && (s.value = URL.createObjectURL(e[0]));
        },
        m = ({ canvas: t }) => {
          t.toBlob((e) => (p.value = e));
        },
        I = (t, e) => {
          (s.value = null),
            (p.value = null),
            (n.value = null),
            (d.value = !1),
            C("handleUpdatePicture", t, e);
        },
        B = async () => {
          d.value = !0;
          const t = {
              maxSizeMB: 0.6,
              maxWidthOrHeight: 1920,
              useWebWorker: !0,
              fileType: "image/webp",
            },
            e = await W(p.value, t),
            c = M(b, `images/${H()}`);
          N(c, e).then(async (h) => {
            const w = await j(h.ref);
            I(w, h.metadata.fullPath);
          });
        };
      return (t, e) => (
        o(),
        i("div", O, [
          a("div", T, [
            x,
            a(
              "button",
              { onClick: e[0] || (e[0] = (c) => t.$emit("handleCloseModal")) },
              D
            ),
          ]),
          a("div", J, [
            d.value
              ? (o(), i("div", q, [L(E)]))
              : (o(),
                i("div", A, [
                  s.value
                    ? (o(),
                      i("div", G, [
                        a("div", K, [
                          t.isCampaign
                            ? (o(),
                              u(
                                g(f),
                                {
                                  key: 0,
                                  class: "cropper cropper-img",
                                  src: s.value,
                                  "stencil-props": { aspectRatio: 16 / 9 },
                                  onChange: m,
                                },
                                null,
                                8,
                                ["src"]
                              ))
                            : !t.isCampaign && !t.isFreeStyle
                            ? (o(),
                              u(
                                g(f),
                                {
                                  key: 1,
                                  class: "cropper cropper-img",
                                  src: s.value,
                                  "stencil-props": { aspectRatio: 1 / 1 },
                                  onChange: m,
                                },
                                null,
                                8,
                                ["src"]
                              ))
                            : t.isFreeStyle
                            ? (o(),
                              u(
                                g(f),
                                {
                                  key: 2,
                                  class: "cropper cropper-img",
                                  src: s.value,
                                  onChange: m,
                                },
                                null,
                                8,
                                ["src"]
                              ))
                            : P("", !0),
                        ]),
                        a("div", Q, [
                          a(
                            "button",
                            {
                              class: "button-naked",
                              onClick: e[1] || (e[1] = (c) => n.value.click()),
                            },
                            [
                              _(" Choose a different image "),
                              a(
                                "input",
                                {
                                  ref_key: "imgFileInput",
                                  ref: n,
                                  type: "file",
                                  class: "input-file",
                                  accept: "image/png, image/jpeg",
                                  onChange: v,
                                },
                                null,
                                544
                              ),
                            ]
                          ),
                          a(
                            "button",
                            {
                              class: "button-primary confirm-button",
                              onClick: B,
                            },
                            " Confirm "
                          ),
                        ]),
                      ]))
                    : (o(),
                      i("div", X, [
                        a(
                          "button",
                          {
                            class: "button-primary",
                            onClick: e[2] || (e[2] = (c) => n.value.click()),
                          },
                          [
                            _(" Select Image "),
                            a(
                              "input",
                              {
                                ref_key: "imgFileInput",
                                ref: n,
                                type: "file",
                                class: "input-file",
                                accept: "image/png, image/jpeg",
                                onChange: v,
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
  se = V(Y, [["__scopeId", "data-v-78210b75"]]);
export { se as P };

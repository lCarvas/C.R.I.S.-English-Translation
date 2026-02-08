import {
  d as m,
  M as C,
  o as e,
  c as s,
  a as r,
  a2 as i,
  m as t,
  H as c,
  N as p,
  a9 as g,
  P as k,
  p as v,
  b as f,
  _ as b,
} from "./index-fqOV2Os2.js";
const w = "/assets/op-book-button-Aw__Nrhd.webp",
  h = "/assets/toca-dos-monstros-button-WfZBUjmy.webp",
  S = "/assets/culto-da-criacao-button-62eZitok.webp",
  y = "/assets/arquivos-confidenciais-button-MsJ9zxzp.webp",
  $ = "/assets/marcas-fragmentadas-button-rujR1ifA.webp",
  q = "/assets/grimorio-paranormal-button-kaegaRcS.webp",
  P = "/assets/comunidade-button-5JJ0-ILt.webp",
  M = (l) => (v("data-v-28acdee1"), (l = l()), f(), l),
  D = { class: "sources-container" },
  B = { class: "buttons-container" },
  V = { key: 0, class: "text-container" },
  j = M(() =>
    r(
      "a",
      {
        class: "source-link",
        href: "https://jamboeditora.com.br/produto/ordem-paranormal-rpg",
        target: "_blank",
      },
      " here ",
      -1
    )
  ),
  F = { key: 1, class: "text-container" },
  A = { key: 2, class: "text-container" },
  N = { key: 3, class: "text-container" },
  _ = { key: 4, class: "text-container" },
  T = { key: 5, class: "text-container" },
  G = { key: 6, class: "text-container" },
  I = m({
    __name: "SourcesNavigation",
    props: {
      currentSource: {},
      showTocaDosMonstros: { type: Boolean },
      showCultoDaCriacao: { type: Boolean },
      showArquivosConfidenciais: { type: Boolean },
      showMarcasFragmentadas: { type: Boolean },
      showGrimorioParanormal: { type: Boolean },
      showComunidade: { type: Boolean },
    },
    emits: ["handleChangeCurrentSource"],
    setup(l) {
      const d = C(),
        u = (o) => {
          o !== null && p(k(d, "ads", o), { clicks: g(1) });
        };
      return (o, a) => (
        e(),
        s("div", D, [
          r("div", B, [
            r(
              "div",
              {
                class: "source-button",
                onClick:
                  a[0] ||
                  (a[0] = (n) =>
                    o.$emit("handleChangeCurrentSource", "ordemParanormal")),
              },
              [
                r(
                  "img",
                  {
                    class: i([
                      "source-img",
                      {
                        "current-source": o.currentSource === "ordemParanormal",
                      },
                    ]),
                    src: w,
                    alt: "Ordem Paranormal",
                  },
                  null,
                  2
                ),
              ]
            ),
            o.showTocaDosMonstros
              ? (e(),
                s(
                  "div",
                  {
                    key: 0,
                    class: "source-button",
                    onClick:
                      a[1] ||
                      (a[1] = (n) =>
                        o.$emit(
                          "handleChangeCurrentSource",
                          "tocaDosMonstros"
                        )),
                  },
                  [
                    r(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source":
                              o.currentSource === "tocaDosMonstros",
                          },
                        ]),
                        src: h,
                        alt: "Toca dos Monstros",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
            o.showCultoDaCriacao
              ? (e(),
                s(
                  "div",
                  {
                    key: 1,
                    class: "source-button",
                    onClick:
                      a[2] ||
                      (a[2] = (n) =>
                        o.$emit("handleChangeCurrentSource", "cultoDaCriacao")),
                  },
                  [
                    r(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source":
                              o.currentSource === "cultoDaCriacao",
                          },
                        ]),
                        src: S,
                        alt: "Culto da Criação",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
            o.showArquivosConfidenciais
              ? (e(),
                s(
                  "div",
                  {
                    key: 2,
                    class: "source-button",
                    onClick:
                      a[3] ||
                      (a[3] = (n) =>
                        o.$emit(
                          "handleChangeCurrentSource",
                          "arquivosConfidenciais"
                        )),
                  },
                  [
                    r(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source":
                              o.currentSource === "arquivosConfidenciais",
                          },
                        ]),
                        src: y,
                        alt: "Arquivos Confidenciais",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
            o.showMarcasFragmentadas
              ? (e(),
                s(
                  "div",
                  {
                    key: 3,
                    class: "source-button",
                    onClick:
                      a[4] ||
                      (a[4] = (n) =>
                        o.$emit(
                          "handleChangeCurrentSource",
                          "marcasFragmentadas"
                        )),
                  },
                  [
                    r(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source":
                              o.currentSource === "marcasFragmentadas",
                          },
                        ]),
                        src: $,
                        alt: "Marcas Fragmentadas",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
            o.showGrimorioParanormal
              ? (e(),
                s(
                  "div",
                  {
                    key: 4,
                    class: "source-button",
                    onClick:
                      a[5] ||
                      (a[5] = (n) =>
                        o.$emit(
                          "handleChangeCurrentSource",
                          "grimorioParanormal"
                        )),
                  },
                  [
                    r(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source":
                              o.currentSource === "grimorioParanormal",
                          },
                        ]),
                        src: q,
                        alt: "Grimório Paranormal",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
            o.showComunidade
              ? (e(),
                s(
                  "div",
                  {
                    key: 5,
                    class: "source-button",
                    onClick:
                      a[6] ||
                      (a[6] = (n) =>
                        o.$emit("handleChangeCurrentSource", "comunidade")),
                  },
                  [
                    r(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source": o.currentSource === "comunidade",
                          },
                        ]),
                        src: P,
                        alt: "Comunidade",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
          ]),
          o.currentSource === "ordemParanormal"
            ? (e(),
              s("div", V, [
                c(" Official Paranormal Order content. See more"),
                j,
              ]))
            : t("", !0),
          o.currentSource === "tocaDosMonstros"
            ? (e(),
              s("div", F, [
                c(" Official Toca dos Monstros content. See more "),
                r(
                  "a",
                  {
                    class: "source-link",
                    href: "https://www.catarse.me/tocadosmonstros?ref=cris",
                    target: "_blank",
                    onClick: a[7] || (a[7] = (n) => u("tocaDosMonstros")),
                  },
                  " here "
                ),
              ]))
            : t("", !0),
          o.currentSource === "cultoDaCriacao"
            ? (e(),
              s("div", A, [
                c(" Official Culto da Criação content . See more "),
                r(
                  "a",
                  {
                    class: "source-link",
                    href: "https://linktr.ee/cultodacriacao",
                    target: "_blank",
                    onClick: a[8] || (a[8] = (n) => u("cultoDaCriacao")),
                  },
                  " here "
                ),
              ]))
            : t("", !0),
          o.currentSource === "arquivosConfidenciais"
            ? (e(),
              s("div", N, [
                c(" Official Arquivos Confidênciais content. See more "),
                r(
                  "a",
                  {
                    class: "source-link",
                    href: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
                    target: "_blank",
                    onClick: a[9] || (a[9] = (n) => u("arquivosConfidenciais")),
                  },
                  " here "
                ),
              ]))
            : t("", !0),
          o.currentSource === "marcasFragmentadas"
            ? (e(),
              s("div", _, [
                c(" Official Marcas Fragmentadas content. See more "),
                r(
                  "a",
                  {
                    class: "source-link",
                    href: "https://discord.gg/wqDXFT9tGJ",
                    target: "_blank",
                    onClick: a[10] || (a[10] = (n) => u("marcasFragmentadas")),
                  },
                  " here "
                ),
              ]))
            : t("", !0),
          o.currentSource === "grimorioParanormal"
            ? (e(),
              s("div", T, [
                c(" Official Grimório Paranormal content. See more "),
                r(
                  "a",
                  {
                    class: "source-link",
                    href: "https://www.catarse.me/grimorio_paranormal_3f34?ref=cris",
                    target: "_blank",
                    onClick: a[11] || (a[11] = (n) => u("grimorioParanormal")),
                  },
                  " here "
                ),
              ]))
            : t("", !0),
          o.currentSource === "comunidade"
            ? (e(),
              s("div", G, " Content made by the Paranormal Order community. "))
            : t("", !0),
        ])
      );
    },
  }),
  z = b(I, [["__scopeId", "data-v-28acdee1"]]);
export { z as S };

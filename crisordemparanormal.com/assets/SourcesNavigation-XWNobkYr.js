import {
  d as m,
  M as C,
  o as a,
  c as r,
  a as s,
  a1 as i,
  m as t,
  H as c,
  N as p,
  ao as g,
  P as v,
  p as k,
  b,
  _ as f,
} from "./index-4XNPBkfT.js";
const h = "/assets/op-book-button-Aw__Nrhd.webp",
  w = "/assets/toca-dos-monstros-button-WfZBUjmy.webp",
  S = "/assets/culto-da-criacao-button-62eZitok.webp",
  y = "/assets/arquivos-confidenciais-button-MsJ9zxzp.webp",
  q = "/assets/marcas-fragmentadas-button-rujR1ifA.webp",
  $ = "/assets/comunidade-button-5JJ0-ILt.webp",
  M = (u) => (k("data-v-9ddb3b33"), (u = u()), b(), u),
  D = { class: "sources-container" },
  B = { class: "buttons-container" },
  F = { key: 0, class: "text-container" },
  V = M(() =>
    s(
      "a",
      {
        class: "source-link",
        href: "https://jamboeditora.com.br/produto/ordem-paranormal-rpg",
        target: "_blank",
      },
      " aqui ",
      -1
    )
  ),
  j = { key: 1, class: "text-container" },
  P = { key: 2, class: "text-container" },
  _ = { key: 3, class: "text-container" },
  A = { key: 4, class: "text-container" },
  N = { key: 5, class: "text-container" },
  T = m({
    __name: "SourcesNavigation",
    props: {
      currentSource: {},
      showTocaDosMonstros: { type: Boolean },
      showCultoDaCriacao: { type: Boolean },
      showArquivosConfidenciais: { type: Boolean },
      showMarcasFragmentadas: { type: Boolean },
      showComunidade: { type: Boolean },
    },
    emits: ["handleChangeCurrentSource"],
    setup(u) {
      const l = C(),
        d = (o) => {
          o !== null && p(v(l, "ads", o), { clicks: g(1) });
        };
      return (o, e) => (
        a(),
        r("div", D, [
          s("div", B, [
            s(
              "div",
              {
                class: "source-button",
                onClick:
                  e[0] ||
                  (e[0] = (n) =>
                    o.$emit("handleChangeCurrentSource", "ordemParanormal")),
              },
              [
                s(
                  "img",
                  {
                    class: i([
                      "source-img",
                      {
                        "current-source": o.currentSource === "ordemParanormal",
                      },
                    ]),
                    src: h,
                    alt: "Ordem Paranormal",
                  },
                  null,
                  2
                ),
              ]
            ),
            o.showTocaDosMonstros
              ? (a(),
                r(
                  "div",
                  {
                    key: 0,
                    class: "source-button",
                    onClick:
                      e[1] ||
                      (e[1] = (n) =>
                        o.$emit(
                          "handleChangeCurrentSource",
                          "tocaDosMonstros"
                        )),
                  },
                  [
                    s(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source":
                              o.currentSource === "tocaDosMonstros",
                          },
                        ]),
                        src: w,
                        alt: "Toca dos Monstros",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
            o.showCultoDaCriacao
              ? (a(),
                r(
                  "div",
                  {
                    key: 1,
                    class: "source-button",
                    onClick:
                      e[2] ||
                      (e[2] = (n) =>
                        o.$emit("handleChangeCurrentSource", "cultoDaCriacao")),
                  },
                  [
                    s(
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
              ? (a(),
                r(
                  "div",
                  {
                    key: 2,
                    class: "source-button",
                    onClick:
                      e[3] ||
                      (e[3] = (n) =>
                        o.$emit(
                          "handleChangeCurrentSource",
                          "arquivosConfidenciais"
                        )),
                  },
                  [
                    s(
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
              ? (a(),
                r(
                  "div",
                  {
                    key: 3,
                    class: "source-button",
                    onClick:
                      e[4] ||
                      (e[4] = (n) =>
                        o.$emit(
                          "handleChangeCurrentSource",
                          "marcasFragmentadas"
                        )),
                  },
                  [
                    s(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source":
                              o.currentSource === "marcasFragmentadas",
                          },
                        ]),
                        src: q,
                        alt: "Marcas Fragmentadas",
                      },
                      null,
                      2
                    ),
                  ]
                ))
              : t("", !0),
            o.showComunidade
              ? (a(),
                r(
                  "div",
                  {
                    key: 4,
                    class: "source-button",
                    onClick:
                      e[5] ||
                      (e[5] = (n) =>
                        o.$emit("handleChangeCurrentSource", "comunidade")),
                  },
                  [
                    s(
                      "img",
                      {
                        class: i([
                          "source-img",
                          {
                            "current-source": o.currentSource === "comunidade",
                          },
                        ]),
                        src: $,
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
            ? (a(),
              r("div", F, [
                c(" Official Ordem Paranormal Content. See More "),
                V,
              ]))
            : t("", !0),
          o.currentSource === "tocaDosMonstros"
            ? (a(),
              r("div", j, [
                c(" Official Toca dos Monstros Content. See More "),
                s(
                  "a",
                  {
                    class: "source-link",
                    href: "https://www.catarse.me/tocadosmonstros?ref=cris",
                    target: "_blank",
                    onClick: e[6] || (e[6] = (n) => d("tocaDosMonstros")),
                  },
                  " aqui "
                ),
              ]))
            : t("", !0),
          o.currentSource === "cultoDaCriacao"
            ? (a(),
              r("div", P, [
                c(" Official Culto da Criação Content. See More "),
                s(
                  "a",
                  {
                    class: "source-link",
                    href: "https://x.com/CultoDaCriacao",
                    target: "_blank",
                    onClick: e[7] || (e[7] = (n) => d("cultoDaCriacao")),
                  },
                  " aqui "
                ),
              ]))
            : t("", !0),
          o.currentSource === "arquivosConfidenciais"
            ? (a(),
              r("div", _, [
                c(" Official Arquivos Confidênciais Content. See More "),
                s(
                  "a",
                  {
                    class: "source-link",
                    href: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
                    target: "_blank",
                    onClick: e[8] || (e[8] = (n) => d("arquivosConfidenciais")),
                  },
                  " aqui "
                ),
              ]))
            : t("", !0),
          o.currentSource === "marcasFragmentadas"
            ? (a(),
              r("div", A, [
                c(" Official Marcas Fragmentadas Content. See More "),
                s(
                  "a",
                  {
                    class: "source-link",
                    href: "https://discord.gg/wqDXFT9tGJ",
                    target: "_blank",
                    onClick: e[9] || (e[9] = (n) => d("marcasFragmentadas")),
                  },
                  " aqui "
                ),
              ]))
            : t("", !0),
          o.currentSource === "comunidade"
            ? (a(),
              r(
                "div",
                N,
                " Community made content for Ordem Paranormal. "
              ))
            : t("", !0),
        ])
      );
    },
  }),
  J = f(T, [["__scopeId", "data-v-9ddb3b33"]]);
export { J as S };
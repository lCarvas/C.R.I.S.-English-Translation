import {
  d as v,
  o as s,
  c as i,
  a,
  t as o,
  k as n,
  I as p,
  m as d,
  p as q,
  b as _,
  _ as h,
  n as b,
  q as g,
  C,
  r as k,
  J as P,
  j as S,
  v as E,
  T as V,
} from "./index-ElewQora.js";
import { P as I } from "./PowerCard-oUvxzsKl.js";
import { _ as A } from "./show-more-icon-VvUXKiHG.js";
const Xa = [
    {
      name: "Academic",
      description:
        "<p>Você era um pesquisador ou professor universitário. De forma proposital ou não, seus estudos tocaram em assuntos misteriosos e chamaram a atenção da Ordo Realitas.</p>",
      skills: ["Sciences", "Investigation"],
      power: {
        name: "Saber é Poder",
        description:
          "Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.",
      },
    },
    {
      name: "Health Agent",
      description:
        "<p>Você era um profissional da saúde como um enfermeiro, farmacêutico, médico, psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo cuidado de um agente da Ordem em uma emergência, que ficou surpreso com o quão bem você lidou com a situação.</p>",
      skills: ["Intuition", "Medicine"],
      power: {
        name: "Técnica Medicinal",
        description:
          "Sempre que cura um personagem, você adiciona seu Intelecto no total de PV curados.",
      },
    },
    {
      name: "Amnesic",
      description:
        "<p>Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez você tenha sido um cultista? Seja como for, hoje a Ordem é a única família que conhece. Quem sabe, cumprindo missões, você descubra algo sobre seu passado.</p>",
      skills: [],
      power: {
        name: "Vislumbres do Passado",
        description:
          "Uma vez por sessão, você pode fazer um teste de Intelecto (DT 10) para reconhecer pessoas ou lugares familiares, que tenha encontrado antes de perder a memória. Se passar, recebe 1d4 PE temporários e, a critério do mestre, uma informação útil.",
      },
    },
    {
      name: "Artist",
      description:
        "<p>Você era um ator, músico, escritor, dançarino, influenciador... Seu trabalho pode ter sido inspirado por uma experiência paranormal do passado e o que o público acha que é pura criatividade, a Ordem sabe que tem um lado mais sombrio.</p>",
      skills: ["Arts", "Deception"],
      power: {
        name: "Magnum Opus",
        description:
          "Você é famoso por uma de suas obras. Uma vez por missão, pode determinar que um personagem envolvido em uma cena de interação o reconheça. Você recebe +5 em testes de Presença e de perícias baseadas em Presença contra aquele personagem. A critério do mestre, pode receber esses bônus em outras situações nas quais seria reconhecido.",
      },
    },
    {
      name: "Atlhete",
      description:
        "<p>Você competia em um esporte individual ou por equipe, como natação ou futebol. Seu alto desempenho pode ser fruto de alguma influência paranormal que nem mesmo você conhecia ou você pode ter se envolvido em algum evento paranormal em uma de suas competições.</p>",
      skills: ["Acrobatics", "Athletics"],
      power: {
        name: "110%",
        description:
          "Quando faz um teste de perícia usando Força ou Agilidade (exceto Luta e Pontaria) você pode gastar 2 PE para receber +5 nesse teste.",
      },
    },
    {
      name: "Chef",
      description:
        "<p>Você é um cozinheiro amador ou profissional. Talvez trabalhasse em um restaurante, talvez simplesmente gostasse de cozinhar para a família e amigos. Como sua comida fez com que você se envolvesse com o paranormal? Ninguém sabe. Mas os outros agentes adoram quando você vai para a missão!</p>",
      skills: ["Fortitude", "Occupation (cook)"],
      power: {
        name: "Ingrediente Secreto",
        description:
          "Em cenas de interlúdio, você pode fazer a ação alimentar-se para cozinhar um prato especial. Você, e todos os membros do grupo que fizeram a ação alimentar-se, recebem o benefício de dois pratos (caso o mesmo benefício seja escolhido duas vezes, seus efeitos se acumulam).",
      },
    },
    {
      name: "Forensic Scientist",
      description:
        "<p>Você trabalhava coletando provas para a resolução de crimes, seja para a polícia, seja para uma empresa privada de investigação. Usava métodos e técnicas adquiridos através de uma graduação em uma área científica ou médica, além de cursos específicos. Recrutado para a Ordem por seus conhecimentos técnicos, seu trabalho não mudou muito - mas o tipo de que você investiga, sim.</p>",
      skills: ["Sciences", "Investigation"],
      power: {
        name: "Investigação Científica",
        description:
          "Uma vez por cena de investigação, você pode gastar uma ação livre para procurar pistas, usando Ciências no lugar da perícia que seria usada para tentar encontrar a pista em questão.",
      },
    },
    {
      name: "Criminal",
      description:
        "<p>Você vivia uma vida fora da lei, seja como mero batedor de carteiras, seja como membro de uma facção criminosa. Em algum momento, você se envolveu em um assunto da Ordem — talvez tenha roubado um item amaldiçoado? A organização, por sua vez, achou melhor recrutar seus talentos do que ter você como um estorvo.</p>",
      skills: ["Crime", "Stealth"],
      power: {
        name: "O Crime Compensa",
        description:
          "No final de uma missão, escolha um item encontrado na missão. Em sua próxima missão, você pode incluir esse item em seu inventário sem que ele conte em seu limite de itens por patente.",
      },
    },
    {
      name: "Repentant Cultist",
      description:
        "<p>Você fez parte de um culto paranormal. Talvez fossem ignorantes iludidos, que acreditavam estar contatando entidades benevolentes. Talvez soubessem exatamente o que estavam fazendo. Seja como for, algo abriu seus olhos e agora você luta pelo lado certo — embora carregue para sempre traços de sua vida pregressa. Outros membros da Ordem podem desconfiar de sua conversão e você sabe que precisará se esforçar para conquistar a confiança de todos.</p>",
      skills: ["Occultism", "Religion"],
      power: {
        name: "Traços do Outro Lado",
        description:
          "Você possui um poder paranormal à sua escolha. Porém, começa o jogo com metade da Sanidade normal para sua classe.",
      },
    },
    {
      name: "Stray",
      description:
        "<p>Você não vivia de acordo com as normas da sociedade. Podia ser um eremita, uma pessoa em situação de rua ou simplesmente alguém que descobriu o Paranormal e abandonou sua rotina — sabendo o quão frágil era a existência humana, não conseguia simplesmente continuar indo para o trabalho todo o dia. De qualquer forma, a vida sem os confortos modernos o deixou mais forte.</p>",
      skills: ["Fortitude", "Survival"],
      power: {
        name: "Calejado",
        description: "Você recebe +1 PV para cada 5% de NEX.",
      },
    },
    {
      name: "Engineer",
      description:
        "<p>Enquanto os acadêmicos estão preocupados com teorias, você colocar a mão na massa, seja como engenheiro profissional, seja como inventor de garagem. Provavelmente você criou algum dispositivo paranormal que chamou a atenção da Ordem.</p>",
      skills: ["Occupation", "Technology"],
      power: {
        name: "Ferramentas Favoritas",
        description:
          "Um item a sua escolha (exceto armas) conta como uma categoria abaixo (por exemplo, um item de categoria II conta como categoria I para você).",
      },
    },
    {
      name: "Writer",
      description:
        "<p>Você ganhava a vida inventando mundos, pessoas e histórias - em outra palavras, escrevendo ficção. Em certo momento, seu trabalho tocou ou foi tocado pelo paranormal Talvez as suas histórias tenham gerado Medo, talvez a inspiração para ela viesse do Outro Lado desde o início. Recrutado pela Ordem, você agora luta para que a vida real tenha o final feliz que seus livros não tiveram.</p>",
      skills: ["Arts", "Current Affairs"],
      power: {
        name: "Bagagem de Leitura",
        description:
          "Por seu trabalho, você já leu - e aprendeu - de tudo um pouco. Uma vez por cena, pode gastar 2 PE para se tornar treinado em uma perícia qualquer até o fim da cena.",
      },
    },
    {
      name: "Executive",
      description:
        "<p>Você possuía um trabalho de escritório em uma grande empresa, banco ou corporação. Era um administrador, advogado, contador ou de qualquer outra profissão que lida com papelada e burocracia. Sua vida era bastante normal, até que você descobriu algo que não devia. Talvez o sucesso da empresa residisse em um ritual? Talvez toda a corporação fosse fachada para um culto e o presidente, um líder cultista envolvido com entidades paranormais? Após essa descoberta, você foi recrutado pela Ordem e trocou seu trabalho de escritório por missões de campo — hoje, sua vida é tudo, menos normal.</p>",
      skills: ["Diplomacy", "Occupation"],
      power: {
        name: "Processo Otimizado",
        description:
          "Sempre que faz um teste de perícia durante um teste estendido, ou uma ação para revisar documentos (físicos ou digitais), pode pagar 2 PE para receber +5 nesse teste.",
      },
    },
    {
      name: "Investigator",
      description:
        "<p>Você era um investigador do governo, como um perito forense ou policial federal, ou privado, como um detetive particular. Pode ter tido contato com o Paranormal em algum caso ou ter sido recrutado pela Ordem por suas habilidades de resolução de mistérios.</p>",
      skills: ["Investigation", "Perception"],
      power: {
        name: "Faro para Pistas",
        description:
          "Uma vez por cena, quando fizer um teste para procurar pistas, você pode gastar 1 PE para receber +5 nesse teste.",
      },
    },
    {
      name: "Journalist",
      description:
        "<p>Uma espécie ameaçada de extinção, você atuava investigando notícias para um jornal, rede de televisão, blog, canal do YouTube... Você se juntou à Ordem porque descobriu algo relacionado ao paranormal, ou foi recrutado para investigar um caso específico. Seja como for, continua buscando a verdade - não mais para informar as pessoas, mas sim para protegê-las.</p>",
      skills: ["Current Affairs", "Investigation"],
      power: {
        name: "Fontes Confiáveis",
        description:
          "Uma vez por sessão de jogo, você pode gastar 1 PE para contatar suas fontes - pessoas com acesso a informações nas quais você confia. Isso permite que você role novamente um teste já realizado para encontrar uma pista, com +5 de bônus, ou receba outra informação relevante (a critério do mestre).",
      },
    },
    {
      name: "Fighter",
      description:
        "<p>Você pratica uma arte marcial ou esporte de luta, ou cresceu em um bairro perigoso onde aprendeu briga de rua. Já quebrou muitos ossos, tanto seus quanto dos outros. Pode ter conhecido a Ordem após um torneio secreto envolvendo entidades do Outro Lado ou ter sido recrutado pela sua capacidade de luta.</p>",
      skills: ["Melee", "Reflexes"],
      power: {
        name: "Mão Pesada",
        description:
          "Você recebe +2 em rolagens de dano com ataques corpo a corpo.",
      },
    },
    {
      name: "Magnate",
      description:
        "<p>Você possui muito dinheiro ou patrimônio. Pode ser o herdeiro de uma família antiga ligada ao oculto, ter criado e vendido uma empresa e decidido usar sua riqueza para uma causa maior, ou ter ganho uma loteria após inadvertidamente escolher números amaldiçoados que formavam um ritual.</p>",
      skills: ["Diplomacy", "Piloting"],
      power: {
        name: "Patrocinador da Ordem",
        description:
          "Seu limite de crédito é sempre considerado um acima do atual.",
      },
    },
    {
      name: "Mercenary",
      description:
        "<p>Você é um soldado de aluguel, que trabalha sozinho ou como parte de alguma organização que vende serviços militares. Escoltas e assassinatos fizeram parte de sua rotina por tempo o suficiente para você se envolver em alguma situação com o Paranormal.</p>",
      skills: ["Iniciative", "Intimidation"],
      power: {
        name: "Posição de Combate",
        description:
          "No primeiro turno de cada cena de ação, você pode gastar 2 PE para receber uma ação de movimento adicional.",
      },
    },
    {
      name: "Militar",
      description:
        "<p>Você serviu em uma força militar, como o exército ou a marinha. Passou muito tempo treinando com armas de fogo, até se tornar um perito no uso delas. Acostumado a obedecer ordens e partir em missões, está em casa na Ordo Realitas. O inimigo é diferente, mas um tiro bem dado continua resolvendo o problema.</p>",
      skills: ["Marksmanship", "Tactics"],
      power: {
        name: "Para Bellum",
        description: "Você recebe +2 em rolagens de dano com armas de fogo.",
      },
    },
    {
      name: "Blue-collar Worker",
      description:
        "<p>Pedreiro, industriário, operador de máquinas em uma fábrica… Você passou uma parte de sua vida em um emprego braçal, desempenhando atividades práticas que lhe deram uma visão pragmática do mundo. Sua rotina mundana, entretanto, foi confrontada de alguma forma pelo paranormal, e você não consegue mais esquecer tudo que viu sobre os mistérios do mundo.</p>",
      skills: ["Fortitude", "Occupation"],
      power: {
        name: "Ferramenta de Trabalho",
        description:
          "Escolha uma arma simples ou tática que, a critério do mestre, poderia ser usada como ferramenta em sua profissão (como uma marreta para um pedreiro). Você sabe usar a arma escolhida e recebe +1 em testes de ataque, rolagens de dano e margem de ameaça com ela.",
      },
    },
    {
      name: "Policeman",
      description:
        "<p>Você fez parte de uma força de segurança pública, civil ou militar. Em alguma patrulha ou chamado se deparou com um caso paranormal e sobreviveu para contar a história.</p>",
      skills: ["Perception", "Marksmanship"],
      power: { name: "Patrulha", description: "Você recebe +2 em Defesa." },
    },
    {
      name: "Professor",
      description:
        "<p>Você leciona em uma escola ou universidade, ensinando ciências, artes ou outro campo do saber. Sua profissão é uma das mais nobres de todas e o colocou em contato com muitas pessoas e conhecimentos. Em algum momento, o colocou em contato também com o paranormal. Agora, trabalhando na Ordem, seus alunos são criaturas do Outro Lado, e você planeja reprovar todos esse ano.</p>",
      skills: ["Sciences", "Intuition"],
      power: {
        name: "Aula de Campo",
        description:
          "Você sabe extrair o melhor das pessoas. Uma vez por cena, pode gastar uma ação padrão e 2 PE para fornecer +1 em um atributo de outro personagem em alcance curto até o fim da cena.",
      },
    },
    {
      name: "Religious",
      description:
        "<p>Você é devoto ou sacerdote de uma fé. Independentemente da religião que pratica, se dedica a auxiliar as pessoas com problemas espirituais. A partir disso, teve contato com o paranormal, o que fez com que fosse convocado pela Ordem.</p>",
      skills: ["Religion", "Will"],
      power: {
        name: "Acalentar",
        description:
          "Você recebe +5 em testes de Religião para acalmar. Além disso, quando acalma uma pessoa, ela recebe um número de pontos de Sanidade igual a 1d6 + a sua Presença.",
      },
    },
    {
      name: "Civil Servant",
      description:
        "<p>Você possuía carreira em um órgão do governo, lidando com burocracia e atendendo pessoas. Sua rotina foi quebrada quando você viu que o prefeito era um cultista ou que a câmara de vereadores se reunia à noite para realizar rituais. Quando os próprios representantes do povo estão dispostos a sacrificá-lo para entidades malignas, onde reside nossa esperança? Hoje, você sabe a resposta para essa pergunta: na Ordo Realitas.</p>",
      skills: ["Intuition", "Will"],
      power: {
        name: "Espírito Cívico",
        description:
          "Sempre que faz um teste para ajudar, você pode gastar 1 PE para aumentar o bônus concedido em +2.",
      },
    },
    {
      name: "Conspiracy Theorist",
      description:
        "<p>A humanidade nunca pisou na lua. Reptilianos ocupam importantes cargos públicos. A Terra é plana... E secretamente governada pelos Illuminati. Você sabe isso tudo, pois investigou a fundo esses importantes assuntos. Quando sua pesquisa esbarrou no Paranormal, você foi recrutado. Na Ordem, sua loucura determinação será usada para um bom propósito.</p>",
      skills: ["Investigation", "Occultism"],
      power: {
        name: "Eu Já Sabia",
        description:
          "Você não se abala com entidades ou anomalias. Afinal, sempre soube que isso tudo existia. Você recebe resistência a dano mental igual ao seu Intelecto.",
      },
    },
    {
      name: "I.T.",
      description:
        "<p>Programador, engenheiro de software ou simplesmente “o cara da T.I.”, você tem treinamento e experiência para lidar com sistemas informatizados. Seu talento (ou curiosidade exagerada) chamou a atenção da Ordem.</p>",
      skills: ["Investigation", "Technology"],
      power: {
        name: "Motor de Busca",
        description:
          "A critério do Mestre, sempre que tiver acesso a internet, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Tecnologia.",
      },
    },
    {
      name: "Rural Worker",
      description:
        "<p>Você trabalhava no campo ou em áreas isoladas, como fazendeiro, pescador, biólogo, veterinário... Você se acostumou com o convívio com a natureza e os animais e talvez tenha ouvido uma ou outra história de fantasmas ao redor da fogueira. Em algum momento da sua vida, porém, descobriu que muitas dessas histórias são verdadeiras.</p>",
      skills: ["Animal Handling", "Survival"],
      power: {
        name: "Desbravador",
        description:
          "Quando faz um teste de Adestramento ou Sobrevivência, você pode gastar 2 PE para receber +5 nesse teste. Além disso, você não sofre penalidade em deslocamento por terreno difícil.",
      },
    },
    {
      name: "Swindler",
      description:
        "<p>Uma vida digna exige muito trabalho, então é melhor nem tentar. Você vivia de pequenos golpes, jogatina ilegal e falcatruas. Certo dia, enganou a pessoa errada; no dia seguinte, se viu servindo à Ordem. Pelo menos agora tem a chance de usar sua lábia para o bem.</p>",
      skills: ["Crime", "Deception"],
      power: {
        name: "Impostor",
        description:
          "Uma vez por cena, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Enganação.",
      },
    },
    {
      name: "University Student",
      description:
        "<p>Você era aluno de uma faculdade. Em sua rotina de estudos, provas e festas, acabou descobrindo algo — talvez um livro amaldiçoado na antiga biblioteca do campus? Por seu achado, foi convocado pela Ordem. Agora, estuda com mais afinco: nesse novo curso, ouviu dizer que as provas podem ser mortais.</p>",
      skills: ["Current Affairs", "Investigation"],
      power: {
        name: "Dedicação",
        description:
          "Você recebe +1 PE, e mais 1 PE adicional a cada NEX ímpar (15%, 25%...). Além disso, seu limite de PE por turno aumenta em 1 (em NEX 5% seu limite é 2, em NEX 10% é 3 e assim por diante; isso não afeta a DT de seus efeitos).",
      },
    },
    {
      name: "Victim",
      description:
        "<p>Em algum momento de sua vida — infância, juventude ou início da vida adulta — você encontrou o Paranormal... E a experiência não foi nada boa. Você viu os espíritos dos mortos, foi atacado por uma entidade ou mesmo foi sequestrado para ser sacrificado em um ritual impedido no último momento. A experiência foi traumática, mas você não se abateu; em vez disso, decidiu lutar para impedir que outros inocentes passem pelo mesmo. E, já tendo sendo vítima do Paranormal, se tornou habilidoso em evitar perigos.</p>",
      skills: ["Reflexes", "Will"],
      power: {
        name: "Cicatrizes Psicológicas",
        description: "Você recebe +1 de Sanidade para cada 5% de NEX.",
      },
    },
  ],
  m = (e) => (q("data-v-86953969"), (e = e()), _(), e),
  z = { class: "features card-black" },
  w = m(() => a("h3", null, "CHARACTERISTICS", -1)),
  O = { class: "feat-card" },
  T = m(() => a("h4", null, "INITIAL HEALTH POINTS", -1)),
  $ = { class: "main" },
  y = { key: 0 },
  x = m(() => a("h6", null, "For each level of exposition", -1)),
  j = { class: "sub" },
  N = { class: "feat-card" },
  M = m(() => a("h4", null, "INITIAL EFFORT POINTS", -1)),
  L = { class: "main" },
  D = { key: 0 },
  R = m(() => a("h6", null, "For each level of exposition", -1)),
  F = { class: "sub" },
  U = { class: "feat-card" },
  H = m(() => a("h4", null, "INITIAL SANITY", -1)),
  X = { class: "main" },
  B = { key: 0 },
  Q = m(() => a("h6", null, "For each level of exposition", -1)),
  J = { class: "sub" },
  G = { class: "feat-card" },
  Y = m(() => a("h4", null, "TRAINED SKILLS", -1)),
  K = { key: 0 },
  W = { key: 1 },
  Z = { key: 2 },
  aa = { class: "feat-card" },
  ea = m(() => a("h4", null, "PROFICIENCIES", -1)),
  oa = v({
    __name: "ClassCardFeatures",
    props: {
      charClass: { type: Object, required: !0 },
      isMundano: { type: Boolean, default: !1 },
    },
    setup(e) {
      return (r, u) => (
        s(),
        i("div", z, [
          w,
          a("div", O, [
            a("div", null, [
              T,
              a("span", $, o(e.charClass.initialPv) + "+VIGOR", 1),
            ]),
            n(p, { "no-margin": "" }),
            e.isMundano
              ? d("", !0)
              : (s(),
                i("div", y, [
                  x,
                  a("span", j, o(e.charClass.levelPv) + " HP (+Vig)", 1),
                ])),
          ]),
          a("div", N, [
            a("div", null, [
              M,
              a("span", L, o(e.charClass.initialPe) + "+PRESENCE", 1),
            ]),
            n(p, { "no-margin": "" }),
            e.isMundano
              ? d("", !0)
              : (s(),
                i("div", D, [
                  R,
                  a("span", F, o(e.charClass.levelPe) + " EP (+Pre)", 1),
                ])),
          ]),
          a("div", U, [
            a("div", null, [H, a("span", X, o(e.charClass.initialSan), 1)]),
            n(p, { "no-margin": "" }),
            e.isMundano
              ? d("", !0)
              : (s(),
                i("div", B, [
                  Q,
                  a("span", J, o(e.charClass.levelSan) + " SAN", 1),
                ])),
          ]),
          a("div", G, [
            Y,
            n(p, { "no-margin": "" }),
            e.charClass.trainedSkills.optionSkils.length > 0
              ? (s(),
                i("div", K, [
                  a(
                    "h6",
                    null,
                    o(e.charClass.trainedSkills.optionSkils[0][0]) +
                      " ou " +
                      o(e.charClass.trainedSkills.optionSkils[0][1]) +
                      " (uma das duas) e " +
                      o(e.charClass.trainedSkills.optionSkils[1][0]) +
                      " ou " +
                      o(e.charClass.trainedSkills.optionSkils[1][1]) +
                      " (uma das duas), mais uma quantidade de perícias à sua escolha igual a " +
                      o(e.charClass.trainedSkills.quantity) +
                      " + Intelecto. ",
                    1
                  ),
                ]))
              : d("", !0),
            e.charClass.trainedSkills.skills.length === 0 &&
            e.charClass.trainedSkills.optionSkils.length === 0
              ? (s(),
                i("div", W, [
                  a(
                    "h6",
                    null,
                    " Uma quantidade de perícias à sua escolha igual a " +
                      o(e.charClass.trainedSkills.quantity) +
                      " + Intelecto. ",
                    1
                  ),
                ]))
              : d("", !0),
            e.charClass.trainedSkills.skills.length > 0
              ? (s(),
                i("div", Z, [
                  a(
                    "h6",
                    null,
                    o(e.charClass.trainedSkills.skills[0]) +
                      " e " +
                      o(e.charClass.trainedSkills.skills[1]) +
                      ", mais uma quantidade de perícias a sua escolha igual a " +
                      o(e.charClass.trainedSkills.quantity) +
                      " + Intelecto. ",
                    1
                  ),
                ]))
              : d("", !0),
          ]),
          a("div", aa, [
            ea,
            n(p, { "no-margin": "" }),
            a("h6", null, o(e.charClass.proficiencies) + ".", 1),
          ]),
        ])
      );
    },
  }),
  sa = h(oa, [["__scopeId", "data-v-86953969"]]),
  ia = (e) => (q("data-v-2a9e98a3"), (e = e()), _(), e),
  ra = { class: "table-content card-black" },
  ta = { class: "table" },
  na = ia(() =>
    a(
      "thead",
      null,
      [
        a("tr", null, [
          a("th", { class: "center" }, " NEX "),
          a("th", { class: "left" }, " Habilidades "),
        ]),
      ],
      -1
    )
  ),
  da = { class: "center" },
  ca = { class: "left" },
  ma = v({
    __name: "ClassCardTable",
    props: { charClass: { type: Object, required: !0 } },
    setup(e) {
      const r = [
        "5%",
        "10%",
        "15%",
        "20%",
        "25%",
        "30%",
        "35%",
        "40%",
        "45%",
        "50%",
        "55%",
        "60%",
        "65%",
        "70%",
        "75%",
        "80%",
        "85%",
        "90%",
        "95%",
        "99%",
      ];
      return (u, t) => (
        s(),
        i("div", ra, [
          a("table", ta, [
            na,
            a("tbody", null, [
              (s(),
              i(
                b,
                null,
                g(r, (c, f) =>
                  a("tr", { key: c }, [
                    a("td", da, o(c), 1),
                    a("td", ca, o(e.charClass.table[f]), 1),
                  ])
                ),
                64
              )),
            ]),
          ]),
        ])
      );
    },
  }),
  ua = h(ma, [["__scopeId", "data-v-2a9e98a3"]]),
  la = { class: "abilities card-black" },
  pa = { class: "abilitie" },
  va = { key: 0, class: "abilitie" },
  ha = { key: 1, class: "abilitie" },
  ba = { key: 2, class: "powers" },
  ga = v({
    __name: "ClassCardAbilities",
    props: {
      charClass: { type: Object, required: !0 },
      isMundano: { type: Boolean, default: !1 },
    },
    setup(e) {
      const r = e,
        u = {
          name: "Habilidade de Trilha",
          description: `Em NEX 10% você escolhe uma das trilhas de ${r.charClass.name.toLocaleLowerCase()} e recebe o primeiro poder da trilha escolhida. Você recebe um novo poder da trilha escolhida em NEX 40%, 65% e 99%.`,
        },
        t = {
          name: "Poder de",
          description: `Em NEX 15%, você recebe um poder de ${r.charClass.name.toLocaleLowerCase()} à sua escolha. Você recebe um novo poder de ${r.charClass.name.toLocaleLowerCase()} em NEX 30% e a cada 15 pontos de NEX subsequentes, conforme indicado na tabela. Veja a lista de poderes a seguir.`,
        };
      return (c, f) => (
        s(),
        i("div", la, [
          a(
            "h3",
            null,
            "HABILIDADES DE " + o(e.charClass.name.toUpperCase()),
            1
          ),
          (s(!0),
          i(
            b,
            null,
            g(
              e.charClass.abilities,
              (l) => (
                s(),
                i("div", { key: l.name }, [
                  a("div", pa, [
                    a("p", null, [
                      a("span", null, o(l.name) + ". ", 1),
                      C(o(l.description), 1),
                    ]),
                  ]),
                ])
              )
            ),
            128
          )),
          e.isMundano
            ? d("", !0)
            : (s(),
              i("div", va, [
                a("p", null, [
                  a("span", null, o(u.name) + ". ", 1),
                  C(o(u.description), 1),
                ]),
              ])),
          e.isMundano
            ? d("", !0)
            : (s(),
              i("div", ha, [
                a("p", null, [
                  a(
                    "span",
                    null,
                    o(t.name) + " " + o(e.charClass.name) + ". ",
                    1
                  ),
                  C(o(t.description), 1),
                ]),
              ])),
          e.isMundano
            ? d("", !0)
            : (s(),
              i("div", ba, [
                (s(!0),
                i(
                  b,
                  null,
                  g(
                    e.charClass.powers,
                    (l) => (
                      s(),
                      i("div", { key: l.name }, [
                        n(I, { power: l, "only-show": "" }, null, 8, ["power"]),
                      ])
                    )
                  ),
                  128
                )),
              ])),
        ])
      );
    },
  }),
  fa = h(ga, [["__scopeId", "data-v-541a2218"]]),
  Ca = (e) => (q("data-v-8cfbe0fb"), (e = e()), _(), e),
  qa = { class: "card-gray" },
  _a = Ca(() => a("img", { src: A, alt: "ver mais" }, null, -1)),
  Pa = [_a],
  ka = { class: "title" },
  Sa = { key: 0 },
  Ea = { class: "content" },
  Va = ["innerHTML"],
  Ia = v({
    __name: "ClassCardPathAbilitieCard",
    props: { abilitie: { type: Object, required: !0 } },
    setup(e) {
      const r = k(!1);
      return (u, t) => (
        s(),
        i("div", qa, [
          a(
            "div",
            {
              class: "header",
              onClick: t[1] || (t[1] = (c) => (r.value = !r.value)),
            },
            [
              a(
                "button",
                {
                  class: P(["show-more", { rotate: r.value }]),
                  onClick:
                    t[0] || (t[0] = S((c) => (r.value = !r.value), ["stop"])),
                },
                Pa,
                2
              ),
              a("h3", ka, o(e.abilitie.name), 1),
            ]
          ),
          n(
            V,
            { name: "card", mode: "out-in" },
            {
              default: E(() => [
                r.value
                  ? (s(),
                    i("div", Sa, [
                      n(p),
                      a("div", Ea, [
                        a(
                          "div",
                          { innerHTML: e.abilitie.description },
                          null,
                          8,
                          Va
                        ),
                      ]),
                    ]))
                  : d("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  Aa = h(Ia, [["__scopeId", "data-v-8cfbe0fb"]]),
  za = { class: "paths-container card-black" },
  wa = { class: "path-title" },
  Oa = { class: "paths" },
  Ta = ["innerHTML"],
  $a = { class: "abilities" },
  ya = v({
    __name: "ClassCardPaths",
    props: { charClass: { type: Object, required: !0 } },
    setup(e) {
      return (r, u) => (
        s(),
        i("div", za, [
          a("h3", wa, " TRILHAS DE " + o(e.charClass.name.toUpperCase()), 1),
          a("div", Oa, [
            (s(!0),
            i(
              b,
              null,
              g(
                e.charClass.paths,
                (t) => (
                  s(),
                  i("div", { key: t.name }, [
                    a("h3", null, o(t.name), 1),
                    a("div", { innerHTML: t.description }, null, 8, Ta),
                    a("div", $a, [
                      (s(!0),
                      i(
                        b,
                        null,
                        g(
                          t.abilities,
                          (c) => (
                            s(),
                            i("div", { key: c.name }, [
                              n(Aa, { abilitie: c }, null, 8, ["abilitie"]),
                            ])
                          )
                        ),
                        128
                      )),
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
  xa = h(ya, [["__scopeId", "data-v-15e66a27"]]),
  ja = { class: "header" },
  Na = { class: "card-content" },
  Ma = { class: "short-description" },
  La = ["innerHTML"],
  Da = { key: 0, class: "footer" },
  Ra = v({
    __name: "ClassCard",
    props: { charClass: { type: Object, required: !0 }, onlyView: Boolean },
    emits: ["handleAddClass"],
    setup(e, { emit: r }) {
      const u = e,
        t = r,
        c = () => {
          t("handleAddClass", u.charClass);
        };
      return (f, l) => (
        s(),
        i(
          "div",
          { class: P(["card-gray", e.onlyView ? "only-view" : "choose-card"]) },
          [
            a("div", ja, [a("h1", null, o(e.charClass.name), 1)]),
            n(p, { "no-margin": "" }),
            a("div", Na, [
              a("p", Ma, o(e.charClass.shortDescription), 1),
              a("div", { innerHTML: e.charClass.description }, null, 8, La),
              a("div", null, [
                n(sa, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
              a("div", null, [
                n(ua, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
              a("div", null, [
                n(fa, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
              a("div", null, [
                n(xa, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
            ]),
            e.onlyView
              ? d("", !0)
              : (s(),
                i("div", Da, [
                  a(
                    "button",
                    { class: "choose-button button-primary", onClick: c },
                    " Escolher "
                  ),
                ])),
          ],
          2
        )
      );
    },
  }),
  Ba = h(Ra, [["__scopeId", "data-v-82cc09ef"]]);
export { sa as C, fa as a, Xa as b, Ba as c };

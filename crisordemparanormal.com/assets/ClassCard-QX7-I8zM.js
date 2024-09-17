import {
  d as v,
  o as s,
  c as i,
  a,
  t as o,
  k as n,
  a4 as p,
  m as d,
  p as q,
  b as A,
  _ as h,
  n as f,
  q as b,
  H as C,
  r as k,
  a1 as P,
  j as _,
  x as S,
  T as V,
} from "./index-4XNPBkfT.js";
import { P as E } from "./PowerCard-003Gc1fD.js";
import { _ as z } from "./show-more-icon-VvUXKiHG.js";
const Xa = [
    {
      name: "Academic",
      description:
        "<p>Você era um pesquisador ou professor universitário. De forma proposital ou não, seus estudos tocaram em assuntos misteriosos e chamaram a atenção da Ordo Realitas.</p>",
      skills: ["Sciences", "Investigation"],
      power: {
        name: "Knowledge is Power",
        hasAutomation: !1,
        description:
          "When you make an Intellect-based check, you can spend 2 EP to receive +5 on the roll.",
      },
    },
    {
      name: "Amnesic",
      description:
        "<p>Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez você tenha sido um cultista? Seja como for, hoje a Ordem é a única família que conhece. Quem sabe, cumprindo missões, você descubra algo sobre seu passado.</p>",
      skills: [],
      power: {
        name: "Glimpses of the Past",
        hasAutomation: !1,
        description:
          "Once per session, you can do an Intellect check (DC 10) to recognise familiar people or places, that you might have encountered before you lost your memory. If you pass, you receive 1d4 temporary EP and, at the GM's discretion, a useful information.",
      },
    },
    {
      name: "Artist",
      description:
        "<p>Você era um ator, músico, escritor, dançarino, influenciador... Seu trabalho pode ter sido inspirado por uma experiência paranormal do passado e o que o público acha que é pura criatividade, a Ordem sabe que tem um lado mais sombrio.</p>",
      skills: ["Arts", "Deception"],
      power: {
        name: "Magnum Opus",
        hasAutomation: !1,
        description:
          "You became famous for one of your works. Once per mission, you can determine that a character involved in an interaction scene recognizes you. You receive +5 on Presence checks and Presence-based skill checks against that character. At the master's discretion, you can receive these bonuses in other situations in which they would be recognized.",
      },
    },
    {
      name: "Atlhete",
      description:
        "<p>You competed in an individual or team sport, such as swimming or football. Your high performance could be the result of some paranormal influence that not even you knew about or you could have been involved in a paranormal event in one of your competitions.</p>",
      skills: ["Acrobatics", "Athletics"],
      power: {
        name: "110%",
        hasAutomation: !1,
        description:
          "When you make a Strength or Agility based skill check (excluding Fighting and Marksmanship) you can spend 2 EP to receive +5 on the roll.",
      },
    },
    {
      name: "Blue-collar Worker",
      description:
        "<p>Pedreiro, industriário, operador de máquinas em uma fábrica… Você passou uma parte de sua vida em um emprego braçal, desempenhando atividades práticas que lhe deram uma visão pragmática do mundo. Sua rotina mundana, entretanto, foi confrontada de alguma forma pelo paranormal, e você não consegue mais esquecer tudo que viu sobre os mistérios do mundo.</p>",
      skills: ["Fortitude", "Profession"],
      power: {
        name: "Work Tool",
        hasAutomation: !1,
        description:
          "Choose a simple or tactical weapon that, at the GM's discretion, could be used as tool on your profession (such as a sledgehammer for a mason). You have proficiency on the chosen weapon and you receive +1 on attack rolls, damage rolls and threat range when using it.",
      },
    },
    {
      name: "Chef",
      description:
        "<p>Você é um cozinheiro amador ou profissional. Talvez trabalhasse em um restaurante, talvez simplesmente gostasse de cozinhar para a família e amigos. Como sua comida fez com que você se envolvesse com o paranormal? Ninguém sabe. Mas os outros agentes adoram quando você vai para a missão!</p>",
      skills: ["Fortitude", "Profession (cook)"],
      power: {
        name: "Secret Ingredient",
        hasAutomation: !1,
        description:
          "During interlude scenes, you can use the eating action to cook a special dish. You, and all members of the party that used the eating action, receive the benefit of two dishes (if the same benefit is chosen twice, the effects are cumulative).",
      },
    },
    {
      name: "Civil Servant",
      description:
        "<p>Você possuía carreira em um órgão do governo, lidando com burocracia e atendendo pessoas. Sua rotina foi quebrada quando você viu que o prefeito era um cultista ou que a câmara de vereadores se reunia à noite para realizar rituais. Quando os próprios representantes do povo estão dispostos a sacrificá-lo para entidades malignas, onde reside nossa esperança? Hoje, você sabe a resposta para essa pergunta: na Ordo Realitas.</p>",
      skills: ["Insight", "Will"],
      power: {
        name: "Civic Spirit",
        hasAutomation: !1,
        description:
          "Every time you make a roll to help, you can spend 1 EP to increase the bonus given by +2.",
      },
    },
    {
      name: "Conspiracy Theorist",
      description:
        "<p>A humanidade nunca pisou na lua. Reptilianos ocupam importantes cargos públicos. A Terra é plana... E secretamente governada pelos Illuminati. Você sabe isso tudo, pois investigou a fundo esses importantes assuntos. Quando sua pesquisa esbarrou no Paranormal, você foi recrutado. Na Ordem, sua loucura determinação será usada para um bom propósito.</p>",
      skills: ["Investigation", "Occultism"],
      power: {
        name: "I Knew It",
        hasAutomation: !1,
        description:
          "You don't get shaken by entities or anomalies. After all, you always knew of their existence. You gain resistance to mental damage equal to your Intellect.",
      },
    },
    {
      name: "Criminal",
      description:
        "<p>Você vivia uma vida fora da lei, seja como mero batedor de carteiras, seja como membro de uma facção criminosa. Em algum momento, você se envolveu em um assunto da Ordem — talvez tenha roubado um item amaldiçoado? A organização, por sua vez, achou melhor recrutar seus talentos do que ter você como um estorvo.</p>",
      skills: ["Crime", "Stealth"],
      power: {
        name: "Crime Pays Off",
        hasAutomation: !1,
        description:
          "At the end of a mission, choose an item found during the mission. On your next mission, you can include that item on your inventory without it counting towards your rank's item limit.",
      },
    },
    {
      name: "Engineer",
      description:
        "<p>Enquanto os acadêmicos estão preocupados com teorias, você colocar a mão na massa, seja como engenheiro profissional, seja como inventor de garagem. Provavelmente você criou algum dispositivo paranormal que chamou a atenção da Ordem.</p>",
      skills: ["Profession", "Technology"],
      power: {
        name: "Favorite Tools",
        hasAutomation: !1,
        description:
          "An item of your choice (excluding weapons) counts as being one category below (for example, an item of category II counts as category I to you).",
      },
    },
    {
      name: "Executive",
      description:
        "<p>Você possuía um trabalho de escritório em uma grande empresa, banco ou corporação. Era um administrador, advogado, contador ou de qualquer outra profissão que lida com papelada e burocracia. Sua vida era bastante normal, até que você descobriu algo que não devia. Talvez o sucesso da empresa residisse em um ritual? Talvez toda a corporação fosse fachada para um culto e o presidente, um líder cultista envolvido com entidades paranormais? Após essa descoberta, você foi recrutado pela Ordem e trocou seu trabalho de escritório por missões de campo — hoje, sua vida é tudo, menos normal.</p>",
      skills: ["Diplomacy", "Profession"],
      power: {
        name: "Optimized Process",
        hasAutomation: !1,
        description:
          "Whenever you do a skill check during an extended test, or an action to revise documents (physical or digital), you can spend 2 EP to receive +5 on the roll.",
      },
    },
    {
      name: "Fighter",
      description:
        "<p>Você pratica uma arte marcial ou esporte de luta, ou cresceu em um bairro perigoso onde aprendeu briga de rua. Já quebrou muitos ossos, tanto seus quanto dos outros. Pode ter conhecido a Ordem após um torneio secreto envolvendo entidades do Outro Lado ou ter sido recrutado pela sua capacidade de luta.</p>",
      skills: ["Fighting", "Reflexes"],
      power: {
        name: "Heavy Hitter",
        hasAutomation: !1,
        description:
          "You receive +2 on damage rolls on melee attacks.",
      },
    },
    {
      name: "Forensic Scientist",
      description:
        "<p>Você trabalhava coletando provas para a resolução de crimes, seja para a polícia, seja para uma empresa privada de investigação. Usava métodos e técnicas adquiridos através de uma graduação em uma área científica ou médica, além de cursos específicos. Recrutado para a Ordem por seus conhecimentos técnicos, seu trabalho não mudou muito - mas o tipo de que você investiga, sim.</p>",
      skills: ["Sciences", "Investigation"],
      power: {
        name: "Investigação Científica",
        hasAutomation: !1,
        description:
          "Once per investigation scene, you can use a free action to find clues, using Sciences instead of the skill that would be used instead for the roll.",
      },
    },
    {
      name: "Gymnast",
      description:
        "<p>Desde muito jovem, você passou a maior parte de sua vida em ginásios (ou talvez em antigos templos monásticos) praticando as mais difíceis acobracias. Sua preparação foi árdua e dolorosa, mas aprimorou seu corpo, sua técnica e sua disciplina. Recrutado pela Ordo Realitas, essas se tornaram suas principais ferramentas para enfrentar o Outro lado. E com elas, você planeja fazer as criaturas paranormais sofrerem muito mais do que você sofreu em seus treinos.</p>",
      skills: ["Acrobatics", "Reflexes"],
      power: {
        name: "Acrobatic Mobility",
        hasAutomation: !0,
        isAutomationOn: !0,
        automationId: "mobilidade-acrobatica",
        description:
          "You gain +2 Defense and your movement increases by +3m.",
      },
    },
    {
      name: "Healthcare Worker",
      description:
        "<p>Você era um profissional da saúde como um enfermeiro, farmacêutico, médico, psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo cuidado de um agente da Ordem em uma emergência, que ficou surpreso com o quão bem você lidou com a situação.</p>",
      skills: ["Insight", "Medicine"],
      power: {
        name: "Medicinal Techniques",
        hasAutomation: !1,
        description:
          "Whenever you heal a character, you sum your Intellect to the total healed HP.",
      },
    },
    {
      name: "I.T.",
      description:
        "<p>Programador, engenheiro de software ou simplesmente “o cara da T.I.”, você tem treinamento e experiência para lidar com sistemas informatizados. Seu talento (ou curiosidade exagerada) chamou a atenção da Ordem.</p>",
      skills: ["Investigation", "Technology"],
      power: {
        name: "Search Engine",
        hasAutomation: !1,
        description:
          "To the GM's discretion, whenever you have access to the internet, you can spend to EP to replace any skill check with a Technology check. ",
      },
    },
    {
      name: "Investigator",
      description:
        "<p>Você era um investigador do governo, como um perito forense ou policial federal, ou privado, como um detetive particular. Pode ter tido contato com o Paranormal em algum caso ou ter sido recrutado pela Ordem por suas habilidades de resolução de mistérios.</p>",
      skills: ["Investigation", "Perception"],
      power: {
        name: "Clue Sniffer",
        hasAutomation: !1,
        description:
          "Once per scene, when you make a check to search for clues, you can spend 1 EP to receive +5 on the roll.",
      },
    },
    {
      name: "Journalist",
      description:
        "<p>Uma espécie ameaçada de extinção, você atuava investigando notícias para um jornal, rede de televisão, blog, canal do YouTube... Você se juntou à Ordem porque descobriu algo relacionado ao paranormal, ou foi recrutado para investigar um caso específico. Seja como for, continua buscando a verdade - não mais para informar as pessoas, mas sim para protegê-las.</p>",
      skills: ["Current Affairs", "Investigation"],
      power: {
        name: "Trustworthy Sources",
        hasAutomation: !1,
        description:
          "Once per session, you can spend 1 EP to contact your sources - people whom you trust with access to information. This allows you to reroll an already made skill check to search for a clue, with an added +5 bonus, or you receive a different relevent information (to the GM's discretion).",
      },
    },
    {
      name: "Magnate",
      description:
        "<p>Você possui muito dinheiro ou patrimônio. Pode ser o herdeiro de uma família antiga ligada ao oculto, ter criado e vendido uma empresa e decidido usar sua riqueza para uma causa maior, ou ter ganho uma loteria após inadvertidamente escolher números amaldiçoados que formavam um ritual.</p>",
      skills: ["Diplomacy", "Piloting"],
      power: {
        name: "Sponsor of the Order",
        hasAutomation: !1,
        description:
          "Your credit limit is always considered one above the current one.",
      },
    },
    {
      name: "Mercenary",
      description:
        "<p>Você é um soldado de aluguel, que trabalha sozinho ou como parte de alguma organização que vende serviços militares. Escoltas e assassinatos fizeram parte de sua rotina por tempo o suficiente para você se envolver em alguma situação com o Paranormal.</p>",
      skills: ["Initiative", "Intimidation"],
      power: {
        name: "Combat Postion",
        hasAutomation: !1,
        description:
          "On the first turn of every action scene, you can spend 2 EP to receive an additional movement action.",
      },
    },
    {
      name: "Militar",
      description:
        "<p>Você serviu em uma força militar, como o exército ou a marinha. Passou muito tempo treinando com armas de fogo, até se tornar um perito no uso delas. Acostumado a obedecer ordens e partir em missões, está em casa na Ordo Realitas. O inimigo é diferente, mas um tiro bem dado continua resolvendo o problema.</p>",
      skills: ["Marksmanship", "Tactics"],
      power: {
        name: "Para Bellum",
        hasAutomation: !1,
        description: "Your receive +2 on damage rolls with firearms.",
      },
    },
    {
      name: "Policeman",
      description:
        "<p>Você fez parte de uma força de segurança pública, civil ou militar. Em alguma patrulha ou chamado se deparou com um caso paranormal e sobreviveu para contar a história.</p>",
      skills: ["Perception", "Marksmanship"],
      power: {
        name: "Patrulha",
        hasAutomation: !0,
        isAutomationOn: !0,
        automationId: "patrulha",
        description: "Você recebe +2 em Defesa.",
      },
    },
    {
      name: "Professor",
      description:
        "<p>Você leciona em uma escola ou universidade, ensinando ciências, artes ou outro campo do saber. Sua profissão é uma das mais nobres de todas e o colocou em contato com muitas pessoas e conhecimentos. Em algum momento, o colocou em contato também com o paranormal. Agora, trabalhando na Ordem, seus alunos são criaturas do Outro Lado, e você planeja reprovar todos esse ano.</p>",
      skills: ["Sciences", "Insight"],
      power: {
        name: "Field Class",
        hasAutomation: !1,
        description:
        "You know how to bring out the best in people. Once per scene, you can use a standard action and 2 EP to give +1 to any attribute of a different character in short range until the end of the scene",
      },
    },
    {
      name: "Rebel",
      description:
        "<p>Alguma coisa aconteceu em sua juventude que fez com que você se rebelasse contra o mundo ao seu redor. Talvez seus parentes tenham sido ausentes, por escolha ou por algum evento trágico, talvez outra perda tenha marcado seu coração. Qualquer que seja a razão, você possui iguais doses de rebeldia e independência e, acima de tudo, aprendeu a se virar sozinho. Recrutado pela Ordem, você luta por vingança - ou para que outros não passem pelo que você passou.</p>",
      skills: ["Stealth", "Will"],
      power: {
        name: "Lone Wolf",
        hasAutomation: !1,
        description:
          "You receive +1 to Defense, skill checks, and your EP limit per turn if there are no allies within short range.",
      },
    },
    {
      name: "Religious",
      description:
        "<p>Você é devoto ou sacerdote de uma fé. Independentemente da religião que pratica, se dedica a auxiliar as pessoas com problemas espirituais. A partir disso, teve contato com o paranormal, o que fez com que fosse convocado pela Ordem.</p>",
      skills: ["Religion", "Will"],
      power: {
        name: "Soothe",
        hasAutomation: !1,
        description:
          "You receive +5 in Religion checks to calm someone down. Furthermore, when you calm someone down, they receive a number of Sanity points equal to 1d6 + your Presence.",
      },
    },
    {
      name: "Repentant Cultist",
      description:
        "<p>Você fez parte de um culto paranormal. Talvez fossem ignorantes iludidos, que acreditavam estar contatando entidades benevolentes. Talvez soubessem exatamente o que estavam fazendo. Seja como for, algo abriu seus olhos e agora você luta pelo lado certo — embora carregue para sempre traços de sua vida pregressa. Outros membros da Ordem podem desconfiar de sua conversão e você sabe que precisará se esforçar para conquistar a confiança de todos.</p>",
      skills: ["Occultism", "Religion"],
      power: {
        name: "Remnants of the Other Side",
        hasAutomation: !1,
        description:
          "You have a paranormal power of your choice. However, you start the game with half the normal Sanity for your class.",
      },
    },
    {
      name: "Rural Worker",
      description:
        "<p>Você trabalhava no campo ou em áreas isoladas, como fazendeiro, pescador, biólogo, veterinário... Você se acostumou com o convívio com a natureza e os animais e talvez tenha ouvido uma ou outra história de fantasmas ao redor da fogueira. Em algum momento da sua vida, porém, descobriu que muitas dessas histórias são verdadeiras.</p>",
      skills: ["Animal Handling", "Survival"],
      power: {
        name: "Pathfinder",
        hasAutomation: !1,
        description:
          "When you make a Animal Handling or Survival check, you can spend 2 EP to receive +5 on the roll. Furthermore, you don't receive a movement penalty when moving in difficult terrain.",
      },
    },
    {
      name: "Scoundrel Vulture",
      description:
        '<p>Você fez parte dos valoros Gaudérios Abutres. Mesmo longe do motoclube, ainda segue o lema "A gente morre por quem a gente ama".</p>',
      skills: ["Fighting", "Piloting"],
      power: {
        name: "Scoundrel Fraternity",
        hasAutomation: !1,
        description:
          "Once per round, when an adjacent ally is the target of an attack or effect, you can spend 1 EP to switch places with that ally and become the target of that attack or effect. If you take this action, on your next turn you gain +2 on attack rolls against the attacker.",
      },
    },
    {
      name: "Stray",
      description:
        "<p>Você não vivia de acordo com as normas da sociedade. Podia ser um eremita, uma pessoa em situação de rua ou simplesmente alguém que descobriu o Paranormal e abandonou sua rotina — sabendo o quão frágil era a existência humana, não conseguia simplesmente continuar indo para o trabalho todo o dia. De qualquer forma, a vida sem os confortos modernos o deixou mais forte.</p>",
      skills: ["Fortitude", "Survival"],
      power: {
        name: "Calloused",
        hasAutomation: !0,
        isAutomationOn: !0,
        automationId: "calejado",
        description: "You receive +1 HP for every 5% EXP.",
      },
    },
    {
      name: "Stunt Double",
      description:
        "<p>Você sempre combinou um gosto por alta velocidade, manobras ousadas e esportes radicais com uma total falta de noção do perigo. Sua busca incessante por adrenalina o fez seguir carreira de dublê, uma profissão que lhe permitiu enfrentar o risco das mais diversas formas. Agora à serviço da Ordem, você enfim enfrentará o Medo verdadeiro e poderá colocar sua coragem - e suas peripécias - à prova como nunca.</p>",
      skills: ["Piloting", "Reflexes"],
      power: {
        name: "Fearless",
        hasAutomation: !1,
        description:
          "When you make a skill check on which a failure will directly result in damage or a negative condition, you receive +5 to that test.",
      },
    },
    {
      name: "Swindler",
      description:
        "<p>Uma vida digna exige muito trabalho, então é melhor nem tentar. Você vivia de pequenos golpes, jogatina ilegal e falcatruas. Certo dia, enganou a pessoa errada; no dia seguinte, se viu servindo à Ordem. Pelo menos agora tem a chance de usar sua lábia para o bem.</p>",
      skills: ["Crime", "Deception"],
      power: {
        name: "Impostor",
        hasAutomation: !1,
        description:
          "Once per scene, you can spend 2 EP to replace any skill check by a Deception check.",
      },
    },
    {
      name: "University Student",
      description:
        "<p>Você era aluno de uma faculdade. Em sua rotina de estudos, provas e festas, acabou descobrindo algo — talvez um livro amaldiçoado na antiga biblioteca do campus? Por seu achado, foi convocado pela Ordem. Agora, estuda com mais afinco: nesse novo curso, ouviu dizer que as provas podem ser mortais.</p>",
      skills: ["Current Affairs", "Investigation"],
      power: {
        name: "Dedication",
        hasAutomation: !0,
        isAutomationOn: !0,
        automationId: "dedicacao",
        description:
          "You receive +1 EP, and 1 additional EP for each odd EXP (15%, 25%...). Furthermore, your EP per turn limit increases by 1 (on EXP 5% your limit is 2, on EXP 10% it's 3 and so on; this does not affect the DC of your effects).",
      },
    },
    {
      name: "Victim",
      description:
        "<p>Em algum momento de sua vida — infância, juventude ou início da vida adulta — você encontrou o Paranormal... E a experiência não foi nada boa. Você viu os espíritos dos mortos, foi atacado por uma entidade ou mesmo foi sequestrado para ser sacrificado em um ritual impedido no último momento. A experiência foi traumática, mas você não se abateu; em vez disso, decidiu lutar para impedir que outros inocentes passem pelo mesmo. E, já tendo sendo vítima do Paranormal, se tornou habilidoso em evitar perigos.</p>",
      skills: ["Reflexes", "Will"],
      power: {
        name: "Psychological Scars",
        hasAutomation: !0,
        isAutomationOn: !0,
        automationId: "cicatrizes-psicologicas",
        description: "You receive +1 Sanity for every 5% EXP.",
      },
    },
    {
      name: "Writer",
      description:
      "<p>Você ganhava a vida inventando mundos, pessoas e histórias - em outra palavras, escrevendo ficção. Em certo momento, seu trabalho tocou ou foi tocado pelo paranormal Talvez as suas histórias tenham gerado Medo, talvez a inspiração para ela viesse do Outro Lado desde o início. Recrutado pela Ordem, você agora luta para que a vida real tenha o final feliz que seus livros não tiveram.</p>",
      skills: ["Arts", "Current Affairs"],
      power: {
        name: "Bagagem de Leitura",
        hasAutomation: !1,
        description:
          "Due to your profession, you have read - and learned - a bit of everything. Once per scene, you can spend 2 EP to become trained in any skill until the end of the ongoing scene.",
      },
    },
  ],
  u = (e) => (q("data-v-86953969"), (e = e()), A(), e),
  I = { class: "features card-black" },
  O = u(() => a("h3", null, "CHARACTERISTICS", -1)),
  w = { class: "feat-card" },
  T = u(() => a("h4", null, "INITIAL HEALTH POINTS", -1)),
  j = { class: "main" },
  $ = { key: 0 },
  x = u(() => a("h6", null, "For each level of exposition", -1)),
  y = { class: "sub" },
  M = { class: "feat-card" },
  N = u(() => a("h4", null, "INITIAL EFFORT POINTS", -1)),
  D = { class: "main" },
  R = { key: 0 },
  L = u(() => a("h6", null, "For each level of exposition", -1)),
  F = { class: "sub" },
  U = { class: "feat-card" },
  H = u(() => a("h4", null, "INITIAL SANITY", -1)),
  X = { class: "main" },
  B = { key: 0 },
  Q = u(() => a("h6", null, "For each level of exposition", -1)),
  G = { class: "sub" },
  J = { class: "feat-card" },
  Y = u(() => a("h4", null, "TRAINED SKILLS", -1)),
  K = { key: 0 },
  W = { key: 1 },
  Z = { key: 2 },
  aa = { class: "feat-card" },
  ea = u(() => a("h4", null, "PROFICIENCIES", -1)),
  oa = v({
    __name: "ClassCardFeatures",
    props: {
      charClass: { type: Object, required: !0 },
      isMundano: { type: Boolean, default: !1 },
    },
    setup(e) {
      return (r, m) => (
        s(),
        i("div", I, [
          O,
          a("div", w, [
            a("div", null, [
              T,
              a("span", j, o(e.charClass.initialPv) + "+VIGOR", 1),
            ]),
            n(p, { "no-margin": "" }),
            e.isMundano
              ? d("", !0)
              : (s(),
                i("div", $, [
                  x,
                  a("span", y, o(e.charClass.levelPv) + " HP (+Vig)", 1),
                ])),
          ]),
          a("div", M, [
            a("div", null, [
              N,
              a("span", D, o(e.charClass.initialPe) + "+PRESENCE", 1),
            ]),
            n(p, { "no-margin": "" }),
            e.isMundano
              ? d("", !0)
              : (s(),
                i("div", R, [
                  L,
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
                  a("span", G, o(e.charClass.levelSan) + " SAN", 1),
                ])),
          ]),
          a("div", J, [
            Y,
            n(p, { "no-margin": "" }),
            e.charClass.trainedSkills.optionSkils.length > 0
              ? (s(),
                i("div", K, [
                  a(
                    "h6",
                    null,
                    o(e.charClass.trainedSkills.optionSkils[0][0]) +
                      " or " +
                      o(e.charClass.trainedSkills.optionSkils[0][1]) +
                      " (one of the two) and " +
                      o(e.charClass.trainedSkills.optionSkils[1][0]) +
                      " or " +
                      o(e.charClass.trainedSkills.optionSkils[1][1]) +
                      " (one of the two), and a number of skills of your choice equal to " +
                      o(e.charClass.trainedSkills.quantity) +
                      " + Intellect. ",
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
                    " A number of skills of your choice equal to " +
                      o(e.charClass.trainedSkills.quantity) +
                      " + Intellect. ",
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
                      " and " +
                      o(e.charClass.trainedSkills.skills[1]) +
                      ", and a number of skills of your choice equal to " +
                      o(e.charClass.trainedSkills.quantity) +
                      " + Intellect. ",
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
  ia = (e) => (q("data-v-2a9e98a3"), (e = e()), A(), e),
  ra = { class: "table-content card-black" },
  ta = { class: "table" },
  na = ia(() =>
    a(
      "thead",
      null,
      [
        a("tr", null, [
          a("th", { class: "center" }, " EXP "),
          a("th", { class: "left" }, " Abilities "),
        ]),
      ],
      -1
    )
  ),
  da = { class: "center" },
  ca = { class: "left" },
  ua = v({
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
      return (m, t) => (
        s(),
        i("div", ra, [
          a("table", ta, [
            na,
            a("tbody", null, [
              (s(),
              i(
                f,
                null,
                b(r, (c, g) =>
                  a("tr", { key: c }, [
                    a("td", da, o(c), 1),
                    a("td", ca, o(e.charClass.table[g]), 1),
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
  ma = h(ua, [["__scopeId", "data-v-2a9e98a3"]]),
  la = { class: "abilities card-black" },
  pa = { class: "abilitie" },
  va = { key: 0, class: "abilitie" },
  ha = { key: 1, class: "abilitie" },
  fa = { key: 2, class: "powers" },
  ba = v({
    __name: "ClassCardAbilities",
    props: {
      charClass: { type: Object, required: !0 },
      isMundano: { type: Boolean, default: !1 },
    },
    setup(e) {
      const r = e,
        m = {
          name: "Path Ability",
          description: `Em NEX 10% você escolhe uma das trilhas de ${r.charClass.name.toLocaleLowerCase()} e recebe o primeiro poder da trilha escolhida. Você recebe um novo poder da trilha escolhida em NEX 40%, 65% e 99%.`,
        },
        t = {
          name: "Power",
          description: `Em NEX 15%, você recebe um poder de ${r.charClass.name.toLocaleLowerCase()} à sua escolha. Você recebe um novo poder de ${r.charClass.name.toLocaleLowerCase()} em NEX 30% e a cada 15 pontos de NEX subsequentes, conforme indicado na tabela. Veja a lista de poderes a seguir.`,
        };
      return (c, g) => (
        s(),
        i("div", la, [
          a(
            "h3",
            null,
            o(e.charClass.name.toUpperCase()) + " ABILITIES",
            1
          ),
          (s(!0),
          i(
            f,
            null,
            b(
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
                  a("span", null, o(m.name) + ". ", 1),
                  C(o(m.description), 1),
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
              i("div", fa, [
                (s(!0),
                i(
                  f,
                  null,
                  b(
                    e.charClass.powers,
                    (l) => (
                      s(),
                      i("div", { key: l.name }, [
                        n(E, { power: l, "only-show": "" }, null, 8, ["power"]),
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
  ga = h(ba, [["__scopeId", "data-v-541a2218"]]),
  Ca = (e) => (q("data-v-7dfaeb93"), (e = e()), A(), e),
  qa = { class: "card-gray" },
  Aa = Ca(() => a("img", { src: z, alt: "ver mais" }, null, -1)),
  Pa = [Aa],
  ka = { class: "title" },
  _a = { key: 0 },
  Sa = { class: "content" },
  Va = ["innerHTML"],
  Ea = v({
    __name: "ClassCardPathAbilitieCard",
    props: { abilitie: { type: Object, required: !0 } },
    setup(e) {
      const r = k(!1);
      return (m, t) => (
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
                    t[0] || (t[0] = _((c) => (r.value = !r.value), ["stop"])),
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
              default: S(() => [
                r.value
                  ? (s(),
                    i("div", _a, [
                      n(p),
                      a("div", Sa, [
                        a(
                          "div",
                          {
                            class: "description",
                            innerHTML: e.abilitie.description,
                          },
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
  za = h(Ea, [["__scopeId", "data-v-7dfaeb93"]]),
  Ia = { class: "paths-container card-black" },
  Oa = { class: "path-title" },
  wa = { class: "paths" },
  Ta = ["innerHTML"],
  ja = { class: "abilities" },
  $a = v({
    __name: "ClassCardPaths",
    props: { charClass: { type: Object, required: !0 } },
    setup(e) {
      return (r, m) => (
        s(),
        i("div", Ia, [
          a("h3", Oa, o(e.charClass.name.toUpperCase()) + " PATHS ", 1),
          a("div", wa, [
            (s(!0),
            i(
              f,
              null,
              b(
                e.charClass.paths,
                (t) => (
                  s(),
                  i("div", { key: t.name }, [
                    a("h3", null, o(t.name), 1),
                    a(
                      "div",
                      { class: "description", innerHTML: t.description },
                      null,
                      8,
                      Ta
                    ),
                    a("div", ja, [
                      (s(!0),
                      i(
                        f,
                        null,
                        b(
                          t.abilities,
                          (c) => (
                            s(),
                            i("div", { key: c.name }, [
                              n(za, { abilitie: c }, null, 8, ["abilitie"]),
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
  xa = h($a, [["__scopeId", "data-v-02642a47"]]),
  ya = { class: "header" },
  Ma = { class: "card-content" },
  Na = { class: "short-description" },
  Da = ["innerHTML"],
  Ra = { key: 0, class: "footer" },
  La = v({
    __name: "ClassCard",
    props: { charClass: { type: Object, required: !0 }, onlyView: Boolean },
    emits: ["handleAddClass"],
    setup(e, { emit: r }) {
      const m = e,
        t = r,
        c = () => {
          t("handleAddClass", m.charClass);
        };
      return (g, l) => (
        s(),
        i(
          "div",
          { class: P(["card-gray", e.onlyView ? "only-view" : "choose-card"]) },
          [
            a("div", ya, [a("h1", null, o(e.charClass.name), 1)]),
            n(p, { "no-margin": "" }),
            a("div", Ma, [
              a("p", Na, o(e.charClass.shortDescription), 1),
              a(
                "div",
                { class: "description", innerHTML: e.charClass.description },
                null,
                8,
                Da
              ),
              a("div", null, [
                n(sa, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
              a("div", null, [
                n(ma, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
              a("div", null, [
                n(ga, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
              a("div", null, [
                n(xa, { "char-class": e.charClass }, null, 8, ["char-class"]),
              ]),
            ]),
            e.onlyView
              ? d("", !0)
              : (s(),
                i("div", Ra, [
                  a(
                    "button",
                    { class: "choose-button button-primary", onClick: c },
                    " Choose "
                  ),
                ])),
          ],
          2
        )
      );
    },
  }),
  Ba = h(La, [["__scopeId", "data-v-0c1d2fc6"]]);
export { sa as C, ga as a, Xa as b, Ba as c };

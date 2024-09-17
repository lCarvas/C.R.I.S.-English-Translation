import { c as d } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { m as t } from "./marcasFragmentadas-KD4kpdFJ.js";
const n = [
    {
      name: "Barata",
      fullPictureURL: "/img/creatures/barata-gif.gif",
      sheetPictureURL: "/img/creatures/barata-gif.gif",
      vd: 5,
      secondaryElements: [],
      creatureType: "animal",
      creatureSize: "minúsculo",
      presencaPerturbadora: {},
      defense: 18,
      skills: {
        perception: { rollNumber: 2, rollBonus: 2 },
        initiative: { rollNumber: 1, rollBonus: 0 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 1, rollBonus: 5 },
        will: { rollNumber: 2, rollBonus: 0 },
      },
      pvCurrent: 10,
      pvMax: 10,
      imunidades: [],
      resistencias: { dano: 2, quimico: 2 },
      vulnerabilidades: [],
      attributes: { dex: 1, str: 0, int: 0, pre: 2, con: 2 },
      movement: 9,
      altMovements: [
        { title: "Vôo", value: 9 },
        { title: "Escalada", value: 9 },
      ],
      powers: [
        {
          id: "0",
          name: "A desgraçada não morre!",
          description:
            "<p>Sempre que a barata chegar a 0 PV, ela pode fazer um teste de fortitude DT 10 +5 para cada vez que usar essa habilidade. Caso passe no teste, ela não morre e retorna com metade de seus PV.</p>",
        },
        {
          id: "1",
          name: "UMA BARATA!!",
          description:
            "<p>Na primeira rodada quando uma barata surge na cena, todos os personagens devem fazer um teste de vontade DT 20, e caso falhem, eles são obrigados a usar sua ação de movimento tentando se afastar o máximo possível da barata.</p>",
        },
        {
          id: "2",
          name: "Tira ela de mim!",
          description:
            "<p>Sempre que ocupar o mesmo espaço que um ser, ela pode escalar o personagem e realizar sua ação agredir. Além disso, o ser perde 1 ponto de sanidade por rodada em que eles estiverem no mesmo espaço e precisa fazer um teste de luta contra DT 15 para tirar a barata de seu corpo e deixá-la caída adjacente a ele.</p>",
        },
        {
          id: "3",
          name: "Taca veneno",
          description:
            "<p>Se for atingida por um pesticida ou veneno para insetos similar, a defesa da barata é reduzida para 10, seu deslocamento normal passa a ser 3m e ela não pode mais voar ou escalar até o fim da cena. Se for atingida 3 rodadas seguidas por veneno, ela fica inconsciente por uma rodada e tem seus PV reduzidos a 1.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "MORDIDA",
              numberOfAttacks: 1,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 1,
              rollBonus: 0,
              damage: [{ id: "0", damageType: "Perfuração", value: "1d3" }],
            },
          ],
          description:
            "<p>*A barata precisa estar no mesmo espaço que um ser para usar esse ataque.</p>",
        },
        {
          id: "1",
          name: "Demônia com asas",
          type: "completa",
          description:
            "<p>A barata voa para uma direção realizando uma investida de 9m. Ela para no primeiro personagem que falhar em um teste de reflexos DT 16, escalando o corpo do ser.</p>",
        },
      ],
      description: "",
      source: {
        label: "Cebolinha1501",
        link: "https://www.reddit.com/r/OrdemParanormalRPG/comments/1eza4zv/uma_barata/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
        adLabel: "cebolinha1501",
      },
    },
  ],
  e = [
    {
      name: "O Diabo",
      vd: 400,
      element: "sangue",
      secondaryElements: ["conhecimento", "medo"],
      creatureType: "relíquia",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 45, dice: "10d8" },
      skills: {
        perception: { rollNumber: 6, rollBonus: 25 },
        initiative: { rollNumber: 6, rollBonus: 35 },
        fortitude: { rollNumber: 6, rollBonus: 35 },
        reflex: { rollNumber: 6, rollBonus: 35 },
        will: { rollNumber: 6, rollBonus: 35 },
      },
      perceptionType: "Percepção às cegas",
      defense: 66,
      pvMax: 1666,
      pvCurrent: 1666,
      imunidades: ["dano", "sangue"],
      imunidadesAditional: "Condições de atordoamento e paralisia",
      resistencias: { balistico: 20, impacto: 20, perfuracao: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 6, str: 6, int: 6, pre: 6, con: 6 },
      movement: 18,
      powers: [
        {
          id: "0",
          name: "Ardiloso",
          description:
            "<p>O Diabo gosta de fazer pactos e ocasionalmente aparece para pessoas normais. Ele pode escolher não ativar sua Presença Perturbadora quando encontra um personagem.</p>",
        },
        {
          id: "1",
          name: "Decepar Máscara",
          description:
            "<p>A intensidade dos sentimentos do Diabo é a única coisa capaz de romper a calmaria do Equilíbrio e resolver o Enigma de Medo da Máscara do Desespero.</p>",
        },
        {
          id: "2",
          name: "Potência de Sangue",
          description:
            "<p>O Diabo recupera 50 PV no início de cada um de seus turnos. Além disso, seu modificador para todos os testes de perícia baseados em Força, Vigor ou Presença é +35, e para testes baseados nos demais atributos, é +25.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Arma Sangrenta",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 6,
              rollBonus: 45,
              criticalMult: 3,
              criticalRange: 20,
              damage: [
                { id: "0", value: "2d10", damageType: "sangue" },
                { id: "1", value: "50", damageType: "sangue" },
              ],
            },
            {
              id: "1",
              name: "Chifre do Diabo",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 6,
              rollBonus: 45,
              criticalMult: 3,
              criticalRange: 20,
              damage: [
                { id: "0", value: "2d8", damageType: "sangue" },
                { id: "1", value: "50", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Arma Sangrenta",
              range: "Disntância - Médio",
              numberOfAttacks: 2,
              rollNumber: 6,
              rollBonus: 45,
              criticalMult: 3,
              criticalRange: 20,
              damage: [
                { id: "0", value: "2d10", damageType: "sangue" },
                { id: "1", value: "50", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "livre",
          name: "Explodir em Sangue",
          automaticDamage: [{ id: "0", damageType: "sangue", value: "10d6" }],
          description:
            "<p>O Diabo é capaz de controlar o sangue de qualquer ser com o qual ele tenha contato direto. Se ele causar dano em um personagem usando sua arma sangrenta, ou se tocar diretamente em uma ferida de um personagem, ele causa 10d6 pontos de dano de Sangue. O Diabo pode usar esta habilidade duas vezes por turno.</p>",
        },
        {
          id: "3",
          type: "livre",
          name: "Sangrar",
          automaticDamage: [{ id: "0", damageType: "sangue", value: "8d8" }],
          description:
            "<p>Se o Diabo acertar um ataque com seu chifre, pode escolher soltar o apêndice e deixá-lo preso no personagem. Um personagem com um chifre preso em si sofre vulnerabilidades a Sangue até removê-lo. Fazer isso requer uma ação padrão e causa 8d8 pontos de dano de Sangue. O chifre do Diabo sempre cresce de volta no começo do seu turno.</p>",
        },
        {
          id: "4",
          type: "movimento",
          name: "Transportar pelo Sangue",
          description:
            "<p>O Diabo pode se movimentar através do Sangue, inclusive daquele que esteja saindo de dentro de um personagem. Com uma ação de movimento, o Diabo pode se deslocar para qualquer espaço que tenha uma grande quantidade de sangue exposta ou adjacente a um personagem machucado ou morrendo.</p>",
        },
        {
          id: "5",
          type: "padrão",
          name: "Senhor do Sangue",
          description:
            "<p>Uma vez por cena, o Diabo pode invocar e controlar uma ou mais criaturas de Sangue cujo VD total somado seja até 400. As criaturas aparecem em alcance médio do Diabo e agem a partir da próxima rodada, no turno do Diabo, seguindo a vontade dele.</p>",
        },
        {
          id: "6",
          type: "padrão",
          name: "Pacto",
          automaticDamage: [{ id: "0", damageType: "mental", value: "10d6" }],
          description:
            "<p>O Diabo oferece ao alvo um pacto de Sangue. Se o pacto for aceito, o Diabo irá cumprir o que foi prometido, normalmente com resoluções distorcidas ao pé da letra. Em troca, o alvo sofre 10d6 pontos de dano mental e, se enlouquecer como resultado, se torna um servo obcecado pelo Diabo para o resto da vida.</p>",
        },
        {
          id: "7",
          type: "completa",
          name: "Desejos de Sangue",
          tests: [{ id: "0", skillName: "Vontade", dt: 45, reduceEffect: !1 }],
          description:
            "<p>Todos os personagens em alcance médio do Diabo entram em uma fúria de Sangue e atacam outro personagem em alcance curto a escolha do Diabo (Vontade DT 45 evita). Um personagem afetado por esta habilidade deve usar sua ação com o maior potencial de dano, mas não pode conjurar rituais. Um personagem que passe no teste de Vontade fica imune a esta habilidade até final da cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/o-diabo.webp",
      sheetPictureURL: "/img/creatures/o-diabo-profile.webp",
      enigmaDoMedo:
        "<p>Ninguém sabe como derrotar o Diabo. Registros antigos falam sobre símbolos sagrados que afastariam a Besta, mas nada parece funcionar de verdade. Se existe uma forma de derrotar essa criatura, esse é um segredo muito bem guardado. Sabe-se, entretanto, que a Morte é a entidade opressora do Sangue. Talvez a resposta não esteja no Sangue escarlate, mas sim no Lodo da Morte. Seria uma manifestação de Morte com força equivalente ao Diabo a chave para derrotá-lo?</p><p>Quando o Enigma de Medo do Diabo for resolvido ele perde sua imunidade a dano e seus bônus de testes de resistência são reduzidos para +25.</p>",
      description:
        "<p>Você com certeza já ouviu falar desse ser conhecido por inúmeros nomes. O Príncipe do Ódio, o Imperador das Aberrações, o Portador do Trono ou o Sangue Encarnado. Aquele que rasga a Realidade com sua presença aterrorizante e devoradora.</p><p>O Diabo é uma das manifestações do Outro Lado mais significativas na história da Realidade. Um ser que nunca foi derrotado, nunca foi controlado e nunca foi aprisionado, capaz de invocar e controlar qualquer criatura paranormal irracional associada ao elemento do Sangue dentro da Realidade.</p><p>As menções da figura maquiavélica de pele vermelha, chifruda, com um sorriso impetuoso rasgado acompanhado de um olhar macabro estão presentes em incontáveis culturas e lendas ao redor de toda a Realidade.</p><p>O Diabo não age de maneira sutil, dispensando a graciosidade e o suspense. Ele não tem problemas em ser invocado em pessoa para lidar com qualquer situação que lhe desperte o interesse, e por isso se tornou a criatura paranormal mais popularmente conhecida em toda a Realidade. Todos já ouviram falar do Diabo, mas apenas alguns tiveram o desprazer e a agonia de conhecê-lo.</p><p>Sua presença sempre está associada a personalidades com estados mentais excessivamente transtornados. O Diabo se alimenta dos sentimentos extremos e descontrolados daqueles com quem interage, buscando intensificar ainda mais as emoções experienciadas.</p><p>Graças a isso, é comum seguir o caminho de sangue e dor que traçam de volta à origem da maioria dos casos envolvendo o Diabo: um Pacto. O que leva alguém a buscar ajuda do ser mais bestial e abominável conhecido é debatível, mas muitas é arrogância, ódio, paixão ou, principalmente, desespero. O Diabo gosta de abusar daqueles que não se vêem com outras opções, assim como sente prazer em humilhar aqueles que acreditam poder superá-lo.</p><p>Aqueles que buscaram sua simpatia mergulharam em uma vida de abstinência e agonia interminável, mas aqueles que decidiram tomá-lo como um inimigo acabaram por sofrer consequências que consideraram piores do que a própria morte. No fim, existe uma regra inegável que se deve seguir impetuosamente com todo seu coração:</p><p>VOCÊ NÃO DEVE SE ENVOLVER COM O DIABO.</p>",
    },
    {
      name: "Aberração de Carne",
      element: "sangue",
      secondaryElements: [],
      vd: 40,
      creatureType: "criatura",
      creatureSize: "grande",
      imunidades: [],
      presencaPerturbadora: { dice: "3d6", dt: 15, nex: 30 },
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      perceptionType: "Percepção às cegas",
      defense: 19,
      pvMax: 70,
      pvCurrent: 70,
      resistencias: { balistico: 5, impacto: 5, perfuracao: 5, sangue: 10 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 1, str: 3, int: 0, pre: 1, con: 3 },
      movement: 9,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", value: "2d6", damageType: "impacto" },
                { id: "1", value: "6", damageType: "impacto" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "reação",
          name: "Agarrão",
          description:
            "<p>Se a aberração de carne acertar um ataque de pancada, ela pode tentar agarrar o alvo (teste 3d20+12). Ela pode manter até dois personagens agarrados por vez.</p>",
          macros: [{ id: "0", value: "3d20k1+12" }],
        },
        {
          id: "2",
          type: "movimento",
          name: "Abocanhar",
          description:
            "<p>A aberração de carne leva até dois personagens agarrados para dentro de sua boca central, que são abocanhados e continuam agarrados. Quando é abocanhado, e no início de cada turno da aberração em que continuar agarrado desta forma, o personagem sofre 3d6 pontos de dano de perfuração (Fortitude DT 15 reduz à metade). Qualquer personagem adjacente a aberração de carne pode gastar uma ação padrão para fazer um teste de Atletismo (DT 20) para tentar tirar outro personagem de dentro da boca.</p>",
          tests: [
            {
              id: "0",
              skillName: "Fortitude",
              dt: 15,
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "perfuração", value: "3d6" }],
            },
            { id: "1", skillName: "Atletismo", dt: 20, reduceEffect: !1 },
          ],
        },
      ],
      powers: [],
      description:
        "<p>Originalmente, a aberração de carne foi um experimento fracassado para juntar dois corpos em um só. A dor agoniante das duas cobaias que se mantiveram conscientes durante todo o processo tormentoso se transformou numa fúria desoladora alimentada pelo Sangue.</p><p>Os corpos tomaram uma aparência deformada, inchada e irreconhecível, com a pele completamente vermelha, seus olhos comidos, suas quatro pernas e quatro braços se movimentando com agressividade buscando agarrar tudo ao seu redor e uma enorme abertura se assemelhando a uma boca circular com incontáveis dentes se abrindo no ponto onde seus estômagos estavam costurados. A aberração de carne pode chegar a até dois metros e vinte de altura e é extremamente pesada. Dificilmente um alvo que for agarrado por seus braços enormes e abocanhado pela ruptura sairá inteiro para contar a história.</p>",
      fullPictureURL: "/img/creatures/aberracao-de-carne.webp",
      sheetPictureURL: "/img/creatures/aberracao-de-carne-profile.webp",
    },
    {
      name: "Aniquilação",
      element: "sangue",
      secondaryElements: ["medo"],
      powers: [],
      imunidades: [],
      vd: 380,
      creatureType: "criatura",
      creatureSize: "colossal",
      presencaPerturbadora: { dt: 45, dice: "9d8" },
      skills: {
        perception: { rollNumber: 4, rollBonus: 20 },
        initiative: { rollNumber: 4, rollBonus: 20 },
        fortitude: { rollNumber: 5, rollBonus: 30 },
        reflex: { rollNumber: 4, rollBonus: 25 },
        will: { rollNumber: 4, rollBonus: 20 },
      },
      perceptionType: "Percepção às cegas",
      defense: 58,
      pvMax: 1200,
      pvCurrent: 1200,
      resistencias: { dano: 50 },
      vulnerabilidades: ["morte"],
      attributes: { str: 5, dex: 4, int: 3, pre: 4, con: 5 },
      extraSkills: [
        { id: "0", name: "Atletismo", rollBonus: 20, rollNumber: 5 },
      ],
      movement: 15,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garras",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 40,
              damage: [
                { id: "0", value: "4d10", damageType: "sangue" },
                { id: "1", value: "30", damageType: "sangue" },
              ],
            },
            {
              id: "1",
              name: "Tentáculos Espinhentos",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 40,
              damage: [
                { id: "0", value: "2d12", damageType: "sangue" },
                { id: "1", value: "30", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Disparo de Espinhos",
              range: "Distância - Médio",
              numberOfAttacks: 3,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 40,
              damage: [
                { id: "0", value: "2d10", damageType: "sangue" },
                { id: "1", value: "20", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "reação",
          name: "Agarrão",
          macros: [{ id: "0", value: "5d20k1+50" }],
          description:
            "<p>Se a Aniquilação acertar um ataque de tentáculos espinhentos, ela pode tentar agarrar o alvo (teste 5d20+50). Ela pode manter até quatro personagens agarrados por vez.</p>",
        },
        {
          id: "3",
          type: "reação",
          name: "Instinto Aniquilador",
          description:
            "<p>Sempre que um personagem em alcance curto da Aniquilação se movimenta mais do que 3m, a Aniquilação realiza um ataque de tentáculos espinhentos contra o personagem.</p>",
        },
        {
          id: "4",
          type: "livre",
          name: "Apertar e Destruir",
          automaticDamage: [{ id: "0", damageType: "sangue", value: "40" }],
          description:
            "<p>No início do seu turno, a Aniquilação aperta os personagens agarrados com seus tentáculos, causando 40 pontos de dano de Sangue.</p>",
        },
        {
          id: "5",
          type: "movimento",
          name: "Bater as Asas",
          tests: [
            {
              id: "0",
              skillName: "Fortitude",
              dt: 40,
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "mental", value: "8d6" }],
            },
          ],
          description:
            "<p>A Aniquilação bate suas asas, criando um som ensurdecedor. Cada personagem em alcance longo sofre 8d6 pontos de dano Mental, é empurrado 6m para longe da Aniquilação e fica atordoado por uma rodada (Fortitude DT 40 reduz o dano à metade e evita os efeitos).</p>",
        },
        {
          id: "6",
          type: "movimento",
          name: "Estrangulamento Final",
          tests: [{ id: "0", skillName: "Reflexos", dt: 30, reduceEffect: !1 }],
          description:
            "<p>A Aniquilação se desloca 15m enquanto seus inúmeros braços agarram e estrangulam personagens no caminho. Cada personagem que ficar adjacente a Aniquilação durante esse deslocamento fica agarrado e asfixiado (Reflexos DT 30 evita). Um personagem agarrado pode escapar gastando uma ação padrão e passando em um teste de Reflexos (DT 30).</p>",
        },
        {
          id: "7",
          type: "completa",
          name: "Tempestade de Espinhos",
          tests: [
            {
              id: "0",
              skillName: "Reflexos",
              dt: 40,
              reduceEffect: !0,
              damage: [
                { id: "0", damageType: "sangue", value: "20d6" },
                { id: "1", damageType: "sangue", value: "20" },
              ],
            },
          ],
          description:
            "<p>A Aniquilação lança todos os seus espinhos. Todos os personagens em alcance médio sofrem 20d6+20 pontos de dano de Sangue (Reflexos DT 40 reduz à metade). A Aniquilação só pode usar esta habilidade uma vez por cena e, quando a usa, perde seu disparo de espinhos até o fim da cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/aniquilacao.webp",
      sheetPictureURL: "/img/creatures/aniquilacao-profile.webp",
      enigmaDoMedo:
        "<p>O Enigma de Medo da Aniquilação é desconhecido. Quando ele for resolvido, a Aniquilação perderá sua resistência a dano e sua habilidade Tempestade de Espinhos.</p>",
      description:
        "<p>A maior criatura já registrada na história da Realidade. Apenas relatos de civilizações distantes foram encontrados como evidência desse ser que só pode ser descrito como um apocalipse paranormal.</p><p><i>Uma aberração incomparável, uma monstruosidade de tamanho descomunal, com mais de dez metros de altura, esse ser é conhecido por diversos nomes, como “A Besta do Apocalipse”, “O Dragão do Inferno” e “A Aniquilação”</i></p><p>Não se tem informação de qual seria o acontecimento ou ritual aterrorizador capaz de invocar esse ser medonho, apenas registros históricos longínquos das ruínas devoradas que restaram da passagem dessa criatura.</p><p>Seus enormes braços contém braços menores que se desviam dele, e esses mesmos braços contém mais inúmeros braços que brotam de todo o seu comprimento, se movendo de forma irregular, tentando agarrar qualquer coisa que passe perto da criatura. Ao redor de toda sua forma surgem espinhos alongados, especialmente dos enormes tentáculos que se entrelaçam na parte inferior do corpo, e no centro de seu corpo é possível enxergar uma enorme bocarra com dentes longos e afiados do tamanho de pessoas adultas.</p><p>As enormes asas são incapazes de erguer o seu corpo colossal, mas ao se agitarem causam um som ensurdecedor que pode ser escutado a quilômetros de distância, anunciando a sua chegada.</p><p>Não existem registros de alguém que tenha sido capaz de matar ou dissipar a Aniquilação, e lendas perdidas no tempo regurgitam a possibilidade de que ela nunca tenha sido de fato derrotada, e está apenas dormente escondida em algum lugar da Realidade, aguardando pelo seu despertar.</p>",
    },
    {
      name: "Carente",
      element: "sangue",
      secondaryElements: ["morte"],
      imunidades: [],
      vd: 300,
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 35, dice: "7d8", nex: 90 },
      skills: {
        perception: { rollNumber: 3, rollBonus: 10 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 4, rollBonus: 25 },
        reflex: { rollNumber: 4, rollBonus: 25 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      perceptionType: "Percepção às cegas",
      defense: 40,
      pvMax: 700,
      pvCurrent: 700,
      resistencias: { balistico: 20, impacto: 20, perfuracao: 20, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { str: 4, dex: 4, int: 2, pre: 3, con: 4 },
      extraSkills: [
        { id: "0", name: "Atletismo", rollNumber: 4, rollBonus: 20 },
        { id: "1", name: "Enganação", rollNumber: 3, rollBonus: 15 },
      ],
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Carência",
          description:
            "<p>Qualquer ser que já esteve envolvido na gestação de outro ser recebe +1d20 em ataques contra o carente, porém o carente também recebe +1d20 em ataques contra esse ser.</p>",
        },
        {
          id: "1",
          name: "Regeneração de Sangue",
          description:
            "<p>O carente possui Cura Acelerada 20. Se o carente ficar inconsciente ou sofrer dano de Energia, esta habilidade deixa de funcionar até o fim da cena.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garras de Sangue",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 35,
              damage: [
                { id: "0", value: "2d8", damageType: "sangue" },
                { id: "1", value: "20", damageType: "sangue" },
              ],
            },
            {
              id: "1",
              name: "Ferrão de Sangue",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 35,
              damage: [
                { id: "0", value: "2d12", damageType: "sangue" },
                { id: "1", value: "20", damageType: "sangue" },
              ],
            },
            {
              id: "2",
              name: "Tentáculo",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 35,
              damage: [
                { id: "0", value: "2d8", damageType: "sangue" },
                { id: "1", value: "20", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "movimento",
          name: "Forma Infantil",
          description:
            "<p>O carente se contorce de volta para o corpo da pequena criança para passar em espaços pequenos, se retraindo e expandindo quando achar necessário. Além disso, o carente não consegue abrir a primeira porta para entrar em um lugar. Uma vez que essa porta é aberta e ele deixa de estar na forma infantil, pode ignorar essa restrição.</p>",
        },
        {
          id: "2",
          type: "reação",
          name: "Rasteira de Tentáculo",
          description:
            "<p>Uma vez por rodada, quando fica adjacente a dois ou mais seres, o carente faz um ataque de tentáculo contra um deles. Se o carente acertar o ataque, a vítima fica caída e é empurrada 6m para longe dele.</p>",
        },
        {
          id: "3",
          type: "livre",
          name: "Sugada Mortal",
          tests: [
            { id: "0", skillName: "Fortitude", dt: 35, reduceEffect: !1 },
          ],
          description:
            "<p>Usando seu ferrão, o carente consegue sugar fluidos e apodrecer os órgãos internos. Um ser atingido pelo ferrão de sangue fica debilitado e enjoado até o fim da cena (Fortitude DT 35 evita).</p>",
        },
        {
          id: "4",
          type: "movimento",
          name: "Você é minha mamãe?",
          tests: [{ id: "0", skillName: "Reflexos", dt: 25, reduceEffect: !1 }],
          description:
            "<p>O carente usa a parte que simula o corpo de uma criança para abraçar um ser adjacente, que fica paralisado até ser solto (Reflexos DT 25 evita). O carente pode manter o abraço indefinidamente, mas será forçado a soltar o alvo se sofrer dano de Energia.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/carente.webp",
      sheetPictureURL: "/img/creatures/carente-profile.webp",
      description:
        "<p>A criatura mais famosa do escritor de terror Daniel Hartmann, o carente é uma manifestação paranormal originada de uma história de terror que se tornou popular no mundo todo. É uma criatura nascida da inveja de um ser que nunca sentiu amor e, por isso, busca devorar os órgãos de pessoas que já foram mães para consumir o amor que nunca recebeu.</p><p>Apesar de brutal, um carente não tem a habilidade de abrir portas sozinho. Por causa disso, para enganar seus alvos, o carente originalmente toma a forma de uma pequena criança com lacerações em todo o seu rosto vazio, uma coluna entortada e uma camiseta azul com uma estampa infantil, mimicando o som de um menino ou menina doce e perdida batendo em portas buscando por sua mãe. </p><p>Porém, quando alguém comete o grave erro de atender ao chamado e abrir a porta, de dentro do seu rosto rasteja uma criatura bizarra, grotesca e enorme, com mais de três metros de altura, uma pele gosmenta, garras pontudas e curvadas. É uma forma que se assemelha a um inseto monstruoso enorme, com um grande ferrão saindo de um rosto demoníaco. No topo, como uma espécie de isca, o corpo da criança fica pendurado, conectado a um tipo de tentáculo com garras.</p><p>Lembre-se, se você ouvir uma criança batendo à porta chamando pela sua mãe, <b>NÃO ABRA A PORTA.</b> Pois depois que a entrada do carente for permitida em um ambiente pela primeira vez, nada mais poderá impedi-lo de devorar aquilo de que carece.</p>",
    },
    {
      name: "Dama de Sangue",
      element: "sangue",
      secondaryElements: ["medo", "morte"],
      imunidades: [],
      vd: 60,
      creatureType: "criatura",
      creatureSize: "enorme",
      presencaPerturbadora: { dt: 20, dice: "3d6", nex: 35 },
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 0 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 2, rollBonus: 0 },
      },
      perceptionType: "Percepção às cegas",
      defense: 20,
      pvMax: 105,
      pvCurrent: 105,
      resistencias: { balistico: 10, impacto: 10, perfuracao: 10, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 2, str: 3, int: 1, pre: 2, con: 2 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Consumir",
          description:
            "<p>Quando invocada, a dama de Sangue não possui as habilidades da coluna ao lado. Sempre que consome um corpo, recebe uma das habilidades, na ordem da ficha (ou seja, ganha primeiro Arremessar, depois Chuva de Ácido e assim por diante). Para consumir um corpo, a dama de Sangue precisa estar adjacente ao cadáver e gastar uma ação padrão. No começo de seu turno, se não tiver consumido sete corpos, a dama de Sangue irá utilizar suas ações para se deslocar na direção de um corpo e consumi-lo. Assim que tiver consumido sete corpos, ela pode agir normalmente.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Tentáluco",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", value: "2d6", damageType: "impacto" },
                { id: "1", value: "5", damageType: "impacto" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "movimento",
          name: "Arremessar (Flor Rosa)",
          tests: [
            {
              id: "0",
              skillName: "Reflexos",
              dt: 15,
              reduceEffect: !1,
              damage: [{ id: "0", damageType: "impacto", value: "2d6" }],
            },
          ],
          description:
            "<p>A dama de Sangue ergue um personagem em alcance curto e o arremessa a um ponto a sua escolha também em alcance curto. O personagem sofre 2d6 pontos de dano de impacto e fica caído (Reflexos DT 15 evita todo o efeito). A flor rosa murcha se a dama de Sangue entrar em contato com fertilizante. Isso faz a dama perder esta habilidade e sofrer -1d20 em Luta</p>",
        },
        {
          id: "2",
          type: "movimento",
          name: "Chuva de Ácido (Flor Vermelha)",
          tests: [
            {
              id: "0",
              skillName: "Reflexos",
              dt: 15,
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "químico", value: "4d4" }],
            },
          ],
          description:
            "<p>A dama espirra ácido que derrete carne e corrói metal. Todos os personagens em alcance curto sofrem 4d4 pontos de dano químico (Fortitude DT 15 reduz à metade). A flor vermelha murcha se a dama de Sangue entrar em contato com agrotóxico. Isso faz a dama perder esta habilidade e reduz suas resistências a dano em 5.</p>",
        },
        {
          id: "3",
          type: "movimento",
          name: "Espinhos (Flor Amarela)",
          tests: [
            {
              id: "0",
              skillName: "Reflexos",
              dt: 15,
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "perfuração", value: "2d8" }],
            },
          ],
          description:
            "<p>A dama dispara espinhos em até três alvos em alcance médio. Cada alvo sofre 2d8 pontos de dano de perfuração (Reflexos DT 15 reduz à metade). A flor amarela murcha se a dama de Sangue sofrer 10 pontos de dano de fogo de um único efeito. Isso faz a dama perder esta habilidade e sofrer 1d20 em testes de Reflexos.</p>",
        },
        {
          id: "4",
          type: "movimento",
          name: "Grito Devastadaor (Flor Roxa)",
          tests: [{ id: "0", skillName: "Vontade", dt: 15, reduceEffect: !1 }],
          description:
            "<p>A dama emite um grito agudo que afeta a mente e causa confusão. Todos os personagens em alcance curto ficam confusos (Vontade DT 15 evita). Um personagem que falhe no teste pode repeti-lo no final do seu turno. A flor roxa murcha se a dama de Sangue entrar em contato com o bulbo de bravo purpulis, uma planta roxa que cresce em algumas pedras. Isso faz a dama perder esta habilidade e sofrer 1d20 em testes de Vontade.</p>",
        },
        {
          id: "5",
          type: "padrão",
          name: "Miasma Fétido (Flor Azul)",
          tests: [
            { id: "0", skillName: "Fortitude", dt: 15, reduceEffect: !1 },
          ],
          macros: [{ id: "0", value: "1d4+1" }],
          description:
            "<p>A dama de Sangue expele um miasma fétido que contamina o ar. Todos os personagens em alcance curto ficam enjoados por 1d4+1 rodadas (Fortitude DT 15 reduz à 1 rodada). A flor azul murcha se a dama de Sangue sofrer dano de eletricidade ou Energia. Isso faz a dama perder esta habilidade e reduz seu deslocamento em 6m.</p>",
        },
        {
          id: "6",
          type: "padrão",
          name: "Prisão de Tentáculos (Flor Verde)",
          description:
            "<p>A criatura penetra o solo com seus tentáculos e escolhe um personagem em alcance curto. Esse personagem fica agarrado até que os tentáculos sejam destruídos (os tentáculos são acertados automaticamente e tem 20 PV). A flor verde murcha se for molhada em água corrente. Isso faz a dama perder esta habilidade e reduz sua Defesa em 5.</p>",
        },
        {
          id: "7",
          type: "movimento",
          name: "Visão Macabra (Flor Laranja)",
          tests: [
            {
              id: "0",
              skillName: "Vontade",
              dt: 15,
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "mental", value: "1d6" }],
            },
          ],
          description:
            "<p>O movimento hipnotizante da flor faz com que o personagem tenha delírios de imagens macabras e perturbadas. Todos os personagens em alcance médio sofrem 1d6 pontos de dano Mental (Vontade DT 15 reduz à metade). A flor laranja murcha se a dama de Sangue sofrer 10 pontos de dano de corte de um único efeito. Isso faz a dama perder esta habilidade e reduz seus PV totais em 20.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/dama-de-sangue.webp",
      sheetPictureURL: "/img/creatures/dama-de-sangue-profile.webp",
      enigmaDoMedo:
        "<p>A dama de sangue é uma criatura poderosa, invocada através de um ritual que envolve o sacrifício de sete pessoas para o desabrochar de sete flores. Porém, cada flor possui uma fraqueza, conforme descrito nas habilidades ao lado.</p>",
      description:
        "<p>Uma criatura grotesca que nasce a partir de um corpo humano partido no meio, com os órgãos se misturando a plantas para dar origem a sete tentáculos com flores e espinhos, além de outro tentáculo maior, central, com uma grande flor dentada. Uma dama de Sangue é uma criatura nefasta que manifesta diversas habilidades paranormais.</p><p>A dama de Sangue é uma criatura de Sangue, mas com elementos de Morte e Medo, criada a partir do culto a uma entidade antiga, por vezes confundida no folclore com um anjo.</p><p>É criada a partir da transformação de uma pessoa que teve sementes de orquídea de Sangue alojadas em sua coluna. Esse hospedeiro é sacrificado em um ritual de Sangue, na qual as sementes rapidamente eclodem e consomem a carne da pessoa para que ela se transforme na criatura.</p><p>A dama de Sangue está associada ao mito do Serafim Escarlate, que arrebata as almas dos mais jovens primeiro, seguindo o número sete por onde quer que passe. Além disso, o mito se fundiu com um culto a uma “Dama das Flores”, uma entidade capaz de fazer orquídeas florescerem.</p>",
    },
    {
      name: "Enpap-X",
      element: "sangue",
      secondaryElements: ["conhecimento"],
      imunidades: [],
      vd: 180,
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 25, dice: "6d6", nex: 60 },
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 15 },
        reflex: { rollNumber: 2, rollBonus: 15 },
        will: { rollNumber: 2, rollBonus: 10 },
      },
      perceptionType: "Percepção às cegas",
      defense: 36,
      pvMax: 360,
      pvCurrent: 360,
      resistencias: { balistico: 10, impacto: 10, perfuracao: 10, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 2, str: 4, int: 1, pre: 2, con: 3 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Transformação",
          description:
            "<p>O enpap-X começa o combate como um existido comum. Quando ele é reduzido a 0 PV, porém, em vez de morrer, se transforma: passa a usar a ficha desta página (inclusive gerando o efeito de sua presença perturbadora) e recupera todos os seus PV, ficando com 360 PV. </p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Socão",
              range: "Corpo a corpo",
              numberOfAttacks: 4,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 20,
              damage: [
                { id: "0", value: "2d10", damageType: "impacto" },
                { id: "1", value: "10", damageType: "impacto" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Correntes",
              range: "Distância - Curto",
              numberOfAttacks: 3,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 15,
              damage: [
                { id: "0", value: "2d8", damageType: "impacto" },
                { id: "1", value: "10", damageType: "impacto" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "livre",
          name: "Acorrentar",
          automaticDamage: [{ id: "0", damageType: "impacto", value: "4d6" }],
          macros: [{ id: "0", value: "2d20k1+17" }],
          description:
            "<p>Se o enpap-X acertar um ataque de correntes em um personagem Médio ou menor, pode tentar agarrar o alvo à distância (teste 2d20+17). No começo do seu turno, o enpap-X estrangula cada personagem agarrado desta forma, causando 4d6 pontos de dano de impacto. O enpap-X pode manter até dois personagens agarrados simultaneamente</p>",
        },
        {
          id: "3",
          type: "reação",
          name: "Forma Desencadeada",
          description:
            "<p>Quando faz um acerto crítico com um socão ou com uma corrente, o enpap-X pode derrubar o alvo ou empurrá-lo 3m na direção oposta.</p>",
        },
        {
          id: "4",
          type: "reação",
          name: "Crescer",
          macros: [{ id: "0", value: "1d6" }],
          description:
            "<p>Movido pelo Sangue incontrolável, o enpap-X desenvolve força conforme desfere seus golpes. Sempre que acertar um personagem com seu socão, o enpap-X recebe um bônus cumulativo de +1d6 em suas próximas rolagens de dano até o fim do turno. Ou seja, se acertar o primeiro socão, no segundo recebe +1d6 de dano. Se acertar o segundo, no terceiro recebe +2d6. E se acertar o terceiro, no quarto socão recebe +3d6.</p>",
        },
        {
          id: "5",
          type: "movimento",
          name: "Marcas do Terror",
          tests: [
            {
              id: "0",
              skillName: "Vontade",
              dt: 25,
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "mental", value: "4d6" }],
            },
          ],
          description:
            "<p>O enpap-X faz com que as marcas em seu corpo brilhem com uma luz dourada, revelando as atrocidades eternizadas em sua pele. Todos os personagem em alcance curto do enpap-X sofrem 4d6 pontos de dano mental (Vontade DT 25 reduz à metade). Um personagem que passe no teste de resistência fica imune a esta habilidade até o final da cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/enpap-x.webp",
      sheetPictureURL: "/img/creatures/enpap-x-profile.webp",
      description:
        "<p>Originada de uma lenda perdida da antiga Suméria, a aberração “enpap-X” surgiu da dor e tortura de um prisioneiro de guerra que era obrigado a marcar em sua pele os feitos terríveis cometidos pelo seu soberano.</p><p>Um enpap-X pode surgir quando uma pessoa é forçada a viver aprisionada, torturada e acorrentada, estando constantemente exposta a brutalidades e manifestações paranormais, mas nunca de fato tendo a libertação de ter sua vida encerrada.</p><p>O ódio, a dor e a angústia aos poucos transformam a mente dessa pessoa em uma tormenta enfurecida e enlouquecida, e as marcas registradas em seu corpo preenchem o vazio da sua mente consumida pelo ódio com apenas uma palavra, um nome lembrado pelo Conhecimento do Outro Lado: enpap-X.</p><p>Inicialmente agindo de forma controlada, acorrentado pelo seu possuidor, se libertado das suas correntes e ferido, enpap-X se transforma e se expande numa monstruosidade enorme de quatro braços que busca apenas a vingança contra qualquer um em sua frente, o preço de uma eternidade de sofrimento.</p>",
    },
    {
      name: "Kerberos",
      element: "sangue",
      secondaryElements: [],
      vd: 340,
      creatureType: "criatura",
      creatureSize: "enorme",
      imunidades: [],
      presencaPerturbadora: { dt: 35, dice: "10d6", nex: 99 },
      skills: {
        perception: { rollNumber: 3, rollBonus: 20 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 5, rollBonus: 25 },
        reflex: { rollNumber: 4, rollBonus: 20 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      perceptionType: "Percepção às cegas",
      defense: 46,
      pvMax: 1150,
      pvCurrent: 1150,
      resistencias: { balistico: 20, impacto: 20, perfuracao: 20, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 4, str: 5, int: 0, pre: 3, con: 5 },
      extraSkills: [
        { id: "0", name: "Atletismo", rollNumber: 5, rollBonus: 25 },
      ],
      movement: 18,
      powers: [
        {
          id: "0",
          name: "Ataque Flexível",
          description:
            "<p>O kerberos é movido por sede de Sangue e desejo de matar. Ele pode executar até quatro ataques por rodada, combinando ataques corpo a corpo e à distância. Entretanto, ele nunca pode executar o mesmo ataque mais de três vezes na mesma rodada.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 5,
              rollBonus: 40,
              criticalMult: 2,
              criticalRange: 20,
              damage: [
                { id: "0", value: "4d12", damageType: "sangue" },
                { id: "1", value: "30", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Disparo de Espinhos",
              range: "Distância - Médioo",
              numberOfAttacks: 1,
              rollNumber: 4,
              rollBonus: 35,
              criticalMult: 2,
              criticalRange: 20,
              damage: [
                { id: "0", value: "4d8", damageType: "sangue" },
                { id: "1", value: "20", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "livre",
          name: "Devorar",
          tests: [
            { id: "0", skillName: "Fortitude", dt: 40, reduceEffect: !1 },
          ],
          description:
            "<p>Uma vez por cena, quando reduz os PV de um personagem a 0 com sua mordida, o kerberos pode devorá-lo, matando-o instantaneamente e recuperando PV iguais à metade dos PV totais da vítima. A vítima tem direito a um teste de Fortitude (DT 40) para evitar o efeito.</p>",
        },
        {
          id: "3",
          type: "completa",
          name: "Derrubar e Devorar",
          macros: [
            { id: "0", value: "5d20k1+45" },
            { id: "0", value: "4d12+40" },
          ],
          description:
            "<p>O kerberos usa a manobra derrubar em um personagem a até 3m (teste 5d20+45). Se vencer o teste de manobra, o kerberos desfere três ataques de mordida contra o personagem. O dano destes ataques aumenta para 4d12+40.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/kerberos.webp",
      sheetPictureURL: "/img/creatures/kerberos-profile.webp",
      description:
        "<p>O cão de três cabeças, o demônio do poço, o guardião do portão do inferno. Existem poucos relatos daqueles que encontraram um kerberos dentro da Realidade. Uma besta enorme, com mais de três metros de altura e sete metros de comprimento, seis enormes patas, uma cauda, espinhos e veias saltadas por toda a sua pele vermelha carnosa e gosmenta, e três enormes cabeças com bocas asquerosas e vis, uma diferente da outra.</p><p>Um kerberos só pode ser manifestado em um “Inferno” — uma área paranormal tomada pelo Sangue, com a Membrana devastada graças a brutalidades impensáveis. Um kerberos, assim como na lenda grega, é o guardião de uma importante entrada, comumente protegendo a origem da distorção paranormal dessa região. Enfrentar um kerberos diretamente é praticamente suicídio, pois sua bestialidade é devastadora. Porém, kerberos são criaturas ilógicas e não tomam decisões estratégicas, se voltando apenas a proteger um ponto específico.</p>",
    },
    {
      name: "Minotauro",
      element: "sangue",
      secondaryElements: [],
      vd: 280,
      creatureType: "criatura",
      imunidades: [],
      powers: [],
      creatureSize: "grande",
      presencaPerturbadora: { dt: 35, dice: "8d6", nex: 80 },
      skills: {
        perception: { rollNumber: 3, rollBonus: 20 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 5, rollBonus: 20 },
        reflex: { rollNumber: 4, rollBonus: 15 },
        will: { rollNumber: 3, rollBonus: 10 },
      },
      perceptionType: "Percepção às cegas",
      defense: 44,
      pvMax: 750,
      pvCurrent: 750,
      resistencias: { balistico: 20, impacto: 20, perfuracao: 20, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 4, str: 5, int: 1, pre: 3, con: 5 },
      extraSkills: [
        { id: "0", name: "Atletismo", rollNumber: 5, rollBonus: 20 },
      ],
      movement: 12,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Chifres",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 30,
              damage: [
                { id: "0", value: "6d12", damageType: "perfuração" },
                { id: "0", value: "20", damageType: "perfuração" },
              ],
            },
            {
              id: "1",
              name: "Machado",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 32,
              damage: [
                { id: "0", value: "4d12", damageType: "corte" },
                { id: "1", value: "20", damageType: "corte" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Gravar Chifres",
          automaticDamage: [
            { id: "0", damageType: "sangue", value: "4d12" },
            { id: "1", damageType: "sangue", value: "20" },
          ],
          description:
            "<p>Se fizer uma investida com seus chifres e acertar o ataque, o minotauro crava seus chifres no alvo, que fica agarrado. Enquanto mantém um ser agarrado dessa forma o minotauro não pode atacar com seus chifres. Porém, no final de cada turno da vítima no qual ela ainda esteja agarrada pelos chifres, ela sofre 4d12+20 pontos de dano de Sangue.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/minotauro.webp",
      sheetPictureURL: "/img/creatures/minotauro-profile.webp",
      description:
        "<p>A forma de um animal enorme, furioso e bípede com mais de três metros, infectado com pústulas nojentas de Sangue e veias pulsantes por um lado inteiro de seu corpo, o minotauro é originário das lendas da mitologia grega sobre um monstro terrível que habita labirintos.</p><p>Em seu braço esquerdo, um enorme machado está fundido em seus ossos e carne, com uma lâmina dupla capaz de destruir o mais resistente dos materiais. O minotauro realiza investidas brutais e enfurecidas que são praticamente impossíveis de conter, buscando manter seus alvos cada vez mais empalados em seus enormes chifres, enquanto usa seu instinto bestial para navegar dentro de seu labirinto, caçando vítimas para destroçar em pequenos pedaços e então devorá-las aos poucos.</p><p>Uma das primeiras criaturas com registros de ter sido mantida em uma espécie de cativeiro para ser estudada e analisada por investigadores paranormais, há milênios. Até hoje é impossível determinar o real motivo que levaria alguém a manter uma besta terrível como essa vivendo em qualquer lugar.</p>",
    },
    {
      name: "Mulher Afogada",
      element: "sangue",
      secondaryElements: ["energia", "medo"],
      vd: 140,
      creatureType: "criatura",
      imunidades: [],
      creatureSize: "grande",
      presencaPerturbadora: { dt: 25, dice: "4d8", nex: 50 },
      skills: {
        perception: { rollNumber: 2, rollBonus: 5 },
        initiative: { rollNumber: 4, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      perceptionType: "Percepção às cegas",
      defense: 28,
      pvMax: 240,
      pvCurrent: 240,
      resistencias: {
        balistico: 10,
        energia: 10,
        impacto: 10,
        perfuracao: 10,
        sangue: 20,
      },
      vulnerabilidades: ["morte"],
      attributes: { dex: 4, str: 3, int: 2, pre: 2, con: 3 },
      movement: 9,
      altMovements: [{ title: "Forma líquida", value: 36 }],
      powers: [
        {
          id: "0",
          name: "Forma de Sangue",
          description:
            "<p>Por padrão, a mulher afogada é encontrada na forma de líquido de Sangue. Nesta forma, ela possui resistência a balístico, corte, impacto, perfuração e Sangue 20; deslocamento 36m e pode percorrer canos, frestas e orifícios, como qualquer líquido; e recebe as habilidades Afogar em Sangue, Arrancar Sangue e Invadir Órgãos. Ela perde esta habilidade quando é invocada em sua forma física (após seu Enigma de Medo ser desvendado).</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 15,
              criticalMult: 2,
              criticalRange: 20,
              damage: [
                { id: "0", value: "4d8", damageType: "perfuração" },
                { id: "1", value: "8", damageType: "perfuração" },
              ],
            },
            {
              id: "1",
              name: "Garras",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 15,
              criticalMult: 2,
              criticalRange: 20,
              damage: [
                { id: "0", value: "4d6", damageType: "corte" },
                { id: "1", value: "6", damageType: "corte" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Jato de Sangue",
              range: "Distância - Curto",
              numberOfAttacks: 1,
              rollNumber: 4,
              rollBonus: 10,
              criticalMult: 2,
              criticalRange: 20,
              damage: [
                { id: "0", value: "4d8", damageType: "sangue" },
                { id: "1", value: "8", damageType: "sangue" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "movimento",
          name: "Sugar Sangue",
          description:
            "<p>A mulher afogada devora o corpo de um personagem adjacente que tenha morrido nesta cena, recuperando 40 PV no processo.</p>",
        },
        {
          id: "3",
          type: "padrão",
          name: "Afogar em Sangue",
          tests: [
            { id: "0", skillName: "Fortitude", dt: 24, reduceEffect: !1 },
          ],
          description:
            "<p>A mulher afogada invade os orifícios do nariz e da boca de um personagem em alcance curto, afogando-o com Sangue. O personagem fica asfixiado. No início de cada um de seus turnos, pode fazer um teste de Fortitude (DT 24). Se passar, encerra a condição e faz a mulher afogada ser expelida na forma líquida para um espaço adjacente.</p>",
        },
        {
          id: "4",
          type: "reação",
          name: "Arrancar Sangue",
          automaticDamage: [{ id: "0", damageType: "sangue", value: "6d6" }],
          description:
            "<p>Toda vez que a mulher afogada é arrancada de um corpo que ela esteja asfixiando com afogar em Sangue, ela carrega consigo parte do sangue da vítima, causando 6d6 pontos de dano de Sangue e deixando-a fraca.</p>",
        },
        {
          id: "5",
          type: "movimento",
          name: "Invadir Órgãos",
          macros: [{ id: "0", value: "6d6" }],
          description:
            "<p>A mulher afogada invade órgãos vitais de um personagem que ela esteja asfixiando com afogar em Sangue. O personagem sofre 6d6 pontos de dano de Sangue e fica enjoado.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/mulher-afogada.webp",
      sheetPictureURL: "/img/creatures/mulher-afogada.webp",
      enigmaDoMedo:
        '<p>Quando a mulher afogada assombra um local, todas as fontes de água se tornam armadilhas potenciais: torneiras, canos, privadas, chuveiros... Tudo que estiver conectado a um sistema hidráuculo será um possível "ponto de invocação" da criatura e, caso um personagem se aproxime de um desses pontos, ela pode se manifestar em forma física de líquido de Sangue, agarrando esse personagem e tentando arrastá-lo para dentro dos canos onde o devorará aos poucos.</p><p>Tentar enfrentar a mulher afogada de forma direita é inútil, já que ela consegue se mover livremente por dentro dos encanamentos e se recuperar de seus ferimentos caso seja atacada. A única maneira de derrotá-la é bloquear todas as saídas de água e fechar o registro hidráulico do local, e então abrir todas as torneiras, forçando a sua manifestação física e a deixando sem lugar para fugir caso esteja próximo de ser derrotada.</p>',
      description:
        "<p>Uma lenda urbana que se popularizou entre crianças graças a uma história usada por pais para evitar desperdício de água, mas que tomou proporções terríveis após um famoso escritor adaptar a lenda em um conto de terror.</p><p>Sua invocação está sempre associada a mulheres que morreram em afogamentos brutais e trágicos, de forma acidental ou intencional. Quando presente em um ambiente, a mulher afogada se movimenta em forma de Sangue líquido pelos encanamentos de casas assombradas, podendo ser identificada através da coloração avermelhada no fluido escorrendo das saídas de água.</p><p>A mulher afogada também pode atacar em surtos de Sangue, puxando o seu alvo para dentro do encanamento, os afogando e depois devorando lentamente dentro dos canos. Por ser uma criatura de Medo, a mulher afogada exige um processo complexo para ser derrotada.</p><p>Para ser invocada completamente em forma física, um processo da investigação da sua origem precisa ser completado, e um ritual envolvendo abrir diversas torneiras ao mesmo tempo precisa ser realizado associado aos elementos da sua manifestação.</p>",
    },
    {
      name: "Titã de Sangue",
      element: "sangue",
      secondaryElements: [],
      vd: 220,
      creatureType: "criatura",
      imunidades: [],
      creatureSize: "colossal",
      presencaPerturbadora: { dt: 30, dice: "7d6", nex: 70 },
      skills: {
        perception: { rollNumber: 1, rollBonus: 15 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 2, rollBonus: 10 },
        will: { rollNumber: 1, rollBonus: 10 },
      },
      perceptionType: "Percepção às cegas",
      defense: 35,
      pvMax: 550,
      pvCurrent: 550,
      resistencias: { balistico: 20, impacto: 20, perfuracao: 20, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 2, str: 5, int: 1, pre: 1, con: 4 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Sede de Sangue",
          description:
            "<p>Os ataques do titã causam +4d6 pontos de dano de Sangue em personagens que estejam machucados ou sangrando.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 25,
              damage: [
                { id: "0", value: "4d12", damageType: "perfuração" },
                { id: "0", value: "10", damageType: "perfuração" },
              ],
            },
            {
              id: "0",
              name: "Garras",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 25,
              damage: [
                { id: "0", value: "4d8", damageType: "corte" },
                { id: "0", value: "10", damageType: "corte" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Estraçalhar",
          tests: [
            {
              id: "0",
              skillName: "Reflexos",
              dt: 30,
              reduceEffect: !0,
              damage: [
                { id: "0", damageType: "perfuração", value: "4d12" },
                { id: "0", damageType: "perfuração", value: "10" },
              ],
            },
          ],
          description:
            "<p>Se o titã acertar um ser com sua mordida, ele estraçalha o alvo, que sofre 4d12+10 pontos de dano de perfuração e fica sangrando até final da cena (Reflexos DT 30 reduz o dano à metade e evita a condição).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/tita-de-sangue.webp",
      sheetPictureURL: "/img/creatures/tita-de-sangue-profile.webp",
      description:
        "<p>A maior versão já encontrada de um zumbi de Sangue, o titã é uma criatura monstruosa com mais de quatro metros de altura. Uma massa corporal de carne e Sangue endurecida e musculosa, com veias saltadas ao redor de todo seu corpo e uma enorme boca com quatro gigantes quelíceras capazes de desfigurar para sempre qualquer alvo, isto se este conseguir sair vivo de um de seus ataques brutais.</p><p>Manifestados apenas em locais com a membrana debilitada em que massacres e carnificinas terríveis aconteceram, os titãs de Sangue podem ser formados do aglomerado de vários corpos em apenas um, ou o resultado de uma pessoa de exposição paranormal extremamente elevada sendo devorada pelo Sangue.</p>",
    },
    {
      name: "Zumbi de Sangue",
      element: "sangue",
      vd: 20,
      creatureType: "criatura",
      secondaryElements: [],
      creatureSize: "médio",
      imunidades: [],
      presencaPerturbadora: { dt: 15, dice: "2d6", nex: 25 },
      skills: {
        perception: { rollNumber: 1, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 5 },
      },
      perceptionType: "Percepção às cegas",
      defense: 17,
      pvMax: 45,
      pvCurrent: 45,
      resistencias: { balistico: 5, impacto: 5, perfuracao: 5, sangue: 10 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 2, str: 2, int: 0, pre: 1, con: 2 },
      movement: 9,
      powers: [],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garras",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", value: "1d6", damageType: "corte" },
                { id: "0", value: "5", damageType: "corte" },
              ],
            },
          ],
        },
      ],
      fullPictureURL: "/img/creatures/zumbi-de-sangue.webp",
      sheetPictureURL: "/img/creatures/zumbi-de-sangue-profile.webp",
      description:
        "<p>Quando cadáveres que morreram de forma muito brutal ou dolorosa são abandonados em uma área, servem como uma passagem para a entidade de Sangue devorá-los e tomar controle de sua forma física.</p><p>Sua pele se transforma num material gosmento e vermelho, seus ossos de desfazem se transformando em pura carne, seus olhos são destruídos, os dentes crescem e se tornam pontudos e suas unhas se estendem em grandes e perigosas garras.</p><p>O tempo de transformação de um corpo para um zumbi de Sangue é irregular, ele depende do corpo sendo devorado e do ambiente em que a metamorfose acontece. É possível enfrentar um cadáver no meio do processo da metamorfose, o que resulta em um zumbi de Sangue mais frágil do que um corpo tomado por completo.</p><p>Zumbis de Sangue são cegos e detectam presenças pela movimentação da corrente de ar. Isso porque sua pele exposta é tão sensível que até os mais sutis movimentos do ar lhe causam dor e revelam a ele a posição de seus alvos.</p><p>Essas criaturas se comportam de maneira bestial e agressiva, como feras descontroladas que buscam apenas devorar toda a carne. Sem raciocinar ou pensar estrategicamente em nenhum momento, são movidos apenas por um frenesi obsessivo e brutal.</p>",
    },
    {
      name: "Zumbi de Sangue Bestial",
      element: "sangue",
      vd: 100,
      creatureType: "criatura",
      secondaryElements: [],
      creatureSize: "grande",
      imunidades: [],
      presencaPerturbadora: { dt: 20, dice: "4d6", nex: 45 },
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 15 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      perceptionType: "Percepção às cegas",
      defense: 23,
      pvMax: 200,
      pvCurrent: 200,
      resistencias: { balistico: 5, impacto: 5, perfuracao: 5, sangue: 10 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 2, str: 3, int: 0, pre: 2, con: 3 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollBonus: 13, rollNumber: 2 },
      ],
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Furtivo e Letal",
          description:
            "<p>Quando ataca um personagem desprevenido, o zumbi de Sangue bestial recebe +1d20 nos testes de ataque e, se acertar, cada ataque causa dois dados de dano adicional do mesmo tipo.</p>",
        },
        {
          id: "1",
          name: "Instinto Predatório",
          description:
            "<p>O zumbi de Sangue bestial não sofre penalidade em Furtividade por se mover seu deslocamento normal.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida de Sangue",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 15,
              damage: [
                { id: "0", value: "2d10", damageType: "perfuração" },
                { id: "0", value: "5", damageType: "perfuração" },
              ],
            },
            {
              id: "1",
              name: "Garras de Sangue",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 15,
              damage: [
                { id: "0", value: "2d6", damageType: "corte" },
                { id: "1", value: "5", damageType: "corte" },
              ],
            },
          ],
        },
      ],
      fullPictureURL: "/img/creatures/zumbi-de-sangue-bestial.webp",
      sheetPictureURL: "/img/creatures/zumbi-de-sangue-bestial-profile.webp",
      description:
        "<p>Uma versão maior, mais forte e brutal de um zumbi de Sangue, os bestiais costumam ser resultado de um cadáver que foi torturado brutalmente e sentiu dores indescritíveis antes de morrer, ou surgem do corpo de alguém com exposição paranormal elevada que foi devorado por completo pelo Sangue.</p><p>Um zumbi de Sangue bestial é pesado — sua massa corporal cresce até atingir o triplo da massa do cadáver do qual se originou. Seu corpo se adapta a uma forma quadrúpede animalesca e o crânio inteiro do cadáver original é partido ao meio a partir do topo da cabeça, se transformando numa enorme bocarra com dentes capazes de decapitar um ser humano em apenas uma mordida.</p><p>Ao contrário de sua versão inferior, os bestiais tomam uma atitude mais estratégica em combates. Agem com instintos predatórios, muitas vezes se escondendo e esperando para pegar seus alvos desprevenidos em ataques surpresas.</p>",
    },
  ],
  a = [
    {
      name: "O Deus da Morte",
      element: "morte",
      secondaryElements: ["conhecimento", "medo"],
      vd: 400,
      creatureSize: "grande",
      creatureType: "relíquia",
      presencaPerturbadora: { dice: "10d8", dt: 45 },
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 5, rollBonus: 30 },
        initiative: { rollNumber: 6, rollBonus: 30 },
        fortitude: { rollNumber: 7, rollBonus: 35 },
        reflex: { rollNumber: 6, rollBonus: 35 },
        will: { rollNumber: 5, rollBonus: 35 },
      },
      defense: 60,
      pvCurrent: 2e3,
      pvMax: 2e3,
      imunidades: ["morte"],
      imunidadesAditional: "Condições de atordoamento e paralisia",
      resistencias: { corte: 20, impacto: 20, perfuracao: 20 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 6, str: 6, int: 5, pre: 5, con: 7 },
      movement: 15,
      powers: [
        {
          id: "0",
          name: "Ciclo Infinito",
          description:
            "<p>O Deus da Morte recupera 50 PV no início de cada um de seus turnos. Quando é reduzido a 0 PV ou menos, ele se transforma em uma poça de Lodo. No começo do seu próximo turno, ele se manifesta no cadáver mais próximo do corpo original (ou no corpo com maior NEX a seu alcance), recuperando todos os seus PV e se curando de todas as condições. Quando seu Enigma de Medo for resolvido, ele perde a regeneração e a capacidade de se manifestar em um corpo próximo quando reduzido a 0 PV ou menos.</p>",
        },
        {
          id: "1",
          name: "Destruir o Diabo",
          description:
            "<p>O Deus da Morte é a única coisa capaz de causar a solução do Enigma de Medo do Diabo.</p>",
        },
        {
          id: "2",
          name: "Potência da Morte",
          description:
            "<p>O modificador do Deus da Morte para todos os testes de perícia baseados em Força, Vigor ou Presença é +35, e para testes baseados nos demais atributos, é +25.</p>",
        },
        {
          id: "3",
          name: "Senhor do Tempo",
          macros: [{ id: "0", value: "1d20" }],
          description:
            "<p>O Deus da Morte é um manipulador do tempo. No início de cada rodada, ele rola 1d20 e recebe um turno adicional na contagem de iniciativa correspondente ao resultado desta jogada.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Soco Espiral",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 6,
              rollBonus: 45,
              damage: [
                { id: "0", damageType: "morte", value: "5d10" },
                { id: "1", damageType: "morte", value: "50" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Agarrão",
          macros: [{ id: "0", value: "6d20k1+47" }],
          description:
            "<p>Se o Deus da Morte acertar um ataque de soco espiral em um ser Médio ou menor, pode tentar agarrar o alvo (teste 6d20+47).</p>",
        },
        {
          id: "2",
          type: "livre",
          name: "Controlar Relógio Interno",
          description:
            "<p>No início de cada um de seus turnos, o Deus da Morte encerra até duas condições que o estejam afetando.</p>",
        },
        {
          id: "3",
          type: "movimento",
          name: "Controlar Mortos",
          description:
            "<p>O Deus da Morte controla qualquer criatura de Morte em alcance longo, fazendo-as percorrer seu deslocamento e realizar um ataque.</p>",
        },
        {
          id: "4",
          type: "movimento",
          name: "Espiral Descendente",
          macros: [{ id: "0", value: "3d20" }],
          description:
            "<p>O Deus da Morte acelera o tempo de um ser que esteja agarrando, mas faz com que ele sinta cada segundo passando, paralisado e sem poder agir. O ser envelhece 3d20 anos. Para cada ano envelhecido, sofre 1 ponto de dano mental.</p>",
        },
        {
          id: "5",
          type: "padrão",
          name: "Espiral Destrutiva",
          tests: [
            {
              id: "0",
              dt: 45,
              reduceEffect: !0,
              skillName: "Fortitude",
              damage: [
                { id: "0", damageType: "morte", value: "10d10" },
                { id: "0", damageType: "morte", value: "50" },
              ],
            },
          ],
          description:
            "<p>O Deus da Morte cria uma enorme espiral de Morte com 12m de raio em alcance longo. Todos os personagens dentro da área sofrem 10d10+50 pontos de dano de Morte (Fortitude DT 45 reduz à metade).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/o-deus-da-morte.webp",
      sheetPictureURL: "/img/creatures/o-deus-da-morte-profile.webp",
      enigmaDoMedo:
        "<p>O Deus da Morte é a manifestação primordial da Morte na Realidade. Uma entidade que ultrapassa a compreensão humana, é o verdadeiro guardião da cronologia, capaz de manipular completamente a percepção temporal dentro da Realidade. O Deus da Morte é uma manifestação de poder imensurável e citar seu nome é o suficiente para fazer com que agentes experientes fiquem em silêncio completo. Ninguém sabe como destruí-lo, mas todas as suposições apontam que a resposta está em outra entidade.</p><p>Caso seu Enigma de Medo enfim seja resolvido, o Deus da Morte perde suas habilidades Ciclo Infinito e Senhor do Tempo.</p>",
      description:
        "<p>O Deus da Morte, também conhecido como Parasita de Dimensões, é uma entidade suprema e extremamente poderosa. Originalmente essa entidade se manifesta em uma aparência disforme que infecta o ambiente inteiro consumindo a entropia, ou seja, a energia potencial e o tempo de tudo que é vivo</p><p>Essa entidade pode se tornar ainda mais perigosa ao parasitar o corpo morto de alguém com o nível de exposição paranormal extremamente elevado e que dedicou grande parte da sua vida à Morte, servindo como receptáculo para uma manifestação descomunal. O Lodo consome o cadáver original por completo, reforçando e remodelando sua estrutura com tendões pretos em espiral.</p><p>Em seu semblante permanece revelado apenas o crânio exposto, com o Lodo rastejando e invadindo o interior da cabeça através dos orifícios, como lágrimas pretas nos olhos vazios. O Deus da Morte tem um comportamento totalmente apático, como se estivesse consciente de sua manifestação dentro da Realidade e não considerasse nada ao seu redor digno de sua presença.</p><p>A proporção de seus poderes é praticamente imensurável, com algumas teorias afirmando que o Deus da Morte teria o poder de devastar civilizações completas se isso de alguma forma fosse de seu interesse, mas o seu comportamento segue inexplicável. Nada parece interessar o Deus da Morte além de consumir o tempo de vida daqueles dentro da Realidade.</p><p>Tudo termina, tudo retorna. Uma relíquia consciente e onipresente, capaz de imortalizar a sua existência inteira com a transferência de um receptáculo para outro, em um ciclo eterno de fim e renascimento dentro da Realidade. O Deus da Morte não viaja através do espaço, mas sim pelo tempo, graças à sua distorção temporal espiralizada não-linear, e por isso, pode estar manifestado em diversas formas e em diversos pontos da Realidade ao mesmo tempo.</p><p>É POSSÍVEL DESTRUIR A PRÓPRIA MORTE?</p>",
    },
    {
      name: "Aracnasita",
      element: "morte",
      secondaryElements: ["medo"],
      vd: 80,
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 20, dice: "4d6", nex: 40 },
      skills: {
        perception: { rollNumber: 1, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 10 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 3, rollBonus: 10 },
        will: { rollNumber: 1, rollBonus: 5 },
      },
      perceptionType: "Percepção às cegas",
      defense: 23,
      pvMax: 140,
      pvCurrent: 140,
      imunidades: ["dano"],
      vulnerabilidades: ["energia"],
      resistencias: {},
      attributes: { dex: 3, str: 2, int: 1, pre: 1, con: 2 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 3, rollBonus: 8 },
      ],
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Percepção Tátil",
          description:
            "<p>A aracnasita percebe tudo que está em contato com sua teia. Ela ignora penalidades por visão ou condições de sentidos para objetos e seres em contato com a teia.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 15,
              damage: [
                { id: "0", value: "2d10", damageType: "perfuração" },
                { id: "0", value: "10", damageType: "perfuração" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Estacar",
          automaticDamage: [{ id: "0", damageType: "morte", value: "1d10" }],
          tests: [
            { id: "0", dt: 20, skillName: "Atletismo", reduceEffect: !1 },
          ],
          description:
            "<p>Quando causa dano com sua mordida, a aracnasita pode usar seu Lodo da Morte para prender o alvo no lugar. A vítima sofre +1d10 pontos de dano de Morte e fica agarrada. Ela pode se soltar gastando uma ação padrão e um teste de Atletismo (DT 20). Personagens adjacentes podem gastar uma ação padrão para soltá-la com o mesmo teste (ou ajudá-la em seu próprio teste).</p>",
        },
        {
          id: "2",
          type: "reação",
          name: "Desovar Aranhas",
          tests: [
            {
              id: "0",
              dt: 15,
              skillName: "Vontade",
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "mental", value: "2d6" }],
            },
            {
              id: "0",
              dt: 15,
              skillName: "Fortitude",
              reduceEffect: !0,
              damage: [{ id: "0", damageType: "morte", value: "2d8" }],
            },
          ],
          description:
            "<p>Uma vez por cena, quando ficar machucada, a aracnasita desova diversas aranhas menores, que se espalham em sua volta gerando efeitos diversos. No início de cada turno da aracnasita após isso, ela executa um dos seguintes efeitos, nesta ordem.</p><p>No primeiro turno, as aranhas se espalham ao redor da aracnasita. Até o fim da cena, um personagem que inicie seu turno em alcance curto da criatura sofre 2d6 pontos de dano mental (Vontade DT 15 reduz à metade).</p><p>A partir do segundo turno, as aranhas atacam os personagens ao redor da aracnasita. Até o fim da cena, um personagem que inicie seu turno em alcance curto da criatura sofre 2d8 pontos de dano de Morte (Fortitude DT 15 reduz à metade).</p><p>No terceiro turno, as aranhas menores se espalham ainda mais. Os dois efeitos acima agora afetam personagens que iniciem seu turno em alcance médio da aracnasita.</p><p>A partir do quarto turno, caso um personagem morra em alance médio da aracnasita, será consumido por uma aranha, que irá se transformar em uma nova aracnasita com 70 PV e sem a habilidade Desovar Aranhas.</p>",
        },
        {
          id: "3",
          type: "movimento",
          name: "Disparar Teia",
          tests: [
            { id: "0", skillName: "Reflexos", dt: 20, reduceEffect: !1 },
            { id: "1", skillName: "Atletismo", dt: 20, reduceEffect: !1 },
          ],
          automaticDamage: [{ id: "0", damageType: "morte", value: "2d8+10" }],
          description:
            "<p>A aracnasita dispara uma teia em alcance curto. A teia ocupa uma área quadrada com 3m de lado. Personagens na área ou que entrem nela, ficam agarrados (Reflexos DT 20 evita). A teia é tomada pelo Lodo da Morte, fazendo com que qualquer personagem que inicie seu turno agarrado por ela sofra 2d8+10 pontos de dano de Morte. Um personagem pode escapar da teia causando 15 pontos de dano de corte a ela ou gastando uma ação padrão para rasgá-la (Atletismo DT 20). A teia dura até fim da cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/aracnasita.webp",
      sheetPictureURL: "/img/creatures/aracnasita-profile.webp",
      enigmaDoMedo:
        "<p>A aracnasita se forma a partir de uma aranha que entra em contato com o Lodo da Morte através de um símbolo poderoso e cresce quando captura um ser humano para paristar. Por isso, ela continua a manifestar esse Lodo por todo seu corpo e guarda uma grande quantidade em seu abdômem, onde fica a vítima que está sendo parasitada. O Lodo serve como uma proteção paranormal e faz com que seu corpo seja impossível de ser ferido. Ainda assim, existe uma forma de derrota-la.</p><p>O Lodo da Morte em seu corpo procura fugir do fogo e do calor, movimentando-se lentamente para longe da fonte quente. Caso sofra dano de fogo, a aracnasita perde sua imunidade a dano até o início do próximo turno.</p>",
      description:
        "<p>A distorção que a exposição paranormal pode causar a uma criatura na Realidade é imensurável e resultados assustadores podem fazer um pequeno aracnídeo se deformar a uma entidade parasitária enorme que se alimenta do tempo de vida humano para desenvolver-se em uma aberração gigantesca.</p><p>A aracnasita, também nomeada aranha preta da Morte, é uma entidade originada de uma criatura da Realidade exposta a um símbolo de invocação de Morte, desenvolvendo um comportamento parasitário. Ainda em seu estado minúsculo e não desenvolvido, as aracnasitas almejam surpreender suas vítimas para se agarrar ao seu rosto e as manter desacordadas.</p><p>Então, a criatura lentamente absorve o corpo inteiro ainda vivo em uma espécie de casulo enorme na região de seu abdomên. Quanto mais tempo a aracnasita absorve de sua vítima, maior e mais poderosa ela se torna, capaz de se reproduzir de maneira acelerada, gerando inúmeras pequenas cópias de si mesma, com essas sendo incapazes de se reproduzir de forma independente e agindo como invocações associadas diretamente à criatura original.</p><p>Mesmo agentes experientes e preparados já foram pegos de surpresa e devorados por essa criatura terrível, por isso, as táticas para enfrentar uma aberração dessas devem ser estratégicas, especialmente em ambientes de desvantagem como florestas.</p>",
    },
    {
      name: "Carniçal Preto da Morte",
      element: "morte",
      secondaryElements: ["conhecimento"],
      vd: 200,
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 30, dice: "6d6", nex: 65 },
      skills: {
        perception: { rollNumber: 3, rollBonus: 15 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 3, rollBonus: 15 },
        reflex: { rollNumber: 4, rollBonus: 15 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      perceptionType: "Percepção às cegas",
      defense: 38,
      pvCurrent: 400,
      pvMax: 400,
      imunidades: ["balístico"],
      resistencias: { corte: 10, impacto: 10, perfuracao: 10, morte: 20 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 4, str: 4, int: 3, pre: 3, con: 3 },
      extraSkills: [
        { id: "0", name: "Atletismo", rollNumber: 4, rollBonus: 15 },
      ],
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Físico Paranormal",
          description:
            "<p>O carniçal possui um porte físico poderoso e pode saltar o dobro do deslocamento normal.</p>",
        },
        {
          id: "1",
          name: "Instinto Mortal",
          description:
            "<p>O carniçal age de maneira precisa e quase calculista, mas isso muda quando está machucado (com 200 PV ou menos). Nessa condição, ele usa a Hipnose como ação livre no começo de cada um de seus turnos e pode fazer um ataque adicional de garra da morte se atacar o mesmo alvo com suas duas garras.</p>",
        },
        {
          id: "2",
          name: "Corpo Fechado",
          description:
            "<p>Um ser que use a ação mirar para disparar na cabeça do carniçal ignora sua imunidade a dano balístico.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garra da Morte",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 25,
              damage: [
                { id: "0", value: "4d10", damageType: "morte" },
                { id: "1", value: "20", damageType: "morte" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "reação",
          name: "Pancada Poderosa",
          automaticDamage: [{ id: "0", damageType: "impacto", value: "4d6" }],
          description:
            "<p>Quando desfere um acerto crítico com sua garra da Morte, o carniçal pode empurrar seu alvo 6m em qualquer direção. Se colidir com um objeto resistente, como uma parede ou um carro, a vítima sofre 4d6 pontos de dano de impacto. Se o objeto for outro ser, ambos sofrem esse dano.</p>",
        },
        {
          id: "2",
          type: "movimento",
          name: "Comando",
          tests: [{ id: "0", dt: 29, skillName: "Vontade", reduceEffect: !1 }],
          description:
            "<p>O carniçal dá um comando para um ser em alcance curto, que deve obedecer da forma mais eficiente possível (Vontade DT 29 evita). Em termos de regras, isso gera um dos efeitos básicos do ritual Perturbação.</p>",
        },
        {
          id: "3",
          type: "padrão",
          name: "Hipnose",
          tests: [{ id: "0", dt: 29, skillName: "Vontade", reduceEffect: !1 }],
          description:
            "<p>O carniçal domina a mente de um ser em alcance curto (Vontade DT 29 evita). A vítima fica sob controle telepático total do carniçal, e fará tudo que ele mandar, exceto tirar sua própria vida — em termos de jogo, fica sob controle do mestre. No final de cada turno do ser hipnotizado, ele pode repetir o teste de Vontade, com um bônus cumulativo de +1 por teste já realizado. Se passar, sai do comando do carniçal. O carniçal pode ter até três seres hipnotizados por vez. Caso o carniçal use essa habilidade em um alvo enlouquecendo, o ser falha automaticamente e fica sob domínio permanente do carniçal (até que o carniçal seja destruído). Um ser nesta condição pode até mesmo tirar a própria vida, se assim for comandado.</p>",
        },
        {
          id: "4",
          type: "completa",
          name: "Reanimar Corpos",
          macros: [{ id: "0", value: "2d4+2" }],
          description:
            "<p>Uma vez por cena, o carniçal usa a Morte para fazer com que até 2d4+2 corpos em alcance médio sejam reanimados. Os reanimados agem de maneira violenta e bestial, atacando o ser mais próximo até serem destruídos. Use a ficha do esqueleto de Lodo para esses corpos reanimados.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/carnical-preto-da-morte.webp",
      sheetPictureURL: "/img/creatures/carnical-preto-da-morte-profile.webp",
      description:
        "<p>Originada de uma tentativa fracassada de dar consciência à entidade da Morte dentro da Realidade, o carniçal preto é uma criatura formada de Lodo entrelaçado a partir de um crânio humano apodrecido.</p><p>Os sigilos de Conhecimento no símbolo usado para invocá-lo são o suficiente para que o Lodo tente replicar a estrutura humana, originando uma forma resistente, magra e definida que se assemelha muito à anatomia muscular humana exposta.</p><p>É impossível determinar o nível de consciência do carniçal dentro da Realidade, mas a sua postura e comportamento inteligentes despertam mistério. Ele caminha com um ar de superioridade e arrogância, como se aqueles em seu caminho não fizessem juz à sua presença.</p><p>Relatos de encontros com um carniçal apontam que a criatura age com estratégia, mas o maior determinante é o símbolo hipnótico cravado em sua cabeça, que parece clamar e distorcer a percepção daqueles que o observam, desviando seus ataques a aliados que nunca teriam coragem de ferir. Porém, o tempo também parece ser um grande fator para o carniçal. Como se a casca que origina a sua forma não pudesse conter a sua manifestação com facilidade, a criatura demonstra se tornar mais irracional com o passar do tempo.</p>",
    },
    {
      name: "Ceifador Espiral",
      element: "morte",
      secondaryElements: ["medo"],
      vd: 380,
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 45, dice: "9d8" },
      skills: {
        perception: { rollNumber: 5, rollBonus: 20 },
        initiative: { rollNumber: 5, rollBonus: 20 },
        fortitude: { rollNumber: 5, rollBonus: 25 },
        reflex: { rollNumber: 5, rollBonus: 25 },
        will: { rollNumber: 5, rollBonus: 25 },
      },
      perceptionType: "Percepção às cegas",
      defense: 58,
      pvCurrent: 999,
      pvMax: 999,
      imunidades: ["morte"],
      imunidadesAditional: "Condições de paralisia e lento",
      resistencias: { dano: 50 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 5, str: 5, int: 5, pre: 5, con: 5 },
      movement: 15,
      powers: [
        {
          id: "0",
          name: "Decepar",
          description:
            "<p>Se o Ceifador Espiral faz um acerto crítico com sua foice da Morte, o alvo é reduzido a 25 PV e perde 1 ponto de Força, Agilidade ou Vigor permanentemente (decida aleatoriamente). Caso o alvo tenha 25 PV ou menos, morre de imediato. Toda vez que o Ceifador Espiral mata uma criatura, recebe 50 PV temporários, e seus ataques de foice da Morte causam +1d10 pontos de dano até o final da cena.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Foice da Morte",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 40,
              damage: [
                { id: "0", value: "5d10", damageType: "morte" },
                { id: "1", value: "20", damageType: "morte" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "movimento",
          name: "Transporte pelo pó",
          description:
            "<p>Enquanto estiver dentro da área criada por sua habilidade Cinzas das Terras Desoladas, o Ceifador poderá usar uma ação de movimento para se transportar para outro espaço dentro dessa área. Quando terminar esse movimento, ele pode fazer um ataque com sua Foice da Morte como ação livre.</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Contemplar a Espiral",
          tests: [
            {
              id: "0",
              dt: 43,
              skillName: "Vontade",
              reduceEffect: !0,
              damage: [
                { id: "0", damageType: "mental", value: "10d10" },
                { id: "1", damageType: "mental", value: "30" },
              ],
            },
          ],
          description:
            "<p>O Ceifador Espiral usa sua foice para manifestar a verdadeira espiral da Morte. Todos os seres em alcance médio que consigam vê-lo sofrem 10d10+30 pontos de dano mental (Vontade DT 43 reduz à metade). Um ser que tenha sofrido dano desta habilidade fica imune a ela até final da cena.</p>",
        },
        {
          id: "3",
          type: "completa",
          name: "Cinzas das Terras Desoladas",
          tests: [
            {
              id: "0",
              dt: 43,
              skillName: "Fortitude",
              reduceEffect: !0,
              damage: [
                { id: "0", damageType: "morte", value: "10d10" },
                { id: "1", damageType: "morte", value: "20" },
              ],
            },
          ],
          description:
            "<p>O Ceifador Espiral usa seus muitos braços para realizar um rito de invocação. Uma área de alcance longo em volta de si é tomada pelas cinzas das terras desoladas, um local acelerado pelo tempo onde tudo é transformado em pó. Cada ser dentro da área sofre 10d10+20 pontos de dano de Morte e fica enjoado (Fortitude DT 43 reduz o dano à metade e evita a condição). Um ser que termine seu turno dentro dessa área sofre 20 pontos de dano de Morte.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/ceifador-espiral.webp",
      sheetPictureURL: "/img/creatures/ceifador-espiral-profile.webp",
      enigmaDoMedo:
        "<p>A espiral consome todos, pois é o próprio tempo reverso em si. Não se pode parar a espiral, pois cada corrida para um círculo externo é um caminho mais longo em direção ao fim. É cansar, ao invés de findar. Aqueles que quebram a espiral são aqueles que a transformam em uma linha. Mesmo que infinita, a linha é limitada. Ela é definida por suas beiradas e, portanto, existe escapatória. Transformar a espiral em linha, porém, é uma tarefa misteriosa, que requer esforço e energia quase inimagináveis.</p><p>Quando seu Enigma de Medo for resolvido, o Ceifador Espiral perde sua resistência a dano e qualquer área de Terras Desoladas se torna terreno normal no final do seu próximo turno.</p>",
      description:
        "<p>Você já enxergou o rosto da Morte? Aqueles que viveram experiências de quase morte afirmam ter enxergado a própria vida passando na frente de seus olhos. Mas existem também aqueles que tiveram experiências ainda mais intensas e por um momento visitaram o fim de sua vida, antes de serem trazidos de volta por algum processo de ressuscitação, como massagem cardíaca ou desfibriladores.</p><p>Alguns desses raros casos descrevem lembranças de uma experiência ainda mais intensa. O que no princípio parecia ser uma visão de uma sequência de momentos da sua vida ia aos poucos se distorcendo, espiralizando e se revelando uma silhueta com aspecto cada vez mais definido. E então, se tornava claro. Todos os seus momentos sendo devorados por uma criatura, no fim de tudo. O rosto da Morte: o Ceifador Espiral.</p><p>Todos aqueles que presenciaram o rosto se tornaram obcecados com a ideia da imortalidade, desesperados com a possibilidade de encontrar aquele ser outra vez. Registros de civilizações isoladas ao redor do mundo todo foram encontrados relatando a presença de uma manifestação paranormal que se assemelhava às descrições do Ceifador Espiral, mas a grande maioria dessas evidências estavam praticamente desintegradas pelos efeitos da Morte e foram encontradas no meio de amplos “desertos de cinzas” com dunas espiraladas.</p><p>A falta de informações e evidências sobre essa criatura remete a apenas uma conclusão: se o Ceifador Espiral se manifesta em um ambiente na Realidade, tudo é levado pela Morte. Ninguém permanece vivo para contar a história, nenhuma estrutura persiste em pé para revelar o passado… Mas as cinzas e o Lodo marcam o legado eterno da Morte.</p>",
    },
    {
      name: "Enraizado",
      element: "morte",
      vd: 120,
      creatureType: "criatura",
      secondaryElements: [],
      creatureSize: "médio",
      imunidades: [],
      presencaPerturbadora: { dt: 20, dice: "4d6", nex: 50 },
      skills: {
        perception: { rollNumber: 1, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 3, rollBonus: 10 },
        will: { rollNumber: 1, rollBonus: 5 },
      },
      perceptionType: "Percepção às cegas",
      defense: 28,
      pvCurrent: 140,
      pvMax: 140,
      resistencias: { corte: 10, impacto: 10, perfuracao: 10, morte: 20 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 3, str: 3, int: 1, pre: 1, con: 3 },
      extraSkills: [
        { id: "0", name: "Atletismo", rollBonus: 10, rollNumber: 3 },
      ],
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Imortalidade",
          description:
            "<p>Quando o enraizado morre, se desfaz em uma poça de Lodo, galhos e raízes. Ele retornará após 1d2 rodadas com 70 PV. Se sofrer 20 pontos de dano de fogo ou de Energia somados enquanto estiver na forma de poça, será permanentemente destruído.</p>",
        },
        {
          id: "1",
          name: "Veneno Pútrido",
          tests: [
            {
              id: "0",
              dt: 23,
              reduceEffect: !1,
              skillName: "Fortitude",
              damage: [{ id: "0", damageType: "morte", value: "4d12" }],
            },
          ],
          description:
            "<p>A primeira vez que um personagem sofre dano do punho espinhento em uma cena, fica envenenado. No início de cada um de seus turnos, o personagem deve fazer um teste de Fortitude (DT 23). Se falhar, sofre 4d12 pontos de dano de Morte. Se passar, se cura do veneno.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "Punho Espinhento",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 15,
              damage: [
                { id: "0", value: "2d8", damageType: "impacto" },
                { id: "1", value: "8", damageType: "impacto" },
                { id: "2", value: "2d12", damageType: "morte" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
      ],
      fullPictureURL: "/img/creatures/enraizado.webp",
      sheetPictureURL: "/img/creatures/enraizado-profile.webp",
      description:
        "<p>A Morte se espalha de maneiras misteriosas, mas parece infectar em especial áreas com alta biodiversidade e flora extensiva, como florestas, as corrompendo e consumindo vagarosamente. Nem mesmo cadáveres putrefatos, sepultados há muitos anos, estão livres de se tornarem uma casca infectada pela entidade.</p><p>Um enraizado é o resultado de um corpo enterrado próximo à vegetação infestada pela Morte, invadido por raízes grossas e preenchido com o Lodo que movimenta seus membros reforçados pela estrutura bizarra que se forma das raízes entrelaçadas, como um esqueleto de armadura.</p>",
    },
    {
      name: "Escutado",
      element: "morte",
      secondaryElements: ["energia", "medo"],
      creatureType: "criatura",
      vulnerabilidades: [],
      creatureSize: "médio",
      vd: 160,
      presencaPerturbadora: { dt: 25, dice: "4d8", nex: 55 },
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 4, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      defense: 29,
      pvCurrent: 290,
      pvMax: 290,
      imunidades: ["dano"],
      resistencias: {},
      attributes: { dex: 4, str: 3, int: 1, pre: 2, con: 3 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Multiplicação Melódica",
          description:
            "<p>No início do turno do escutado, se ele estiver ouvindo a melodia de sua criação, manifesta uma cópia sua em um ponto a sua escolha em alcance curto. A cópia possui 145 PV, não tem imunidade a dano e age junto com o escutado original, a partir do próximo turno dele. As cópias também possuem essa habilidade, gerando novas cópias caso aplicável. O escutado e suas cópias tentarão eliminar o ser que estiver tocando a melodia.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 20,
              damage: [
                { id: "0", damageType: "perfuração", value: "3d6" },
                { id: "1", damageType: "perfuração", value: "10" },
              ],
              criticalMult: 2,
              criticalRange: 20,
              range: "Corpo a corpo",
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Cabeça Arremessada",
              range: "Distância - Curto",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 15,
              damage: [
                { id: "0", damageType: "impacto", value: "1d10" },
                { id: "1", damageType: "impacto", value: "10" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "2",
          type: "movimento",
          name: "Vomitar Lodo",
          tests: [
            {
              id: "0",
              dt: 25,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [
                { id: "0", damageType: "morte", value: "4d10" },
                { id: "1", damageType: "morte", value: "10" },
              ],
            },
          ],
          description:
            "<p>Uma vez por cena, na primeira rodada após ser manifestada, cada cópia do escutado despeja um jorro de Lodo em um ser em alcance curto. O alvo sofre 4d10+10 pontos de dano de Morte e fica lento até o fim da cena (Reflexos DT 25 reduz o dano à metade e evita condição).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/escutado.webp",
      sheetPictureURL: "/img/creatures/escutado-profile.webp",
      enigmaDoMedo:
        "<p>Tocar a melodia do escutado exige gastar uma ação padrão e passar em um teste de Artes (DT 25) por rodada, ou ligar um aparelho como rádio ou celular que possua essa música. Enquanto a melodia estiver tocando, o escutado ficará se multiplicando. Porém, se escutar a melodia por 4 rodadas ininterruptas, perde sua imunidade a dano até o fim da cena e pode enfim ser derrotado.</p><p>Como o escutado precisa escutar a melodia por 4 rodadas, terá a chance de se multiplicar quatro vezes. Isso significa que, se nenhuma cópia for destruída, no fim da quarta rodada haverá 16 criaturas (o original mais 15 cópias)! Para ter alguma chance de sobreviver, os agentes devem tentar destruir as cópias enquanto tocam a melodia, para impedir que elas também se multipliquem - e, obiviamente, parar de tocar a música assim que as 4 rodadas passarem e o escutado perder sua imunidade a dano.</p>",
      description:
        "<p>Originado de alguém que escutou a “Melodia Espiral” - uma música paranormal proibida, capaz de enlouquecer alguém que a ouve inteira - o escutado é um corpo humanoide retorcido e magro. Essa criatura anda de forma quadrúpede e invertida de forma bizarra, com uma cabeça capaz de se desprender do corpo original, deixando um rastro de Lodo vomitado.</p><p>Os relatos daqueles que enfrentaram um escutado afirmam que ele aparenta ser imortal e atraído a todo tipo de melodia. Porém, ao escutar a melodia específica que causou sua origem, a proibida “Spiralem Melodiam”, a criatura fica em um estado extremamente agressivo, buscando a origem da música para destruí-la a todo custo.</p><p>O escutado pode ser derrotado se for exposto a uma parte completa da melodia proibida.</p>",
    },
    {
      name: "Esqueleto de Lodo",
      element: "morte",
      vd: 20,
      creatureType: "criatura",
      creatureSize: "médio",
      imunidades: [],
      secondaryElements: [],
      presencaPerturbadora: { dt: 14, dice: "2d4", nex: 25 },
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 1, rollBonus: 0 },
        initiative: { rollNumber: 2, rollBonus: 0 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      defense: 14,
      pvCurrent: 40,
      pvMax: 40,
      resistencias: { corte: 5, impacto: 5, perfuracao: 5, morte: 10 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 2, str: 2, int: 0, pre: 1, con: 1 },
      movement: 6,
      powers: [
        {
          id: "0",
          name: "Imortitalidade",
          macros: [{ id: "0", value: "1d3" }],
          description:
            "<p>Quando o esqueleto morre, se desfaz em uma poça de Lodo e ossos. Ele retornará após 1d3 rodadas com 20 PV. Se sofrer dano de fogo ou de Energia enquanto estiver na forma de poça, será permanentemente destruído.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garras",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", value: "2d6", damageType: "corte" },
                { id: "1", value: "2", damageType: "corte" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "completa",
          name: "Espiral de Lodo",
          tests: [
            {
              id: "0",
              dt: 14,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [{ id: "0", damageType: "morte", value: "2d10" }],
            },
          ],
          description:
            "<p>O esqueleto se transforma em uma poça de Lodo e se lança para frente como uma espiral perfurante que percorre até 9m em linha reta. Qualquer ser no caminho sofre 2d10 de dano de Morte (Reflexos DT 14 reduz à metade). O esqueleto então se reforma no fim do trajeto.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/esqueleto-de-lodo.webp",
      sheetPictureURL: "/img/creatures/esqueleto-de-lodo-profile.webp",
      description:
        "<p>Um cadáver consumido pela Morte, tomando uma forma completamente esquelética e acinzentada. O Lodo escorre por todos os orifícios de seu corpo, deixando um rastro que parece perseguir a criatura por onde ela passa.</p><p>Sons bizarros podem ser escutados de dentro de seu crânio, como palavras sem sentido e rugidos invertidos em uma voz rasgada e rouca. O esqueleto de Lodo parece sempre se regenerar após ser destruído, porém, a regeneração pode ser desacelerada ou até mesmo interrompida se o Lodo for queimado ou exposto a Energia.</p>",
    },
    {
      name: "Marionete",
      element: "morte",
      vd: 280,
      creatureType: "criatura",
      creatureSize: "médio",
      vulnerabilidades: [],
      secondaryElements: [],
      imunidades: [],
      presencaPerturbadora: { dt: 35, dice: "8d6", nex: 85 },
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 5, rollBonus: 15 },
        initiative: { rollNumber: 3, rollBonus: 15 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 3, rollBonus: 15 },
        will: { rollNumber: 5, rollBonus: 20 },
      },
      defense: 40,
      pvCurrent: 700,
      pvMax: 700,
      resistencias: { corte: 20, impacto: 20, perfuracao: 20, morte: 20 },
      attributes: { dex: 3, str: 5, int: 1, pre: 5, con: 2 },
      movement: 6,
      powers: [
        {
          id: "0",
          name: "Momento Passivo",
          description:
            "<p>Apesar de não ser rápida, a marionete não pode ter seu deslocamento reduzido e ignora qualquer tipo de terreno difícil. Além disso, ela não sofre dano ou efeitos que dependam que ela toque no chão.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Foice Óssea",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 30,
              damage: [
                { id: "0", damageType: "morte", value: "10d8" },
                { id: "1", damageType: "morte", value: "10" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "reação",
          name: "Reflexos guiados por corda",
          description:
            "<p>Uma vez por rodada, quando um ser se aproxima da marionete o suficiente para ficar adjacente, ela pode fazer um ataque de foice da morte contra esse ser.</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Ironia do Destino",
          description:
            "<p>A marionete executa dois ataques com sua foice óssea em um ser adjacente. Se acertar o segundo ataque, ela agarra a vítima com a arma e pode se deslocar 6m carregando-a consigo. Enquanto estiver agarrando um ser, a marionete pode transferir parte de sua dor para ele — sempre que a criatura sofrer dano, se estiver agarrando um ser, o dano é dividido entre ela e o ser que ela estiver agarrando.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/marionete.webp",
      sheetPictureURL: "/img/creatures/marionete-profile.webp",
      description:
        "<p>A tristeza, apatia e negação originadas por um trauma também são capazes de gerar manifestações terríveis dentro da Realidade. A marionete é o resquício de uma memória distorcida por um acontecimento terrível, uma possibilidade roubada, o momento que nunca aconteceu.</p><p>Tomando a forma de um esqueleto retorcido preenchido por Lodo, a marionete é o resultado da rejeição do luto, a tentativa desesperada de trazer alguém de volta dos mortos, e com isso, sua aparência varia dependendo do responsável pela sua manifestação. </p><p>Porém, algumas constantes sempre são reconhecíveis: no crânio da marionete, um fio força a mandíbula a ficar aberta, com Lodo preto escorrendo de dentro constantemente, e seus braços são erguidos como se pendurados por uma força invisível. No topo, uma enorme lâmina de ossos no formato de foice é amarrada a um dos braços, com a ponta sendo a única parte de seu corpo flutuante que toca o chão.</p><p>É sempre possível reconhecer traços familiares daqueles que já se foram ao observar a marionete, e ceder à tentação dessa mentira pode ser a última coisa que você faça. Lembre-se: nada que foi levado pela Morte pode voltar ao que era antes.</p>",
    },
    {
      name: "Múmia Xipófaga",
      element: "morte",
      vd: 240,
      creatureType: "criatura",
      imunidades: [],
      secondaryElements: [],
      creatureSize: "médio",
      presencaPerturbadora: { dt: 30, dice: "6d8", nex: 75 },
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 3, rollBonus: 10 },
        initiative: { rollNumber: 5, rollBonus: 15 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 5, rollBonus: 15 },
        will: { rollNumber: 3, rollBonus: 10 },
      },
      defense: 35,
      pvCurrent: 400,
      pvMax: 400,
      resistencias: { corte: 10, impacto: 10, perfuracao: 10, morte: 20 },
      vulnerabilidades: ["energia", "fogo"],
      attributes: { dex: 5, str: 4, int: 2, pre: 3, con: 4 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Faixas da Permanência",
          description:
            "<p>Uma múmia reduzida a 0 PV não é destruída. Em vez disso, pode continuar agindo até o final do seu próximo turno. Se não terminar seu próximo turno com pelo menos 1 PV, ela morrerá.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garra Enfaixada",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 30,
              damage: [
                { id: "0", value: "4d8", damageType: "corte" },
                { id: "0", value: "30", damageType: "corte" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Vomitar Lodo",
              range: "Disntância - Curto",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 25,
              damage: [
                { id: "0", value: "3d6", damageType: "morte" },
                { id: "1", value: "30", damageType: "morte" },
                { id: "2", value: "3d8", damageType: "mental" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "2",
          type: "livre",
          name: "Agarrada Mumificadora",
          macros: [{ id: "0", value: "4d20k1+30" }],
          automaticDamage: [
            { id: "0", damageType: "morte", value: "4d8" },
            { id: "1", damageType: "morte", value: "30" },
          ],
          description:
            "<p>Se a múmia acertar um ataque de garra enfaixada ela pode agarrar o alvo (teste 4O+30). Enquanto estiver agarrada assim, a vítima sofre 4d8+30 pontos de dano de Morte no início de cada um dos seus turnos e a múmia recupera essa mesma quantidade de PV. Caso o ser seja reduzido a 0 PV dessa forma, se torna um esqueleto de Lodo no começo do seu turno.</p>",
        },
        {
          id: "3",
          type: "padrão",
          name: "Amalgamar",
          description:
            "<p>Enquanto está com 0 PV, a múmia pode amalgamar um ser morto ou uma criatura de Morte adjacente. Se o fizer, ela se entrelaça com o alvo, tornando-se uma versão mais poderosa de si mesma; ela recupera 200 PV, passa a atacar três vezes com suas garras enfaixadas e seus ataques causam +5 pontos de dano cada. Uma múmia que já esteja amalgamada com outro ser pode se amalgamar mais uma vez, combinando-se com um total de dois seres. Ao se amalgamar pela segunda vez, ela recupera mais 200 PV, passa a atacar quatro vezes com suas garras enfaixadas e aumenta o bônus de dano em +5 (para um total de +10 por ataque).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/mumia-xipofaga.webp",
      sheetPictureURL: "/img/creatures/mumia-xipofaga-profile.webp",
      description:
        "<p>Ninguém sabe quando e como o paranormal se manifestou pela primeira vez na Realidade, mas evidências arqueológicas demonstram registros da presença do Outro Lado há milênios. Mesmo nos tempos do Antigo Egito, o ato de mumificação em busca da imortalidade possuía resultados macabros e indesejados.</p><p>A obsessão pela vida eterna que se popularizou através do sepultamento de faraós, mas que secretamente também era exercida por seitas que cultuavam as entidades do Outro Lado, foi responsável pela histeria cultural do pavor à própria Morte, trazendo para a Realidade consequências horrorosas.</p><p>O que possivelmente poderia levar pessoas a mumificar os próprios corpos entrelaçados enquanto ainda vivos? A origem da múmia xifópaga é um mistério perturbador, mas o seu comportamento é ainda mais macabro. Aqueles agarrados pela criatura e absorvidos até o fim de sua vida são fundidos ao seu corpo, se tornando mais um dos seres amalgamados nas amarras da eternidade distorcida da Morte.</p>",
    },
    {
      name: "Nidere",
      element: "morte",
      secondaryElements: ["sangue", "medo"],
      creatureSize: "grande",
      creatureType: "criatura",
      imunidades: [],
      vd: 320,
      presencaPerturbadora: { dt: 35, dice: "8d6", nex: 95 },
      skills: {
        perception: { rollNumber: 4, rollBonus: 25 },
        initiative: { rollNumber: 5, rollBonus: 25 },
        fortitude: { rollNumber: 5, rollBonus: 25 },
        reflex: { rollNumber: 5, rollBonus: 25 },
        will: { rollNumber: 4, rollBonus: 15 },
      },
      perceptionType: "Faro",
      defense: 50,
      pvCurrent: 800,
      pvMax: 800,
      resistencias: { corte: 20, impacto: 20, perfuracao: 20, morte: 20 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 5, str: 5, int: 3, pre: 4, con: 5 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollBonus: 23, rollNumber: 7 },
        { id: "1", name: "Sobrevivência", rollBonus: 20, rollNumber: 6 },
      ],
      movement: 24,
      powers: [
        {
          id: "0",
          name: "Caçador Veloz",
          description:
            "<p>O nidere pode se mover em seu deslocamento normal sem penalidade em Furtividade.</p>",
        },
        {
          id: "1",
          name: "Regeneração Acelerada",
          description:
            "<p>O nidere possui Cura Acelerada 50. Ele perde esta habilidade se resolverem seu Enigma de Medo.</p>",
        },
        {
          id: "2",
          name: "Senso de Direção Perfeito",
          description:
            "<p>Nideres nunca se perdem e recebem +2d20 em Percepção e Sobrevivência (já contabilizados na ficha). A criatura perde esta habilidade caso seu enigma de medo seja resolvido.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garra Invertida",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "morte", value: "4d10" },
                { id: "1", damageType: "morte", value: "40" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
            {
              id: "1",
              name: "Mordida Invertida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 5,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "morte", value: "4d12" },
                { id: "1", damageType: "morte", value: "40" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Reverter",
          description:
            "<p>Um ser que sofra dano das garras invertidas é afetado por um surto temporal capaz de apodrecer a carne. Ele fica enjoado até o final do seu próximo turno.</p>",
        },
        {
          id: "2",
          type: "livre",
          name: "Rastrear e Abater",
          automaticDamage: [{ id: "0", value: "6d6", damageType: "morte" }],
          description:
            "<p>O nidere causa +6d6 pontos de dano contra seres desprevenidos.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/nidere.webp",
      sheetPictureURL: "/img/creatures/nidere-profile.webp",
      enigmaDoMedo:
        "<p>Para enfrentar um nidere, é preciso primeiro encontrar seu covil, que muitas vezes é formado por cavernas naturais nas profundezas da floresta, enquanto ele não estiver lá. Se o nidere enfrentar os personagens dentro do seu covil, a afinidade com seu lar labiríntico o tornará ainda mais mortal.</p><p>Para acessar a origem da sua manifestação, é primeiro necessário entender a lógica distorcida por trás dos padrões misteriosos dos restos ósseos de suas vítimas deixados pendurados no lar pelo nidere. Estes ossos formam uma espécie de engenhoca bizarra criada pela própria criatura. É como se a criatura preparasse uma armadilha para atrair e distrair seus caçadores, com uma lógica que sempre tem uma conexão com as identidades das vítimas que devora, como um deasfio.</p><p>Quando a origem for destruída, a criatura entrará em uma fúria incontrolável. Ela sofre -10 na Defesa e -2d20 em testes de resistência, e perde suas habilidades Regeneração Acelerada e Senso de Direção Perfeito, o que a torna suscetível a cair em armadilhas que seriam facilmente evitadas em seu estado original, possibilitando a sua captura e morte.</p>",
      description:
        "<p>A origem dessa criatura remonta a cultos milenares de povos nativos da América do Sul. O culto se transformou em lenda e a lenda, em folclore. Hoje, a história do nidere é famosa entre grupos de amigos que decidem acampar na floresta, Porém, não é apenas uma história…</p><p>“Nidere, o lobo invertido” é um monstro que se manifesta somente em ambientes selvagens, e em condições extremamente específicas. Dentre equipes de resgate florestais, é informalmente considerado como o maior responsável por desaparecimentos misteriosos de grupos de campistas.</p><p>Graças à sua natureza misteriosa, há inúmeros grupos de caçadores, fóruns online e até mesmo programas de TV dedicados a encontrar evidências da existência de nideres, mas o Medo irracional e inconsciente no fundo das suas mentes os força a simular e forjar cenas falsas para entretenimento, agravando ainda mais o pavor gerado pela criatura.</p><p>Similar a um enorme lobo atroz e desfigurado, com seu corpo completamente retorcido em uma forma bizarra, os poucos relatos de sobreviventes descrevem o nidere apenas como um vulto negro na noite, olhos vermelhos refletindo na escuridão, e rosnados monstruosos distorcidos, como se estivessem invertidos de trás pra frente.</p><p>Nideres são caçadores brutais e eficazes, o predador alfa das criaturas paranormais. É tolice acreditar que é possível se preparar para enfrentar um nidere em combate direto, frente a frente. Um nidere só pode ser derrotado se seu lar for encontrado e o motivo da sua manifestação for desintegrada. Porém, tenha atenção: a maioria das pistas que levam ao seu lar normalmente são rastros propositais deixados pela própria criatura para atrair mais presas.</p><p>Ele sempre estará caçando você.</p>",
    },
    {
      name: "Sempiternal",
      element: "morte",
      vd: 360,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "criatura",
      perceptionType: "-",
      presencaPerturbadora: { dt: 40, dice: "8d8" },
      skills: {
        perception: { rollNumber: 5, rollBonus: 20 },
        initiative: { rollNumber: 5, rollBonus: 25 },
        fortitude: { rollNumber: 4, rollBonus: 20 },
        reflex: { rollNumber: 5, rollBonus: 30 },
        will: { rollNumber: 5, rollBonus: 25 },
      },
      defense: 53,
      pvCurrent: 990,
      pvMax: 990,
      imunidades: ["morte"],
      imunidadesAditional: "Condições lento e de paralisia",
      resistencias: { corte: 20, impacto: 20, perfuracao: 20 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 5, str: 5, int: 4, pre: 5, con: 4 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Toque Acelerador",
          description:
            "<p>Sempre que um ser sofre dano dos dedos alongados, envelhece 1d10 anos. Se a vítima envelhecer 20 anos ou mais desta forma, fica fraca até o fim da cena. Se envelhecer 40 anos ou mais, fica debilitada até o fim da cena. E se envelhecer 60 anos ou mais, morre. Seres com afinidade com a Morte são imunes a este efeito.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Dedos Alongados",
              range: "Corpo a corpo",
              numberOfAttacks: 4,
              rollNumber: 5,
              rollBonus: 40,
              damage: [{ id: "0", damageType: "morte", value: "4d10" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "movimento",
          name: "Correntes de Lodo",
          tests: [
            {
              id: "0",
              dt: 40,
              reduceEffect: !0,
              skillName: "Fortitude",
              damage: [{ id: "0", damageType: "morte", value: "20d6" }],
            },
          ],
          description:
            "<p>O sempiternal projeta vinhas de Lodo pelo chão, ocupando toda a área em alcance médio. Todos os seres na área sofrem 20d6 pontos de dano de Morte (Fortitude DT 40 reduz à metade). Um ser que fique machucado devido a este dano é infectado com o Lodo e recebe vulnerabilidade a Morte até o fim da cena. Um ser reduzido a 0 PVse torna um enraizado.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/sempiternal.webp",
      sheetPictureURL: "/img/creatures/sempiternal-profile.webp",
      description:
        "<p>É comum encontrar ocultistas e pessoas com alto nível de exposição paranormal com sua aparência e percepção da Realidade deformadas pelo Outro Lado, mas o que aconteceria se essa exposição fosse estendida e repetida em ciclos por inúmeras gerações?</p><p>Um sempiternal é o resultado da manifestação da Morte através de uma evolução gradual passada por inúmeras gerações de uma civilização isolada. O que um dia já foi humano, hoje é uma figura esquelética bizarra e retorcida com olhos pretos e pele acinzentada. Ele emite sons invertidos e macabros que aparentam ser uma linguagem distorcida que apenas aqueles também distorcidos pela Morte conseguem compreender.</p><p>O sempiternal parece viver em algum tipo de sociedade com outras criaturas similares à ele, talvez como um vestígio de sua origem, mas qualquer rastro de necessidades básicas humanas foi completamente desfeito. O sempiternal não é humano, apesar de ter se originado de humanos. Ele não bebe, não come e não dorme.</p><p>É importante notar que apesar de sua aparência magra, essa é uma criatura extremamente perigosa, em especial por ter desenvolvido uma espécie de sexto sentido: o sempiternal consegue manipular a própria percepção do tempo, percebendo a Realidade de forma acelerada ou desacelerada como bem entender.</p><p>O sempiternal é um retrato da perversidade do paranormal dentro da Realidade. Será que existe um resquício de consciência humana por trás dos olhos destruídos pela Morte</p>",
    },
    {
      name: "Succ",
      element: "morte",
      secondaryElements: ["energia"],
      imunidades: [],
      vd: 40,
      creatureSize: "médio",
      creatureType: "criatura",
      perceptionType: "Percepção às cegas",
      powers: [],
      presencaPerturbadora: { dt: 15, dice: "3d6", nex: 30 },
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 4, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 1, rollBonus: 5 },
      },
      defense: 20,
      pvCurrent: 65,
      pvMax: 65,
      resistencias: { corte: 5, impacto: 5, perfuracao: 5, morte: 10 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 4, str: 2, int: 0, pre: 1, con: 1 },
      movement: 12,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 4,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "perfuração", value: "2d8" },
                { id: "0", damageType: "perfuração", value: "2" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Sucção",
          tests: [
            { id: "0", dt: 17, reduceEffect: !1, skillName: "Fortitude" },
          ],
          description:
            "<p>Se acertar um personagem com sua mordida, o succ prende seus dentes no rosto da vítima e então tira o ar de seus pulmões. O personagem deve fazer um teste de Fortitude (DT 17). Se passar, consegue se soltar. Se falhar, fica inconsciente e, no início do próximo turno do succ, será reduzido a 0 PV e ficará morrendo. Enquanto estiver prendendo um personagem dessa forma, o succ não pode realizar ações, exceto reações, e seu deslocamento é reduzido para 3m. Se o succ sofrer 10 pontos de dano ou mais na mesma rodada, solta qualquer vítima que estiver prendendo.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/succ.webp",
      sheetPictureURL: "/img/creatures/succ-profile.webp",
      description:
        "<p>Um ser quadrúpede com patas pontudas, pele enrugada e acinzentada, dois buracos onde deveriam estar seus pulmões, com um longo pescoço enrugado e invertebrado que leva a uma enorme boca circular com vários dentes em camadas internas.</p><p>O succ é uma criatura que busca apenas sugar todo o ar de dentro dos pulmões de sua vítima. Por causa da sucção de tudo ao seu redor, emite um som alto e constante, facilmente confundido com o de um aspirador de pó.</p>",
    },
  ],
  o = [
    {
      name: "Máscara do Desespero",
      element: "conhecimento",
      secondaryElements: ["medo"],
      vulnerabilidades: [],
      vd: 400,
      perceptionType: "Percepção às cegas",
      presencaPerturbadora: { dt: 45, dice: "10d8" },
      creatureSize: "minúsculo",
      creatureType: "relíquia",
      defense: 55,
      skills: {
        perception: { rollNumber: 6, rollBonus: 35 },
        initiative: { rollNumber: 4, rollBonus: 25 },
        fortitude: { rollNumber: 5, rollBonus: 35 },
        reflex: { rollNumber: 4, rollBonus: 25 },
        will: { rollNumber: 6, rollBonus: 35 },
      },
      pvCurrent: 1200,
      pvMax: 1200,
      imunidades: ["dano"],
      imunidadesAditional: "Condições",
      resistencias: {},
      attributes: { dex: 4, str: 4, int: 6, pre: 6, con: 5 },
      extraSkills: [
        { id: "0", name: "Ciência", rollBonus: 35, rollNumber: 6 },
        { id: "1", name: "Ocultismo", rollBonus: 35, rollNumber: 6 },
        { id: "2", name: "Religião", rollBonus: 35, rollNumber: 6 },
      ],
      movement: 12,
      movementLabel: "Voo",
      powers: [
        {
          id: "0",
          name: "Destronar o Anfitrião",
          description:
            "<p>A Máscara do Desespero é a única que consegue resolver o Enigma de Medo do Anfitrião.</p>",
        },
        {
          id: "1",
          name: "Potência do Conhecimento",
          description:
            "<p>O modificador da Máscara do Desespero para todos os testes de perícia baseados em Intelecto, Presença e Vigor é +35, e para testes baseados nos demais atributos, é +25.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "livre",
          name: "Conjuração Verdadeira",
          description:
            "<p>Uma vez por turno, a Máscara do Desespero pode conjurar um ritual de Conhecimento a sua escolha, de qualquer círculo. O ritual deve ter execução máxima de ação completa e custo máximo de 20 PE. A DT para resistir a ele é 45.</p>",
        },
        {
          id: "1",
          type: "movimento",
          name: "Onipresença",
          description:
            "<p>A Máscara do Desespero consegue se deslocar para qualquer local da Realidade, desde que haja algum tipo de sombra ou escuridão, independente da distância. Além disso, ela sabe exatamente tudo que está acontecendo na Realidade ao mesmo tempo. Isso faz com que nenhum personagem possa se esconder da relíquia, e ela ignora qualquer necessidade de ver ou ouvir para usar suas habilidades.</p>",
        },
        {
          id: "2",
          type: "padrão",
          name: "Reescrever Realidade",
          tests: [
            { id: "0", dt: 45, skillName: "Reflexos", reduceEffect: !1 },
            {
              id: "1",
              dt: 45,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [
                { id: "0", damageType: "conhecimento", value: "10d6" },
                { id: "1", damageType: "mental", value: "10d6" },
              ],
            },
          ],
          description:
            "<p>A Máscara do Desespero tem o poder único de reescrever a Realidade por completo, alterando as propriedades de seres e objetos em alcance médio. Contra objetos, ela pode mudar a composição, posição e estado da matéria de um objeto de até 1 tonelada. Objetos vestidos ou empunhados têm direito a um teste de Reflexos do portador (DT 45) para evitar este efeito. Contra seres, ela pode causar 10d6 pontos de dano de Conhecimento, 10d6 pontos de dano mental e uma condição qualquer (exceto morrendo e enlouquecendo) em um ser (Vontade DT 45 reduz cada dano à metade e evita a condição).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/mascara-do-desespero.webp",
      sheetPictureURL: "/img/creatures/mascara-do-desespero-profile.webp",
      enigmaDoMedo:
        "<p>A Máscara do Desespero é indestrutível, e seu portador também, porém existem registros de duas possibilidades para enfrentá-la. Seria possível neutralizar alguém portando a Máscara apenas abalando diretamente o Equilíbrio, quebrando as regras da Realidade através do Medo, de forma inexplicável, ou então devastando a sua razão através da brutalidade do portador da Relíquia de Sangue, também conhecido como o Diabo. Quando o Enigma de Medo da Máscara do Desespero for resolvido, ela perde sua imunidade a dano e sua habilidade de Onipresença.</p>",
      description:
        "<p>O paranormal não se manifesta na Realidade apenas na forma de monstros, mas também pode se vincular a objetos e ambientes. Porém, dificilmente um objeto assombrado é mais perigoso do que uma criatura do Outro Lado.</p><p>Infelizmente, a Máscara do Desespero não é apenas um objeto. Conhecida também como a Relíquia do Conhecimento, ela é uma das manifestações mais antigas na Realidade. Alguns creem que a Máscara do Desespero existe desde antes mesmo da civilização humana se desenvolver.</p><p>Uma máscara indestrutível que contém toda a verdade do Outro Lado, um semblante desesperado e permanente que esconde os segredos incompreensíveis, as memórias de tudo que já existiu, a lucidez de todas as explicações, todas as respostas… todo o Conhecimento.</p><p>Aqueles que portam a Máscara lembram de tudo e sabem tudo. Mas saber tudo é perder tudo. Ao usar a Máscara do Desespero, a mente do usuário é soterrada pelo Conhecimento infinito e seu ego é inexistido. O portador se torna algo que se identifica apenas como Magistrada — a executora das regras, a arauta das promessas. Um ser paranormal de poder imensurável com apenas um objetivo: proteger o equilíbrio na Realidade.</p><p>O que exatamente é o “equilíbrio” e o que significa protegê-lo é um mistério até mesmo para aqueles que se envolveram diretamente com a Máscara. Porém, alguns fatos são inegáveis: aquele que porta a Máscara do Desespero tem o poder de alterar a realidade, as memórias, os eventos e os acontecimentos de maneira soberana. É impossível determinar que tipo de força seria necessária para derrotar ou impedir algo dessa magnitude; talvez apenas outra criatura paranormal à altura possa ter qualquer tipo de chance.</p><p>A Máscara do Desespero parece estar associada a sombras. A presença do portador da Máscara resulta em sombras sendo distorcidas, e muitos que se conectaram com a Magistrada relatam terem sido transportados para um plano alternativo conhecido como “dimensão das Sombras”.</p><p>A Magistrada é a única fonte compreensível do Conhecimento do Outro Lado na Realidade, e algumas verdades proferidas por ela são assustadoras. Por exemplo, é fato que a Máscara do Desespero leva esse nome não pelo sentimento que seu portador traz aos outros, mas sim como um presságio do resto da existência daquele que escolher portar a Máscara.</p><p>A ETERNIDADE DO DESESPERO INFINITO DO CONHECIMENTO.</p>",
    },
    {
      name: "Anjo",
      element: "conhecimento",
      secondaryElements: ["medo"],
      vd: 380,
      creatureSize: "enorme",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 40, dice: "10d6" },
      perceptionType: "Percepção às cegas",
      defense: 57,
      skills: {
        perception: { rollNumber: 5, rollBonus: 25 },
        initiative: { rollNumber: 4, rollBonus: 25 },
        fortitude: { rollNumber: 5, rollBonus: 25 },
        reflex: { rollNumber: 4, rollBonus: 25 },
        will: { rollNumber: 5, rollBonus: 30 },
      },
      pvCurrent: 1111,
      pvMax: 1111,
      imunidades: ["conhecimento"],
      imunidadesAditional: "Condições de paralisia",
      resistencias: { dano: 50 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 4, str: 5, int: 5, pre: 5, con: 5 },
      movement: 24,
      movementLabel: "Voo",
      powers: [
        {
          id: "0",
          name: "Julgamento",
          description:
            "<p>O anjo é uma criatura que se manifesta como fisicalização do Conhecimento e, portanto, é uma criatura que julga o saber. Sempre que um ser sofre dano de Conhecimento das asas do Conhecimento ou dos olhares do saber do Anjo, sofre também uma quantidade de dano mental igual à metade do dano de Conhecimento sofrido (após aplicar resistências). Um ser reduzido a Sanidade 0 desta formatem sua mente colapsadapelo julgamento do Anjoe inexiste, morrendo instantaneamente.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Asas do Conhecimento",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 40,
              damage: [
                { id: "0", damageType: "conhecimento", value: "4d10" },
                { id: "1", damageType: "conhecimento", value: "40" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
            {
              id: "0",
              name: "Olhares do Saber",
              range: "Distância - Curto",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 40,
              damage: [
                { id: "0", damageType: "conhecimento", value: "6d8" },
                { id: "1", damageType: "conhecimento", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Faixas Detentoras",
          macros: [{ id: "0", value: "5d20k1+45" }],
          description:
            "<p>Se o anjo acertar um ataque de asas do Conhecimento em um ser Médio ou menor, pode tentar agarrar o alvo (teste 5d20+45) usando as faixas que prendem suas asas. Um ser agarrado desta forma também fica fascinado. O anjo pode manter um ser agarrado desta forma por vez e fazer isso não impede que ele use suas asas do Conhecimento.</p>",
        },
        {
          id: "2",
          type: "padrão",
          name: "Chamas Reveladoras",
          tests: [
            {
              id: "0",
              dt: 43,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "conhecimento", value: "10d8" }],
            },
          ],
          description:
            "<p>O anjo manifesta um círculo de chamas douradas em volta de si, que se expande em alcance médio. Todos os seres nesta área sofrem 10d8 pontos de dano de Conhecimento (Vontade DT 43 reduz à metade). Um ser que sofra dano dessa habilidade fica com uma auréola reveladora em cima de sua cabeça. Até o final da cena, o anjo sabe exatamente onde estão todos os seres com auréola, o que significa que ele ignora furtividade e qualquer tipo de invisibilidade ou efeito ilusório.</p>",
        },
        {
          id: "3",
          type: "completa",
          name: "Raio Dourado",
          tests: [
            {
              id: "0",
              dt: 43,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [
                { id: "0", damageType: "conhecimento", value: "15d8" },
                { id: "1", damageType: "conhecimento", value: "50" },
              ],
            },
          ],
          description:
            "<p>Uma vez por cena, o anjo dispara um raio dourado de seu olho central. Todos os seres em uma linha de 3m em alcance longo sofrem 15d8+50 pontos de dano de Conhecimento (Reflexos DT 43 reduz à metade).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/anjo.webp",
      sheetPictureURL: "/img/creatures/anjo-profile.webp",
      enigmaDoMedo:
        "<p>Seres puros de Conhecimento, os anjos podem ser enganados por seu alinhamento de Justiça Perfeita. Um anjo que falhe em julgar corretamente pode cair e ser alcançado por mortais. Quando o Enigma de Medo do anjo for resolvido, ele perde sua resistência a dano, seu deslocamento de voo e sua habilidade Julgamento.</p>",
      description:
        "<p>No vasto catálogo dos registros da sociedade humana, poucas experiências paranormais têm o impacto e a relevância de um acontecimento específico: a visita de um anjo. Uma manifestação revelada através de uma transcendência espontânea, descrita por inúmeros ocultistas em locais, tempos e culturas completamente diferentes.</p><p>Cada um dos observadores que presenciou um anjo narra a experiência como um momento inesquecível, indescritível, revelador e ao mesmo tempo aterrorizante. Um anjo é uma criatura tão poderosa que é capaz de desmantelar a sanidade de uma pessoa apenas ao ser observado, derretendo os seus olhos, que escorrem como lágrimas douradas.</p><p>Escritas enigmáticas apontam anjos como “o rosto da verdade impossível” ou “uma resposta indesejada”, como se eles representassem o Conhecimento do próprio Outro Lado manifestado como uma criatura. Isso indicaria que um anjo na verdade é apenas uma projeção psicológica de mentes enlouquecidas pelo Conhecimento, porém, as evidências de encontros com um anjo em grupo descrevendo a mesma experiência contradizem isso.</p><p>Não existem registros de um anjo se manifestando desde o século XIII, e quando se trata do Outro Lado e suas criaturas, é sempre complexo catalogar fatos concretos. O paranormal parece mudar e se adaptar como um fluxo ilógico e tentar entender suas regras é o caminho para a insanidade. Mas se existe uma coisa que se pode determinar sobre anjos é que todos que encontraram um deles foram tocados por algo maligno e profundo, e nunca mais foram os mesmos. Algo no cerne de sua existência foi inerentemente alterado para sempre.</p>",
    },
    {
      name: "Bicho-Papão",
      element: "conhecimento",
      vd: 300,
      creatureSize: "grande",
      creatureType: "criatura",
      secondaryElements: [],
      imunidades: [],
      presencaPerturbadora: { dt: 35, dice: "7d8", nex: 90 },
      defense: 41,
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 5, rollBonus: 20 },
        initiative: { rollNumber: 5, rollBonus: 20 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 5, rollBonus: 25 },
        will: { rollNumber: 5, rollBonus: 20 },
      },
      pvCurrent: 750,
      pvMax: 750,
      resistencias: { balistico: 20, corte: 20, impacto: 20, conhecimento: 20 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 5, str: 4, int: 3, pre: 5, con: 4 },
      extraSkills: [
        { id: "0", name: "Atletismo", rollNumber: 4, rollBonus: 15 },
        { id: "1", name: "Furtividade", rollNumber: 5, rollBonus: 18 },
      ],
      movement: 15,
      powers: [
        {
          id: "0",
          name: "Tamanho Adaptável",
          description:
            "<p>O bicho-papão consegue se esconder em locais menores que ele, reduzindo seu corpo para qualquer categoria de tamanho menor de maneira paranormal. Além disso, seu deslocamento não é reduzido por andar furtivamente ou escalar.</p>",
        },
        {
          id: "1",
          name: "Tormento Infantil",
          description:
            "<p>O bicho-papão fica desprevenido se estiver ouvindo uma cantiga de ninar ou outra canção infantil. Além disso, se estiver ouvindo o choro de uma criança, ele usará todas as suas ações disponíveis para encontrar e silenciar a fonte do choro.</p>",
        },
        {
          id: "2",
          name: "Destruir Mente",
          automaticDamage: [{ id: "0", damageType: "mental", value: "1d8" }],
          description:
            "<p>O bicho-papão destrói e devora a mente assustada de seus alvos. Sempre que acerta um alvo perturbado com suas garras atormentadoras, o bicho-papão causa também 1d8 pontos de dano mental por acerto.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garras Atormentadoras",
              range: "Corpo a corpo",
              numberOfAttacks: 3,
              rollNumber: 5,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "conhecimento", value: "4d10" },
                { id: "0", damageType: "conhecimento", value: "10" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "movimento",
          name: "Atormentar",
          tests: [
            {
              id: "0",
              dt: 30,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "3d8" }],
            },
          ],
          macros: [{ id: "0", value: "3d8" }],
          description:
            "<p>O bicho-papão envia sussurros e perturbações para um ser em alcance curto. O alvo sofre 3d8 pontos de dano mental (Vontade DT 30 reduz à metade). Caso o bicho-papão esteja escondido do alvo, este dano aumenta em +3d8.</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Saltar e Assustar",
          tests: [
            {
              id: "0",
              dt: 35,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "10d8" }],
            },
          ],
          description:
            "<p>Se estiver escondido de um ser em alcance curto, o bicho-papão pode sair do esconderijo e se aproximar deste ser. Enquanto faz isso, seu corpo aumenta e se retorce, assumindo uma forma assustadora. O ser do qual o bichopapão estava escondido sofre 10d8 pontos de dano mental (Vontade DT 35 reduz à metade).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/bicho-papao.webp",
      sheetPictureURL: "/img/creatures/bicho-papao-profile.webp",
      description:
        "<p>Originado da história que pais contam para seus filhos não desobedecerem, o Medo gerado por tantas crianças se manifestou em uma aberração poderosíssima, que espreita em telhados de casas com crianças pequenas.</p><p>Uma figura encapuzada e alongada, similar a uma centopeia de braços e pernas humanoides, sempre rastejando por telhados e se infiltrando por dutos de ventilação, chaminés e janelas esquecidas abertas, se alocando em qualquer local abstruso do ambiente, conseguindo se esconder por completo mesmo em espaços menores que seu tamanho físico. O bicho-papão prova que você nunca sabe o que pode estar escondido debaixo da cama.</p><p>O bicho-papão é uma criatura inteligente, que se comunica com suas vítimas através de sussurros e cantigas macabras durante o sono delas, implantando medos, paranoias e alucinações paranormais que apenas crescem com o passar dos dias.</p><p>Porém, algumas cantigas infantis costumam manter a criatura entretida e distraída por alguns momentos. Ela também pode ser enfurecida pelo som de uma criança chorando, podendo ser facilmente enganada ou atraída por esse som.</p><p>Quando um alvo da criatura já está com sua sanidade destroçada pela perturbação constante, o bicho-papão se revela para sua vítima da forma mais apavorante possível, causando um desespero descomunal logo antes de devorá-la. Afinal, aqueles com mais medo são mais deliciosos.</p>",
    },
    {
      name: "Espreitador",
      element: "conhecimento",
      secondaryElements: ["medo"],
      vd: 220,
      creatureSize: "médio",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 30, dice: "7d6", nex: 70 },
      perceptionType: "Percepção às cegas",
      defense: 34,
      skills: {
        perception: { rollNumber: 3, rollBonus: 15 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 4, rollBonus: 15 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      pvCurrent: 500,
      pvMax: 500,
      imunidades: ["dano"],
      powers: [],
      vulnerabilidades: ["sangue"],
      resistencias: {},
      attributes: { dex: 4, str: 2, int: 3, pre: 3, con: 2 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollBonus: 20, rollNumber: 4 },
      ],
      movement: 12,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 2,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "impacto", value: "1d6" },
                { id: "0", damageType: "impacto", value: "2" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "movimento",
          name: "Correr pelas frestas",
          description:
            "<p>O espreitador pode se teletransportar para qualquer espaço em alcance longo, desde que exista uma pequena fresta em seu caminho (uma fresta é um espaço Pequeno ou menor, completamente delimitado por outro objeto ou superfície, como a fresta de porta entreaberta ou um pequeno buraco que atravessa uma parede).</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Espreitar",
          tests: [
            {
              id: "0",
              dt: 30,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "10d6" }],
            },
          ],
          description:
            "<p>Uma vez por cena, se estiver adjacente a um ser que esteja dormindo, o espreitador causa 10d6 pontos de dano mental neste ser (Vontade DT 30 reduz à metade). Se a vítima ficar enlouquecendo devido a este dano, o espreitador pode criar uma cópia observada dela.</p>",
        },
        {
          id: "3",
          type: "padrão",
          name: "Cópia Observada",
          description:
            "<p>O espreitador manifesta uma cópia de um ser que tenha deixado enlouquecendo com sua habilidade Espreitar. A cópia utiliza a mesma ficha do ser, mas causa dano de Conhecimento em vez de seu dano normal, não pode conjurar rituais ou usar habilidades paranormais e dura até o fim da cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/espreitador.webp",
      sheetPictureURL: "/img/creatures/espreitador-profile.webp",
      enigmaDoMedo:
        "<p>Para derrotar o espreitador, é necessário que o alvo que está sendo espreitado o atraia para fora de seu esconderijo simulando estar dormindo na escuridão. Especificamente no horário das 2h11, a criatura sai de seu esconderijo para espreitar suas vítimas de perto, caso sinta que o ambiente é seguro. Quando isso acontece, a porta do esconderijo da qual saiu deve ser fechada antes que o espreitador consiga retornar, deixando-o encurralado e obrigado a combater os agentes ou tentar fugir para outra fresta. Quando encurralado, ele perde sua imunidade a dano.</p>",
      description:
        "<p>Uma forma asquerosa, curvada, cinza, com uma aparência terrível. A pele é rugosa e pelancuda. A cabeça contém dezenas de olhos de diferentes tamanhos e formatos não naturais, todos contendo pupilas amarelas que se multiplicam enquanto ele espreita suas vítimas. A criatura inteira treme o tempo todo, causando a impressão de estar com frio, ansiosa ou com medo.</p><p>Dos olhos, uma enxurrada de lágrimas escorre pela pele nojenta, formando poças no chão. E dentro de uma boca aberta cheia de dentes longos e tortos, um grande olho amarelo treme e se move acelerado, como se tentasse observar o ambiente inteiro de uma vez só. Os olhos aparecem mais algumas vezes ao redor do corpo, como nos ombros e joelhos da criatura. Nas mãos, dedos bizarramente longos e perturbadores tremem e se esfregam, como se ela estivesse no meio de uma crise de pânico e ansiedade.</p><p>É possível ouvir um som engasgado do fundo da garganta dele, abafado pelo grande olho na boca enquanto respira.</p><p>O espreitador é uma criatura obcecada que, quando se manifesta, escolhe um alvo para assombrar. Então, persegue todos aqueles que se envolverem com o ser ou objeto assombrado, enquanto devora a sanidade da vítima ao impedir suas horas de sono.</p><p>Aqueles que têm o azar de serem observados pelo espreitador sofrem de insônia severa e têm constantes vislumbres de olhos amarelos os espreitando através de frestas, com suas pupilas se multiplicando se encaradas, e gotas de saliva que são confundidas com lágrimas escorrendo e pingando no chão.</p><p>O espreitador busca observar suas vítimas de perto durante a noite, perturbando seu sono e devorando a sua sanidade aos poucos, sem nunca ser percebido.</p>",
    },
    {
      name: "Estrangeiro",
      element: "conhecimento",
      secondaryElements: ["energia", "medo"],
      resistencias: {},
      vd: 340,
      creatureSize: "grande",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 40, dice: "10d6", nex: 99 },
      perceptionType: "Percepção às cegas",
      defense: 50,
      skills: {
        perception: { rollNumber: 5, rollBonus: 25 },
        initiative: { rollNumber: 3, rollBonus: 20 },
        fortitude: { rollNumber: 3, rollBonus: 15 },
        reflex: { rollNumber: 3, rollBonus: 20 },
        will: { rollNumber: 5, rollBonus: 25 },
      },
      pvCurrent: 750,
      pvMax: 750,
      imunidades: ["dano"],
      vulnerabilidades: ["sangue"],
      attributes: { dex: 3, str: 5, int: 5, pre: 5, con: 3 },
      extraSkills: [
        { id: "0", name: "Ciência", rollNumber: 5, rollBonus: 20 },
        { id: "1", name: "Ocultismo", rollNumber: 5, rollBonus: 20 },
        { id: "2", name: "Furtividade", rollNumber: 3, rollBonus: 20 },
      ],
      movement: 15,
      movementLabel: "Voo",
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Toque Sutil",
              range: "Corpo a corpo",
              numberOfAttacks: 3,
              rollNumber: 5,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "conhecimento", value: "4d8" },
                { id: "1", damageType: "conhecimento", value: "10" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Rajada Psíquica",
              range: "Distância - Extremo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "conhecimento", value: "4d10" },
                { id: "1", damageType: "conhecimento", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "2",
          type: "livre",
          name: "Comandar",
          tests: [{ id: "0", dt: 35, skillName: "Vontade", reduceEffect: !1 }],
          description:
            "<p>O Estrangeiro é capaz de comandar mentalmente seres com mente inferior à sua. Sempre que causa dano em um ser com sua rajada psíquica, o Estrangeiropode dominar a mente do alvo. O alvo deve passar em um teste de Vontade (DT 35) ou será forçado a cumprir uma ordem do Estrangeiro, entre as opções a seguir, emitida como parte desta ação. O ser obedece a ordem em seu próximo turno. Seres com Intelecto 5 ou mais são imunes a essa habilidade</p><p>Atacar. O ser ataca um aliado com a arma que tem em mãos, mas não gasta PE nesse ataque.</p><p>Render-se. O ser cai no chão e arremessa suas armas em uma direção aleatória em alcance curto.</p><p>Fugir. O ser se afasta do Estrangeiro da maneira mais eficiente possível.</p>",
        },
        {
          id: "3",
          type: "livre",
          name: "Apagar Memória",
          macros: [{ id: "0", value: "1d4" }],
          description:
            "<p>Um ser que fique insano por conta dos ataques e efeitos do Estrangeiro tem consequências diferentes do habitual. A vítima tem a mente completamente controlada pelo Estrangeiro, que passa a controlar as ações do personagem. Como alternativa, o Estrangeiro pode apagar a memória da vítima e devolver um pouco de Sanidade (1d4) a ela, fazendo-a duvidar da existência do Estrangeiro e de seu encontro com esta criatura.</p>",
        },
        {
          id: "4",
          type: "livre",
          name: "Oblívio",
          tests: [{ id: "0", dt: 30, reduceEffect: !1, skillName: "Vontade" }],
          macros: [{ id: "0", value: "6d6" }],
          description:
            "<p>Um ser que sofra dano do Toque Sutil esquece momentaneamente a existência do Estrangeiro (Vontade DT 30 evita). A vítima considera o Estrangeiro invisível e esquece qualquer interação que teve com ele. No final de cada um de seus turnos, o ser deve repetir o teste de Vontade. Se passar, volta a perceber a presença da criatura e encerra este efeito, mas sofre 6d6 pontos de dano mental. Uma vítima que esteja incubando uma larva de Estrangeiro (veja Incubar) não tem direito a repetir o teste de Vontade no final de seus turnos.</p>",
        },
        {
          id: "5",
          type: "completa",
          name: "Incubar",
          macros: [{ id: "0", value: "1d6" }],
          description:
            "<p>O Estrangeiro toca um ser adjacente e que esteja alheio a sua presença (veja Oblívio) e coloca uma larva dentro dele. Enquanto o ser estiver incubando uma larva, o Estrangeiro tem total acesso a sua mente, lendo pensamentos e memórias dele, mesmo à distância. A larva consome a Sanidade do hospedeiro, causando 1d6 pontos de dano mental no início de cada cena. Quando a Sanidade do hospedeiro é reduzida a 0, um novo Estrangeiro eclode de sua cabeça, matando-o instantaneamente.</p>",
        },
      ],
      powers: [],
      fullPictureURL: "/img/creatures/estrangeiro.webp",
      sheetPictureURL: "/img/creatures/estrangeiro-profile.webp",
      enigmaDoMedo:
        "<p>As intenções do Estrangeiro são complexas e devem ser decifradas para que ele possa ser derrotado. Investigar os sinais deixados pela criatura e aprender a entender sua linguagem e suas mensagens crípticas é a única forma de tentar se comunicar com esse ser e compreender a maneira de utilizar suas tecnologias paranormais para derrotá-lo. Um Estrangeiro cujas intenções sejam decifradas perde sua imunidade a dano (mas permanece imune a dano de Conhecimento) e não pode usar sua ação Incubar.</p>",
      description:
        "<p>Mensagens misteriosas em horários específicos. Sinais incompreensíveis captados por receptores. Fenômenos bizarros em ambientes isolados, sem vítimas aparentes. O que acontece quando uma entidade paranormal decide se comunicar ativamente com a Realidade?</p><p>Junto com a rápida expansão de tecnologias de comunicação, sinais misteriosos e incompreensíveis começaram a ser captados vindo das direções mais longínquas do Universo. Isso levou os governos a rapidamente prepararem equipes dispostas a estabelecer uma comunicação com criaturas alienígenas, mas a resposta recebida do Outro Lado não foi exatamente a esperada.</p><p>O ser nomeado Estrangeiroé uma manifestação paranormal muitíssimo inteligente, com motivações complexas e misteriosas. Ao contrário de muitas criaturas, o Estrangeiro parece ter desenvolvido algum tipo de linguagem própria e também parece ser capaz de aprender novas linguagens.</p><p>Aqueles que descreveram um encontro presencial com um Estrangeiro relataram uma abdução, sempre em um mesmo horário da madrugada. Uma forma bizarra parecia os observar de fora de sua janela, mesmo aqueles que moram em andares altos de prédios, e conseguiam escutar um som específico e assustador.</p><p>Todos os dispositivos digitais parecem reagir à presença do Estrangeiro, com sigilos misteriosos surgindo e se alterando em suas telas, como se formassem mensagens incompreensíveis em uma tentativa de comunicação da criatura.</p><p>Porém, os relatos param de fazer sentido após essa descrição. Todos parecem experienciar o contato com o Estrangeiro de maneiras diferentes, eventualmente retornando às suas vidas normais, mas sentindo que algo não está igual. Um desconforto constante, mas inidentificável. Como se algo estivesse faltando, ou melhor, como se algo estivesse… crescendo.</p><p>O Estrangeiro parece ter a capacidade de estar em vários lugares ao mesmo tempo, e age como se viesse de algum tipo de civilização superior com uma estrutura hierárquica própria, por isso todos os seus encontros sempre estão associados a possibilidades de alienígenas extraterrestres.</p><p>Seria o Estrangeiroapenas uma manifestação paranormal originada do Medo inerte de uma sociedade alienígena superior, capaz de destruir a humanidade, ou existem segredos que nós mesmos ainda não podemos compreender sobre a nossa própria Realidade?</p>",
    },
    {
      name: "Existido",
      element: "conhecimento",
      vd: 20,
      creatureSize: "médio",
      powers: [],
      creatureType: "criatura",
      secondaryElements: [],
      imunidades: [],
      presencaPerturbadora: { dt: 14, dice: "1d6", nex: 25 },
      perceptionType: "Percepção às cegas",
      defense: 13,
      skills: {
        perception: { rollNumber: 2, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 0 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 2, rollBonus: 10 },
      },
      pvCurrent: 36,
      pvMax: 36,
      resistencias: { balistico: 5, corte: 5, impacto: 5, conhecimento: 10 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 1, str: 1, int: 4, pre: 2, con: 2 },
      extraSkills: [
        { id: "0", name: "Ciências", rollBonus: 10, rollNumber: 4 },
        { id: "1", name: "Ocultismo", rollBonus: 10, rollNumber: 4 },
      ],
      movement: 9,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 1,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "impacto", value: "1d4" },
                { id: "1", damageType: "impacto", value: "1" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Brilho Enlouquecedor",
          tests: [
            {
              id: "0",
              dt: 14,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "1d6" }],
            },
          ],
          description:
            "<p>Uma vez por rodada, o existido faz suas marcas douradas brilharem. Todos os seres em alcance médio capazes de vê-lo sofrem 1d6 pontos de dano mental (Vontade DT 14 reduz à metade).</p>",
        },
        {
          id: "2",
          type: "movimento",
          name: "Fortalecimento Paranormal",
          macros: [{ id: "0", value: "2d4" }],
          description:
            "<p>Até o fim da cena, o existido recebe +1d20 em todos os testes baseados em Agilidade, Força e Vigor e suas pancadas causam +2d4 pontos de dano de Conhecimento. O existido só pode usar esta habilidade se tiver causado dano mental a algum personagem com seu Brilho Enlouquecedor nesta cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/existido.webp",
      sheetPictureURL: "/img/creatures/existido-profile.webp",
      description:
        "<p>Existe um ditado sussurrado no submundo ocultista. Em todas as línguas, todos os lugares e todos os tempos, uma ideia nunca pode ser esquecida quando se trata do Outro Lado:</p><p>“Saber tudo é perder tudo.”</p><p>Uma vez humano, hoje apenas uma casca buscando desesperadamente existir, o existido faz o que for possível para continuar sendo observado por alguém consciente.</p><p>Um existido é alguém que foi longe demais, ultrapassou a barreira do Conhecimento e entendeu o Outro Lado por completo. Aquele que lembrou da verdade impossível e que não consegue esquecê-la, não importa o quanto tente.</p><p>Tudo que um existido pode fazer é continuar repetindo seu próprio nome, na tentativa de ser reconhecido, lembrado. Os textos ao redor de seu corpo trazem frases que ao longo da história foram origem de Medo. Quando o existido sente sua vida ameaçada, essas palavras tatuadas começam a brilhar em um tom dourado, e ele se defende com violência daqueles que buscam destruir a casca que um dia representou a mentira de sua existência.</p>",
    },
    {
      name: "Lembrado",
      element: "conhecimento",
      secondaryElements: [],
      vd: 100,
      creatureSize: "médio",
      creatureType: "criatura",
      imunidades: [],
      presencaPerturbadora: { dt: 20, dice: "4d6", nex: 45 },
      defense: 22,
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 2, rollBonus: 0 },
        will: { rollNumber: 2, rollBonus: 10 },
      },
      pvCurrent: 180,
      pvMax: 180,
      resistencias: { balistico: 10, corte: 10, impacto: 10, conhecimento: 20 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 2, str: 2, int: 4, pre: 2, con: 2 },
      extraSkills: [
        { id: "0", name: "Ciências", rollNumber: 4, rollBonus: 10 },
        { id: "1", name: "Ocultismo", rollNumber: 4, rollBonus: 10 },
      ],
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Aura Manifestadora",
          description:
            "<p>O lembrado é cercado por uma aura dourada de faces flutuantes, que gritam com todos aqueles que se aproximam. Personagens em alcance curto do lembrado sofrem -2d20 em todos os testes.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "impacto", value: "2d4" },
                { id: "1", damageType: "impacto", value: "7" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "0",
          type: "padrão",
          name: "Expandir Aura",
          tests: [
            {
              id: "0",
              dt: 20,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "6d6" }],
            },
          ],
          description:
            "<p>O lembrado expande sua aura. Seres em alcance curto sofrem 6d6 pontos de dano mental (Vontade DT 20 reduz à metade).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/lembrado.webp",
      sheetPictureURL: "/img/creatures/lembrado-profile.webp",
      description:
        "<p>Existem aqueles dentro da Realidade que vivem com um grande nível de exposição paranormal em suas mentes. É inevitável que essas pessoas criem uma espécie de resistência psicológica aos traumas gerados pelo Conhecimento do Outro Lado. Uma barreira mental capaz de suportar as lembranças mais enlouquecedoras.</p><p>Mas o que acontece quando essa barreira se quebra, e o Conhecimento o consome por completo? Como uma enxurrada de segredos proibidos, a mente humana se desintegra com as verdades impossíveis e as lembranças do que nunca deveria ser.</p><p>O processo que transformaria alguém em um existido amplificado pela contenção psicológica de uma alta exposição paranormal gera uma manifestação ainda mais intensa dentro da Realidade: o lembrado.</p><p>Um ser amaldiçoado pelo desespero, que não se importa com a frivolidade da existência, o lembrado aspira apenas se tornar uma história memorável. Gritando o nome que lhe foi entregue pelo Outro Lado, os lembrados são capazes de cometer as atrocidades mais absurdas apenas para jamais serem esquecidos.</p>",
    },
    {
      name: "Ocioso",
      element: "conhecimento",
      vd: 260,
      creatureSize: "grande",
      creatureType: "criatura",
      imunidades: [],
      secondaryElements: [],
      presencaPerturbadora: { dt: 35, dice: "8d6", nex: 80 },
      perceptionType: "Percepção às cegas",
      defense: 37,
      skills: {
        perception: { rollNumber: 5, rollBonus: 15 },
        initiative: { rollNumber: 1, rollBonus: 0 },
        fortitude: { rollNumber: 3, rollBonus: 15 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 5, rollBonus: 20 },
      },
      pvCurrent: 390,
      pvMax: 390,
      resistencias: { balistico: 20, corte: 20, impacto: 20, conhecimento: 20 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 1, str: 5, int: 1, pre: 5, con: 3 },
      movement: 0,
      movementLabel: "Voo",
      powers: [
        {
          id: "0",
          name: "Sempre Presente",
          description:
            "<p>No começo de uma cena, o ocioso escolhe um personagem que possa ver para ser seu alvo. O alvo é o único ser que consegue enxergar o ocioso; para todos os demais, ele é invisível.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "reação",
          name: "Retaliação",
          attacks: [
            {
              id: "0",
              rollNumber: 5,
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollBonus: 30,
              damage: [
                { id: "0", damageType: "impacto", value: "4d10" },
                { id: "1", damageType: "impacto", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
          description:
            "<p>Toda vez que for atacado ou alvo de uma habilidade, o ocioso se teletransporta para ficar adjacente ao atacante e faz um ataque corpo a corpo contra ele (teste 5d20+30, dano 4d10+20 de impacto não letal).</p>",
        },
        {
          id: "1",
          type: "livre",
          name: "Permancer Próximo",
          description:
            "<p>Uma vez por rodada, o ocioso pode se teletransportar para qualquer ponto dentro do campo de visão do alvo.</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Aterrorizar",
          macros: [{ id: "0", value: "4d10+10" }],
          description:
            "<p>O ocioso fica lá. Parado. Seu corpo distorcido e olhar profundo parecem entrar na alma do alvo, que sofre 4d10+10 pontos de dano mental se estiver adjacente.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/ocioso.webp",
      sheetPictureURL: "/img/creatures/ocioso-profile.webp",
      description:
        "<p>O ocioso é uma manifestação paranormal que aterroriza e desestabiliza seus alvos aos poucos, os observando passivamente em todos os ambientes que estiverem. Ao contrário da maioria das criaturas de Conhecimento, ele não aparenta ter vontade própria ou sequer realizar ações independentes.</p><p>Os relatos daqueles que são perseguidos pela criatura dizem que ela apenas observa, parada. Eles a conseguem ver em todos os ambientes, a todos os momentos, enquanto ninguém mais pode, como uma alucinação constante.</p><p>Vítimas do ocioso desenvolvem um comportamento claustrofóbico, passando a habitar apenas ambientes abertos, já que entrar em qualquer lugar pequeno, como elevadores ou armários, significaria que o ocioso também estaria lá dentro com eles. Observando de perto, muito perto.</p><p>Apesar de aparentar ser uma ilusão, o ocioso é real e extremamente perigoso, mas apenas para aqueles que conseguem vê-lo. Tentando lidar com o ocioso, pessoas já arrancaram ou costuraram os próprios olhos, visto que a criatura parece deixar de existir quando seu alvo está de olhos fechados.</p><p>O ocioso não ataca ativamente, mas se for atacado de qualquer forma irá reagir, muitas vezes incapacitando o seu alvo, mas ainda o mantendo vivo. Por causa disso, muitas vítimas da criatura são encontradas mortas sozinhas em casa, com suas pernas ou colunas quebradas e mensagens desesperadas e enlouquecidas próximas de seu corpo, deixadas enquanto morriam de fome e sede sem poder se movimentar, sendo observadas pelo ocioso até o fim de suas vidas.</p><p>“Ele nunca se move, mas está sempre lá.”</p>",
    },
    {
      name: "Parasita de Culpa",
      element: "conhecimento",
      secondaryElements: ["sangue", "morte"],
      vd: 60,
      creatureSize: "médio",
      creatureType: "criatura",
      vulnerabilidades: [],
      resistencias: {},
      presencaPerturbadora: { dt: 20, dice: "2d6", nex: 35 },
      defense: 15,
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 4, rollBonus: 0 },
        initiative: { rollNumber: 2, rollBonus: 0 },
        fortitude: { rollNumber: 1, rollBonus: 10 },
        reflex: { rollNumber: 2, rollBonus: 10 },
        will: { rollNumber: 4, rollBonus: 10 },
      },
      pvCurrent: 90,
      pvMax: 90,
      imunidades: ["dano"],
      imunidadesAditional: "(exceto causado pelo hospedeiro)",
      attributes: { dex: 2, str: 0, int: 4, pre: 4, con: 1 },
      movement: 6,
      powers: [
        {
          id: "0",
          name: "Devorar Culpa",
          description:
            "<p>O parasita se alimenta da culpa e dos traumas de um hospedeiro. Caso se fixe em um personagem dormindo, o parasita expande sua influência. Todos os personagens dormindo em alcance médio ficarão presos em um sonho compartilhado (veja Enigma de Medo) até que o parasita seja derrotado ou o hospedeiro morra ou enlouqueça.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 1,
              rollBonus: 0,
              damage: [{ id: "0", damageType: "impacto", value: "1d4" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "completa",
          name: "Fixar",
          macros: [{ id: "0", value: "2d20k1+15" }],
          description:
            "<p>O parasita se aproxima de um personagem dormindo. O personagem tem direito a um teste de Percepção (com penalidade de -2d20, por estar dormindo), oposto ao teste de Furtividade do parasita (2O+15). Se passar, desperta antes que o parasita se fixe nele, fazendo com que a criatura fuja. Se falhar, torna-se hospedeiro do parasita (veja Devorar Culpa).</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Atormentar",
          tests: [
            {
              id: "0",
              dt: 20,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "2d6" }],
            },
          ],
          description:
            "<p>Se estiver fixado a um hospedeiro, o parasita atormenta a mente do personagem e de todos que ele estiver mantendo inconscientes. No início de cada cena do sonho, todos os personagens dentro do sonho sofrem 2d6 pontos de dano mental (Vontade DT 20 reduz à metade).</p>",
        },
        {
          id: "3",
          type: "completa",
          name: "Cópias do Hospedeiro",
          description:
            "<p>Se estiver fixado a um hospedeiro, o parasita manifesta uma cópia feita de Conhecimento desse personagem. A cópia possui as mesmas estatísticas do original, mas tem 20 PV e todo dano que causa é de Conhecimento. O parasita pode manifestar no máximo quatro cópias por vez. Se manifestar uma cópia dentro do sonho, ela usa o valor de Presença do parasita no lugar dos seus atributos e causa dano mental em vez do normal.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/parasita-de-culpa.webp",
      sheetPictureURL: "/img/creatures/parasita-de-culpa-profile.webp",
      enigmaDoMedo:
        "<p>Para derrotar o parasita de culpa, os personagens devem perceber que estão vivendo um sonho compartilhado, e identificar qual personagem dentro do sonho é o hospedeiro do parasita. Após descobrir isso, o hospedeiro deve confrontar as manifestações e derrotá-las dentro do sonho, sozinho.</p><p>Um sonho compartilhado é uma sequência de cenas que ocorrem na mente dos personagens. Com exceção dos próprios personagens, tudo que existe no sonho é um construto de Conhecimento. Enquanto estiverem dentro do sonho, os agentes agem normalmente, conforme o tipo de cena que o sonho está simulando. O mestre determina como os personagens podem descobrir que estão em um sonho, e quais ameaças enfrentarão nele.</p>",
      description:
        "<p>Uma criatura disforme, que se alimenta da culpa despertada em suas vítimas através de pesadelos e ilusões terríveis. O parasita de culpa normalmente utiliza de alucinações baseadas em sentimentos não resolvidos dentro da mente de sua vítima, distorcendo figuras e acontecimentos de seu passado para criar uma situação desesperadora.</p><p>Parasitas de culpa possuem motivações e métodos diferentes, mas todos são reconhecíveis pelo seu objetivo: causar pressão psicológica originada pela culpa e se fortalecer com isso.</p><p>Cada manifestação também tem métodos específicos e únicos para ser derrotado, como desvendar a ilusão e enfrentar a verdade, ou abraçar a culpa por completo. O que é curioso é o comportamento encontrado em alguns parasitas de culpa: eles tendem a se dissipar ou não se importarem de ser destruídos após se alimentarem da culpa de alguém.</p><p>É um mistério o que poderia levar uma criatura paranormal a assumir esse comportamento autodestrutivo, mas as sequelas deixadas pelos traumas dificilmente são superadas. Mesmo sabendo que se tratavam de ilusões, as memórias ainda são reais.</p>",
    },
    {
      name: "Rastejador Sombrio",
      element: "conhecimento",
      secondaryElements: ["sangue"],
      imunidades: [],
      vd: 180,
      creatureSize: "médio",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 25, dice: "6d6", nex: 60 },
      defense: 41,
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 3, rollBonus: 15 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 3, rollBonus: 15 },
        reflex: { rollNumber: 4, rollBonus: 15 },
        will: { rollNumber: 3, rollBonus: 10 },
      },
      pvCurrent: 330,
      pvMax: 330,
      resistencias: { balistico: 10, corte: 10, impacto: 10, conhecimento: 20 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 4, str: 3, int: 3, pre: 3, con: 3 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 4, rollBonus: 15 },
        { id: "1", name: "Ocultismo", rollNumber: 3, rollBonus: 15 },
      ],
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Vulnerabilidade a luz",
          description:
            "<p>Enquanto estiver exposto diretamente a uma fonte de luz forte, capaz de iluminar a criatura por completo, o rastejador sofre -10 em Defesa e perde as habilidades Desespero, Rastejar e Tentáculos das Sombras.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Toque da Dor",
              range: "Corpo a corpo",
              numberOfAttacks: 3,
              rollNumber: 4,
              rollBonus: 20,
              damage: [
                { id: "0", damageType: "conhecimento", value: "4d8" },
                { id: "1", damageType: "conhecimento", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Desespero",
          tests: [
            {
              id: "0",
              dt: 25,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [
                { id: "0", damageType: "mental", value: "4d8" },
                { id: "1", damageType: "mental", value: "5" },
              ],
            },
          ],
          description:
            "<p>O toque do rastejador desperta uma sensação de dor e agonia em suas vítimas. Sempre que um ser sofre dano do toque da dor, sofre a mesma quantidade de dano mental (Vontade DT 25 reduz o dano mental à metade).</p>",
        },
        {
          id: "2",
          type: "livre",
          name: "Rastejar",
          description:
            "<p>O rastejador usa as sombras para se aproximar de seus alvos. Até o início do seu próximo turno, se estiver sob cobertura ou camuflagem parcial, o rastejador recebe +10 em Furtividade e não terá o deslocamento reduzido por se mover furtivamente.</p>",
        },
        {
          id: "3",
          type: "movimento",
          name: "Tentáculos das Sombras",
          tests: [{ id: "0", dt: 28, reduceEffect: !1, skillName: "Reflexos" }],
          macros: [{ id: "0", value: "4d6" }],
          description:
            "<p>O rastejador coloca suas garras no chão e as fibras que compõem seu corpo são projetadas pelas sombras a até três seres em alcance médio, que ficam agarrados por elas (Reflexos DT 28 evita). Com uma ação de movimento, o rastejador pode arrastar até três vítimas agarradas dessa maneira para outros pontos em alcance médio de si. Em seu turno, um ser pode tentar se soltar como normal. No final de cada um dos seus turnos, um ser que esteja agarrado desta forma sofre 4d6 pontos de dano mental.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/rastejador-sombrio.webp",
      sheetPictureURL: "/img/creatures/rastejador-sombrio-profile.webp",
      description:
        "<p>Você já se sentiu perseguido enquanto andava sozinho na rua ao entardecer, mas ao observar seus arredores, apenas o vento te acompanhava numa calçada deserta? Talvez você não estivesse tão sozinho, afinal.</p><p>O rastejador sombrio é uma entidade maligna que se aproxima lentamente de suas vítimas, se escondendo em sombras distorcidas. Ele é inteligente e apresenta um comportamento sádico, escolhendo sempre causar a maior quantidade de dor que é capaz em suas vítimas, tanto psicológica quanto f ísica.</p><p>Os poucos sobreviventes de um encontro com essa criatura relatam avistar pelo canto do olho uma forma humanoide nas sombras, trajando o que parecem ser vestimentas humanas: um sobretudo e um chapéu escondendo seu rosto. Mas, ao se revelar, uma enorme boca se abre em seu rosto acinzentado, que usa para se camuflar nas sombras. Dentro de suas roupas também é possível perceber longos tentáculos capazes de infiltrar junto ao chão e paredes, tomando um aspecto de sombra, como se a própria ausência da luz se movimentasse em direção às suas vítimas.</p><p>O rastejador, porém, não consegue se camuflar com facilidade em ambientes completamente iluminados, agindo de forma muito mais irracional e animalesca se encurralado em um ambiente desfavorável.</p>",
    },
    {
      name: "Silhueta",
      element: "conhecimento",
      vd: 360,
      perceptionType: "Percepção às cegas",
      secondaryElements: [],
      creatureSize: "médio",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 40, dice: "8d8" },
      defense: 55,
      skills: {
        perception: { rollNumber: 5, rollBonus: 25 },
        initiative: { rollNumber: 4, rollBonus: 20 },
        fortitude: { rollNumber: 5, rollBonus: 20 },
        reflex: { rollNumber: 4, rollBonus: 20 },
        will: { rollNumber: 5, rollBonus: 25 },
      },
      pvCurrent: 500,
      pvMax: 500,
      imunidades: ["conhecimento"],
      imunidadesAditional: "Condições de paralisia, manobras de combate",
      resistencias: { dano: 30 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 4, str: 4, int: 5, pre: 5, con: 4 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Aura Tangível",
          tests: [
            {
              id: "0",
              dt: 42,
              reduceEffect: !0,
              skillName: "Fortitude",
              damage: [{ id: "0", damageType: "conhecimento", value: "20d12" }],
            },
          ],
          description:
            "<p>Qualquer ser ou item que tocar na silhueta sofre 20d12 pontos de dano de Conhecimento (Fortitude DT 42 reduz à metade) e, se reduzido a 0 PV, é instantaneamente desintegrado. Um ser ou item só sofre esse dano uma vez por turno.</p>",
        },
        {
          id: "1",
          name: "Conhecimento Verdadeiro",
          description:
            "<p>A silhueta alcançou o Outro Lado através do Conhecimento e, por isso, sabe tudo. Ela faz testes baseados em Intelecto e Presença com +25 e testes baseados em Agilidade, Força e Vigor com +20.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "livre",
          name: "Reescrever a Realidade",
          description:
            "<p>Enquanto estiver se deslocando, a silhueta pode reescrever e mudar a Realidade com seus sigilos de Conhecimento. Todos os objetos em alcance curto podem ser transformados em outros, desde que conservem o mesmo tamanho. Seres vivos e o equipamento que estiverem vestindo ou portando não são afetados por essa habilidade.</p>",
        },
        {
          id: "1",
          type: "padrão",
          name: "Toque Devastador",
          description:
            "<p>A silhueta raramente age de maneira agressiva, mas quando precisa remover algo de seu caminho ela simplesmente o toca, causando o dano de sua aura tangível. A silhueta pode tocar até dois seres e/ou objetos com esta ação.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/silhueta.webp",
      sheetPictureURL: "/img/creatures/silhueta-profile.webp",
      description:
        "<p>A ausência consciente de si mesma. Uma silhueta é um acontecimento terrível e extremamente raro, uma manifestação desesperadora de alguém que foi inexistido pelo Conhecimento, mas que perdura dentro da Realidade através do eco de suas memórias.</p><p>Como um desconforto visual para quem a observa, uma silhueta é uma forma humanoide vazia, cercada por sigilos do Outro Lado que flutuam como se reescrevessem a Realidade a cada instante, reprogramando os seus arredores a cada movimento dessa criatura. Ela é lenta, calma e vazia, mas emite um som constante que lembra o badalar de sinos distantes distorcidos por um eco sintético.</p><p>Seu comportamento aparenta ser passivo, porém tudo que toca a silhueta sofre um efeito devastador, inexistindo a matéria como consequência da exposição ao Conhecimento vazando de sua forma</p><p>A percepção do vazio ao se deparar com uma silhueta muitas vezes pode causar traumas psicológicos e existenciais — quando você olha para o abismo do Conhecimento por tempo demais, o Outro Lado também o observa de volta.</p>",
    },
    {
      name: "Vulto",
      element: "conhecimento",
      vd: 40,
      creatureSize: "médio",
      creatureType: "criatura",
      perceptionType: "Percepção às cegas",
      secondaryElements: [],
      imunidades: [],
      presencaPerturbadora: { dt: 15, dice: "3d6", nex: 30 },
      defense: 19,
      skills: {
        perception: { rollNumber: 2, rollBonus: 5 },
        initiative: { rollNumber: 4, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 4, rollBonus: 5 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      pvCurrent: 60,
      pvMax: 60,
      resistencias: { balistico: 5, corte: 5, perfuracao: 5, conhecimento: 10 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 4, str: 2, int: 2, pre: 2, con: 1 },
      movement: 12,
      extraSkills: [
        { id: "0", name: "Furtividade", rollBonus: 10, rollNumber: 4 },
      ],
      powers: [
        {
          id: "0",
          name: "Aura Tangível",
          automaticDamage: [
            { id: "0", damageType: "conhecimento", value: "2d6" },
          ],
          description:
            "<p>O vulto procura pessoas assustadas para que possa se alimentar dos sentimentos disparados pelos sustos. Seus ataques contra criaturas sob efeito de qualquer condição de medo causam +2d6 pontos de dano de Conhecimento.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Toque Macabro",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 10,
              damage: [{ id: "0", damageType: "conhecimento", value: "2d6" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "completa",
          name: "Plantar Paranoia",
          tests: [{ id: "0", dt: 15, reduceEffect: !1, skillName: "Vontade" }],
          description:
            "<p>O vulto procura implantar medo e paranoia na mente de suas vítimas ao chacoalhar a Membrana e fazer aparecer coisas que não estão lá de verdade. Cada personagem em alcance médio fica abalado (Vontade DT 15 evita). Se o personagem já estiver abalado, ficará apavorado. Se o vulto estiver escondido ao usar essa habilidade, cada personagem sofre 1d20 no teste de Vontade.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/vulto.webp",
      sheetPictureURL: "/img/creatures/vulto-profile.webp",
      description:
        "<p>Em ambientes com a Membrana danificada, às vezes pode ser difícil discernir fatos da paranoia do seu próprio cérebro. Sons inexistentes, temperatura inconstante e até mesmo vultos em movimento são relatos constantes daqueles que se aventuram em ambientes com a conhecida neblina gerada pela fragilidade da Membrana.</p><p>E é nessa paranoia que um vulto pode ser gerado. Uma criatura que sequer estava no ambiente, mas graças ao Medo gerado pelo delírio de um observador, é criada pelo Outro Lado através da imaginação assustada e fértil, que então se transforma em uma casca física.</p><p>Um vulto é uma manifestação paranormal que toma forma através do susto de uma possibilidade, aparecendo como uma criatura humanoide formada de névoa sólida capaz de causar estragos reais.</p>",
    },
  ],
  r = [
    {
      name: "Anfitrião",
      element: "energia",
      secondaryElements: ["conhecimento", "medo"],
      creatureSize: "médio",
      creatureType: "relíquia",
      vd: 413,
      presencaPerturbadora: { dt: 45, dice: "10d8" },
      perceptionType: "Visão no escuro",
      defense: 59,
      skills: {
        perception: { rollNumber: 6, rollBonus: 25 },
        initiative: { rollNumber: 7, rollBonus: 35 },
        fortitude: { rollNumber: 5, rollBonus: 25 },
        reflex: { rollNumber: 7, rollBonus: 35 },
        will: { rollNumber: 6, rollBonus: 25 },
      },
      pvCurrent: 1413,
      pvMax: 1413,
      imunidades: ["dano", "energia"],
      imunidadesAditional: "Condições de paralisia",
      vulnerabilidades: ["conhecimento"],
      resistencias: {},
      attributes: { dex: 7, str: 5, int: 6, pre: 6, con: 5 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Transformar a Morte",
          description:
            "<p>O caos ilógico do Anfitrião é a única coisa capaz de enfrentar a onipresença temporal do Deus da Morte e resolver o seu Enigma de Medo.</p>",
        },
        {
          id: "1",
          name: "Potência de Energia",
          description:
            "<p>O modificador do Anfitrião para todos os testes de perícia baseados em Agilidade e Intelecto é +35, e para testes baseados nos demais atributos, é +25.</p>",
        },
        {
          id: "2",
          name: "Ato 1",
          description:
            "<p>O Anfitrião inicia um combate se dividindo em 5 facetas separadas: Amphitruo, Aeneas, Liber, Silenus e Plautus. Cada um desses possui as mesmas estatísticas que o Anfitrião, mas possuem 250 PV cada e resistência a dano 20. Além disso, cada um só pode usar habilidades e ataques que tenham seu nome. Quando todos forem destruídos, o Anfitrião retorna para sua forma única e inicia o Ato 2 (veja abaixo).</p>",
        },
        {
          id: "3",
          name: "Ato 2",
          description:
            "<p>No segundo Ato, o Anfitrião retorna para sua forma única, com todos seus PV. Ele pode usar todas as habilidades de sua ficha, incluindo aquelas de suas cinco facetas, e pode executar 3 ações padrão por rodada, desde que sejam diferentes.</p>",
        },
        {
          id: "4",
          name: "Trilha Sonora (Ato 2)",
          automaticDamage: [{ id: "0", damageType: "mental", value: "2d10" }],
          description:
            "<p>Durante o Ato 2, a trilha sonora do Anfitrião toca em todo o ambiente. No início de cada turno do Anfitrião, cada ser em alcance longo sofre 2d10 pontos de dano mental.</p>",
        },
        {
          id: "5",
          name: "Roleta Maluca (Ato 2)",
          macros: [{ id: "0", value: "1d6" }],
          automaticDamage: [
            { id: "0", damageType: "mental", value: "4d10" },
            { id: "1", damageType: "energia", value: "4d20" },
          ],
          description:
            "<p>No começo do turno do Anfitrião, cada ser em alcance longo sofre um efeito determinado aleatoriamente. Jogue 1d6 para cada ser na área; efeitos iguais são cumulativos:</p><p>1 - Sofre -5 na Defesa até o final da cena.</p><p>2 - Deve usar uma ação completa fazendo coisas sem sentido ou sofre 4d10 pontos de dano mental no final do seu turno</p><p>3 - Sofre 4d20 pontos de dano de Energia.</p><p>4 - Sofre -1d20 em Pontaria até o final da cena.</p><p>5 - Sofre -1d20 em Luta até o final da cena.</p><p>6 - Nada acontece.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Teatro (Amphitruo)",
          tests: [
            {
              id: "0",
              dt: 35,
              reduceEffect: !1,
              skillName: "Artes",
              damage: [{ id: "0", damageType: "mental", value: "10d6" }],
            },
            {
              id: "1",
              dt: 45,
              reduceEffect: !1,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "10d6" }],
            },
          ],
          description:
            "<p>O Anfitrião envia a imagem de um texto praticamente incompreensível para a mente do alvo, que deve decorá-lo em poucos segundos e recitá-lo com perfeição ou sofre 10d6 pontos de dano mental (Artes DT 35 ou Vontade DT 45 evita).</p>",
        },
        {
          id: "1",
          type: "padrão",
          name: "Queimar (Aeneas)",
          tests: [
            {
              id: "0",
              dt: 45,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [
                { id: "0", damageType: "energia", value: "10d6" },
                { id: "1", damageType: "energia", value: "20" },
              ],
            },
          ],
          description:
            "<p>O Anfitrião dispara chamas em um cone em alcance médio. Todos os seres nessa área sofrem 10d6+20 pontos de dano de Energia (Reflexos DT 45 reduz à metade).</p>",
        },
        {
          id: "2",
          type: "padrão",
          name: "Agredir (Liber)",
          attacks: [
            {
              id: "0",
              name: "Corte Caótico",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 7,
              rollBonus: 45,
              damage: [
                { id: "0", damageType: "energia", value: "3d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "3",
          type: "livre",
          name: "Romance Forçado (Liber)",
          description:
            "<p>Se acertar um ser com seu golpe caótico, o Anfitrião pode escolher outro ser que consiga ver. Os dois seres devem decidir entre si quem sofrerá o dano do ataque (isso deve ser feito antes do dano ser definido).</p>",
        },
        {
          id: "4",
          type: "padrão",
          name: "Agredir (Plautus)",
          attacks: [
            {
              id: "0",
              name: "Lança e Adaga",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 7,
              rollBonus: 45,
              damage: [
                { id: "0", damageType: "energia", value: "2d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "5",
          type: "livre",
          name: "Eu sou o Caos (Plautus)",
          automaticDamage: [{ id: "0", damageType: "energia", value: "4d12" }],
          description:
            "<p>Se acertar um ataque de lança e adaga em um ser desprevenido ou flanqueado, o Anfitrião causa +4d12 pontos de dano de Energia.</p>",
        },
        {
          id: "6",
          type: "padrão",
          name: "Agredir (Silenus)",
          attacks: [
            {
              id: "0",
              name: "Corte de Água",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 7,
              rollBonus: 45,
              damage: [
                { id: "0", damageType: "energia", value: "5d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "7",
          type: "livre",
          name: "Afogamento (Silenus)",
          tests: [
            { id: "0", dt: 35, reduceEffect: !1, skillName: "Fortitude" },
          ],
          description:
            "<p>Um ser que sofra dano de corte de água fica asfixiado (Fortitude DT 35 evita). Um ser que esteja afixiado dessa forma pode repetir o teste de Fortitude no fim de cada um de seus turnos; se passar, a condição termina.</p>",
        },
        {
          id: "8",
          type: "movimento",
          name: "Teletransporte",
          description:
            "<p>O Anfitrião se transporta para outro ponto em alcance médio.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/anfitriao.webp",
      sheetPictureURL: "/img/creatures/anfitriao-profile.webp",
      enigmaDoMedo:
        "<p>O Anfitrião é a personificação do caos e da irracionalidade, capaz de transformar tudo que toca de forma abstrata e incompreensível. A única maneira possível de enfrentá-lo de forma justa é sob a proteção soberana do Equilíbrio. Isso é algo que apenas a manifestação que rege as correntes da Realidade, a Máscara do Desespero, pode oferecer.</p>",
      description:
        "<p>UMA ENTIDADE PARANORMAL EXTREMAMENTE PODEROSA E COMPLETAMENTE INSANA, O ANFITRIÃO É UMA MANIFESTAÇÃO PARANORMAL QUE SE ATRELA A CONSCIÊNCIAS HUMANAS DENTRO DA REALIDADE. OBCEADO EM SE DIVERTIR COM A AGONIA E O CAOS, O ANFITRIÃO REALIZA DIVERSOS JOGOS COM REGRAS TOTALMENTE IMPREVISÍVEIS A4H4HA4A4 E QUE ESTÃO FORA ATÉ MESMO DO SEU PRÓPRIO CONTROLE.</p><p>NINGUÉM PODE A4H4A4 CONTROLAR TUDO, A IMPROBABILIDADE PRECISA TRANSFORMAR A REALIDADE. O ANFITRIÃO É UMA FIGURA INCESSANTE POR TODA A HISTÓRIA DA REALIDADE, PORÉM, SUAS MANIFESTAÇÕES PARECEM ESTAR AHA4 EM CONSTANTE CONFLITO, COM SUAS DIFERENTES MANIFESTAÇÕES SEMPRE DIFERINDO EM PERSONALIADDE, APARÊNCIA E OBJETIVOS, MAS REFERENCIANDO-SE UMAS ÀS OUTRAS.</p><p>SURPREENDENTEMENTE, APESAR DE SEU PODER INCALCULÁVEL, MUITOS QUE ENCONTRARAM O ANFITRIÃO TIVERAM A POSSIBILIDADE DE SAIR COM SUAS VIDAS, MAS NUNCA SEM MARCAS, EM ESPECIAL EM SUAS MENTES. OS JOGOS DO ANFITRIÃO SÃO SÁDICOS E CRUÉIS, E NÃO SE CONHECE NENHUM LIMITE PARA SUAS CAPACIDADES DOENTIAS. HA4HA4H4HA4HA4HA4HA</p><p>APESAR DE SE COMUNICAR FREQUENTEMENTE COM HUMANOS E OCULTISTAS DENTRO DA REALIDADE, O ANFITRIÃO PARECE TER UMA PERCEPÇÃO CRONOLÓGICA DISTORCIDA, COM RELATOS ANACRÔNICOS ASSOCIADOS À SUA APARIÇÃO POR TODA A HISTÓRIA.</p><p>DE UM JEITO OU DE OUTRO, O ANFITRIÃO PARECE TER UMA PERSONALIDADE EXTREMAMENTE INTERESSANTE E SEMPRE TOMAR AS ESCOLHAS CORRETAS, MESMO QUE ELE NÃO FAÇA A MÍNIMA IDEIA DO QUE ESTÁ FAZENDO E NUNCA TENHA NENHUM PLANEJAMENTO.</p><p>O CAOS SEMPRE ESTARÁ AO SEU LADO. É INEVITÁVEL.</p>",
    },
    {
      name: "Anárquico",
      element: "energia",
      vd: 20,
      creatureSize: "médio",
      creatureType: "criatura",
      secondaryElements: [],
      imunidades: [],
      presencaPerturbadora: { dt: 14, dice: "2d6", nex: 25 },
      perceptionType: "Visão no escuro",
      defense: 21,
      skills: {
        perception: { rollNumber: -2, rollBonus: 0 },
        initiative: { rollNumber: 3, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 3, rollBonus: 10 },
        will: { rollNumber: -2, rollBonus: 0 },
      },
      pvCurrent: 30,
      pvMax: 30,
      resistencias: { energia: 5 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 3, str: 2, int: 0, pre: -1, con: 1 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Comportamento Errático",
          macros: [{ id: "0", value: "1d6" }],
          tests: [
            {
              id: "0",
              dt: 14,
              reduceEffect: !0,
              skillName: "Fortitude",
              damage: [{ id: "0", damageType: "energia", value: "2d8" }],
            },
            {
              id: "1",
              dt: 14,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [{ id: "0", damageType: "energia", value: "2d6" }],
            },
          ],
          automaticDamage: [{ id: "0", damageType: "energia", value: "1d6" }],
          description:
            "<p>No começo do seu turno, o anárquico é tomado pelo fluxo de Energia em seu corpo e age de modo aleatório. Role 1d6 para determinar o que ele faz. Se não puder realizar a ação, fica parado se contorcendo, mas recebe resistência a dano 5 até o início do seu próximo turno.</p><p>1,2 - O anárquico pula sobre o personagem mais próximo, fazendo a ação investida (ou a ação agredir, se estiver muito próximo do personagem). Se não conseguir atacar alguém, corre na direção do personagem mais próximo.</p><p>3,4 - O anárquico projeta uma luz prismática de dentro de si na direção de um ser em alcance médio. O alvo sofre 2d8 pontos de dano de Energia e fica atordoado por uma rodada (Fortitude DT 14 reduz o dano à metade e evita a condição).</p><p>5 - Uma explosão de Energia emana do anárquico. Cada ser em alcance curto sofre 2d6 pontos de dano de Energia (Reflexos DT 14 reduz à metade). Seres adjacentes ao anárquico sofrem +1d6 pontos de dano.</p><p>6 - Uma risada descontrolada toma o anárquico enquanto ele faz a ação agredir contra o personagem mais próximo. Até o final de seu próximo turno, o anárquico fica desprevenido, mas seus ataques ficam completamente imprevisíveis e o defensor não pode se esquivar deles.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada Errática",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              damage: [{ id: "0", value: "2d12", damageType: "impacto" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
      ],
      fullPictureURL: "/img/creatures/anarquico.webp",
      sheetPictureURL: "/img/creatures/anarquico-profile.webp",
      description:
        "<p>Quando uma pessoa morre em situações extremamente inoportunas e azaradas em um ambiente com a Membrana danificada, o seu corpo logo é consumido pela entidade de Energia, tendo todo o oxigênio e líquido dentro de seu cadáver substituído pela surrealidade da entidade.</p><p>A sua pele toma um aspecto semi-transparente e as veias e órgãos internos tomam um aspecto colorido, brilhoso e destacado ao redor de todo o corpo, os olhos se tornam arregalados e emitem uma luz plasmática que varia em um espectro de cores extenso. A sua boca se distorce em um formato forçado e rasgado como um sorriso, e sua saliva toma um aspecto acídico e brilhante, como se a criatura vazasse plasma de Energia de dentro de si.</p><p>Anárquicos são rápidos e imprevisíveis, com movimentos erráticos que os tornam muito difíceis de serem atingidos. Seu corpo todo treme enquanto emite gritos e grunhidos distorcidos, como se algum filtro sintético estivesse deformando seus sons.</p>",
    },
    {
      name: "Anárquico Descontrolado",
      element: "energia",
      imunidades: [],
      secondaryElements: [],
      vd: 120,
      creatureSize: "médio",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 21, dice: "4d6", nex: 50 },
      perceptionType: "Visão no escuro",
      defense: 28,
      skills: {
        perception: { rollNumber: 2, rollBonus: 5 },
        initiative: { rollNumber: 4, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      pvCurrent: 120,
      pvMax: 120,
      resistencias: { balistico: 10, corte: 10, perfuracao: 10, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 4, str: 3, int: 2, pre: 2, con: 3 },
      movement: 12,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada Energética",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 15,
              damage: [{ id: "0", damageType: "impacto", value: "4d12" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Aceleração",
          automaticDamage: [{ id: "0", value: "4d12", damageType: "energia" }],
          description:
            "<p>Sempre que um personagem sofre dano da pancada energética, entra em estado de aceleração e pode sofrer dano colateral. Em seu próximo turno, se realizar uma ação de movimento e uma ação padrão, ou uma ação completa), o personagem acelerado sofre 4d12 pontos de dano de Energia.</p>",
        },
        {
          id: "2",
          type: "movimento",
          name: "Autodestruição",
          tests: [
            {
              id: "0",
              dt: 25,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [{ id: "0", damageType: "energia", value: "8d12" }],
            },
          ],
          description:
            "<p>O anárquico concentra Energia no seu corpo e se autodestrói, causando 8d12 pontos de dano de Energia em todos os personagens em alcance curto (Reflexos DT 25 reduz à metade). Personagens adjacentes ao anárquico descontrolado sofrem -2d20 neste teste de resistência. O anárquico descontrolado morre após usar essa habilidade.</p>",
        },
      ],
      powers: [],
      fullPictureURL: "/img/creatures/anarquico-descontrolado.webp",
      sheetPictureURL: "/img/creatures/anarquico-descontrolado-profile.webp",
      description:
        "<p>Quando o corpo de alguém com alto nível de exposição paranormal é transformado pela Energia para se tornar um anárquico após um desastre extremamente inoportuno, a intensidade das possibilidades se potencializam em uma forma ainda mais caótica e absurda: um anárquico descontrolado.</p><p>Tomando uma forma translúcida completamente alucinada, essa criatura se manifesta de maneira hiperativa e caótica, com seu corpo todo vibrando e flutuando em momentos de euforia.</p><p>Encontros com um anárquico descontrolado já causaram inúmeras fatalidades, graças à sua natureza imprevisível. Isso é potencializado pela capacidade da criatura estourar seu próprio corpo em uma explosão de Energia quando não encontra mais nenhuma outra possibilidade para causar o caos.</p>",
    },
    {
      name: "Anomalia",
      element: "energia",
      secondaryElements: ["medo"],
      vd: 380,
      creatureSize: "médio",
      creatureType: "criatura",
      perceptionType: "Visão no escuro",
      resistencias: {},
      presencaPerturbadora: { dt: 45, dice: "9d8" },
      defense: 0,
      skills: {
        perception: { rollNumber: 0, rollBonus: 0 },
        initiative: { rollNumber: 0, rollBonus: 0 },
        fortitude: { rollNumber: 5, rollBonus: 15 },
        reflex: { rollNumber: 5, rollBonus: 15 },
        will: { rollNumber: 5, rollBonus: 15 },
      },
      pvCurrent: 1e3,
      pvMax: 1e3,
      imunidades: ["dano"],
      imunidadesAditional: "Todas as condições",
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 5, str: 0, int: 5, pre: 5, con: 5 },
      movement: 0,
      powers: [
        {
          id: "0",
          name: "Imaterial",
          description:
            "<p>A anomalia possui um corpo físico desprezível e escondido atrás de uma imensidão de Energia paranormal. Ela é imune a dano e a todas as condições. A anomalia não faz testes e não age da mesma maneira que outras criaturas. Sua própria existência é uma impossibilidade e um confronto com ela é surreal e indescritível. A única forma de derrotá-la é resolvendo seu Enigma de Medo.</p>",
        },
        {
          id: "1",
          name: "Existência Impossível",
          description:
            "<p>A anomalia não se desloca de maneira normal. Ela existe somente dentro de um objeto que possa ser aberto por uma porta. Enquanto a porta estiver aberta, a anomalia é manifestada e pode usar seus poderes. Uma vez manifestada, a anomalia ficará perseguindo aqueles que a manifestaram, surgindo sempre que abrirem uma porta ou compartimento e levando-os à loucura.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "livre",
          name: "Romper Consciência",
          tests: [
            {
              id: "0",
              dt: 41,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "10d6" }],
            },
          ],
          description:
            "<p>No início do turno da anomalia, ela sorteia um ser que esteja em sua linha de visão e tenta romper sua razão transformando suas ondas cerebrais. A vítima sofre 10d6 pontos de dano mental (Vontade DT 41 reduz à metade) e, se ficar insana devido a este dano, é absorvida pela anomalia.</p>",
        },
        {
          id: "1",
          type: "livre",
          name: "Manipular Ondas da Existência",
          tests: [
            {
              id: "0",
              dt: 30,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [{ id: "0", damageType: "energia", value: "2d12" }],
            },
          ],
          description:
            "<p>No final do turno da anomalia, ela manipula as ondas eletromagnéticas que compõem a própria existência. Ela pode ativar, desativar ou operar até seis objetos tecnológicos em alcance médio. Como alternativa, pode sobrecarregar estes objetos, gerando uma poderosa descarga que causa 2d12 pontos de dano de Energia por objeto em todos os seres na área (Reflexos DT 30 reduz à metade).</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Manifestar o Impossível",
          description:
            "<p>A anomalia invoca uma ou mais criaturas de Energia cujo VD total some até 240. As criaturas aparecem em alcance curto da anomalia e agem a partir da próxima rodada, seguindo seus impulsos caóticos.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/anomalia.webp",
      sheetPictureURL: "/img/creatures/anomalia-profile.webp",
      enigmaDoMedo:
        "<p>A anomalia não deveria existir. Ela é o próprio caos colapsando com a Realidade, e não existe lógica para defini-la. A única forma de combater essa criatura é mergulhar na anomalia para entendê-la no Outro Lado. Quando o Enigma de Medo da anomalia for resolvido, ela se transforma em um ser ou objeto aleatório por 2d4 rodadas. Durante esse tempo, ela perde sua imunidade a dano e condições e usa as estatísticas do ser ou objeto, com exceção de seus PV.</p>",
      description:
        "<p>Existe uma lenda de uma dimensão alternativa, um espaço que poderia ser acessado por puro acaso. Uma possibilidade minúscula, inacreditável, de que ao interagir com uma passagem, você poderia acessar outro lugar que não pretendia. Como se em todas as vezes que as portas do elevador se abriram, ou quando você se prepara para sair de casa, ou até mesmo quando abre o microondas para pegar comida, você estivesse jogando na loteria da probabilidade anárquica.</p><p>E se seu infortúnio for inacreditável, você terá sido escolhido por uma anomalia.</p><p>Exceto que a anomalia não é uma dimensão, ele é uma manifestação paranormal, um monstro. Uma criatura com uma forma tão caótica que a Realidade tenta conter escondida por trás da menor das possibilidades, para que sua falta de lógica possa ser ignorada.</p><p>A anomalia é indescritível para aqueles que a vivenciaram. Sua forma não é contida por barreiras físicas de um corpo compreensível. Não existem registros de testemunhas sobreviventes dessa manifestação, mas aqueles que de alguma forma conseguiram registrar o momento em que a presenciaram conseguiram apenas rir enlouquecidos enquanto os filamentos de suas mentes eram destroçados em segundos.</p><p>É impossível determinar se uma anomalia é uma manifestação instantânea que se desfaz após escolher uma vítima ou se está constantemente na Realidade, apenas esperando pela impossibilidade de sua manifestação. Na verdade, é impossível ter qualquer dado concreto e lógico sobre a Anomalia.</p><p>Mas algo sempre estará presente: o medo de que, na próxima vez que você abrir aquela porta, a anomalia escolha você.</p>",
    },
    {
      name: "Anomiático",
      element: "energia",
      creatureSize: "médio",
      creatureType: "criatura",
      imunidades: [],
      secondaryElements: [],
      vd: 240,
      presencaPerturbadora: { dt: 30, dice: "6d8", nex: 75 },
      perceptionType: "Visão no escuro",
      defense: 41,
      skills: {
        perception: { rollNumber: 4, rollBonus: 10 },
        initiative: { rollNumber: 5, rollBonus: 15 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 5, rollBonus: 20 },
        will: { rollNumber: 4, rollBonus: 15 },
      },
      pvCurrent: 600,
      pvMax: 600,
      resistencias: { balistico: 10, corte: 10, perfuracao: 10, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 5, str: 3, int: 1, pre: 4, con: 3 },
      movement: 18,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garra Desintegradora",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 30,
              damage: [
                { id: "0", damageType: "energia", value: "4d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Comportamento Errático",
          tests: [
            {
              id: "0",
              dt: 30,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [
                { id: "0", damageType: "energia", value: "4d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
            },
            {
              id: "1",
              dt: 30,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [
                { id: "0", damageType: "energia", value: "6d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
            },
            {
              id: "1",
              dt: 30,
              reduceEffect: !0,
              skillName: "Fortitude",
              damage: [
                { id: "0", damageType: "energia", value: "10d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
            },
          ],
          automaticDamage: [
            { id: "0", damageType: "energia", value: "8d12" },
            { id: "1", damageType: "energia", value: "20" },
          ],
          description:
            "<p>No começo do seu turno, o anomiático é tomado pelo fluxo de Energia em seu corpo e executa três comportamentos aleatórios. Role 1d6 na tabela abaixo três vezes; o anomiático então executa as ações indicadas na ordem em que forem roladas. Se não puder executar uma das ações, ele fica parado se contorcendo e perde aquela ação (mas não qualquer outra). Para cada ação que perder, o anomiático aumenta suas resistências a dano em 10 até seu próximo turno.</p><p>1,2 - O anomiático salta até 18m em direção ao ser mais próximo. Se ficar adjacente a ele, faz uma ação agredir e ataca com suas garras desintegradoras.</p><p>3 - O anomiático se transforma em um facho de Energia e se move até ficar adjacente a um ser escolhido aleatoriamente entre todos que o estejam enfrentando.</p><p>4 - Uma parte do corpo do anomiático explode, causando dano de Energia em todos os seres ao redor. O dano exato depende da distância do ser em relação ao anomiático: 4d12+20 para seres em alcance médio, 6d12+20 para seres em alcance curto e 8d12+20 para seres adjacentes. Seres em alcance médio ou curto têm direito a um teste de Reflexos (DT 30) para reduzir o dano à metade. O anomiático perde 50 PV quando executa esta ação.</p><p>5 - Uma risada descontrolada toma o anomiático. Ele fica desprevenido até o início do seu próximo turno. Enquanto estiver desprevenido, todos os seus ataques são mais imprevisíveis e o defensor não pode se esquivar deles.</p><p>6 - O anomiático toca um ser adjacente. O alvo acumula uma quantidade absurda de Energia e sofre 10d12+20 pontos de dano de Energia (Fortitude DT 30 reduz à metade).</p>",
        },
      ],
      powers: [],
      fullPictureURL: "/img/creatures/anomiatico.webp",
      sheetPictureURL: "/img/creatures/anomiatico-profile.webp",
      description:
        "<p>Uma criatura originada de um corpo humano que foi completamente transformado pela Energia. Quando alguém com um nível extremamente alto de exposição paranormal deveria se tornar um anárquico, o caos se multiplica infinitamente dentro da sua existência, distorcendo por completo as noções de regras, leis e razão.</p><p>Um anomiático é um espectro da loucura e seu comportamento é totalmente insano. Relatos dos poucos sobreviventes o descrevem como um vulto de luz que se teleporta de forma desenfreada por todo o ambiente, rindo caoticamente enquanto flutua e se desintegra por todos os lugares. Com a capacidade de se mover em alta velocidade, ele busca atacar todos os seus inimigos de forma aleatória, como se tentasse corromper até mesmo a própria noção de sobrevivência.</p><p>Uma manifestação rara capaz de estragos incalculáveis, tentar montar uma estratégia contra o anomiático provavelmente só vai gerar um desastre ainda maior. Apenas lembre-se: se você ouvir uma risada distorcida e desafinada correndo como um curto elétrico ao seu redor, prepare-se para o imprevisível.</p>",
    },
    {
      name: "Ciborgue",
      element: "energia",
      secondaryElements: ["sangue", "medo"],
      imunidades: [],
      vd: 80,
      creatureSize: "grande",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 15, dice: "2d6", nex: 40 },
      perceptionType: "Visão no escuro",
      defense: 25,
      skills: {
        perception: { rollNumber: 2, rollBonus: 5 },
        initiative: { rollNumber: 3, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 3, rollBonus: 5 },
        will: { rollNumber: 2, rollBonus: 0 },
      },
      pvCurrent: 160,
      pvMax: 160,
      imunidadesAditional: "Condições de paralisia",
      resistencias: { balistico: 10, corte: 10, perfuracao: 10, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 3, str: 3, int: 2, pre: 2, con: 3 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Estado de Combate",
          description:
            "<p>No começo do turno do ciborgue, ele assume um estado de combate disponível dentre os quatro abaixo. Um estado de combate deixa de estar disponível quando sua fraqueza é resolvida (veja Enigma de Medo). O estado de combate do ciborgue define quais ações ele pode fazer, conforme a coluna ao lado.</p><p>Estado Alpha. Focado em atacar inimigos próximos.</p><p>Estado Beta. Focado em perseguir e atacar inimigos distantes.</p><p>Estado Gama. Focado em ataques à distância.</p><p>Estado Delta. Estado tático e defensivo.</p>",
        },
        {
          id: "1",
          name: "Regeneração Energética",
          description:
            "<p>No começo do turno do ciborgue, ele recupera 20 PV. Se perder três ou mais estados de combate, o ciborgue perde esta habilidade.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Estado Alpha - Agredir",
          attacks: [
            {
              id: "0",
              name: "Braço Laminado",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 10,
              criticalRange: 18,
              criticalMult: 2,
              damage: [
                { id: "0", damageType: "corte", value: "1d12" },
                { id: "1", damageType: "corte", value: "10" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Estado Beta - Agredir",
          attacks: [
            {
              id: "0",
              name: "Punho Energizado",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 10,
              criticalRange: 20,
              criticalMult: 2,
              damage: [
                { id: "0", damageType: "impacto", value: "2d8" },
                { id: "1", damageType: "impacto", value: "10" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "completa",
          name: "Estado Beta - Investida Energética",
          attacks: [
            {
              id: "0",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 4,
              rollBonus: 10,
              criticalRange: 20,
              criticalMult: 2,
              damage: [
                { id: "0", damageType: "impacto", value: "4d8" },
                { id: "1", damageType: "impacto", value: "10" },
              ],
            },
          ],
          tests: [
            { id: "0", dt: 20, reduceEffect: !1, skillName: "Fortitude" },
          ],
          description:
            "<p>O ciborgue avança até 24m (18) e faz um ataque de punho energizado com bônus de +1d20 no teste de ataque. Se acertar, causa +2d8 de dano (para um total de 4d8+10) e derruba o alvo (Fortitude DT 20 evita a queda).</p>",
        },
        {
          id: "3",
          type: "padrão",
          name: "Estado Gama - Agredir",
          attacks: [
            {
              id: "0",
              name: "Canhão",
              range: "Distância - Longo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "energia", value: "4d12" },
                { id: "1", damageType: "energia", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "4",
          type: "padrão",
          name: "Estado Delta - Agredir",
          attacks: [
            {
              id: "0",
              name: "Raio Energético",
              range: "Distância - Médio",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "energia", value: "1d12" },
                { id: "1", damageType: "energia", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "5",
          type: "movimento",
          name: "Criar Barreira",
          description:
            "<p>O ciborgue expande suas correntes de Energia e cria uma barreira paranormal. Ele recebe +5 na Defesa até o início de seu próximo turno.</p>",
        },
        {
          id: "6",
          type: "movimento",
          name: "Reiniciar",
          description:
            "<p>O ciborgue encerra uma condição que o esteja afetando.</p>",
        },
        {
          id: "7",
          type: "livre",
          name: "Desorientar",
          tests: [{ id: "0", dt: 20, reduceEffect: !1, skillName: "Vontade" }],
          description:
            "<p>Um ser que sofra dano do raio energético fica alquebrado. Se já estiver alquebrado, fica atordoado por uma rodada (Vontade DT 20 evita).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/ciborgue.webp",
      sheetPictureURL: "/img/creatures/ciborgue-profile.webp",
      enigmaDoMedo:
        "<p>O ciborgue é programado pela Energia para alterar seu estado de combate com frequência. Cada estado possui uma fraqueza específica, determinada quando ele é criado pela Entidade. Exemplos de fraquezas incluem sofrer 15 pontos de dano de um tipo específico em um único ataque ou ser exposto a uma substância ou material específico. Uma fraqueza só pode ser resolvida se o ciborgue estiver no estado de combate correspondente. Quando a fraqueza for resolvida, ele não poderá assumir mais esse estado de combate. Quando ficar sem nenhum estado de combate, ele se desativa: sua Defesa é reduzida para 10 e seu deslocamento para 0m.</p>",
      description:
        "<p>O avanço da tecnologia e a obsessão com melhorias cibernéticas dentro da Realidade podem levar aos resultados mais bizarros. O ciborgue se originou de um cientista seduzido pelo poder da tecnologia que se tornou tão obstinado com a sua eficiência que amputou seus próprios membros e os substituiu por mecanismos ativados através de Energia paranormal.</p><p>A dor causada pelo processo agressivo eventualmente distorceu seu ser em uma criatura descontrolada, com seu corpo formado de um grande aglomerado de partes mecânicas e orgânicas asquerosas.</p><p>O ciborgue é uma criatura brutal, mas suas mutações robóticas parecem causar transformações espontâneas. Isso faz com que a criatura mude seu comportamento a qualquer momento, assim como a forma de atacar suas vítimas. </p><p>Essa é uma criatura extremamente perigosa e não deve ser enfrentada sem preparo ou estudo do corpo que originou sua manifestação. A Energia fluindo por seu corpo torna o contato físico extremamente perigoso, com a criatura sendo capaz de liberar pulsos elétricos fortes o suficiente para desacordar uma pessoa adulta.</p>",
    },
    {
      name: "Empecilho",
      element: "energia",
      imunidades: [],
      vd: 20,
      creatureSize: "enorme",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 14, dice: "2d6", nex: 40 },
      perceptionType: "Visão no escuro",
      defense: 14,
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 3, rollBonus: 10 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 50,
      pvMax: 50,
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 3, str: 1, int: 2, pre: 1, con: 1 },
      movement: 12,
      altMovements: [{ title: "escalar", value: 6 }],
      secondaryElements: [],
      resistencias: {},
      powers: [
        {
          id: "0",
          name: "Enxame",
          description:
            "<p>Uma aglomeração de criaturas que agem em conjunto. Em termos de regras, pode entrar no espaço ocupado por um ser. No fim do seu turno, o exame usa o poder Desmantelar. Um enxame é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano e sofre apenas metade do dano de ataques com armas. Porém, sofre 50% a mais de dano por efeitos de área.</p>",
        },
        {
          id: "1",
          name: "Desmantelar",
          description:
            "<p>O enxame de emepecilhos faz uma manobra desarmar (3d20+7) contra todos os seres em seu espaço que estejam empunhando um equipamento tecnológico, como uma arma de fogo ou acessório. Se vencer, o enxame rouba o item e começa a desmonta-lo, causando 1d6 pontos de dano automaticamente ao objeto (ignora RD). É possível recuperar o objeto vencendo uma manobra desarmar contra o enxame.</p<",
        },
      ],
      actions: [],
      description:
        "<p>Essas criaturinhas grotescas já receberam muitos nomes (imps, duendes, goblins, fadas), e se manifestam quando um dispositivo tecnológico, eletrônico ou não, vai gerar caos se falhar ou funcionar de forma inesperada. Alguns pesquisadores afirmam que Empecilhos podem ser a causa de muitos acidentes inexplicáveis com elevadores e aviões.</p>",
    },
    {
      name: "Infecticídio",
      element: "energia",
      secondaryElements: ["sangue"],
      imunidades: [],
      vd: 280,
      creatureSize: "enorme",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 35, dice: "8d6", nex: 85 },
      perceptionType: "Visão no escuro",
      defense: 25,
      skills: {
        perception: { rollNumber: 1, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 15 },
        fortitude: { rollNumber: 5, rollBonus: 20 },
        reflex: { rollNumber: 3, rollBonus: 15 },
        will: { rollNumber: 1, rollBonus: 15 },
      },
      pvCurrent: 600,
      pvMax: 600,
      resistencias: { balistico: 20, corte: 20, perfuracao: 20, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 3, str: 5, int: 1, pre: 1, con: 5 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Horda",
          description:
            "<p>O infecticídio é uma horda de criaturas infectadas por um vírus de Energia. Ele sofre apenas metade do dano de ataques e habilidades que afetem apenas um ser, mas sofre o dobro do dano de efeitos de área. Além disso, sempre que erra um ataque, ainda causa metade do dano (exceto se o defensor usou uma reação para se esquivar).</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancadas Infectadas",
              range: "Corpo a corpo",
              numberOfAttacks: 3,
              rollNumber: 5,
              rollBonus: 30,
              damage: [
                { id: "0", damageType: "energia", value: "4d12" },
                { id: "1", damageType: "energia", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          name: "Infecção",
          tests: [
            { id: "0", dt: 30, skillName: "Fortitude", reduceEffect: !1 },
          ],
          macros: [{ id: "0", value: "2d10" }],
          description:
            "<p>Um ser que sofra dano das pancadas é infectado pelo vírus do infecticídio (Fortitude DT 30 evita). Um ser que passe no teste de resistência fica imune a essa doença até final da cena.</p><p>Vírus do Infecticídio. Contaminação por contato, Fortitude DT 30. O vírus do infecticídio é muito resistente, e só pode ser combatido em condições de temperaturas extremamente baixas. Testes de Fortitude só contam para curar esta doença se forem feitos em ambientes com temperatura abaixo de 0º.</p><p>Estágio I. Os pontos de vida máximos do personagem são reduzidos em 2d10. Se em qualquer estágio a doença reduzir seus PV a 0, ele morre instantaneamente.</p><p>Estágio II. Os pontos de vida máximos do personagem são reduzidos em mais 2d1</p><p>Estágio III ou superior. Os pontos de vida máximos do personagem são reduzidos em mais 2d10. Além disso, ele passa a transmitir o vírus por contato.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/infecticidio.webp",
      sheetPictureURL: "/img/creatures/infecticidio-profile.webp",
      description:
        "<p>No meio científico, o debate para definir se um vírus pode ser considerado de fato um ser vivo perante nossa biologia nunca foi definido por completo. Mas não resta dúvida de que as manifestações do Outro Lado podem tomar essa forma para invadir a Realidade.</p><p>Como uma doença paranormal, o infecticídio se origina como um vírus digital dentro de dispositivos eletrônicos. Através disso, infecta seres vivos da Realidade, distorcendo suas formas físicas e formando uma espécie de horda descontrolada com uma mente ensandecida e compartilhada.</p><p>Aqueles que foram contagiados pelo infecticídio apresentam sintomas após algumas horas. Eles começam como tremedeira nas mãos, mudança constante na cor da pupila para tons esverdeados ou rosados, descontrole psicológico e alucinações. Por fim, a vítima é tomada por completo e se torna parte da horda de infectados.</p><p>Os seus corpos então se tornam deformados, com os olhos tomando uma forma manchada com cores pulsantes e os dentes se tornando pontudos e brilhosos. O contágio da criatura pode ser feito através de contato direto com sangue ou saliva, como uma doença comum. Porém, ela também é capaz de se espalhar como um vírus digital, infectando dispositivos tecnológicos — como celulares e computadores — e, a partir deles, infectar seus usuários.</p><p>É possível exterminar o infecticídio por completo apenas eliminando todos aqueles que foram dominados pela criatura e congelando seus corpos para que o vírus perca sua capacidade de transmissão.</p>",
    },
    {
      name: "Perturbado de Energia",
      element: "energia",
      vd: 40,
      creatureSize: "médio",
      creatureType: "criatura",
      secondaryElements: [],
      presencaPerturbadora: { dt: 15, dice: "2d8", nex: 30 },
      perceptionType: "Visão no escuro",
      imunidades: [],
      defense: 19,
      skills: {
        perception: { rollNumber: -2, rollBonus: 0 },
        initiative: { rollNumber: 4, rollBonus: 10 },
        fortitude: { rollNumber: -2, rollBonus: 0 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: -2, rollBonus: 0 },
      },
      pvCurrent: 60,
      pvMax: 60,
      resistencias: { balistico: 5, corte: 5, perfuracao: 5, energia: 10 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 4, str: 1, int: 0, pre: 0, con: 0 },
      movement: 9,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Toque Plasmático",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 10,
              damage: [{ id: "0", damageType: "energia", value: "2d12" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Implantar Confusão",
          macros: [{ id: "0", value: "4d20k1+10" }],
          tests: [
            {
              id: "0",
              dt: 15,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "2d8" }],
            },
          ],
          description:
            "<p>Uma vez por rodada, o perturbado de Energia tenta agarrar um personagem que acabou de sofrer dano de seu toque plasmático (teste 4d20+10). Se conseguir, o perturbado começa a implantar imagens na mente do alvo e fazer com que ele reviva experiências traumáticas. O personagem sofre 2d8 pontos de dano mental (Vontade DT 15 reduz à metade) e recebe vulnerabilidade a dano de Energia até o fim da cena.</p>",
        },
      ],
      powers: [],
      fullPictureURL: "/img/creatures/perturbado-de-energia.webp",
      sheetPictureURL: "/img/creatures/perturbado-de-energia-profile.webp",
      description:
        "<p>Quando uma alma é enlouquecida de forma brusca e agressiva, sua psique pode ser tão violentada que a percepção da Realidade se esvai antes mesmo de perceber que não está viva. O resultado disso é um perturbado de Energia, uma forma plasmática inconsistente e desesperada, mergulhada em confusão e que não entende nem mesmo o que é.</p><p>O perturbado se agarra a qualquer consciência próxima numa tentativa desesperada de compartilhar e aliviar a sua discórdia mental, mesclando a percepção da Realidade e fazendo seus alvos reviverem memórias traumáticas em um estado de confusão.</p><p>Como uma forma completamente caótica, os perturbados são inconsistentes e não conseguem agir com coerência, afetando os alvos mais próximos que perceberem nos seus arredores. Tudo para tentar encontrar uma faísca de sentido e ordem mais uma vez, nem que por apenas um segundo.</p>",
    },
    {
      name: "Sukkalgir",
      element: "energia",
      secondaryElements: ["conhecimento"],
      vd: 160,
      creatureSize: "médio",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 25, dice: "4d8", nex: 55 },
      defense: 34,
      perceptionType: "Visão no escuro",
      skills: {
        perception: { rollNumber: 3, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 10 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 3, rollBonus: 10 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      pvCurrent: 220,
      pvMax: 220,
      imunidades: ["balístico", "corte", "perfuração"],
      resistencias: { impacto: 10, energia: 10 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 3, str: 2, int: 3, pre: 3, con: 2 },
      movement: 18,
      movementLabel: "Voo",
      powers: [
        {
          id: "0",
          name: "Aura Desperada",
          tests: [
            {
              id: "0",
              dt: 25,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "2d12" }],
            },
          ],
          description:
            "<p>Qualquer ser que comece seu turno em alcance curto da sukkalgir sofre 2d12 pontos de dano mental (Vontade DT 25 reduz à metade).</p>",
        },
        {
          id: "1",
          name: "Espírito Plasmático",
          description:
            "<p>A sukkalgir é parcialmente intangível, e pode atravessar obstáculos sólidos como paredes.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida do Outro Lado",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 15,
              damage: [{ id: "0", damageType: "mental", value: "2d12" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          name: "Agarrão",
          macros: [{ value: "3d20k1+15" }],
          description:
            "<p>Se a sukkalgir acertar um ataque com sua mordida em um ser Médio ou menor, pode agarrar o alvo (teste 3d20+15).</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Grito de Desespero",
          tests: [
            {
              id: "0",
              dt: 20,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "3d12" }],
            },
          ],
          description:
            "<p>A sukkalgir grita em desespero. Cada ser em alcance médio sofre 3d12 pontos de dano mental (Vontade DT 20 reduz à metade; estar sob cobertura fornece +5 nesse teste).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/sukkalgir.webp",
      sheetPictureURL: "/img/creatures/sukkalgir-profile.webp",
      description:
        "<p>Uma alma torturada através do fogo, as sukkal se originaram na antiga Suméria como resultado de um processo enlouquecedor em que textos eram cravados com brasa ardente em na pele de vítimas, registrando os feitos e massacres de seu captor.</p><p>Um ser destinado a sofrer pela agonia do fogo que tomou seu corpo pela eternidade, uma sukkal emite um grito enlouquecedor e constante, capaz de desmantelar a mente até mesmo daqueles mais acostumados com manifestações do Outro Lado.</p><p>Seu corpo é formado de Energia tomando um aspecto similar a uma labareda de cores impossíveis, constantemente pairando acima do chão enquanto as palavras e escritas macabras flutuam por sua pele de maneira caótica. Em seu rosto, um enorme sorriso desesperado se rasga em sua boca anormalmente grande que parece nunca cessar com o grito desesperador de uma mente atormentada.</p>",
    },
    {
      name: "Telopsia",
      element: "energia",
      secondaryElements: ["morte", "medo"],
      vd: 340,
      creatureSize: "médio",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 40, dice: "10d6", nex: 99 },
      perceptionType: "Visão no escuro",
      defense: 48,
      imunidades: [],
      skills: {
        perception: { rollNumber: 5, rollBonus: 25 },
        initiative: { rollNumber: 4, rollBonus: 20 },
        fortitude: { rollNumber: 2, rollBonus: 15 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 5, rollBonus: 25 },
      },
      pvCurrent: 560,
      pvMax: 560,
      imunidadesAditional: "Condições de paralisia",
      resistencias: { balistico: 20, corte: 20, perfuracao: 20, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 4, str: 2, int: 3, pre: 5, con: 2 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 4, rollBonus: 20 },
      ],
      movement: 12,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Toque Desintegrador",
              range: "Corpo a corpo",
              numberOfAttacks: 3,
              rollNumber: 4,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "energia", value: "6d12" },
                { id: "1", damageType: "energia", value: "30" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "movimento",
          name: "Viajar pela Tela",
          description:
            "<p>O telopsia pode se desmaterializar e se materializar em outra tela ou visor em alcance longo. Em seguida, ele se desloca 9m.</p>",
        },
        {
          id: "2",
          type: "padrão",
          name: "Tela Zumbificadora",
          tests: [
            {
              id: "0",
              dt: 30,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "6d6" }],
            },
          ],
          description:
            "<p>O telopsia projeta imagens enlouquecedoras em sua tela. Todos os seres em alcance médio sofrem 6d6 pontos de dano mental e ficam confusos até o final da cena (Vontade DT 30 reduz o dano à metade e evita a condição). Um ser que já esteja confuso e falhe no teste de resistência fica também fascinado.</p>",
        },
        {
          id: "3",
          type: "completa",
          name: "Prender na Tela",
          tests: [
            { id: "0", dt: 30, skillName: "Fortitude", reduceEffect: !1 },
          ],
          automaticDamage: [{ id: "0", damageType: "mental", value: "2d12" }],
          description:
            "<p>O telopsia usa ondas de Energia para desintegrar um ser em alcance curto e materializá-lo dentro de sua tela (Fortitude DT 30 evita). Um ser dentro da tela fica paralisado e sofre 2d12 pontos de dano mental no início de cada um de seus turnos. Cada vez que o telopsia sofre 50 ou mais pontos de dano em um turno, o ser preso pode repetir o teste de Fortitude; se passar, escapa da tela e se materializa em um ponto a sua escolha adjacente ao telopsia.</p>",
        },
      ],
      powers: [],
      fullPictureURL: "/img/creatures/telopsia.webp",
      sheetPictureURL: "/img/creatures/telopsia-profile.webp",
      enigmaDoMedo:
        "<p>A única maneira teorizada de derrotar o telopsia é de alguma forma destruir a própria fita amaldiçoada que se manifestou na Realidade, mas para isso é necessário investigar suas vítimas para encontrá-la, um trabalho árduo considerando que ninguém parece conseguir lembrar do que fez com ela após assistila. Se a fita for destruída, o telopsia tem seus PV reduzidos a 0 e também é destruído. Caso contrário, mesmo que seja derrotado em combate, se o seu Enigma de Medo não tiver sido resolvido, será apenas uma questão de tempo até o telopsia retornar.</p>",
      description:
        "<p>Você já deve ter escutado a lenda do filme amaldiçoado: telopsia. Uma fita VHS amaldiçoada que contém uma gravação misteriosa e terrível, causando a todos aqueles que a assistiram uma morte aterrorizante pouco tempo depois.</p><p>Os relatos daqueles que de fato possuíram a fita se misturam com as inúmeras histórias fictícias daqueles que buscam atenção, mas algumas consistências aparecem naqueles que não estavam mentindo: todos morreram em seguida.</p><p>Ninguém parece conseguir descrever sequer a duração do conteúdo registrado, e qualquer tentativa resulta na vítima entrando em um ataque de histeria enlouquecedora, repetindo as mesmas palavras sem parar em um ataque de pânico: “Rebobinar através. Rebobinar através. Rebobinar através…”</p><p>É impossível determinar uma origem da fita maldita, mas sua manifestação está sempre conectada à criatura que a acompanha. Descrito com a aparência de um homem bizarro vestindo um longo sobretudo preto, com um corpo esquelético e uma cabeça similar a uma televisão antiga, com imagens perturbadoras e enlouquecedoras sendo transmitidas em sua “tela”.</p><p>Todos aqueles que assistiram ao filme eventualmente são encontrados pela criatura. Então, é ela que os assiste, enquanto distorce e desintegra a forma de suas vítimas. Delas, resta apenas uma mancha preta no formato de silhueta no local em que morreram.</p>",
    },
    {
      name: "Tempestuoso",
      element: "energia",
      vd: 360,
      secondaryElements: [],
      creatureSize: "médio",
      creatureType: "criatura",
      imunidades: [],
      presencaPerturbadora: { dt: 40, dice: "8d8" },
      perceptionType: "Visão no escuro",
      defense: 56,
      skills: {
        perception: { rollNumber: 5, rollBonus: 20 },
        initiative: { rollNumber: 5, rollBonus: 25 },
        fortitude: { rollNumber: 4, rollBonus: 20 },
        reflex: { rollNumber: 5, rollBonus: 30 },
        will: { rollNumber: 5, rollBonus: 25 },
      },
      pvCurrent: 950,
      pvMax: 950,
      imunidadesAditional: "Condições de paralisia",
      resistencias: { balistico: 20, corte: 20, perfuracao: 20, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 5, str: 4, int: 2, pre: 5, con: 4 },
      movement: 24,
      powers: [
        {
          id: "0",
          name: "Aura Radioativa",
          tests: [
            {
              id: "0",
              dt: 40,
              reduceEffect: !0,
              skillName: "Fortitude",
              damage: [
                { id: "0", damageType: "energia", value: "2d20" },
                { id: "1", damageType: "energia", value: "20" },
              ],
            },
          ],
          description:
            "<p>Qualquer ser que comece seu turno em alcance curto do tempestuoso sofre 2d20+20 pontos de dano de Energia (Fortitude DT 40 reduz à metade).</p>",
        },
        {
          id: "1",
          name: "Espectro Radioativo",
          description:
            "<p>O tempestuoso manifesta um espectro de radiação à sua volta, que atua como uma extensão de seu corpo físico. Todos os ataques e habilidades corpo a corpo do tempestuoso podem ser feitos em alcance curto.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Garras Radioativas",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 40,
              damage: [
                { id: "0", damageType: "energia", value: "4d20" },
                { id: "1", damageType: "energia", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
          description:
            "<p>As garras radioativas do tempestuoso podem atingir alvos em alcance curto, mesmo sendo ataques corpo a corpo.</p>",
        },
        {
          id: "1",
          type: "livre",
          name: "Raio de Energia Radioativa",
          tests: [
            {
              id: "0",
              dt: 40,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [
                { id: "0", damageType: "energia", value: "4d20" },
                { id: "1", damageType: "energia", value: "20" },
              ],
            },
          ],
          description:
            "<p>Quando acerta dois ataques de garras radioativas em um mesmo ser, o tempestuoso faz com que um raio de energia radioativa seja projetado deste ser em direção a outro alvo em alcance médio. Este alvo sofre 4d20+20 pontos de dano de Energia (Reflexos DT 40 reduz à metade).</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Expandir em Radiação",
          tests: [
            {
              id: "0",
              dt: 40,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [
                { id: "0", damageType: "energia", value: "10d20" },
                { id: "0", damageType: "energia", value: "20" },
              ],
            },
          ],
          description:
            "<p>O tempestuoso concentra energia radioativa em volta de si para depois expandi-la como uma explosão de Energia. Cada ser em alcance longo sofre 10d20+20 pontos de dano de Energia (Reflexos DT 40 reduz à metade). O próprio tempestuoso perde 100 PV quando usa esta habilidade.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/tempestuoso.webp",
      sheetPictureURL: "/img/creatures/tempestuoso-profile.webp",
      description:
        "<p>Uma tempestade do caos, essa criatura disforme se manifesta através de turbilhões descontrolados, causando transformação e estrago a todos os lugares que toca. Como uma nuvem de pura Energia, um tempestuoso parece ser uma supernova implodindo em uma forma humanoide, em constante transformação, contida apenas por algum tipo de tecnologia incompreensível e bizarra em diversos cabos metálicos conectados.</p><p>Registros de encontros com tempestuosos foram descritos por testemunhas como sons ensurdecedores que poderiam ser confundidos com raios violentos caindo em uma tempestade enfurecida.</p><p>Um tempestuoso só pode ser originado em um ambiente com a Membrana extremamente danificada e em condições muito específicas, como usinas radioativas abandonadas, e seus efeitos perduram mesmo muito tempo depois, como se ele emitisse algum tipo de radiação paranormal ao seu redor, muito mais perigosa que radiação nuclear.</p><p>O encontro com um tempestuoso exige um preparo imponderável, equipamentos de alta proteção e, acima de tudo, muita sorte.</p>",
    },
    {
      name: "Viajante",
      element: "energia",
      secondaryElements: ["conhecimento", "medo"],
      imunidades: [],
      vd: 200,
      creatureSize: "médio",
      creatureType: "criatura",
      presencaPerturbadora: { dt: 20, dice: "6d6", nex: 60 },
      perceptionType: "Visão no escuro",
      defense: 34,
      skills: {
        perception: { rollNumber: 1, rollBonus: 15 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 4, rollBonus: 15 },
        will: { rollNumber: 4, rollBonus: 15 },
      },
      pvCurrent: 360,
      pvMax: 360,
      resistencias: { balistico: 10, corte: 10, perfuracao: 10, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 4, str: 2, int: 3, pre: 4, con: 2 },
      movement: 9,
      altMovements: [{ title: "Escalada", value: 9 }],
      powers: [
        {
          id: "0",
          name: "Invisibilidade Permanente",
          description:
            "<p>O viajante é invisível. Ele recebe camuflagem total, +15 em Furtividade e seres que não possam vê-lo ficam desprevenidos contra seus ataques.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 15,
              damage: [
                { id: "0", damageType: "impacto", value: "2d12" },
                { id: "1", damageType: "impacto", value: "10" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Agarrão",
          macros: [{ id: "0", value: "2d20k1+15" }],
          description:
            "<p>Se o viajante acerta um ataque com sua pancada em um ser Médio ou menor, pode tentar agarrar o alvo (teste 2O+15)</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Devorar Memória",
          tests: [
            {
              id: "0",
              dt: 29,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "4d12" }],
            },
          ],
          automaticDamage: [{ id: "0", damageType: "impacto", value: "1d12" }],
          description:
            "<p>O viajante entra na mente de um ser que esteja agarrando e começa a devorar suas memórias. A vítima sofre 4d12 pontos de dano mental e esquece completamente de uma pessoa (Vontade DT 29 reduz o dano à metade e evita o efeito). Para cada ser que o viajante deixar perturbado com esta habilidade, seu dano de pancada aumenta em +1d12 até o fim da cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/viajante.webp",
      sheetPictureURL: "/img/creatures/viajante-profile.webp",
      enigmaDoMedo:
        "<p>A única maneira de enxergar o viajante é usando dispositivos de captura de imagem para fotografálo. Capturar a sua existência em uma imagem sem que ele esteja de fato viajando através dela é o suficiente para distraí-lo momentaneamente, fazendo com que se torne visível por alguns segundos. Quando o Enigma de Medo do viajante for resolvido ele perde a habilidade Invisibilidade Permanente até o início do próximo turno do personagem que capturou sua imagem.</p>",
      description:
        "<p>Uma criatura maligna e cruel, o viajante das Polaroids é um ser que distorce lentamente as memórias de um alvo, se transportando através de fotografias e consumindo o rosto de todos aqueles registrados nelas.</p><p>Após gerar traumas e desespero o suficiente, o viajante se manifesta fisicamente, causando amnésia temporária em sua presa para confundi-la e desestruturá-la, diminuindo as suas chances de sobrevivência. Todas as fotografias que antes eram apenas rostos vazios se distorcem em sorrisos tétricos e macabros.</p><p>O viajante é uma criatura bizarra, com um corpo esbranquiçado, membros alongados e uma cabeça com incontáveis rostos terríveis mesclados em expressões diferentes. Porém, ele é fisicamente invisível, e consegue andar em superfícies como paredes e tetos. Seus métodos cruéis envolvem matar e devorar suas vítimas rasgando seu rosto pelas extremidades da boca, abrindo um enorme sorriso perturbador.</p><p>O viajante parece não se satisfazer com a carne de suas vítimas, e sim com suas memórias, buscando sempre arrancar o cérebro para explorá-lo, ou acessando suas mentes antes de assassiná-las. Se as fotos daqueles que você não reconhece mais sorrirem de forma macabra para você, ele está chegando, e você precisa se esconder.</p>",
    },
  ],
  s = [
    {
      name: "Degolificada",
      element: "medo",
      secondaryElements: ["energia", "conhecimento", "sangue", "morte"],
      creatureSize: "médio",
      creatureType: "criatura",
      vulnerabilidades: [],
      vd: 320,
      presencaPerturbadora: { dt: 40, dice: "9d6", nex: 95 },
      perceptionType: "Percepção às cegas",
      defense: 45,
      skills: {
        perception: { rollNumber: 4, rollBonus: 15 },
        initiative: { rollNumber: 3, rollBonus: 0 },
        fortitude: { rollNumber: 4, rollBonus: 20 },
        reflex: { rollNumber: 3, rollBonus: 15 },
        will: { rollNumber: 4, rollBonus: 25 },
      },
      pvCurrent: 850,
      pvMax: 850,
      imunidades: ["dano"],
      resistencias: {},
      attributes: { dex: 3, str: 5, int: 3, pre: 4, con: 4 },
      movement: 6,
      powers: [
        {
          id: "0",
          name: "Criatura de Medo",
          description:
            "<p>A degolificada é imune a dano, até que se resolva o mistério da sua origem.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pancada",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 5,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "impacto", value: "8d8" },
                { id: "1", damageType: "impacto", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Agarrar e Estrangular",
          macros: [{ id: "0", value: "5d20k1+35" }],
          description:
            "<p>Se a degolificada acertar um ataque de pancada em um personagem Médio ou menor, ela pode tentar agarrar o alvo (teste 5d20+35). Enquanto estiver agarrado desta forma, o personagem também fica asfixiado. A degolificada pode manter até duas criaturas agarradas por vez.</p>",
        },
        {
          id: "2",
          type: "livre",
          name: "Grito Rasgado",
          tests: [
            {
              id: "0",
              dt: 35,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [
                { id: "0", damageType: "mental", value: "4d10" },
                { id: "1", damageType: "mental", value: "10" },
              ],
            },
          ],
          macros: [{ id: "0", value: "1d4" }],
          description:
            "<p>A degolificada rompe a vedação de sua boca e emite um grito ensurdecedor. Cada personagem em alcance médio sofre 4d10+10 pontos de dano mental e um efeito determinado aleatoriamente rolando 1d4 na tabela a seguir (Vontade DT 35 reduz o dano à metade e evita o efeito). A degolificada só pode usar esta habilidade uma vez por cena.</p><p>1 - Surdo dos dois ouvidos permanentemente</p><p>2 - Surdo de um ouvido permanentemente</p><p>3 - Surdo de dois ouvidos até o final da cena</p><p>4 - Surdo de um ouvido até o final da cena</p>",
        },
        {
          id: "3",
          type: "movimento",
          name: "Desfiguramento Capilar",
          tests: [
            {
              id: "0",
              dt: 35,
              reduceEffect: !0,
              skillName: "Fortitude",
              damage: [
                { id: "0", damageType: "perfuração", value: "10d6" },
                { id: "1", damageType: "perfuração", value: "20" },
              ],
            },
            {
              id: "1",
              dt: 35,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "6d10" }],
            },
          ],
          description:
            "<p>A degolificada usa seus longos cabelos para penetrar os orifícios faciais e seus olhos vazios para perturbar a alma de suas vítimas. Cada personagem agarrado por ela sofre 10d6+20 pontos de dano de perfuração (Fortitude DT 35 reduz à metade) e 6d10 pontos de dano mental (Vontade DT 35 reduz à metade).</p>",
        },
        {
          id: "4",
          type: "padrão",
          name: "Agredir - Sangue",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 5,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "sangue", value: "10d10" },
                { id: "1", damageType: "sangue", value: "20" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
          description:
            "<p>Se a degolificada matar um alvo e mantê-lo agarrado até seu próximo turno, ela o absorve e se transforma em degolificada devoradora, assumindo uma forma de Sangue maior e mais agressiva. Nesta forma, ela ganha um ataque adicional de mordida (5d20+35, 10d10+20 Sangue) e ela recebe resistência a Sangue 20.</p>",
        },
        {
          id: "5",
          type: "movimento",
          name: "Agarrar - Morte",
          tests: [{ id: "0", dt: 35, reduceEffect: !1, skillName: "Reflexos" }],
          description:
            "<p>Após 3 erros consecutivos em ataques contra a degolificada, o tempo perdido dedicado a ela transforma-a em uma degolificada decrépita. Ela assume uma forma de Morte, esquelética e retorcida com Lodo preto. Nesta forma, o deslocamento dela aumenta para 12m (8q) e ela recebe resistência a Morte 20. Além disso, seus cabelos se transformam em Lodo que podem agarrar vítimas. Ela pode gastar uma ação de movimento para agarrar uma criatura em alcance curto (Reflexos DT 35 evita).</p>",
        },
        {
          id: "6",
          type: "livre",
          name: "Alucinação - Conhecimento",
          tests: [
            {
              id: "0",
              dt: 35,
              reduceEffect: !0,
              skillName: "Vontade",
              damage: [{ id: "0", damageType: "mental", value: "4d6" }],
            },
          ],
          description:
            "<p>Se receber a resposta errada ao tentarem resolver seu enigma, ela se transforma em degolificada gnóstica. Sigilos de Conhecimento do Outro Lado aparecem ao redor de seu corpo brilhando em dourado. Ao final de cada turno da degolificada, o alvo visível mais próximo recebe uma alucinação, enxergando uma ilusão relacionada ao enigma da degolificada. O personagem sofre 4d6 pontos de dano mental e fica atordoado até final de seu próximo turno (Vontade DT 35 reduz o dano à metade e evita a condição).</p>",
        },
      ],
      fullPictureURL: "/img/creatures/degolificada.webp",
      sheetPictureURL: "/img/creatures/degolificada-profile.webp",
      enigmaDoMedo:
        "<p>A degolificada precisa ser confrontada com a causa de sua morte, de modo que não possa escapar desse confronto. Se for confrontada desta forma, ela perde sua imunidade a dano.</p>",
      description:
        "<p>Uma das criaturas paranormais mais temidas, poucos encontraram uma degolificada e viveram para contar a história. Uma manifestação direta do Outro Lado, esta entidade é formada por todos os elementos paranormais conhecidos pela Realidade.</p><p>Uma figura humanoide, flutuando em velocidade constante a centímetros do chão. Sua aparência é fantasmagórica, com um corpo retorcido, curvado e dilacerado, com vestes rasgadas e sujas em cima de uma pele cinzenta e escamosa.</p><p>Da sua cabeça, um enorme e liso cabelo preto tampando seu rosto cresce até o chão, se arrastando e se movendo como se tivesse vontade própria. Por trás dos longos fios negros, um rosto assombrado, com olhos ausentes revelando dois buracos vazios profundos e desesperados acima de uma boca que parece ser tapada ou costurada por uma espécie de extensão da sua própria pele.</p><p>Ao seu redor, ela carrega uma pesada neblina com rostos atormentados discerníveis como se ela estivesse cercada de dezenas de almas torturadas. Uma visão traumatizante.</p><p>Todas as manifestações da degolificada registradas parecem apontar uma conexão forte com tragédias terríveis envolvendo pessoas muito jovens, como crianças ou adolescentes que morreram de forma cruel diretamente envolvidos em rituais paranormais. Mentes inocentes são fontes poderosíssimas de Medo.</p><p>A degolificada parece se desenvolver e distorcer mais a cada vez que se manifesta na Realidade. Ela é uma criatura de Medo, e por isso, apenas confronto direto em combate não é o suficiente para derrotá-la.</p><p>A origem da manifestação da degolificada precisa ser investigada e descoberta, e então ela deve ser confrontada com a verdade terrível que a invocou. Apenas após ser descortinada com a origem da sua manifestação a degolificada poderá ser dissipada ou combatida.</p><p>Mesmo com relatos de agentes que tiveram sucesso em suas investigações, a frase que se repete como uma lenda despertando Medo por todos os agentes da Ordem é: “Se você vir longos cabelos pretos flutuando em sua direção… CORRA.</p><p>MECÂNICA ESPECIAL: METAMORFOSE DA DEGOLIFICADA</p><p>SANGUE: Se a degolificada matar um alvo e mantê-lo agarrado até seu próximo turno, ela o absorve e se transforma em degolificada devoradora, assumindo uma forma de Sangue maior e mais agressiva. Nesta forma, ela ganha um ataque adicional de mordida (5O+35, 10d10+20 Sangue) e ela recebe resistência a Sangue 20.</p><p>MORTE: Após 3 erros consecutivos em ataques contra a degolificada, o tempo perdido dedicado a ela transforma-a em uma degolificada decrépita. Ela assume uma forma de Morte, esquelética e retorcida com Lodo preto. Nesta forma, o deslocamento dela aumenta para 12m (8q) e ela recebe resistência a Morte 20. Além disso, seus cabelos se transformam em Lodo que podem agarrar vítimas. Ela pode gastar uma ação de movimento para agarrar uma criatura em alcance curto (Reflexos DT 35 evita).</p><p>ENERGIA: Se a degolificada enlouquecer um alvo, ela se transforma em uma degolificada conturbada. Seu corpo assume um aspecto fantasmagórico, como chamas irracionais em constante transformação. Assumindo a forma de um espectro de Energia, ela pode atravessar paredes e ignorar coberturas, e o dano de seus ataques se transforma em dano de Energia. Além disso, recebe resistência a Energia 20.</p><p>CONHECIMENTO: Se receber a resposta errada ao tentarem resolver seu enigma, ela se transforma em degolificada gnóstica. Sigilos de Conhecimento do Outro Lado aparecem ao redor de seu corpo brilhando em dourado. Ao final de cada turno da degolificada, o alvo visível mais próximo recebe uma alucinação, enxergando uma ilusão relacionada ao enigma da degolificada. O personagem sofre 4d6 pontos de dano mental e fica atordoado até final de seu próximo turno (Vontade DT 35 reduz o dano à metade e evita a condição).</p>",
    },
  ],
  i = [
    {
      name: "Bandido",
      presencaPerturbadora: {},
      vd: 10,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "pessoa",
      vulnerabilidades: [],
      imunidades: [],
      resistencias: {},
      defense: 14,
      skills: {
        perception: { rollNumber: 1, rollBonus: 0 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 8,
      pvMax: 8,
      attributes: { dex: 2, str: 2, int: 1, pre: 1, con: 1 },
      extraSkills: [
        { id: "0", name: "Crime", rollNumber: 2, rollBonus: 5 },
        { id: "1", name: "Furtividade", rollNumber: 2, rollBonus: 5 },
      ],
      movement: 9,
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "Faca",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "perfuração", value: "1d4" },
                { id: "1", damageType: "perfuração", value: "2" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          name: "Ataque Furtivo",
          automaticDamage: [
            { id: "0", damageType: "perfuração", value: "1d6" },
          ],
          description:
            "<p>Uma vez por rodada, o bandido causa +1d6 pontos de dano com ataques corpo a corpo, ou à distância em alcance curto, contra alvos desprevenidos ou que esteja flanqueando.</p>",
        },
      ],
      powers: [],
      description: "<p>Um criminoso típico, como um ladrão ou assaltante.</p>",
    },
    {
      name: "Capanga",
      vd: 20,
      presencaPerturbadora: {},
      secondaryElements: [],
      creatureType: "pessoa",
      creatureSize: "médio",
      vulnerabilidades: [],
      imunidades: [],
      resistencias: {},
      defense: 13,
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 1, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 17,
      pvMax: 17,
      attributes: { dex: 1, str: 2, int: 1, pre: 1, con: 2 },
      extraSkills: [
        { id: "0", name: "Intimidação", rollNumber: 1, rollBonus: 5 },
      ],
      movement: 9,
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "Bastão",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "impacto", value: "1d8" },
                { id: "1", damageType: "impacto", value: "7" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "Revólver",
              range: "À distância - Curto",
              rollNumber: 1,
              rollBonus: 5,
              numberOfAttacks: 1,
              criticalMult: 3,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "balístico", value: "2d6" },
                { id: "1", damageType: "balístico", value: "5" },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Ataque Furtivo",
          automaticDamage: [
            { id: "0", damageType: "impacto", value: "2d6" },
            { id: "1", damageType: "balístico", value: "2d6" },
          ],
          description:
            "<p>Uma vez por rodada, o capanga causa +2d6 pontos de dano com ataques corpo a corpo, ou à distância em alcance curto, contra alvos desprevenidos ou que esteja flanqueando.</p>",
        },
      ],
      powers: [],
      description:
        "<p>Pessoas embrutecidas, que vivem pela violência. Esta ficha pode representar membros de gangue a executores da máfia e leões de chácara de boates.</p>",
    },
    {
      name: "Soldado de Aluguel",
      vd: 40,
      powers: [],
      description:
        "<p>Um combatente profissional, que trabalha para quem pagar mais.</p>",
      creatureSize: "médio",
      presencaPerturbadora: {},
      secondaryElements: [],
      creatureType: "pessoa",
      vulnerabilidades: [],
      imunidades: [],
      resistencias: {},
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      defense: 18,
      pvCurrent: 25,
      pvMax: 25,
      attributes: { dex: 2, str: 2, int: 1, pre: 1, con: 2 },
      movement: 9,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Machete",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 10,
              criticalMult: 2,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "corte", value: "1d6" },
                { id: "1", damageType: "corte", value: "9" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Fuzil de assalto",
              range: "À distância - Médio",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 10,
              criticalMult: 3,
              criticalRange: 19,
              damage: [
                { id: "0", value: "2d8", damageType: "balístico" },
                { id: "1", value: "9", damageType: "balístico" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "completa",
          name: "Ataque em movimento",
          description:
            "<p>O soldado de aluguel pode percorrer seu deslocamento e atacar em qualquer ponto durante o movimento.</p>",
        },
      ],
    },
    {
      name: "Assassino",
      vd: 80,
      presencaPerturbadora: {},
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "pessoa",
      vulnerabilidades: [],
      imunidades: [],
      description:
        "<p>O assassino é um matador habilidoso e furtivo, que surge quando as ameaças da Realidade precisam eliminar alguém de forma discreta e eficiente.</p>",
      defense: 26,
      resistencias: {},
      skills: {
        perception: { rollNumber: 3, rollBonus: 10 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 3, rollBonus: 10 },
      },
      pvCurrent: 90,
      pvMax: 90,
      extraSkills: [
        { id: "0", name: "Crime", rollNumber: 4, rollBonus: 10 },
        { id: "1", name: "Enganação", rollNumber: 3, rollBonus: 10 },
        { id: "2", name: "Furtividade", rollNumber: 4, rollBonus: 10 },
      ],
      movement: 9,
      attributes: { dex: 4, str: 2, int: 3, pre: 3, con: 2 },
      powers: [
        {
          id: "0",
          name: "Evasão",
          description:
            "Quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, o assassino não sofre dano algum se passar.",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Faca",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 17,
              criticalMult: 2,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "corte", value: "1d4" },
                { id: "1", damageType: "corte", value: "11" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pistola",
              range: "À distância - Curto",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 15,
              criticalMult: 4,
              criticalRange: 16,
              damage: [
                { id: "0", damageType: "balístico", value: "1d12" },
                { id: "1", damageType: "balístico", value: "14" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "livre",
          name: "Ataque Furtivo",
          automaticDamage: [
            { id: "0", damageType: "corte", value: "4d6" },
            { id: "0", damageType: "balístico", value: "4d6" },
          ],
          description:
            "<p>Uma vez por rodada, o assassino causa +4d6 pontos de dano com ataques corpo a corpo, ou à distância em alcance curto, contra alvos desprevenidos ou que esteja flanqueando</p>",
        },
        {
          id: "3",
          type: "livre",
          name: "Mão na boca",
          macros: [{ id: "0", value: "2d20k1+15" }],
          description:
            "<p>Quando faz um ataque corpo a corpo furtivo contra uma criatura desprevenida, o assassino pode fazer um teste de agarrar (teste 2d20+15). Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada.</p>",
        },
        {
          id: "4",
          type: "movimento",
          name: "Assassinar",
          automaticDamage: [
            { id: "0", damageType: "corte", value: "8d6" },
            { id: "0", damageType: "balístico", value: "8d6" },
          ],
          description:
            "<p>O assassino analisa uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados.</p>",
        },
      ],
    },
    {
      name: "Comandante Mercenário",
      vd: 120,
      presencaPerturbadora: {},
      secondaryElements: [],
      description:
        "<p>Um homem ou mulher endurecido por anos de conflitos. Um comandante mercenário é tanto um oficial competente, capaz de liderar seus subordinados, quanto um combatente perigoso por si só.</p>",
      creatureSize: "médio",
      creatureType: "pessoa",
      vulnerabilidades: [],
      imunidades: [],
      defense: 29,
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 15 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 3, rollBonus: 10 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      resistencias: { balistico: 5, corte: 5, impacto: 5, perfuracao: 5 },
      pvCurrent: 145,
      pvMax: 145,
      attributes: { dex: 3, str: 3, int: 2, pre: 2, con: 3 },
      extraSkills: [
        { id: "0", name: "Intimidação", rollNumber: 2, rollBonus: 10 },
        { id: "1", name: "Tática", rollNumber: 2, rollBonus: 10 },
      ],
      movement: 6,
      powers: [
        {
          id: "0",
          name: "Sadismo",
          description:
            "<p>Se o comandante mercenário causar dano em um inimigo, o próximo ataque dele recebe +1d20 no teste de ataque e, se acertar, causa mais um dado de dano do mesmo tipo.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Machete",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 17,
              criticalMult: 2,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "corte", value: "1d6" },
                { id: "1", damageType: "corte", value: "15" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Metralhadora",
              range: "À distância - Médio",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 17,
              criticalMult: 3,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "corte", value: "3d12" },
                { id: "1", damageType: "corte", value: "15" },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "completa",
          name: "Ataque em movimento",
          description:
            "<p>O chefe mercenário pode percorrer seu deslocamento e atacar em qualquer ponto durante o movimento. Ele pode fazer seus dois ataques corpo a corpo ou à distância.</p>",
        },
        {
          id: "3",
          type: "movimento",
          name: "Ordens",
          description:
            "<p>O chefe mercenário grita ordens para seus aliados em alcance médio. Eles recebem +1d20 em testes de perícia e causam mais um dado de dano do mesmo tipo até o fim da cena.</p>",
        },
      ],
    },
    {
      name: "Iniciado",
      vd: 20,
      creatureSize: "médio",
      secondaryElements: [],
      presencaPerturbadora: {},
      creatureType: "pessoa",
      resistencias: {},
      vulnerabilidades: [],
      imunidades: [],
      description:
        "<p>Ainda que seja um iniciado no caminho da adoração às entidades, este cultista já é capaz de conjurar rituais, e pode se mostrar um oponente perigoso para agentes inexperientes.</p>",
      defense: 16,
      skills: {
        perception: { rollNumber: 2, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 0 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      pvCurrent: 15,
      pvMax: 15,
      attributes: { dex: 1, str: 1, int: 2, pre: 2, con: 1 },
      extraSkills: [
        { id: "0", name: "Enganação", rollNumber: 2, rollBonus: 5 },
        { id: "0", name: "Ocultismo", rollNumber: 2, rollBonus: 5 },
      ],
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Conjurador",
          description:
            "<p>Escolha dois rituais de 1º círculo de um elemento. O iniciado pode conjurar esses rituais sem pagar seu custo de PE, até um limite de 3 PE por conjuração, usando a ação apropriada para cada ritual. A DT para resistir aos seus rituais é 15.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Faca",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 1,
              rollBonus: 0,
              criticalMult: 2,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "corte", value: "1d4" },
                { id: "1", damageType: "corte", value: "1" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Investido",
      vd: 40,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "pessoa",
      resistencias: {},
      presencaPerturbadora: {},
      vulnerabilidades: [],
      imunidades: [],
      description:
        "<p>Tendo executado os ritos iniciais de admissão e provado sua lealdade ao seu Elemento, o cultista investido é alguém comprometido com as Entidades e um perigo para a Realidade. </p>",
      defense: 17,
      skills: {
        perception: { rollNumber: 2, rollBonus: 5 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 2, rollBonus: 0 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      pvCurrent: 35,
      pvMax: 35,
      movement: 9,
      attributes: { dex: 2, str: 1, int: 2, pre: 2, con: 1 },
      extraSkills: [
        { id: "0", name: "Enganação", rollNumber: 2, rollBonus: 10 },
        { id: "1", name: "Ocultismo", rollNumber: 2, rollBonus: 10 },
      ],
      powers: [
        {
          id: "0",
          name: "Conjurador",
          description:
            "<p>Escolha dois rituais de 1º círculo e dois rituais de 2º círculo de até dois elementos. O cultista pode conjurar esses rituais sem pagar seu custo de PE, até um limite de 5 PE por conjuração, usando a ação apropriada para cada ritual. A DT para resistir aos seus rituais é 17.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Faca",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              criticalMult: 2,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "corte", value: "1d4" },
                { id: "1", damageType: "corte", value: "1" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Revólver",
              range: "À distância - Curto",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 0,
              criticalMult: 3,
              criticalRange: 19,
              damage: [{ id: "0", damageType: "balístico", value: "2d6" }],
            },
          ],
        },
      ],
    },
    {
      name: "Líder do culto",
      vd: 140,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "pessoa",
      resistencias: {},
      vulnerabilidades: [],
      presencaPerturbadora: {},
      imunidades: [],
      description:
        "<p>Experiente e capaz de conjurar rituais mais poderosos, o líder avançou no culto, colhendo as recompensas de sua devoção às entidades. Mantendo habilmente seu disfarce de bom cidadão, este mestre cultista pode ser qualquer um, até mesmo alguém muito próximo dos agentes.</p>",
      defense: 27,
      skills: {
        perception: { rollNumber: 3, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      pvCurrent: 150,
      pvMax: 150,
      movement: 9,
      attributes: { dex: 2, str: 1, int: 3, pre: 3, con: 2 },
      extraSkills: [
        { id: "0", name: "Enganação", rollNumber: 3, rollBonus: 15 },
        { id: "1", name: "Ocultismo", rollNumber: 3, rollBonus: 15 },
      ],
      powers: [
        {
          id: "0",
          name: "Conjurador",
          description:
            "<p>Escolha dois rituais de 1º círculo, dois rituais de 2º círculo e dois rituais de 3º círculo de até dois elementos. O cultista pode conjurar esses rituais sem pagar seu custo de PE, até um limite de 10 PE por conjuração, usando a ação apropriada para cada ritual. A DT para resistir aos seus rituais é 25.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Faca",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 10,
              criticalMult: 2,
              criticalRange: 19,
              damage: [
                { id: "0", damageType: "corte", value: "1d4" },
                { id: "1", damageType: "corte", value: "1" },
              ],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Revólver",
              range: "À distância - Curto",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              criticalMult: 3,
              criticalRange: 19,
              damage: [{ id: "0", damageType: "balístico", value: "2d6" }],
            },
          ],
        },
      ],
    },
    {
      name: "Policial",
      vd: 20,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "pessoa",
      resistencias: {},
      vulnerabilidades: [],
      presencaPerturbadora: {},
      imunidades: [],
      description:
        "<p>O policial padrão, encontrado patrulhando as ruas e praças da maioria das cidades. Provavelmente nunca teve um encontro com o paranormal, e vai considerar qualquer menção a monstros e magias uma brincadeira de mau gosto — ou mesmo uma desculpa para esconder algum crime. Esta ficha também pode ser usada para vigias, seguranças corporativos e pessoas com algum treinamento com armas no geral.</p>",
      defense: 19,
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      powers: [],
      pvCurrent: 15,
      pvMax: 15,
      movement: 9,
      attributes: { dex: 2, str: 2, int: 1, pre: 1, con: 2 },
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Bastão",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "impacto", value: "1d8" },
                { id: "1", damageType: "impacto", value: "7" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Pistola",
              range: "À disntância - Curto",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "balístico", value: "1d12" },
                { id: "1", damageType: "balístico", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 18,
            },
          ],
        },
      ],
    },
    {
      name: "Policial de Elite",
      vd: 60,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "pessoa",
      vulnerabilidades: [],
      imunidades: [],
      presencaPerturbadora: {},
      description:
        "<p>Treinados e equipados para enfrentar situações extremas, os policiais de uma tropa de elite provavelmente serão os primeiros a aparecer quando uma investigação discreta se transformar em um confronto armado.</p>",
      defense: 27,
      skills: {
        perception: { rollNumber: 1, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 15 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 3, rollBonus: 10 },
        will: { rollNumber: 1, rollBonus: 10 },
      },
      pvCurrent: 40,
      pvMax: 40,
      movement: 6,
      resistencias: { balistico: 5, corte: 5, impacto: 5, perfuracao: 5 },
      attributes: { dex: 3, str: 3, int: 1, pre: 1, con: 3 },
      powers: [
        {
          id: "0",
          name: "Fortificação",
          macros: [{ id: "0", value: "1d2" }],
          description:
            "<p>Graças ao seu equipamento, o policial de elite tem 50% de chance de ignorar o dano adicional de um acerto crítico ou ataque furtivo.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Bastão",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "impacto", value: "1d8" },
                { id: "1", damageType: "impacto", value: "13" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Fuzil de assalto",
              range: "À disntância - Médio",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "balístico", value: "2d8" },
                { id: "1", damageType: "balístico", value: "13" },
              ],
              criticalMult: 3,
              criticalRange: 17,
            },
          ],
        },
        {
          id: "2",
          type: "padrão",
          name: "Lança-granadas",
          tests: [
            {
              id: "0",
              dt: 19,
              reduceEffect: !0,
              skillName: "Reflexos",
              damage: [{ id: "0", damageType: "impacto", value: "8d6" }],
            },
          ],
          description:
            "<p>Uma vez por cena, o policial de elite dispara uma granada explosiva em alcance médio. Cada ser a 6m do ponto de impacto sofre 8d6 pontos de dano de impacto (Reflexos DT 19 reduz à metade).</p>",
        },
        {
          id: "3",
          type: "completa",
          name: "Empurrar e atirar",
          tests: [
            { id: "0", dt: 19, reduceEffect: !1, skillName: "Fortitude" },
          ],
          attacks: [
            {
              id: "0",
              name: "Fuzil de assalto",
              range: "À disntância - Médio",
              numberOfAttacks: 1,
              rollNumber: 4,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "balístico", value: "4d8" },
                { id: "1", damageType: "balístico", value: "13" },
              ],
              criticalMult: 3,
              criticalRange: 17,
            },
          ],
          description:
            "<p>O policial de elite empurra um personagem adjacente 3m para longe de si (Fortitude DT 19 evita) e em seguida atira com seu fuzil de assalto a curta distância. Se tiver conseguido empurrar o personagem, o policial de elite recebe +1d20 neste ataque e, se acertar, +2d8 na rolagem de dano.</p>",
        },
      ],
    },
    {
      name: "Chefe de polícia",
      vd: 100,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "pessoa",
      resistencias: {},
      vulnerabilidades: [],
      presencaPerturbadora: {},
      imunidades: [],
      powers: [],
      description:
        "<p>Um delegado ou coronel, que já passou por situações difíceis e não se intimida facilmente.</p>",
      defense: 25,
      skills: {
        perception: { rollNumber: 3, rollBonus: 15 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 2, rollBonus: 10 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      pvCurrent: 105,
      pvMax: 105,
      attributes: { dex: 2, str: 3, int: 2, pre: 3, con: 3 },
      movement: 9,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Bastão",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 15,
              damage: [
                { id: "0", damageType: "impacto", value: "1d8" },
                { id: "1", damageType: "impacto", value: "8" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Espingarda",
              range: "À disntância - Curto",
              numberOfAttacks: 2,
              rollNumber: 2,
              rollBonus: 17,
              damage: [
                { id: "0", damageType: "balístico", value: "4d6" },
                { id: "1", damageType: "balístico", value: "12" },
              ],
              criticalMult: 3,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "2",
          type: "reação",
          name: "Teimoso",
          description:
            "<p>Uma vez por cena, o chefe de polícia pode ignorar um efeito que exija teste de resistência ou reduzir um dano recém sofrido a metade.</p>",
        },
      ],
    },
    {
      name: "Cão de guarda",
      vd: 10,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "animal",
      resistencias: {},
      vulnerabilidades: [],
      powers: [],
      presencaPerturbadora: {},
      imunidades: [],
      description:
        "<p>Cães treinados para guarda podem causar problemas para um grupo de agentes que precisa ser furtivo. Estas estatísticas podem ser usadas também para representar cães policiais ou lobos.</p>",
      defense: 14,
      skills: {
        perception: { rollNumber: 1, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 12,
      pvMax: 12,
      attributes: { dex: 2, str: 2, int: 0, pre: 1, con: 2 },
      extraSkills: [
        { id: "0", name: "Sobrevivência", rollNumber: 1, rollBonus: 10 },
      ],
      movement: 12,
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "corte", value: "1d6" },
                { id: "1", damageType: "corte", value: "2" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Derrubar",
          macros: [{ id: "0", value: "4d20k1+5" }],
          description:
            "<p>Se o cão de guarda acerta um ataque de mordida, pode fazer a manobra derrubar (bônus 2d20+5).</p>",
        },
      ],
    },
    {
      name: "Enxame de abelhas",
      vd: 10,
      creatureSize: "médio",
      creatureType: "Animal (enxame)",
      secondaryElements: [],
      defense: 15,
      perceptionType: "Visão na penumbra",
      vulnerabilidades: [],
      imunidades: [],
      actions: [],
      presencaPerturbadora: {},
      resistencias: {},
      description:
        "<p>Normalmente pacíficas, abelhas podem se tornar agressivas se sua colmeia for ameaçada. Encontradas principalmente em zonas rurais, abelhas podem estabelecer colmeias em parques e em casas abandonadas.</p>",
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: -2, rollBonus: 0 },
        reflex: { rollNumber: 1, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      attributes: { dex: 1, str: 0, int: 0, pre: 1, con: 0 },
      movement: 3,
      altMovements: [{ title: "voo", value: 9 }],
      pvCurrent: 10,
      pvMax: 10,
      powers: [
        {
          id: "0",
          name: "Enxame",
          automaticDamage: [{ id: "0", damageType: "balístico", value: "2d6" }],
          description:
            "<p>Um enxame é uma aglomeração de criaturas que agem em conjunto. Em termos de regras, pode entrar no espaço ocupado por um ser. No fim do seu turno, o enxame causa 2d6 pontos de dano de perfuração a qualquer ser em seu espaço, automaticamente. Um enxame é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano e sofre apenas metade do dano de ataques com armas. Porém, sofre 50% a mais de dano por efeitos de área.</p>",
        },
        {
          id: "1",
          name: "Zumbido nauseante",
          tests: [
            { id: "0", dt: 15, reduceEffect: !1, skillName: "Fortitude" },
          ],
          description:
            "<p>Um ser que sofra dano do enxame de abelhas fica enjoado por 1 rodada (Fortitude DT 15 evita).</p>",
        },
      ],
    },
    {
      name: "Enxame de ratos",
      vd: 10,
      creatureSize: "médio",
      secondaryElements: [],
      creatureType: "Animal (enxame)",
      defense: 13,
      perceptionType: "Faro, visão na penumbra",
      vulnerabilidades: [],
      imunidades: [],
      presencaPerturbadora: {},
      actions: [],
      resistencias: {},
      description:
        "<p>Ratos podem ser encontrados em quase todos os lugares habitados por humanos. Normalmente tímidos, podem se unir em perigosos enxames quando movidos por fome intensa ou por misteriosas energias paranormais.</p>",
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 5 },
        reflex: { rollNumber: 1, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      attributes: { dex: 1, str: 0, int: 0, pre: 1, con: 1 },
      movement: 9,
      altMovements: [{ title: "escalar/nadar", value: 6 }],
      pvCurrent: 15,
      pvMax: 15,
      powers: [
        {
          id: "0",
          name: "Enxame",
          automaticDamage: [
            { id: "0", damageType: "perfuração", value: "2d6" },
          ],
          description:
            "<p>Um enxame é uma aglomeração de criaturas que agem em conjunto. Em termos de regras, pode entrar no espaço ocupado por um ser. No fim do seu turno, o enxame causa 2d6 pontos de dano de perfuração a qualquer ser em seu espaço, automaticamente. Um enxame é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano e sofre apenas metade do dano de ataques com armas. Porém, sofre 50% a mais de dano por efeitos de área.</p>",
        },
        {
          id: "1",
          name: "Doença",
          tests: [
            { id: "0", dt: 15, reduceEffect: !1, skillName: "Fortitude" },
          ],
          description:
            "<p>Um ser que sofra dano do enxame de ratos contrai a doença febre hemorrágica (Fortitude DT 15 evita).</p>",
        },
      ],
    },
    {
      name: "Jacaré",
      vd: 40,
      creatureSize: "grande",
      creatureType: "Animal",
      resistencias: {},
      secondaryElements: [],
      vulnerabilidades: [],
      presencaPerturbadora: {},
      imunidades: [],
      description:
        "<p>Existem diversas espécies de jacarés, sendo que algumas podem ser encontradas até mesmo em áreas urbanas. A ficha a seguir representa um espécime grande, que pode ser perigoso para agentes.</p>",
      defense: 16,
      perceptionType: "Visão na penumbra",
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 1, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 40,
      pvMax: 40,
      attributes: { dex: 1, str: 3, int: 0, pre: 1, con: 2 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 1, rollBonus: 8 },
      ],
      movement: 6,
      altMovements: [{ title: "nadar", value: 9 }],
      powers: [
        {
          id: "0",
          name: "Giro da morte",
          automaticDamage: [{ id: "0", damageType: "corte", value: "2d8" }],
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 5,
              criticalMult: 2,
              criticalRange: 20,
              damage: [
                { id: "0", damageType: "corte", value: "1d8" },
                { id: "1", damageType: "corte", value: "8" },
              ],
            },
            {
              id: "1",
              name: "Cauda",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 5,
              criticalMult: 2,
              criticalRange: 20,
              damage: [{ id: "0", damageType: "impacto", value: "1d12" }],
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Agarrão",
          macros: [{ id: "0", value: "3d20k1+7" }],
          description:
            "<p>Se o jacaré acertar um ataque de mordida em um ser Médio ou menor, pode tentar agarrar o alvo (teste 3d20+7).</p>",
        },
      ],
    },
    {
      name: "Javaporco",
      vd: 20,
      creatureSize: "médio",
      creatureType: "Animal",
      secondaryElements: [],
      resistencias: {},
      vulnerabilidades: [],
      imunidades: [],
      presencaPerturbadora: {},
      description:
        "<p>Resultado do cruzamento de javalis com porcos domésticos, o javaporco se tornou uma praga em muitas regiões rurais. Um grupo de agentes investigando uma fazenda ou um esconderijo nos ermos pode ser surpreendido por estas criaturas vorazes e agressivas.</p>",
      defense: 14,
      perceptionType: "Faro, visão na penumbra",
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 3, rollBonus: 5 },
        reflex: { rollNumber: 1, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 35,
      pvMax: 35,
      attributes: { dex: 1, str: 2, int: 0, pre: 1, con: 3 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Ferocidade",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "corte", value: "2d8" },
                { id: "1", damageType: "corte", value: "4" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
          description:
            "<p>Se o javaporco sofrer dano, recebe +1d20 em testes de ataque e causa um dado de dano adicional em todas as rolagens de dano até o final da cena.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 2,
              rollBonus: 5,
              damage: [
                { id: "0", damageType: "corte", value: "1d8" },
                { id: "0", damageType: "corte", value: "4" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "reação",
          name: "Mordida final",
          description:
            "<p>Quando é reduzido a 0 PV, o javaporco faz um ataque de mordida contra um oponente aleatório em seu alcance antes de morrer</p>",
        },
      ],
    },
    {
      name: "Onça-pintada",
      vd: 40,
      creatureSize: "médio",
      creatureType: "Animal",
      secondaryElements: [],
      resistencias: {},
      vulnerabilidades: [],
      imunidades: [],
      powers: [],
      presencaPerturbadora: {},
      description:
        "<p>O maior felino das Américas, a onça-pintada é o principal predador das selvas brasileiras. Embora dificilmente seja encontrada fora de seu território nativo, a onça pode ser um oponente mortal para agentes embrenhados em seu campo de caça.</p>",
      defense: 16,
      perceptionType: "Faro, visão na penumbra",
      skills: {
        perception: { rollNumber: 1, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 10 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 3, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 5 },
      },
      pvCurrent: 55,
      pvMax: 55,
      attributes: { dex: 3, str: 3, int: 0, pre: 1, con: 2 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 3, rollBonus: 13 },
      ],
      movement: 12,
      altMovements: [{ title: "escalar/nadar", value: 6 }],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "corte", value: "1d8" },
                { id: "1", damageType: "corte", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
            {
              id: "1",
              name: "Garras",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "corte", value: "1d6" },
                { id: "1", damageType: "corte", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 19,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Agarrão",
          macros: [{ id: "0", value: "3d20k1+7" }],
          description:
            "<p>Se a onça acertar um ataque de mordida em um ser Médio ou menor, ela pode tentar agarrar o alvo (teste 3d20+7).</p>",
        },
        {
          id: "2",
          type: "completa",
          name: "Bote",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 4,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "corte", value: "1d8" },
                { id: "1", damageType: "corte", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
            {
              id: "1",
              name: "Garras",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 4,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "corte", value: "1d6" },
                { id: "1", damageType: "corte", value: "5" },
              ],
              criticalMult: 2,
              criticalRange: 19,
            },
          ],
          description:
            "<p>A onça faz uma investida e ataca com sua mordida e suas garras. Os três ataques recebem o bônus de +1d20 da investida, mas devem ser feitos contra o mesmo alvo</p>",
        },
      ],
    },
    {
      name: "Succuri",
      creatureSize: "grande",
      secondaryElements: [],
      creatureType: "Animal",
      vd: 40,
      vulnerabilidades: [],
      imunidades: [],
      powers: [],
      presencaPerturbadora: {},
      perceptionType: "Faro, visão na penumbra",
      resistencias: {},
      description:
        "<p>Uma grande cobra constritora, originária das selvas amazônicas, a sucuri pode ser encontrada sob a posse de colecionadores de animais exóticos ou como um perigoso mascote de cultistas excêntricos.</p>",
      defense: 16,
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 3, rollBonus: 5 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 68,
      pvMax: 68,
      attributes: { dex: 2, str: 3, int: 0, pre: 1, con: 3 },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 2, rollBonus: 8 },
      ],
      movement: 6,
      altMovements: [{ title: "escalar/nadar", value: 6 }],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir",
          attacks: [
            {
              id: "0",
              name: "Mordida",
              range: "Corpo a corpo",
              numberOfAttacks: 1,
              rollNumber: 3,
              rollBonus: 10,
              damage: [
                { id: "0", damageType: "corte", value: "1d6" },
                { id: "1", damageType: "corte", value: "7" },
              ],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          type: "livre",
          name: "Agarrão",
          macros: [{ id: "0", value: "4d20k1+12" }],
          description:
            "<p>Se a sucuri acertar um ataque de mordida em um ser Médio ou menor, ela pode tentar agarrar o alvo (teste 4d20+12).</p>",
        },
        {
          id: "2",
          type: "livre",
          name: "Constrição",
          automaticDamage: [
            { id: "0", damageType: "impacto", value: "2d6" },
            { id: "1", damageType: "impacto", value: "8" },
          ],
          description:
            "<p>No início de cada um dos seus turnos, a sucuri causa 2d6+8 pontos de dano de impacto em qualquer ser que esteja agarrando.</p>",
        },
      ],
    },
  ],
  m = [
    {
      name: "Combustão Carnífice",
      presencaPerturbadora: { dt: 40, dice: "8d6" },
      vd: 380,
      creatureSize: "colossal",
      element: "energia",
      secondaryElements: ["sangue"],
      creatureType: "criatura",
      defense: 45,
      skills: {
        perception: { rollNumber: 3, rollBonus: 25 },
        initiative: { rollNumber: 4, rollBonus: 20 },
        fortitude: { rollNumber: 5, rollBonus: 35 },
        reflex: { rollNumber: 4, rollBonus: 20 },
        will: { rollNumber: 3, rollBonus: 30 },
      },
      pvCurrent: 1400,
      pvMax: 1400,
      vulnerabilidades: ["conhecimento"],
      imunidades: [],
      resistencias: { balistico: 50, corte: 50, perfuracao: 50, energia: 50 },
      attributes: { dex: 4, str: 5, int: 1, pre: 3, con: 5 },
      movement: 6,
      powers: [
        {
          id: "0",
          name: "Inúmeros Corpos",
          description:
            "<p>A combustão carnífice conta como uma horda formada por cadáveres humanos contaminados por um vírus de Energia, espalhando suas raízes e infectando tudo que toca por meio do Sangue. Ele sofre apenas metade do dano de ataques e habilidades que afetem apenas um ser, mas sofre o dobro do dano de efeitos de área. Além disso, enquanto a criatura não chegar na condição Machucado, sempre que ela erra um ataque,  causa metade do dano (exceto se o defensor usou uma reação para se esquivar).</p>",
        },
        {
          id: "1",
          name: "Entranhas Plasmáticas",
          description:
            "<p>Qualquer ser que comece seu turno na área das raízes da combustão carnífice sofre 2d10 pontos de dano, metade Energia e metade Sanidade (Vontade DT 30 evita).</p>",
        },
        {
          id: "2",
          name: "Nascimento",
          description:
            "<p>No momento que a combustão carnífice for trazida para a realidade, ela será imóvel, imune a dano e só poderá utilizar Vinhas Caóticas e Raízes Errantes. Ela passará para a próxima etapa, o Crescimento, quando a área das suas raízes chegarem a 9m (6□).</p>",
        },
        {
          id: "3",
          name: "Crescimento",
          description:
            "<p>Após as suas raízes já se instalarem no solo, a combustão carnífice revelará sua forma, ativando a sua presença perturbadora, pode agora, se movimentar e usar todas as ações de sua ficha, exceto o Formar Vínculo. Ela passará para a próxima etapa, a Reprodução, quando a área das suas raízes chegarem a 18m (12□).</p>",
        },
        {
          id: "4",
          name: "Reprodução",
          description:
            "<p>Com suas raízes ainda mais fortes e o caos instaurado, a combustão carnífice pode usar o Formar Vínculo e terá uma ação de movimento adicional e recupera 30 PV em todo início de turno.</p>",
        },
        {
          id: "5",
          name: "Raízes Carnífices",
          description:
            "<p>Contaminação por contato, Fortidude DT 35. As raízes da combustão carnífice são extremamente resistentes, e só podem ser destruídas contra temperaturas muito baixas ou na presença de água, também em uma temperatura baixa. Teste de resistência só podem ser feitos em ambientes com temperatura abaixo de 0°C ou em submerso em água gelada. As raízes nasceram de um acidente envolvendo fogo onde inúmeras pessoas morreram queimadas, o sangue delas circula pela terra, contaminando toda a flora e até fauna, de maneira inofensiva diretamente, mas matando tudo que entra em contato, a sua verdadeira forma devastadora só pode ser trazida para a Realidade por meio de um ritual macabro feito por ocultistas que dizem que a combustão carnífice irá mudar o mundo e torná-lo um lugar livre do Conhecimento e das mentiras ditas por ele e também do fim da vida que a Morte traz consigo.</p><p>As raízes da combustão carnífice é mortal, porém age de maneira lenta, como se experimentasse a dor e agonia de quem ele contamina. Quando um personagem entra em contato com a Raiz desta criatura, deve fazer um teste de resistência (Fortitude). Se passar, resistiu à contaminação. Caso contrário, fica contaminado no estágio I. Ao final de cada semana, o personagem deve repetir esse teste. Se falhar, a contaminação avança um estágio. Caso contrário, não avança. Se o personagem passar em dois testes seguidos, se cura da doença. Penalidades e condições causadas por uma contaminação terminam quando o personagem se cura.</p><p>^Estágio I. Os pontos de vida máximos do ser são reduzidos em 1d20 e fica Enjoado; se isso reduzir os seus pontos a 0, ele morre instantaneamente.</p><p>^Estágio II. Os pontos de vida máximos do ser são reduzidos em mais 2d12 e fica Enjoado e Fraco; se isso reduzir os seus pontos a 0, ele morre instantaneamente e ao redor de seu corpo, numa área de 6m, nascem raízes de Sangue e a contaminação passa a ser pelo ar.</p><p>^Estágio III ou superior. Os pontos de vida máximos do ser são reduzidos em mais 2d12 e fica Enjoado, Debilitado e Vulnerável; se isso reduzir os seus pontos a 0, ele morre instantaneamente e ao redor de seu corpo, numa área de 12m, nascem raízes de Sangue e a contaminação passa a ser pelo ar. Além disso, o corpo será tomado pela energia e após um dia da morte, o ser virará uma criatura de Energia de VD 100 ou menos.</p>",
        },
      ],
      actions: [
        {
          id: "1",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "MÃOS CONTURBADAS",
              range: "Corpo a corpo",
              numberOfAttacks: 3,
              rollNumber: 4,
              rollBonus: 30,
              damage: [{ id: "0", damageType: "Energia", value: "3d10+20" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "1",
          name: "Raiz Contaminada",
          type: "livre",
          description:
            "<p>Um ser que sofra dano das mãos conturbadas fica contaminado com as raízes da combustão carnífice (Fortitude DT 30 evita). Um ser que passe no teste de resistência fica imune a essa doença até final da cena, porém, fica em chamas.</p>",
        },
        {
          id: "2",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "CINTURÃO FLAMEJANTE",
              range: "À distância longo",
              numberOfAttacks: 1,
              rollNumber: 4,
              rollBonus: 25,
              damage: [{ id: "0", damageType: "Energia", value: "7d10+20" }],
              criticalMult: 2,
              criticalRange: 20,
            },
          ],
        },
        {
          id: "3",
          name: "Queimadura de 3º grau",
          type: "completa",
          description:
            "<p>A combustão lança sua chamas em uma linha reta em até 18m, todo ser atingido fica em chamas, porém, sofre 6d8 pontos de dano de fogo no início de todo turno (Reflexos DT 25 evita), e em toda a área de chamas se cria uma enorme cortina de fumaça de mais de 24m de altura.</p>",
        },
        {
          id: "4",
          name: "Raízes Errantes",
          type: "livre",
          description:
            "<p>A combustão carnífice movimenta as suas raízes feitas de partes humanas, contaminando tudo ao redor, se proliferando 3m por rodada na fase de Nascimento, 6m na de Crescimento e 12m na de Reprodução.</p>",
        },
        {
          id: "5",
          name: "Vinhas Caóticas",
          type: "movimento",
          description:
            "<p>Qualquer ser que esteja a alcance médio das raízes errantes poderá ser agarrado pela combustão carnífice (teste 5d20 +20). Em todo início de turno, o combustão pode gastar uma reação para causar um efeito aleatório no ser agarrado, role 1d6 para decidir. O combustão pode manter até 4 seres agarrados simultaneamente.</p><p>1 - Incontáveis mãos começam a subir sobre o alvo, apertando e causando choques musculares, o ser sofre 4d12 +10 pontos de dano de Energia e fica Abalado (Fortitude DT 30 reduz à metade e evita a condição).</p><p>2 - Todos os corpos estão em chamas e em eterna agonia, e irão tentar causar isso em tudo e todos. O alvo deverá passar em um teste de Reflexos (DT 30), se não será acertado por partes do corpo desta criatura, sofrendo 8d6 +10 pontos de dano de Energia e ficando em chamas.</p><p>3 - Um dos braços começa a esquentar, queimar e então, explodir, gerando uma nuvem de uma fumaça roxa em uma área de 6m ao redor do alvo, o ser deve passar em um teste de Fortitude (DT 20 +5 por teste anterior). Se falhar, perde o turno inalando e tossindo por causa da fumaça, sem conseguir realizar nenhuma ação. Caso falhe por 5 ou mais, sofre 10d6 +10 Pontos de dano de Energia e fica Alquebrado e Fraco.</p><p>4 - Todo o corpo do ser é coberto pela criatura, que então emana uma forte luz, numa mistura de roxo e vermelho, o ser dentro desse casulo fica imune a dano e ficará preso por 1d3 rodadas, tem acerto automático em teste de ataques contra a criatura dessa maneira, porém se acertar, ficará em chamas. O ser fica confuso no final das rodadas preso. Seres que observam esse casulo brilhando deverão passar num teste de Fortitude (DT 25), se não, ficam cegas por uma rodada e ficam imunes a isso até o fim da cena.</p><p>5 - Todas as mãos e pernas começam a golpear o ser com toda a violência que eles conseguirem, o alvo sofre 10d8 +20 Pontos de dano de Sangue (Reflexos DT 25 reduz à metade).</p><p>6 - A Energia do carnífice eletrifica o alvo, alterando as suas células, deixando os totalmente aleatórias; primeiro, role 1d6, sendo 1 Agilidade, 2 Força, 3 Intelecto, 4 Presença, 5 Vigor e 6 nada acontece; segundo, caso o resultado seja um Atributo, role 1d6, o resultado será o valor que você terá nesse Atributo, permanentemente, em resultado 6, o alvo é reduzido a 1 Ponto de Sanidade. A combustão carnífice só pode usar essa habilidade uma vez por ser.</p>",
        },
        {
          id: "6",
          name: "Folhas Secas",
          type: "reação",
          description:
            "<p>Se a combustão carnífice sofrer 100 ou mais pontos de dano em um único ataque, ele poderá gastar uma reação para despejar cadáveres em chamas do topo de seu corpo, todos em alcance longo deverão passar em um teste de Reflexos (DT 30), se não, sofreram 8d10 +10 Pontos de dano de Impacto e ficaram caídas Se falharem por 5 ou mais, além do normal, ficaram em chamas.</p>",
        },
        {
          id: "7",
          name: "Formar Vínculo",
          type: "completa",
          description:
            "<p>Ao chegar na condição machucado, a combustão carnífice começa a aumentar a sua temperatura ainda mais, toda a área de sua raízes é considerada terreno difícil e um lugar quente, ultrapassando os 60°C, e nesta rodada, as suas raízes avançam 36m (24□) ao invés de 12m. Após usar esta habilidade, a combustão carnífice se torna imóvel e só poderá utilizará a ação mãos conturbadas e raiz contaminada até ser morta.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/combustao-carnifice.webp",
      sheetPictureURL: "/img/creatures/combustao-carnifice-profile.webp",
      description:
        "<p>Descontrolado, caótico e imparável. O fogo queima e derrete tudo o que toca, sem julgamento ou exceção. Nascida a partir da dor e terror de testemunhas e vítimas de grandes catástrofes envolvendo incêndios, explosões e até radiação, a Combustão Carnífice consiste em um amalgama de azaradas almas envolvidas nestes acidentes, agora, condenadas a sentir sua pele queimando e fundindo-se umas às outras por toda eternidade. O corpo grotesco semelhante a de uma árvore flamejante com mais de 45 metros, não irá parar até que a fome insaciável do fogo tenha transformado tudo o que existe em cinzas.</p>",
    },
    {
      name: "Corpo Seco",
      element: "medo",
      secondaryElements: ["morte", "energia"],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 21, dice: "4d6", nex: 40 },
      vd: 80,
      defense: 24,
      perceptionType: "Percepção às cegas",
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 0 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 2, rollBonus: 15 },
      ],
      pvCurrent: 130,
      pvMax: 130,
      imunidades: ["sangue", "morte", "conhecimento", "energia"],
      resistencias: { dano: 10 },
      vulnerabilidades: [],
      attributes: { dex: 2, str: 3, int: 1, pre: 2, con: 1 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Vivenciar o Medo",
          description:
            "<p>Qualquer ser que comece seu turno em alcance médio do corpo seco perde 2d4 PE e fica abalado (Vontade DT 20 reduz à metade e evita a condição). Um ser que passe uma vez nesse teste fique imune a condição por uma cena; e se falhe novamente, perde 1d4 PE ao invés do normal.</p>",
        },
        {
          id: "1",
          name: "Indesejado",
          description:
            "<p>Ao ser reduzido a 0 PV, o corpo seco se dissipa em pleno ar e desaparece como uma nuvem negra que sobrevoa à procura de um novo hospedeiro. Encontrando um corpo que tenha morrido há 7 dias ou menos, o corpo seco o possui e retorna novamente na próxima noite, porém, com +5 de resistência a dano, +3 na Defesa e +15 PV.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "TAPAS E UNHAS",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              rollNumber: 3,
              rollBonus: 15,
              damage: [{ id: "0", value: "2d6+8", damageType: "Corte" }],
              criticalRange: 20,
              criticalMult: 2,
            },
          ],
        },
        {
          id: "1",
          name: "Abraço mortal",
          type: "livre",
          description:
            "<p>Se acertar um ataque de tapas e unhas em um personagem Médio ou menor, pode tentar agarrar o alvo (teste 3d20 +12). No início do seu turno, o corpo seco abraça com força o personagem, causando 2d10 +10 pontos de dano de impacto. Se o dano causado for 22 ou mais, além disso, o personagem envelhece 1d6 anos e fica fraco até o fim da cena (Fortitude DT 22 reduz à metade e evita a condição).</p>",
        },
        {
          id: "2",
          name: "Toque surpresa",
          type: "movimento",
          description:
            "<p>Uma rodada sim e duas não, o corpo seco pode assumir uma forma semi-transparente; todo dano causado a ele é reduzido à metade durante essa rodada. Nessa forma, ele recebe +10 em Furtividade, +2 na Defesa, e pode escolher um personagem em até alcance longo e se teletransportar para atrás dele, atacando com seus tapas e unhas furtivamente, porém, com o dano convertido para dano de Medo.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/corpo-seco.webp",
      sheetPictureURL: "/img/creatures/corpo-seco-profile.webp",
      enigmaDoMedo:
        "<p>O corpo seco não é bem vindo em lugar algum, sempre retornando quando a morte cessa a sua vida. Há inúmeras lendas que contam como dar um fim a ele de fato, como rituais secretos, um objeto que ele tanto procura, rever alguma pessoa em específico; mistérios que até hoje não possuem solução. Ao resolver o seu enigma de medo, o corpo seco perde as habilidades indesejado e toque surpresa. Contudo, isso desperta o real terror do corpo seco, a entidade que o controla, conhecida como Bradador, um espectro maligno de energia, que age a partir da próxima rodada. Use a ficha do Perturbado de Energia, pág 268, mas com as seguintes modificações: +8 na Defesa, +70 PV, +5 em suas resistências, +1 em Força; e ele também tem a habilidade abraço mortal, com seu dano convertido  para Energia, e sem o envelhecimento. Mais de um bradador pode possuir o mesmo corpo seco, em até um máximo de 3 bradadores.</p>",
      description:
        "<p>Sua alma ainda tem assuntos inacabados, e fará de tudo para realizá-los, custe o que custar.</p><p>Uma vida humana cuja motivação baseou-se apenas na destruição de tudo à sua volta, a mais pura maldade. O acúmulo de negatividade não podia resultar em outra coisa se não a maldição por aqueles que foram plateia de suas malfeitorias.</p><p>O Corpo-seco, surgido a partir dessa maldição, seria a manifestação física de uma forma etérea conhecida como Bradador. Ambos sendo a alma e essência de uma pessoa, um pequeno humano, de intenções e atitudes tão nefastas, grotescas, que fariam da punição de viver a eternidade em dor, um alívio.</p>",
    },
    {
      name: "Discernido",
      vd: 320,
      element: "conhecimento",
      secondaryElements: ["energia", "medo"],
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 35, dice: "7d8", nex: 90 },
      defense: 45,
      pvCurrent: 700,
      pvMax: 700,
      imunidades: ["conhecimento"],
      imunidadesAditional: "Dano (exceto pelo causado por quem possa vê-lo)",
      vulnerabilidades: ["sangue"],
      resistencias: {},
      movement: 12,
      perceptionType: "percepção às cegas",
      skills: {
        perception: { rollNumber: 5, rollBonus: 30 },
        initiative: { rollNumber: 4, rollBonus: 20 },
        fortitude: { rollNumber: 3, rollBonus: 15 },
        reflex: { rollNumber: 4, rollBonus: 20 },
        will: { rollNumber: 5, rollBonus: 20 },
      },
      extraSkills: [
        { id: "0", name: "Ciências", rollNumber: 5, rollBonus: 15 },
        { id: "1", name: "Crime", rollNumber: 4, rollBonus: 15 },
        { id: "2", name: "Diplomacia", rollNumber: 5, rollBonus: 20 },
        { id: "3", name: "Enganação", rollNumber: 5, rollBonus: 25 },
        { id: "4", name: "Furtividade", rollNumber: 4, rollBonus: 15 },
        { id: "5", name: "Ocultismo", rollNumber: 5, rollBonus: 25 },
      ],
      attributes: { dex: 4, str: 4, int: 5, pre: 5, con: 3 },
      powers: [
        {
          id: "0",
          name: "Delírio vivo",
          description:
            "<p>O Discernido pode se transformar fisicamente em qualquer ser que ele tenha observado por 1 dia, as suas estatísticas permanecem as mesmas mas ele poderá falar e agir como o ser em que ele se transformou. Ele pode manter-se nessa forma pelo tempo que quiser, o ser em que ele se transformou sempre irá aparecer de óculos ou com algo que oculte seus inúmeros olhos, pois é a única parte da sua forma original que ainda permanece. O Discernido assume a sua forma natural caso ele ataque, seja atacado ou morra.</p>",
        },
        {
          id: "1",
          name: "Discernimento",
          description:
            "<p>O Discernido é naturalmente invisível, porém, somente mentes já abaladas são capazes de vê-lo, para ver o Discernido, é necessário que o ser esteja com metade de sua Sanidade total e ter esquecido no mínimo 48 horas de sua vida.</p>",
        },
        {
          id: "2",
          name: "Confundir",
          description:
            "<p>Qualquer ser que olhe nos olhos do Discernido enquanto ele estiver na sua forma de Delírio Vivo, sofre 1d6 pontos de dano mental e esquecerá das últimas 24 horas (Vontade DT 30 reduz à metade e evita a perda de memória).</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "COLISÃO ASTRAL",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              damage: [{ id: "0", damageType: "Impacto", value: "3d8+10" }],
              rollNumber: 4,
              rollBonus: 20,
            },
          ],
        },
        {
          id: "1",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "RAIO OCULAR",
              range: "Distância EXTREMO",
              numberOfAttacks: 3,
              criticalMult: 2,
              criticalRange: 20,
              damage: [
                { id: "0", damageType: "Conhecimento", value: "2d10+10" },
              ],
              rollNumber: 5,
              rollBonus: 25,
            },
          ],
        },
        {
          id: "2",
          name: "Remover juízo",
          type: "livre",
          description:
            "<p>Uma vez por rodada, o Discernido faz suas centenas de olhos focarem em um alvo em alcance médio, adentrando em sua mente e tentando lhe enlouquecer, levando a mente dele e a do ser para uma Alucinação Astral. O Alvo deve passar em um teste de Vontade (DT 30) ou então entrará na condição Paralisado. Seres com Intelecto 4 ou mais são imunes a essa habilidade. O Discernido não ataca fisicamente os seres paralisados.</p>",
        },
        {
          id: "3",
          name: "Forma distinta",
          type: "movimento",
          description:
            "<p>O Discernido pode se transformar em outro ser que já tenha se transformado antes ou reduzir o seu tamanho como preferir para passar em espaços pequenos, diminuindo e aumentando o seu tamanho quando achar adequado. Nessa forma, a Defesa do Discernido aumenta em +5.</p>",
        },
        {
          id: "4",
          name: "Alucinação astral",
          description:
            "<p>O ser que tenha sido vítima do Remover Juízo irá acordar em uma alucinação, cada alvo irá despertar em um local diferente, baseado nas suas memórias e maiores medos, o seu maior medo irá persegui-lo e tentar lhe atacar-lo, um teste de Vontade deve ser feito (DT 15 + 5 por teste) e se falhar, causa 1d8 pontos de dano mental, na alucinação, será como se o maior medo do alvo tivesse lhe causado um ataque. Se o ser passar no teste duas vezes consecutivas, será como se ele tivesse escapado do seu maior medo, a alucinação acaba e o ser volta à realidade e fica imune a esta habilidade até o fim da cena.</p>",
        },
        {
          id: "5",
          name: "Reter corpo e mente",
          description:
            "<p>O Discernido pode usar até dois de seus seis braços e usá-los para agarrar seres em um alcance longo (Teste 4d20 + 15). Com dois seres agarrados, o Discernido fica com -5 em sua defesa.</p><p>Visão Ofuscada. Um dos inúmeros olhos do Discernido saem da sua cabeça e tentam se acoplar nos olhos do ser agarrado, tentando manipular sua visão, se o ser falhar num teste de Vontade (DT 30), ele irá ficar ofuscado durante a cena.</p><p>Impacto Distinto. Caso o Discernido tenha dois seres agarrados em suas mãos, ele pode fazer os dois se colidirem e ficarem caídos em seguida, causando 4d10 + 6 impacto (Reflexos DT 30 reduz à metade e evita a condição).</p><p>Roubar Mente. O Discernido se foca na imensidão de pensamentos do alvo agarrado, tentando roubar suas memórias e sua capacidade de compreender a realidade, o ser sofre 2d10 + 6 pontos de dano mental (Vontade DT 30 reduz à metade), o Discernido recupera PV igual ao dano causado. Um ser reduzido a 0 pontos de sanidade dessa maneira se tornará um Lembrado na próxima rodada.</p><p>Tortura Discernida. O Discernido faz com que o alvo recupere 8d6 pontos de sanidade e fique apavorado até o fim da cena. Caso a sanidade atual do ser chegue a mais da metade, ele ainda continuará vendo o Discernido, porém, todo dano mental que ele sofrer de agora em diante será dobrado permanentemente.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/discernido.webp",
      sheetPictureURL: "/img/creatures/discernido-profile.webp",
      enigmaDoMedo:
        "<p>O Motivo da criação do Discernido ainda é uma incógnita, registros afirmam que a única maneira de combatê-lo seria fazendo as suas vontades e aceitando ter a sua mente desmantelada e aguentar, fazendo com que assim, ele se torne visível a olho nu, já outros dizem que percebê-lo enquanto ele está transformado em outro ser já seria o suficiente para enfrentá-lo sem a sua Invisibilidade. Seja qual for a forma, a perda de sanidade ou saber quando ele está com outra aparência ou até mesmo descobrir quem o criou, o Discernido perde a sua Imunidade a dano (mas continua sendo imune a Conhecimento), perde 5 pontos de Defesa e não pode usar a Forma Distinta e nem a ação Roubar Mente.</p>",
      description:
        '<p>O que difere o certo do errado? O que nos faz acordar todos os dias e tentar mais uma vez? A busca incessante de conhecer e entender o que nos faz estar vivos, talvez esse seja o nosso maior medo, mas diferente dos outros medos, esse todos buscam. Até onde o Outro Lado seria capaz para provar esse ponto e apreciar um pouco desse medo inerente? Diferenciar algo de outro é o que nos fez evoluir, talvez seja o mesmo que nos faça ruir.</p><p>Com a rápida e constante evolução dos seres humanos, surgiram grandes questões e perguntas filosóficas, como "de onde viemos?" ou "Deus nos criou?". A maioria dessas perguntas nunca terão uma resposta definitiva, fazendo com que muitas pessoas se aprofundem mais do que o necessário, beirando a loucura por não conseguirem diferenciar as coisas e entender completamente tudo. Não levou muito tempo para as autoridades tomarem uma providência, há quem especule que existe uma grande conspiração por baixo dos panos, sequestrando pessoas e usando elas como teste para seus experimentos macabros sobre os quatro tipos de conhecimento: científico, empírico, filosófico e religioso.</p><p>Isso (provavelmente) levou a criação do ser chamado Discernido, uma presença paranormal assustadoramente inteligente, com centenas de olhos e seis braços, disposta a compreender e a entender todo o tipo de conhecimento adquirido por animais, plantas e seres humanos. O Discernido é algo que não pode ser comparado à outras criaturas, ele se comunica perfeitamente e facilmente pode tomar a forma de outro ser, se infiltrando em comunidades e discernindo a percepção de todos ao seu redor, com o propósito de criar algo de propósito ainda desconhecido, mas que foi nomeado de "A Distinção". Quem já teve a desonra de ter tido contato com o Discernido, e sobrevivido, relata fortes dores de cabeça, perda de memória recente, uma grande dificuldade de diferenciar cores e odores, o que é a Realidade e o que é falso, e também frases que parecem estar impregnadas no seu cérebro como "Busquem a Distinção" ou "Evolução superior".</p><p>Dispositivos eletrônicos parecem se intensificar na presença do Discernido, podendo facilmente exibir mensagens de acordo com o seu comando, podendo até se passar por outra pessoa e enganar aqueles com quem ele faz contato, adentrando na rede virtual para aprender ainda mais e assim realizar esta tal Distinção.</p><p>Sortudos aqueles que sobreviveram a um ataque do Discernido e ainda lhes sobrou um resquício de sanidade para contar história, todas completamente diferentes umas das outras, sendo impossível traçar um perfil e chegar numa maneira correta de derrotá-lo. Todos dizem terem sido levados para alguma espécie de jogo bizarro virtual, outros dizem terem se sentido como um protagonista em seu próprio filme de terror, e teriam sido testados, enfrentando o seu maior medo, e após conseguirem sair, se sentirem… distintas.</p><p>O Discernido sempre observa, podendo estar em qualquer lugar da terra ao mesmo tempo, com seus incontáveis olhos, julgando e fazendo a diferenciação e assim chegando ainda mais perto de realizar o seu estranho objetivo.</p><p>Poderia o Discernido responder todas as perguntas sobre o verdadeiro Conhecimento ou ele somente é a representação do vazio externo e interno que nos corrói todos os dias, fazendo com que construíssemos histórias com o objetivo de preencher esse vazio impossível?</p>',
    },
    {
      name: "Preceptora",
      vd: 40,
      element: "sangue",
      secondaryElements: ["conhecimento"],
      creatureType: "criatura",
      creatureSize: "enorme",
      presencaPerturbadora: { dt: 16, dice: "2d6", nex: 30 },
      perceptionType: "Percepção às cegas",
      defense: 19,
      movement: 6,
      skills: {
        perception: { rollNumber: 1, rollBonus: 0 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 1, rollBonus: 5 },
      },
      extraSkills: [
        { id: "0", name: "Atletismo", rollNumber: 4, rollBonus: 15 },
        { id: "1", name: "Ocultismo", rollNumber: 1, rollBonus: 10 },
      ],
      pvCurrent: 65,
      pvMax: 65,
      resistencias: { balistico: 7, impacto: 7, perfuracao: 7, sangue: 10 },
      vulnerabilidades: ["morte"],
      imunidades: [],
      attributes: { dex: 1, str: 4, int: 3, pre: 1, con: 2 },
      powers: [
        {
          id: "0",
          name: "Superfetação",
          description:
            "<p>Se a preceptora sofrer 10 ou mais pontos de dano em um único ataque, de sua enorme cauda é gerado um fetilho, agindo após ela a partir da próxima rodada. Para decidir qual fetilho irá nascer, role 1d4, sendo: 1- Melanie, 2- Isaac, 3- Tulinho, 4- Evelyn e Evylen. Além disso, a preceptora ganha +1 de Defesa para cada fetilho vivo na cena e eles fazem de tudo para protegê-la. Esses fetilhos não possuem presença perturbadora.</p>",
        },
        {
          id: "1",
          name: "Coração de mãe",
          description:
            "<p>Quando um fetilho gerado pela preceptora morre, ela sente um ódio imenso por ter perdido uma peça importante. Durante a próxima rodada, ela não poderá usar sua ação de movimento para se deslocar e perderá suas resistências (exceto Sangue). Porém, seus ataques causam +2 pontos de dano de Sangue até o fim da próxima rodada. Se dois ou mais fetilhos morrerem na mesma rodada, o dano adicional aumenta em +1.</p>",
        },
        {
          id: "2",
          name: "Apatia familiar",
          description:
            "<p>Contaminação por contato, Vontade DT 20. A doença da apatia familiar é extremamente forte, podendo somente ser curada pela força de vontade do enfermo. Testes de Vontade só contam para curar essa doença se forem feitos em um local onde o enfermo não tenha visão de alguém que ele tenha afeto, seja a pessoa de fato, fotos ou objetos que lembrem elas. E diferente do normal, esses testes de Vontade deverão ser feitos a cada dia, não a cada cena. Ao falhar no teste, a doença avança em um estágio, e ter dois sucesso seguidos, se cura da doença e fica imune permanentemente.</p><p>^Estágio I. O personagem esquece parcialmente de momentos com pessoas que ele ama, o substituindo por memórias ruins. Sofre -1d em todo teste que envolvam Int ou Pre se estiver em alcance curto de uma pessoa que ele ama.</p><p>^Estágio II. O personagem esquece todos os momentos com pessoas que ele ama, o substituindo por memórias ruins e grotescas. Sofre -2d em todo teste que envolvam Int ou Pre se estiver em alcance curto de uma pessoa que ele ama.</p><p>^Estágio III. O personagem esquece parcialmente de momentos com pessoas que ele ama, o substituindo por memórias ruins e grotescas. Falha em todo teste que envolvam Int ou Pre se estiver em alcance curto de uma pessoa que ele ama. Além disso, acreditava que todos que ele ama na verdade são seus inimigos, não hesitando em atacá-los da melhor maneira possível.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "CHICOTE EMBRIONÁRIO",
              range: "Distância CURTO",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              damage: [{ id: "0", damageType: "Sangue", value: "2d8" }],
              rollNumber: 4,
              rollBonus: 10,
            },
          ],
        },
        {
          id: "1",
          name: "Oferecer colo",
          type: "livre",
          description:
            "<p>Se a preceptora acertar um ataque de chicote embrionário em um ser Médio ou menor, pode tentar agarrar ao alvo (teste 4d20 +15) usando fios de sangue que jorram de sua face. Um ser que inicie seu turno deverá passar em um teste de Fortitude (DT 15 evita) se não, a preceptora o fará ingerir uma substância pastosa que o personagem acreditará piamente ser o seu alimento preferido que a sua mãe ou alguma outra pessoa responsável fazia em sua infância. O teste de Fortitude deverá ser feito em todo início de seu turno, porém com +2 por teste anterior, se passar duas vezes seguidas se livra da substância. Um personagem que termina a cena sem ter se livrado da substância contrai a doença paranormal Apatia Familiar.</p>",
        },
        {
          id: "2",
          name: "Cruel amamentação",
          type: "movimento",
          description:
            "<p>A preceptora se aproxima de um fetilho machucado e o amamenta, porém, sugando todo o Sangue presente no fetilho, o matando lentamente. Ao fazer isso, a preceptora recebe 15 PV. Essa habilidade pode ser usada até quatro vezes por cena.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/preceptora.webp",
      sheetPictureURL: "/img/creatures/preceptora-profile.webp",
      description:
        "<p>Uma mãe que teve sua vida retirada por meios tortuosos e impuros, morta durante sua gestação, ou talvez o reflexo distorcido de uma relação materna abusiva… sua origem é nebulosa, mas é fato que ela odeia o que a criou: Os seus próprios filhos.</p><p>Ela parece possuir um resquício de consciência, usando isso para controlar os Fetilhos, manipulando sua busca por amor materno para realizar as suas vontades. Para a Echidna Preceptora, eles são apenas ferramentas, ela não sente remorso ou os ama de nenhuma forma, mas eles farão de tudo para proteger e agradar sua “mamãe”.</p><p>A aparição recorrente de Fetilhos pode significar que uma Preceptora fez abrigo na região, pois ela não só cria, como atrai fetilhos para si. Uma Preceptora nunca, NUNCA está sozinha.</p>",
    },
    {
      name: "Fetilho",
      vd: 15,
      creatureType: "criatura",
      creatureSize: "pequeno",
      element: "sangue",
      secondaryElements: [],
      presencaPerturbadora: { dt: 13, dice: "1d4", nex: 20 },
      perceptionType: "Percepção às cegas",
      defense: 14,
      pvCurrent: 25,
      pvMax: 25,
      movement: 6,
      altMovements: [{ title: "Tulinho", value: 9 }],
      resistencias: { balistico: 2, impacto: 2, perfuracao: 2, sangue: 5 },
      vulnerabilidades: ["morte"],
      imunidades: [],
      attributes: { dex: 1, str: 2, int: 0, pre: 1, con: 1 },
      skills: {
        perception: { rollNumber: 1, rollBonus: 5 },
        initiative: { rollNumber: 1, rollBonus: 5 },
        fortitude: { rollNumber: 1, rollBonus: 10 },
        reflex: { rollNumber: 1, rollBonus: 5 },
        will: { rollNumber: 1, rollBonus: 5 },
      },
      powers: [
        {
          id: "0",
          name: "Parasita Mental (Evelyn e Evylen)",
          description:
            "<p>Quando o fetilho morre, um enxame de moscas ensanguentadas saem de seu corpo. Em termos de jogo, use a ficha do Enxame de abelhas (Livro de Regras pág. 288), porém, causando 1d4 -1 (mínimo 1) pontos de dano mental.</p>",
        },
        {
          id: "1",
          name: "Obstrução Intestinal (Isaac)",
          description:
            "<p>Quando o fetilho sofre 5 ou mais pontos de dano em um único ataque, do topo de seu corpo é expelido fezes humanas em um linha reta de 4,5m. Todos na área sofrem 1d6 pontos de dano de Sangue e ficam enjoados e frustados até o fim do dia (Reflexos DT 13 evita o dano e a condição).</p>",
        },
        {
          id: "2",
          name: "Coliformes Paranormais (Malanie)",
          description:
            "<p>Quando o fetilho morre, seu corpo explode em sangue e dejetos humanos em uma esfera de 6m de raio. Todos na área sofrem 1d6 pontos de dano de Sangue e ficam enjoados até o fim do dia (Reflexos DT 13 evita o dano e a condição).</p>",
        },
        {
          id: "3",
          name: "Córtex Repugnante (Tulinho)",
          description:
            "<p>Quando o fetilho morre, seu corpo explode em sangue e restos de seu cérebro em uma esfera de 6m de raio. Todos na área sofrem 1d6 pontos de dano de Sangue e -2 em teste de Intelecto até o fim do dia (Reflexos DT 13 evita o dano e a desvantagem).</p>",
        },
      ],
      actions: [
        {
          id: "0",
          type: "padrão",
          name: "Agredir (Evelyn e Evylen)",
          attacks: [
            {
              id: "0",
              name: "PATAS DE MOSCAS",
              range: "À distância MÉDIO",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 5,
              damage: [{ id: "0", damageType: "Perfuração", value: "1d4+1" }],
            },
          ],
        },
        {
          id: "1",
          type: "padrão",
          name: "Agredir (Isaac)",
          attacks: [
            {
              id: "0",
              name: "MÃOS IMPURAS",
              range: "Corpo a corpo",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 5,
              damage: [{ id: "0", damageType: "Impacto", value: "1d4+2" }],
            },
          ],
        },
        {
          id: "2",
          type: "padrão",
          name: "Agredir (Malanie)",
          attacks: [
            {
              id: "0",
              name: "ÓRGÃOS E TRIPAS",
              range: "À distância CURTO",
              numberOfAttacks: 2,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 5,
              damage: [{ id: "0", damageType: "Impacto", value: "1d4" }],
            },
          ],
        },
        {
          id: "3",
          type: "padrão",
          name: "Agredir (Tulinho)",
          attacks: [
            {
              id: "0",
              name: "CABEÇADA",
              range: "Corpo à corpo",
              numberOfAttacks: 1,
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 5,
              damage: [{ id: "0", damageType: "Impacto", value: "1d4" }],
            },
          ],
        },
        {
          id: "4",
          type: "movimento",
          name: "Sugar Sangue (Evelyn e Evylen)",
          description:
            "<p>O fetilho controla uma grotesca para atacar um alvo em alcance curto. A mosca suga 1d6 pontos de vida e deixa o ser enjoado por 1 rodada (Reflexos DT 13 evita o dano e a condição). Esquivar-se da mosca implica que ela foi acertada e que tenha sido derrotada.</p>",
        },
        {
          id: "5",
          type: "movimento",
          name: "Flato (Isaac)",
          description:
            "<p>O fetilho desloca-se o dobro de seu movimento e por onde ele passa, deixa uma cortina de gás de 3m de altura. Um ser que encoste nela sofre 2 pontos de dano de Sangue. A cortina de fumaça pode ser ultrapassada, por um teste de Acrobacia (DT 15), porém se falhar, sofre também 1 ponto de dano mental.</p>",
        },
        {
          id: "6",
          type: "livre",
          name: "Límbico Sanguinário (Malanie)",
          description:
            "<p>Se o fetilho acertar um ataque de órgãos e tripas em ser Médio ou menor, pode tentar agarrar o alvo (teste 1d20 +5) usando o que restou de seu corpo. Um ser que inicia seu turno agarrado desta forma, ouve o lamento e tristeza do fetilho por entre suas tripas, sofrendo 1d4 pontos de dano mental. Se o dano mental for 3 ou maior, além disso, fica abalado por 1 rodada.</p>",
        },
        {
          id: "7",
          name: "Lesão Cerebral (Tulinho)",
          description:
            "<p>O fetilho agarra um alvo em alcance curto (teste 2d20 +5), encostando a sua cabeça contra a dele e despejando um líquido verminoso e grosso pela boca do alvo. O ser sofre 2 pontos de dano de Sangue por rodada (Fortitude DT 15 reduz à metade). Um ser que passa duas vezes seguidas nesse teste se cura da infecção porém, fica enjoado até o fim do dia. Além disso, se falhar por 5 ou mais, sofre 1 ponto de dano mental e fica caído.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/fetilho.webp",
      sheetPictureURL: "/img/creatures/fetilho-profile.webp",
      description:
        "<p>Talvez em algum momento um Fetilho tenha sido humano, mas agora é uma amálgama de pedaços de carne humana realocados juntos de forma desajeitada e grotesca.</p><p>Ele rasteja pelo chão, emitindo gemidos e lamentos. Apesar de sua aparência ameaçadora e nojenta, ele é uma criatura que evita o contato com os vivos, mas podem atacar caso sintam-se ameaçados, e costumam ser encontrado em pequenos grupos. Fetilhos não tem um lar fixo, preferindo vagar pelas sombras e esconder-se em lugares escuros e abandonados, deixando um rastro de sangue e excrementos por onde passam. Pelo menos até que encontrem uma mãe…</p><p>Exitem 4 tipos de fetilho, cada um só pode usar as habilidades e ações com seus nomes: Evelyn e Evylen, Isaac, Melanie, Tulinho.</p>",
    },
    {
      name: "Hachishaku-sama",
      vd: 240,
      element: "medo",
      secondaryElements: ["conhecimento", "sangue"],
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 32, dice: "6d6", nex: 75 },
      perceptionType: "Percepção às cegas",
      defense: 40,
      skills: {
        perception: { rollNumber: 5, rollBonus: 20 },
        initiative: { rollNumber: 4, rollBonus: 20 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 3, rollBonus: 15 },
        will: { rollNumber: 5, rollBonus: 20 },
      },
      pvCurrent: 650,
      pvMax: 650,
      imunidades: ["dano"],
      resistencias: {},
      vulnerabilidades: [],
      attributes: { dex: 3, str: 4, int: 3, pre: 5, con: 2 },
      movement: 15,
      powers: [
        {
          id: "0",
          name: "Fantasma do medo",
          description:
            "<p>A Hachishaku-sama é imune a dano, até que se resolva o mistério do que ela tanto deseja.</p>",
        },
        {
          id: "1",
          name: "Voz Melodiosa",
          description:
            "<p>Um personagem que esteja sozinho em uma área em alcance longo de qualquer outro ser é passível de ter um encontro com a hachishakusama, que aparece na distância imitando a voz de alguém que o personagem conhece e confia pedindo por ajuda. Ele deverá passar em um teste de Vontade (DT 30), se falhar, acredita fielmente na voz e irá para a direção dela na tentativa de socorrê-la da melhor maneira possível.</p>",
        },
        {
          id: "2",
          name: "Mecânica Especial - Reação Assombrosa",
          description:
            "<p>A hachishakusama costuma aparecer pacificamente e sequestrar suas vítimas rapidamente, mas caso o encontro com tenha finais que ela não esperava, sua forma física é alterada pelo Outro Lado, se tornando mais forte, transformação essa que é ligada diretamente à um dos dois elementos do paranormal.</p><p>CONHECIMENTO. Caso o personagem tente negar a sua existência, mentir ou esconder algo dela, ela desaparece e retorna 7 dias depois com uma flor amarela com sigilos dourados em seu grande chapéu e uma postura mais sábia e serena. Todo personagem que inicie seu turno a alcance curto da hachishakusama começa a ter visões distorcidas e enigmas do motivo pelo qual ela sequestra as suas vítimas, ficando fascinado e sofrendo 2d8 pontos de dano metal (Vontade DT 30 evita a condição e reduz à metade). Além disso, a hachishakusama também recebe resistência a Conhecimento 20 e pode usar o teletransporte como ação livre.</p><p>SANGUE. Caso o personagem a ofenda ou seja agressivo, ela desaparece e retorna no mesmo dia com uma flor vermelha que jorra sangue em seu grande chapéu e uma postura feroz e bestial. Estando nesta forma, ela recebe um ataque adicional de dentes malditos (teste 4d20 +30, 4d12 +20 Sangue) contra seres que ela esteja agarrando. Além disso, a hachishakusama também recebe resistência a Sangue 20 e pode manter até dois seres em seu sequestrar corpo e alma.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "TAPA TRANSLÚCIDO",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 30,
              damage: [{ id: "0", damageType: "Impacto", value: "4d8+15" }],
            },
          ],
        },
        {
          id: "1",
          name: "Sequestrar corpo e alma",
          type: "livre",
          description:
            "<p>Se acertar um ataque de tapa translúcido em um personagem Grande ou menor, ela pode tentar agarrar o alvo (teste 4d20 +35). Enquanto estiver agarrado desta forma, o personagem sofre 2d8 pontos de dano mental (Vontade DT 30 reduz à metade).</p>",
        },
        {
          id: "2",
          name: "Teletransporte",
          type: "movimento",
          description:
            "<p>A hachishakusama desaparece e retorna atrás de qualquer personagem em alcance longo, atacando com seu tapa translúcido, o personagem é considerado desprevenido a esse ataque. Em acertos críticos dessa forma, o alvo sofre a presença perturbadora dela novamente, porém reduzida pela metade.</p>",
        },
        {
          id: "3",
          name: "Manipular a realidade",
          type: "reação",
          description:
            "<p>Duas vezes por personagem, a hachishakusama pode reduzir o dano sofrido pela metade e fazer com que a outra metade seja causada em um personagem em alcance longo dela, mas convertido em dano de Medo. Se este dano reduzir um personagem a 0 PV, é morto instantaneamente e fazendo com que a hachishakusama recupere uma quantidade de PV igual a metade dos PV totais da vítima.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/hachishaku-sama.webp",
      sheetPictureURL: "/img/creatures/hachishaku-sama-profile.webp",
      enigmaDoMedo:
        "<p>A hachishakusama deve ser confrontada com o motivo pelo qual ela sequestra as pessoas, para onde ela as leva e destruindo esse local. Se for combatida desta forma, ela perde sua imunidade a dano e sua habilidade manipular a realidade.</p>",
      description:
        '<p>Os mais íntimos a chamam de Hachishaku-sama. Costumava ser uma adorada de entidades puras, como Kirin, mas o poder a corrompeu, tornando-a doente e deformada, com uma latente obsessão por pureza, especificamente, para consumi-la.</p><p>Às vezes, é vista carregando uma higanbana consigo, como uma espécie de paródia profana do Kirin. Caça crianças e outras entidades que representam alguma forma de pureza. Não se sabe se para fins mágicos ou para devorar. Emite um som de "Po", quando esta próxima das vítimas.</p><p>É um dos poucos seres que não sentem remorso ao matar uma Tsuchinoko.</p>',
    },
    {
      name: "Wendigo",
      vd: 160,
      element: "sangue",
      secondaryElements: ["morte"],
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 25, dice: "4d8", nex: 55 },
      perceptionType: "Percepção as cegas",
      defense: 29,
      pvCurrent: 260,
      pvMax: 260,
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 4, rollBonus: 10 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 2, rollBonus: 5 },
      },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 4, rollBonus: 10 },
        { id: "1", name: "Sobrevivência", rollNumber: 2, rollBonus: 14 },
      ],
      resistencias: {
        balistico: 20,
        corte: 20,
        impacto: 20,
        perfuracao: 20,
        sangue: 20,
        conhecimento: 20,
        energia: 20,
        morte: 10,
      },
      vulnerabilidades: ["fogo"],
      imunidades: [],
      attributes: { dex: 4, str: 3, int: 2, pre: 2, con: 2 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Conflagravel",
          description:
            "<p>Wendigo possui +5 de defesa, ao sofrer dano de fogo este bônus será perdido durante 3 rodadas, caso não sofra nenhum dano de fogo neste período, novamente ganhará os +5 bônus.</p>",
        },
      ],
      actions: [
        {
          id: "0",
          name: "Agredir",
          type: "padrão",
          attacks: [
            {
              id: "0",
              name: "GARRAS SANGUINOLENTAS",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 15,
              damage: [{ id: "0", damageType: "Sangue", value: "3d6+8" }],
            },
          ],
        },
        {
          id: "1",
          name: "Morso Declinente",
          type: "movimento",
          description:
            "<p>Em alta velocidade, Wendigo irá dar uma investida em um alvo mordendo seu corpo (Reflexo DT 25 evita), causando 5d6+10 Perfuração pontos de dano. Ao ser pego, o alvo ficará agarrado, sair requer um teste de Fortitude (DT 25). Wendigo pode realizar uma ação ou se mover em seu deslocamento normal sem penalidade com o alvo agarrado.</p>",
        },
        {
          id: "2",
          name: "Ventriloquia Predatória",
          description:
            "<p>Wendigo é capaz de reproduzir grunhidos similares a voz humana para atormentar ou atrair vítimas em até alcance médio, um teste de Percepção (DT 25) deverá ser realizado, caso falhe, o alvo ficará Fascinado pela voz, indo em sua direção. Entrar em alcance curto com o som da voz causará 2d6 pontos de dano mental. Se encontrar com a origem (Wendigo) da voz causará a condição Pasmo, sofrendo 3d6 pontos de dano mental. Se um mesmo ser já foi alvo desta ação, a DT do teste será 20.</p>",
        },
      ],
      fullPictureURL: "/img/creatures/wendigo.webp",
      sheetPictureURL: "/img/creatures/wendigo-profile.webp",
      description:
        '<p>A fome é capaz de corroer a razão de uma pessoa, dando lugar a uma maldição incontrolável. Alguém que, em desespero, não se vê com outra opção além consumir carne humana, corre o risco de tornar-se numa criatura grotesca e poderosa.</p><p>Wendigo é uma criatura do elemento Sangue e Morte, seu corpo decrépito junto de sua pelagem apodrecida expõe sua carne e osssos.</p><p>Possuindo uma grande resistência, esta criatura, quase indestrutível, parece temer e evitar fontes de muito calor, devido à sua pele, com características inflamáveis ou sensíveis ao fogo.</p><p>Seu instinto predatório é sua característica mais destacável, tentando ao máximo separar e matar suas presas isoladamente. Relatos indicam que um grande definidor da presença de um Wendigo, é o avistamento de entranhas e pedaços de humanos em lugares próximos a florestas fechadas, onde costuma habitar.</p><p>"Apenas as chamas poderam apagar seus pecados."</p>',
    },
  ],
  l = [...e, ...a, ...o, ...r, ...s, ...i],
  p = [...e, ...a, ...o, ...r, ...s, ...i, ...m, ...d, ...t, ...n];
export {
  l as A,
  e as B,
  a as D,
  r as E,
  s as F,
  o as K,
  i as R,
  m as T,
  p as a,
  n as c,
};

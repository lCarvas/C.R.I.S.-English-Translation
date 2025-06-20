const e = [
    {
      name: "Arma Espiral",
      circle: "1",
      element: "Morte",
      execution: "movimento",
      range: "pessoal",
      target: "você",
      duration: "cena",
      pictureURL: "/img/rituals/arma-espiral.webp",
      pictureFullPath: "/img/rituals/arma-espiral.webp",
      description:
        "<p>Você invoca uma arma esquelética em suas mãos, resistente suficiente para matar seus inimigos. Ela é considerada uma arma simples, corpo a corpo, ágil e de uma mão, causa 1d8 de dano e o crítico dela é 19. O tipo do dano deve ser escolhido entre corte, perfuração ou impacto quando conjurar o ritual. Se a arma não ficar empunhada por você por duas rodadas seguidas, ela desintegra-se em cinzas, se tornando inutilizável.</p><p><strong>Discente (+2 PE):</strong> O dano da arma muda para 1d10 de Morte e o crítico para 19/3x. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> O dano da arma muda para 1d12 de Morte, o crítico para 18/3x, caso realize um acerto crítico no alvo do ataque, ele fica lento por uma rodada e sempre que acertar um alvo com uma ação agredir com esta arma, você pode realizar um outro ataque como ação livre. Requer 3o círculo e afinidade.</p>",
    },
    {
      name: "Decaimento Mortal",
      circle: "1",
      element: "Morte",
      execution: "padrão",
      range: "toque",
      target: "um ser",
      duration: "1d3 rodadas",
      save: "Fortitude anula",
      pictureURL: "/img/rituals/decaimento-mortal.webp",
      pictureFullPath: "/img/rituals/decaimento-mortal.webp",
      description:
        "<p>Espada Apodrecida. Morte. Uma espada feita de pedra, lodo e um mineral misterioso paranormal. Em sua lâmina há 3 cubos cravados, com algumas linhas saindo de baixo e ligando eles. Quando um esqueleto wither morrer, existe uma chance de 10% deste item não desaparecer com ele. Esse item é considerado uma espada (possuindo os mesmos valores de dano, crítico, alcance e espaços ocupados), porém seu tipo de dano é convertido para Morte. Além disso, esta arma possui um ritual atrelado a ela, que pode ser conjurado como ação livre ao acertar um ataque contra o alvo, sem custo de PE e sem a necessidade de componentes ritualísticos. O ritual atrelado é Decaimento Mortal, que ao conjurar desta forma, precisa ser atrelado novamente na espada. Para atrelar o ritual, é necessário gastar 2 PE, uma ação de movimento e realizar um teste de Ocultismo (DT 15+2 por sucesso anterior); caso passe na DT, o ritual é atrelado; caso falhe, nada acontece e você perde os PE gastos.</p><p>Você causa um efeito de decomposição em estágio inicial no alvo, que sofre 1d6+1 pontos de dano de Morte no início de seus turnos pela duração. Este efeito é cumulativo.</p><p><strong>Discente (+3 PE):</strong> A duração muda para 1d4+1 rodadas e o alvo sofre -1d20 em testes de Agilidade e Força pela duração. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> Muda o alcance para Médio, o alvo para “área: círculo com 6m de raio”, a duração para “cena” e a resistência para “nenhuma”. Na área do efeito, flores que já estavam no local se tornam pretas, assim como novas flores pretas são surgidas no solo. Todo ser que iniciar seu turno dentro da área, sofre 1d8+8 pontos de dano de Morte e -2d20 em qualquer teste realizado pelas próximas 1d4 rodadas (o dano é causado novamente no início das rodadas seguintes). Requer 3o círculo e afinidade.</p>",
    },
    {
      name: "Reescrever Ferimentos",
      circle: "1",
      element: "Conhecimento",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      normalDice: "5d6",
      discenteDice: "7d6",
      verdadeiroDice: "10d6.",
      pictureURL: "/img/rituals/reescrever-ferimentos.webp",
      pictureFullPath: "/img/rituals/reescrever-ferimentos.webp",
      description:
        "<p>Sigilos do outro lado sobrescrevem a ferida do alvo, fazendo com que parte dela nunca tenha existido. O alvo recupera 5d6 PV, mas um ano de sua vida é apagado de sua memória (o ano apagado é escolhido pelo mestre).</p><p><strong>Discente (+3 PE):</strong> aumenta a cura para 7d6 PV. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alcance para “curto”, o alvo para “seres escolhidos” e a cura para 10d6. Requer 4° círculo e afinidade com Conhecimento.</p>",
    },
    {
      name: "Regenerar Organismo",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "sustentada",
      pictureURL: "/img/rituals/regenerar-organismo.webp",
      pictureFullPath: "/img/rituals/regenerar-organismo.webp",
      description:
        "<p>Você acelera como o metabolismo de seu corpo funciona, fazendo com que suas células se reproduzam mais rapidamente, assim regenerando seus ferimentos com mais facilidade. Ao final de seu turno, você recupera 10 PV, além disso, você recebe +2d20 em testes para resistir doenças e venenos.</p><p><strong>Discente (+4 PE):</strong> muda a cura para 20 PV no final de seu turno. Requer 3° círculo.</p><p><strong>Verdadeiro (+9 PE):</strong> muda o alcance para “curto”, o alvo para “seres escolhidos” e a cura para 20 PV. Requer 3° círculo.</p>",
    },
    {
      name: "Transfigurar Plantas",
      circle: "1",
      element: "Energia",
      execution: "padrão",
      range: "curto",
      target: "veja o texto",
      duration: "cena",
      save: "",
      area: "",
      effect: "",
      normalDice: "1d6",
      discenteDice: "4d6",
      verdadeiroDice: "8d6",
      pictureURL: "/img/rituals/chamas-do-caos.webp",
      pictureFullPath: "/img/rituals/chamas-do-caos.webp",
      description:
        '<p>Você manipula plantas e folhas. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Atrapalhar:</strong> o alvo é uma área de 3m de raio, no qual vinhas e cipós são criados para atrapalhar. Esta área é considerada terreno difícil.</p><p><strong>Derrubar:</strong> o alvo é um ser que esteja tocando no chão, que é puxado por cipós. O alvo deve realizar um teste de Reflexos, caso falhar, o alvo fica caído.</p><p><strong>Enrolar:</strong> o alvo é um ser que esteja tocando no chão. Cipós e plantas enrolam nos pés do alvo, ele deve realizar um teste de Reflexos, se falhar, fica imóvel. Um ser imóvel por este ritual pode utilizar uma ação padrão para tentar se soltar (Luta contra DT do ritual).</p><p><strong>Discente (+4 PE):</strong> adiciona o seguinte efeito. "Entrelaçar: o alvo é uma arma corpo a corpo que é entrelaçada por vinhas espinhosas. Ela causa +2d6 pontos de dano de perfuração.". Requer 2º círculo.</p><p><strong>Verdadeiro (+6 PE):</strong> adiciona os seguintes efeitos. "Estrangular: o alvo é um ser e deve realizar um teste de Reflexos, caso falhe, fica agarrado pelas vinhas e perde 2d8 PV no início de seus turnos, o alvo pode realizar um teste de Fortitude no início de seus turnos, caso passe, ele anula o dano; caso passe dois turnos seguidos, as vinhas ficam fracas, soltando o alvo e não causando mais o dano." e "Semear: a execução muda para "2 horas", a área é um quadrado de 50m e a duração muda para "permanente". Plantas e vegetação crescem no local, se tornando um ambiente agradável e habitável para espécies que habitam ambientes de florestas, caso a área seja uma plantação de alimentos, a plantação fica pronta para a colheita". Requer 3o círculo e afinidade.</p>',
    },
  ],
  a = [
    {
      name: "Asas Impulsivas",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      pictureURL: "/img/items/asas-impulsivas.webp",
      pictureFullPath: "/img/items/asas-impulsivas.webp",
      description:
        "<p>Este item é parte do corpo de um ser que foi morto ou apenas foi decepado dele; apesar de ser um recurso poderoso, as asas podem ser traiçoeiras com seus impulsos nervosos. Ao utilizar este item, o usuário recebe 6m/4□ de deslocamento de voo, podendo ser afetada por efeitos que afetem o deslocamento, como a condição lento ou a maldição lépida. Apesar disso, essa asa ainda recebe impulsos nervosos do antigo ser que as possuía, sendo assim, caso o usuário sofrer dano de Sangue enquanto estiver com este item ativo, as asas reagem ao dano e força o usuário a se deslocar 6m para uma distância aleatória. Este item só pode ser ativo caso o usuário gaste uma ação de interlúdio para anexar as asas em seu corpo, e só pode ser removido caso seja gasto outra ação de interlúdio.</p>",
    },
    {
      name: "Chapéu do Espantalho",
      element: "Conhecimento",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      pictureURL: "/img/items/chapeu-do-espantalho.webp",
      pictureFullPath: "/img/items/chapeu-do-espantalho.webp",
      description:
        "<p>De primeiro olhar, este item apenas se parece com um chapéu simples, no qual pode ser usado para se proteger do sol em dias muito ensolarados. Entretanto, este chapéu possui uma incrível habilidade de disfarçar a aparência de quem o vestir, fazendo com que se assemelha com um espantalho e fornecendo a habilidade de se permanecer completamente imóvel. Vestir ou remover o chapéu gasta uma ação padrão; enquanto você estiver vestindo o chapéu, pode gastar 2 PE e uma ação padrão para alterar sua aparência para de um espantalho comum de lavouras. Enquanto estiver com a aparência de um espantalho, você ganha +5 em testes para se disfarçar e em testes de Intimidação e pode permanecer completamente imóvel, sem nem fazer movimentos de respiração (realizar a transformação na frente de outras pessoas pode causar outros efeitos adicionais a critério do mestre). A transformação se encerra quando você dormir, ficar inconsciente ou tirar o chapéu.</p>",
    },
    {
      name: "Crânio Fúlgido",
      element: "Morte & Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      pictureURL: "/img/items/cranio-fulgido.webp",
      pictureFullPath: "/img/items/cranio-fulgido.webp",
      description:
        "<p>Um crânio apodrecido e escuro, no qual parece estar refletindo uma luz externa inexistente a todo momento. Outrora parte de uma criatura, agora é um objeto amaldiçoado pelas habilidades antigas daquele o qual pertencia. Este crânio é um objeto amaldiçoado, porém ele foi atingido por duas entidades do Outro Lado ao mesmo tempo. O crânio pode ser utilizado para iluminar ou ofuscar o ambiente ao seu redor. Por padrão, esse item absorve qualquer luz natural ou artificial, gerando escuridão paranormal em uma área de 6 metros de raio que consome o ambiente. A escuridão não pode ser iluminada por fontes de luz mundanas. Enquanto esse efeito estiver ativo, o crânio é considerado um Item Amaldiçoado de Morte e pode ser usado como componente ritualístico de Morte (caso esteja utilizando a regra opcional de Conjuração Complexa, ele não é gasto após o uso). Você pode gastar uma ação de movimento e 2 PE para alternar o efeito do item, fazendo com que ele emita uma luz paranormal em uma área de 6 metros de raio (luz paranormal não pode ser apagada, coberta ou escurecida por meios mundanos, podendo até atravessar objetos sólidos). Enquanto esse efeito estiver ativo, o crânio é considerado um Item Amaldiçoado de Energia, podendo ser utilizado como um componente ritualístico de Energia (que também não é gasto pela regra opcional de Conjuração Complexa). Você pode alterar de volta para o efeito de escuridão gastando uma ação de movimento e 2 PE.</p>",
    },
    {
      name: "Estaca Vampírica",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      pictureURL: "/img/items/estaca-vampirica.webp",
      pictureFullPath: "/img/items/estaca-vampirica.webp",
      description:
        "<p>Uma pequena arma de madeira que perfurou o coração de um ser sombrio em seu próprio lar, que carrega parte se seu remanescente paranormal. A estaca é uma arma simples, ágil, corpo a corpo de uma mão que causa 1d4 pontos de dano de Morte; o crítico da arma é 3x e ao realizar acerto crítico, você enfraquece a resistência do alvo, fazendo ele sofrer -1d20 em testes de resistência até o início de seu próximo turno. Além disso, ao realizar um ataque, você pode gastar 2 PE para adicionar 2d12 pontos de dano de Morte no dano da arma; após causar o dano, você recupera seus PV igual o dano causado pela arma.</p>",
    },
    {
      name: "Granada de Lodo",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      pictureURL: "/img/items/granada-de-lodo.webp",
      pictureFullPath: "/img/items/granada-de-lodo.webp",
      description:
        "<p>Este item é uma parcela do lodo da Morte armazenada em um recipiente especial para dispersar este lodo no solo. Enquanto estiver com este item sacado, você pode gastar uma ação padrão e este item para arremessar ele em um ponto em 15m. Ao fazer isso, a granada explode, liberando lodo em alcance curto; seres na área sofrem 5d8 pontos de dano de Morte (Reflexos DT Agi reduz metade) e a área se torna terreno difícil pela cena.</p>",
    },
  ],
  o = [
    {
      isDefault: !0,
      name: "Abocanhador",
      fullPictureURL: "/img/creatures/abocanhador.webp",
      sheetPictureURL: "/img/creatures/abocanhador-profile.webp",
      vd: 120,
      element: "sangue",
      secondaryElements: ["energia"],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 24, dice: "4d8", nex: 50 },
      perceptionType: "Percepção às cegas",
      defense: 18,
      skills: {
        perception: { rollNumber: 1, rollBonus: 0 },
        initiative: { rollNumber: 2, rollBonus: 5 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 4, rollBonus: 10 },
        will: { rollNumber: 1, rollBonus: 0 },
      },
      pvCurrent: 350,
      pvMax: 350,
      imunidades: [],
      resistencias: { quimico: 20, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 2, str: 2, int: 0, pre: 1, con: 4 },
      movement: 3,
      altMovements: [
        { title: "Nado", value: 3 },
        { title: "Escalada", value: 3 },
      ],
      powers: [
        {
          id: "0",
          name: "Área Gosmenta",
          description:
            "<p>Uma área de 3m do abocanhador é cercada por seu sangue gosmento e viscoso que tenta prender pessoas que pisam nele. Se um ser iniciar seu turno dentro desta área, o ser deve rolar um teste de Reflexos com o atributo base Força (DT 22); caso falhe, o ser fica imóvel até o início da próxima rodada.</p>",
        },
        {
          id: "1",
          name: "Balbuciadas Impregnante",
          description:
            "<p>O abocanhador emite urros e grunhidos horrorosos com suas bocas. Uma pessoa que inicia seu turno em alcance curto do abocanhador e que consegue ouvi-lo deve rolar um teste de Vontade (DT 20); caso falhe, deve rolar 1d6. Um resultado de 1 a 3, nada acontece; se o resultado for 4, a pessoa não pode realizar reações até o início de seu próximo turno; se o resultado for 5, a pessoa só pode realizar uma ação padrão ou de movimento (não ambas) até o início da próxima rodada; se o resultado for 6, a pessoa perde uma ação de movimento e uma padrão até o início da próxima rodada.</p>",
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
              name: "MORDIDA ÁCIDA",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 15,
              damage: [
                { id: "0", damageType: "Perfuração", value: "2d8+8" },
                { id: "1", damageType: "Químico", value: "2d12" },
              ],
            },
          ],
        },
        {
          id: "1",
          name: "Violência",
          type: "livre",
          description:
            "<p>As mordidas do abocanhador são normalmente muito violentas, que enfraquecem e desequilibram o alvo. Se o abocanhador acertar um ataque em um ser Médio ou menor, pode tentar derrubar o alvo (teste 2d20+15).</p>",
        },
        {
          id: "2",
          name: "Cuspe Cegante",
          type: "padrão",
          description:
            "<p>Ele cospe uma gosma que brilha em verde em um ponto em alcance curto. Seres em até 4,5m deste ponto sofrem 3d10+5 pontos de dano químico; seres adjacentes a este ponto ficam cegos até o início do próximo turno do abocanhador (Reflexos DT 23 reduz dano pela metade e evita condição).</p>",
        },
      ],
      description:
        "<p>Observar um abocanhador é, provavelmente, uma das piores visões que alguém poderia ter. Ele é uma mistura de um monte de carne com tentáculos e bocas medonhas que ficam murmurando e grunhindo incessantemente.</p><p>O abocanhador é, na verdade, uma história contada por múltiplos cultistas de diferentes seitas em reuniões descontraídas. Eles contam que um abocanhador é a junção de diferentes vítimas do próprio abocanhador. Essa história gera uma dúvida sobre sua verdadeira origem. Ele realmente é a junção de vários corpos que ele mesmo assassinou ou é a manifestação do medo da existência dele?</p><p>A resposta desta questão não se sabe ao certo, porém suas histórias comentam sobre seu comportamento impulsivo e insistente, pois fugir dele normalmente é a alternativa mais segura, porém ele sempre estará lhe seguindo, não importa o quanto tempo passe...</p>",
    },
    {
      isDefault: !0,
      name: "Ilusionista",
      fullPictureURL: "/img/creatures/ilusionista.webp",
      sheetPictureURL: "/img/creatures/ilusionista-profile.webp",
      vd: 80,
      element: "conhecimento",
      secondaryElements: ["medo"],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 18, dice: "3d6", nex: 40 },
      defense: 23,
      skills: {
        perception: { rollNumber: 3, rollBonus: 0 },
        initiative: { rollNumber: 1, rollBonus: 0 },
        fortitude: { rollNumber: 0, rollBonus: 0 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: 3, rollBonus: 0 },
      },
      extraSkills: [
        { id: "0", name: "Enganação", rollNumber: 3, rollBonus: 12 },
      ],
      pvCurrent: 140,
      pvMax: 140,
      imunidades: [],
      resistencias: { conhecimento: 20 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 1, str: 0, int: 3, pre: 3, con: 2 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Confundir Percepção",
          description:
            "<p>Pessoas que enxergam o ilusionista conseguem compreender sua aparência, porém a mente dele é persuadida a compreender seu visual como algo “normal”, ignorando ele como uma ameaça e tratando-o como uma pessoa comum, sendo assim, pessoas que olharem pra ele não sofrem os efeitos de sua presença perturbadora.</p>",
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
              name: "PANCADA",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 12,
              damage: [{ id: "0", damageType: "Impacto", value: "2d8+2" }],
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
              name: "DRENAR MENTE",
              numberOfAttacks: 1,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 10,
              damage: [{ id: "0", damageType: "Mental", value: "2d6+1" }],
            },
          ],
        },
        {
          id: "2",
          name: "Locomoção Ilusória",
          type: "livre",
          description:
            "<p>Uma vez por rodada ele se transfere para o uma cópia de si, ocupando o espaço ocupado pela cópia que se transferiu. Seu corpo inicial se torna uma das cópias.</p>",
        },
        {
          id: "3",
          name: "Cópias",
          type: "padrão",
          description:
            "<p>O ilusionista gera 7 cópias de si mesmo (totalizando 8 considerando com o ilusionista) em pontos separados em alcance médio. As cópias são ilusões intangíveis, porém são dissipadas caso alguém use uma ação padrão para interagir com uma das cópias. Elas podem se movimentar até 6m como uma ação livre e fazem gestos simples para confundir seres que observam. Esta ação só pode ser realizada uma vez por cena.</p>",
        },
        {
          id: "4",
          name: "Criações [DT 25]",
          type: "padrão",
          description:
            "<p>O ilusionista pode usar qualquer versão do ritual Tecer Ilusão sem nenhum custo, porém o dano da versão verdadeira é reduzido para 4d6.</p>",
        },
      ],
      enigmaDoMedo:
        "<p>Ele é uma criatura muito ardilosa que busca extrair informações de suas vítimas para se “alimentar” delas. Ele convence suas vítimas que deixar ele invadir suas mentes e drenar as informações é o que elas querem. Seu enigma de medo é resolvido enquanto uma pessoa que conseguiu não ser enganada por ele estiver viva. Enquanto seu enigma de medo estiver resolvido, ele perde a habilidade Confundir Percepção.</p>",
      description:
        "<p>Em meio às modernas artérias urbanas, surgiam relatos intrigantes sobre o ilusionista, uma criatura que habitava as sombras e semeava mistério. Boatos sussurravam sobre sua habilidade de enganar mentes incautas, drenando informações como um predador da psique.</p><p>Sua aparência, embora sinistra, se camuflava na normalidade cotidiana. Vestido de um sobretudo em tons de bege, adornado com uma pequena cartola, o ilusionista poderia ser facilmente confundido com um humano comum. No entanto, detalhes grotescos emergiam: a ausência de orelhas e lábios grudados, enfatizando olhos assustadores que mergulhavam na alma de quem os encarava.</p><p>Cauteloso, o ilusionista percorria as ruas disfarçado entre a multidão. Seus passos eram uma dança entre a realidade e a ilusão. Em noites enevoadas, adotava personas diferentes, envolvendo-se em enganos meticulosos. Uma vez, apresentou-se como um vendedor ambulante, trocando ilusões por fragmentos de pensamentos curiosos. As cidades tornavam-se palcos de seus truques sombrios. O ilusionista, como uma miragem fugaz, enganava e escapava, deixando atrás de si um rastro de mentes confusas. Sua busca por conhecimento tornava-se uma dança macabra entre manipulação e mistério, desafiando a compreensão humana.</p><p>Nessas noites de engano e sombras, o ilusionista persistia, alimentando-se das inúmeras histórias que tecia com suas artimanhas ardilosas. A cidade moderna, incauta e envolta em sua rotina diária, mal sabia que nos recantos mais escuros, um ser ilusório dançava entre verdades e mentiras.</p>",
    },
    {
      isDefault: !0,
      name: "Incinerado",
      fullPictureURL: "/img/creatures/incinerado.webp",
      sheetPictureURL: "/img/creatures/incinerado-profile.webp",
      vd: 40,
      element: "energia",
      secondaryElements: [],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 19, dice: "3d4", nex: 35 },
      defense: 21,
      skills: {
        perception: { rollNumber: -2, rollBonus: 0 },
        initiative: { rollNumber: 3, rollBonus: 5 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 3, rollBonus: 5 },
        will: { rollNumber: -2, rollBonus: 0 },
      },
      pvCurrent: 120,
      pvMax: 120,
      imunidades: [],
      resistencias: { corte: 5, balistico: 5, perfuracao: 5, energia: 10 },
      vulnerabilidades: ["conhecimento", "frio"],
      attributes: { dex: 3, str: 2, int: 0, pre: 0, con: 2 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Alimentar-se das chamas",
          description:
            "<p>Caso um incinerado receba dano de fogo, o dano é convertido em ganho de PV (caso ele sofra 10 pontos de dano de fogo, ele não sofre esse dano, invés disso, recupera 10 PV). Ele não recebe PV caso o dano seja causado por ele mesmo.</p>",
        },
        {
          id: "1",
          name: "Apagar Chamas",
          description:
            "<p>Se um incinerado entrar em contato direto com água, ele sofre 2d6 pontos de dano de frio. Se o contato for breve (como jogar água de um balde nele), o dano pode ocorrer uma vez por contato; se o contato for mais duradouro (como ficar no mar ou uma banheira cheia d'água), o dano ocorre uma vez por rodada enquanto mantém o contato.</p>",
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
              name: "PANCADA FLAMEJANTE",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 8,
              damage: [{ id: "0", damageType: "Fogo", value: "1d10+2" }],
            },
          ],
        },
        {
          id: "1",
          name: "Emanar Fogo [DT 19]",
          type: "movimento",
          description:
            "<p>Ele expande as chamas de seu corpo, aumentando e atingindo seres ao redor. Seres adjacentes sofrem 1d6 pontos de dano de fogo e ficam em chamas (Reflexos reduz dano pela metade e evita condição). Ao realizar esta ação, ele perde 6 PV.</p>",
        },
        {
          id: "2",
          name: "Incinerar [DT 20]",
          type: "padrão",
          description:
            "<p>Um incinerado converte parte das chamas de seu corpo em um ataque, perdendo 3 PV e causando 1d8+2 pontos de dano de fogo em seres em um cone de 6m. Ele pode optar por perder até 12 PV ao realizar essa habilidade, adicionando mais um dado de dano a cada 3 PV perdidos (Reflexos reduz à metade).</p>",
        },
      ],
      description:
        "<p>Esta criatura geralmente se manifesta de uma pessoa que morreu queimada em um local com a membrana danificada, surgindo quando o corpo foi queimado por completo, apenas restando os ossos do corpo.</p><p>Ele possui uma aparência horripilante; é justamente um esqueleto que começou a virar cinzas, porém com grandes chamas ao redor de seu corpo. Pessoas com pouca ou nenhuma experiência com o Paranormal ficaria facilmente assustada com a visão deste ser medonho andando em sua direção.</p><p>Seu comportamento é similar ao comportamento do próprio fogo: caótico. Ele não seleciona uma pessoa específica para atacar sob quase nenhuma circunstância. A exceção é quando uma pessoa tenta apagar suas chamas, causando um incômodo inexplicável nele; assim ele se sente na obrigação de incapacitar a pessoa para que isso não ocorra novamente.</p><p>Alguns agentes apontaram que esta criatura tem sua vitalidade atrelada à quantidade de fogo de seu corpo, ou seja, água é extremamente eficaz contra ele; e quando acabar as chamas do seu corpo, ele morre, virando apenas uma pilha de ossos frágeis com cinzas ao redor.</p>",
    },
    {
      isDefault: !0,
      name: "Kalamudae",
      fullPictureURL: "/img/creatures/kalamudae.webp",
      sheetPictureURL: "/img/creatures/kalamudae-profile.webp",
      vd: 140,
      element: "morte",
      secondaryElements: ["energia"],
      creatureType: "criatura",
      creatureSize: "enorme",
      presencaPerturbadora: { dt: 25, dice: "4d10", nex: 50 },
      perceptionType: "Visão no escuro",
      defense: 27,
      skills: {
        perception: { rollNumber: 3, rollBonus: 10 },
        initiative: { rollNumber: 3, rollBonus: 7 },
        fortitude: { rollNumber: 2, rollBonus: 10 },
        reflex: { rollNumber: 3, rollBonus: 10 },
        will: { rollNumber: 3, rollBonus: 10 },
      },
      pvCurrent: 260,
      pvMax: 260,
      imunidades: [],
      resistencias: { corte: 10, impacto: 10, perfuracao: 10, morte: 20 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 3, str: 4, int: 1, pre: 3, con: 2 },
      movement: 3,
      altMovements: [{ title: "Natação", value: 12 }],
      powers: [
        {
          id: "0",
          name: "Gigantismo Influente",
          description:
            "<p>O kalamudae altera o ambiente e seu habitat, transformando tanto a fauna quanto a flora. Dentro da área habitada pela criatura, os animais são transformados em criaturas terríveis. A critério do Mestre, isso pode gerar efeitos mecânicos. Caso possua fichas para os animais, forneça as seguintes alterações: aumente seu tamanho em uma categoria (de pequeno para médio, médio para grande, etc.), adicione +2 em todas as suas resistências a dano e +5 de Morte e Energia. Por fim, adicione uma ação agredir que causa 1d12+3 do tipo de dano entre corte, impacto ou perfuração (a critério do Mestre). A ação pode ser realizada juntamente à ação agredir original do animal.</p>",
        },
        {
          id: "1",
          name: "Escuridão Profunda",
          description:
            "<p>Ao chamar uma presa perto o suficiente com a sua Bioluminescência, o kalamudae emite uma escuridão que consome o ambiente em sua volta, facilitando a captura de seu alvo. No início de seu primeiro turno, qualquer fonte de luz em alcance médio dela, mundana ou paranormal, se apaga, criando um ambiente de escuridão paranormal nesta área por uma rodada. No início de seus turnos seguintes, o efeito se repete, mas a escuridão muda para penumbra.</p>",
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
              name: "BRAÇOS SUSPENSOS",
              numberOfAttacks: 4,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 15,
              damage: [{ id: "0", damageType: "Impacto", value: "2d6+8" }],
            },
          ],
        },
        {
          id: "1",
          name: "Desarmar",
          type: "livre",
          description:
            "<p>Após acertar um ataque de braços suspensos em um ser que esteja com uma arma sacada, o kalamudae pode tentar roubar a arma do alvo (3d20+20). Caso a criatura passe no teste, ela pega a sua arma e pode utilizá-la em combate. Enquanto estiver com uma arma roubada, dois de seus ataques de braços suspensos são substituídos por ataques da arma, utilizando todas as estatísticas da mesma, mas mantendo o seu bônus de +8 nas rolagens de dano. O kalamudae pode segurar até duas armas ao mesmo tempo, realizando assim dois ataques com uma arma e dois ataques com a outra arma. A criatura não pode utilizar armas de fogo ou de disparo.</p>",
        },
        {
          id: "2",
          name: "Ataque Oportunista",
          type: "reação",
          description:
            "<p>Quando um ser entrar voluntariamente em seu alcance natural, kalamudae pode realizar um ataque com seus braços suspensos (ou com uma arma roubada) ou uma manobra contra este ser. Ele só pode realizar esta ação duas vezes por rodada.</p>",
        },
        {
          id: "3",
          name: "Desorientação",
          type: "movimento",
          description:
            "<p>O kalamudae emite temporariamente um brilho de cores arroxeadas que corre por suas veias, formando desenhos semelhantes a constelações. O fluxo da luz é fascinante e confunde seres que observam a criatura. Todos os seres em alcance curto do kalamudae devem fazer um teste (Vontade DT 23). Se falharem, gastam uma rodada movimentando-se o seu deslocamento padrão para um direção aleatória (decidida por 1d8). Se passarem, evitam o efeito.</p>",
        },
        {
          id: "4",
          name: "Bioluminescência",
          type: "padrão",
          description:
            "<p>O kalamudae possui um apêndice que dá suporte a um de seus crânios, no qual uma forte luz sai. A luz é chamativa e deixa todos os seres que consigam enxergá-la fascinados por ela (Vontade DT 24 evita), podendo apenas usar suas ações para se aproximar. Ao ficar a 3 metros de distância da criatura ou menos, a condição se encerra.</p>",
        },
      ],
      description:
        '<p>"De repente, está tão escuro, mas uma luz me guia. Ela é tão linda. Todas essas criaturas e seres marinhos... não importam. É tão reconfortante vislumbrar seu brilho e sentir seu chamado... Todo esse ambiente, esse espaço, as constelações... Fui ensinado a segui-las para saber onde ir, mas agora, aqui, elas me confundem. Entretanto, meu objetivo ainda brilha mais do que tudo."</p><p>Nas profundezas do abismo, onde a Morte é encontrada, há um local tortuoso, transformado pela Energia e tomado pelo Outro Lado, onde habita uma enorme criatura que nem os mais experientes conseguem descrever. Um dos maiores terrores: o desconhecido. O que está nas profundezas?</p><p>A primeira imagem a se revelar: a luz. Um crânio apodrecido, brilhando de forma fascinante, usado para chamar a atenção de possíveis presas. Ao se aproximar, o crânio revela-se preso a um longo tentáculo, que se conecta ao topo de um ser terrível. Formada por dois corpos humanos, kalamu- dae se apresenta como uma criatura enorme, de aparência remetente à de um polvo. Os braços e pernas dos dois corpos desnutridos se alongam para baixo, assemelhando-se a tentáculos, en- rugados e pálidos. Os corpos, através de aberturas nas costas, são ligados por suas colunas, que se entrelaçam e escalam em um movimento espiral até a parte superior da criatura. A partir do topo da coluna, duas grandes nadadeiras peitorais se estendem, sustentadas por ossos. No cen- tro de seu corpo, um crânio brilhante se sobressai, como se estivesse tentando sair de dentro do próprio corpo.</p><p>O que resultaria da tentativa hedionda de criar um ser perfeito? Dar vida à uma criatura perdida, guardada apenas em uma única memória de um momento interminável. Revivido para causar o terror, o kalamudae não é uma criatura que surge naturalmente; pode se manifestar de diferentes maneiras em di- ferentes lugares, alimentando seu crescimento apenas pelo encanto ori- ginado do mar em uma mente insana. Relatos dizem que a primeira manifestação de um kalamudae ocorreu em 1974, através de um cientista fascinado por criaturas marinhas.</p><p>Segundo os relatos, o cientista, durante um estudo aprofundado nas profundezas do oceano, encontrou um animal diferente; algo que ele jamais tinha visto, e talvez ninguém mais tenha. Fascinado pela criatura, o cientista aproveitou o máximo de tempo que pôde com ela, mas não foi o suficiente. Eventualmente, ele teve de deixá-la partir, para nunca mais vê-la. O cientista jamais esqueceu o animal e desejava reencontrá-lo, mas sem sucesso. Incapaz de achá-lo, ele decidiu recriá-lo. Usando sujeitos humanos, diversas tentativas foram feitas. O processo repetido de falhas, na busca de recriar o ser perfeito perdido, deu origem à criatura.</p>',
    },
    {
      isDefault: !0,
      name: "Krampus",
      fullPictureURL: "/img/creatures/krampus.webp",
      sheetPictureURL: "/img/creatures/krampus-profile.webp",
      vd: 280,
      element: "sangue",
      secondaryElements: ["energia"],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 30, dice: "8d8", nex: 80 },
      perceptionType: "Visão na Penumbra",
      defense: 34,
      skills: {
        perception: { rollNumber: 3, rollBonus: 15 },
        initiative: { rollNumber: 4, rollBonus: 10 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 4, rollBonus: 20 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      pvCurrent: 610,
      pvMax: 610,
      imunidades: [],
      resistencias: { balistico: 10, perfuracao: 10, energia: 20, sangue: 20 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 4, str: 5, int: 1, pre: 3, con: 4 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Presença Congelante",
          description:
            "<p>O krampus é uma criatura que leva o frio consigo. Uma área em alcance extremo dele é considerada muito fria (para a regra de Clima, Calor e Frio). Além disso, no início dos turnos do krampus em uma cena de ação, pessoas em alcance longo sofrem 1d6 de dano de frio e não podem realizar ação padrão ou de movimento (não ambas) (Fortitude DT 29 anula).</p>",
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
              name: "CAJADO PUNITIVO",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 30,
              damage: [{ id: "0", damageType: "Energia", value: "2d12+15" }],
            },
            {
              id: "1",
              name: "LÍNGUA SANGUINÁRIA",
              numberOfAttacks: 2,
              range: "Corpo a corpo (6m)",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 25,
              damage: [{ id: "0", damageType: "Sangue", value: "4d10+10" }],
            },
          ],
        },
        {
          id: "1",
          name: "Crianças Malcriadas [DT 28]",
          type: "livre",
          description:
            "<p>Quando o krampus acertar um ataque em uma pessoa de 14 anos ou menos, ele pode não causar dano, invés disso, ele captura essa pessoa e põe dentro de sua sacola. Uma pessoa presa em sua sacola não pode se soltar sozinha, invés disso, outra pessoa precisa estar adjacente e gastar uma ação padrão para rolar um teste de Atletismo (DT 28); caso passe, a pessoa dentro da sacola é libertada. Enquanto uma pessoa estiver dentro da sacola, ela é congelada, ficando petrificado e sob efeito de Sufocamento (veja página 293) (mesmo petrificado, ainda pode realizar o teste de Fortitude para resistir o Sufocamento).</p>",
        },
        {
          id: "2",
          name: "Revoada Gelada [DT 29]",
          type: "padrão",
          description:
            "<p>Ele lança chamas azuis geladas em um cone em alcance médio. Todos os seres na área sofrem 4d12+8 pontos de dano de frio e ficam em chamas, porém o dano da condição muda para frio (Reflexos reduz dano pela metade e evita condição).</p>",
        },
      ],
      enigmaDoMedo:
        "<p>O krampus caça crianças que não se comportaram ao longo do ano, torturando elas, fazendo pagar pelo seu mal comportamento. Caso a criança que ele esteja caçando diga em voz alta e de forma sincera que se arrependa de suas atitudes incorretas, o enigma de medo do krampus será resolvido, perdendo a habilidade Crianças Malcriadas e seu deslocamento de escalada.</p>",
      description:
        "<p>Quando uma criança não se comporta ao longo do ano, no final dele, essa criança é castigada, sendo torturada por esta criatura cruel e violenta, que busca crianças malcriadas.</p><p>O krampus geralmente age nas épocas de natal, entrando nas casas decoradas e raptando as crianças ainda enquanto dormem. Geralmente, quando rapta uma criança, ele poe em sua sacola e foge para seu esconderijo, onde, caso a criança ainda esteja viva, ele pode tortura-lás até a morte.</p><p>Seu visual remete ao de um demônio, com longos chifres e uma grande língua, capaz de enrolar no corpo de suas vítimas e raptando elas, pondo em sua sacola.</p><p>Apesar de poderoso, ele pode ser derrotado quando uma equipe de agentes experientes se preparam para lutar contra ele; se aquecendo e tendo recursos capazes de resistir ao frio que ele carrega consigo.</p>",
    },
    {
      isDefault: !0,
      name: "Ladra de Faces",
      fullPictureURL: "/img/creatures/ladra-de-faces.webp",
      sheetPictureURL: "/img/creatures/ladra-de-faces-profile.webp",
      vd: 240,
      element: "conhecimento",
      secondaryElements: ["medo"],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 30, dice: "6d8", nex: 75 },
      perceptionType: "Percepção às cegas",
      defense: 42,
      skills: {
        perception: { rollNumber: 5, rollBonus: 15 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 15 },
        reflex: { rollNumber: 2, rollBonus: 10 },
        will: { rollNumber: 5, rollBonus: 15 },
      },
      pvCurrent: 380,
      pvMax: 380,
      imunidades: [],
      resistencias: { balistico: 10, corte: 10, impacto: 10, conhecimento: 20 },
      vulnerabilidades: ["sangue"],
      attributes: { dex: 2, str: 4, int: 4, pre: 5, con: 3 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Olhar Apavorante",
          description:
            "<p>Seu olhar penetra a alma de quem a olha. Pessoas que falharem na Presença Perturbadora da ladra de faces ficam automaticamente por último na contagem de iniciativa. Caso duas pessoas ou mais fiquem por último, elas devem rolar iniciativa mesmo assim, quem possuir o melhor resultado age antes dos piores.</p>",
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
              name: "DEDOS MACABROS",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 28,
              damage: [
                { id: "0", damageType: "Conhecimento", value: "4d6+20" },
              ],
            },
          ],
        },
        {
          id: "1",
          name: "Observar de volta",
          type: "livre",
          description:
            "<p>Todas as pessoas que estejam olhando para seu rosto ou algum atrelado ao seu corpo, perdem 2d10 de sanidade e ficam alquebrados (Vontade DT 29 evita condição). Cada pessoa só pode ser alvo dessa habilidade uma vez por rodada.</p>",
        },
        {
          id: "2",
          name: "Apagar face",
          type: "movimento",
          description:
            "<p>A ladra passa sua mão no rosto de uma pessoa adjacente, apagando sua face. A pessoa tem sua face presa a uma das cabeças atreladas em seu corpo (Fortitude DT 30 evita); enquanto estiver com a face presa, a pessoa fica cega, não pode realizar a ação “falar” e nem sentir cheiros. Para fazer com que o rosto volte para a pessoa, é necessário arrancar uma das cabeças da ladra (ela precisa sofrer 60 de dano em uma rodada) ou quando ela alcançar 0 PV. Ela não pode realizar esta habilidade caso seu enigma de medo esteja resolvido, porém uma pessoa ainda se mantém presa.</p>",
        },
        {
          id: "3",
          name: "Agarrar e amedrontar",
          type: "padrão",
          description:
            "<p>Ela tenta agarrar uma pessoa (4d20+25) com sua mão bizarra; caso falhe em agarrar, ela realiza um ataque contra essa pessoa com seus dedos macabros; caso suceda, as cabeças atreladas ao seu corpo encaram a pessoa agarrada, causando um desconforto incompreensível e sussurrando ideias macabras, sofrendo 3d8+5 pontos de dano mental e ficando abalado (Vontade DT 30 reduz dano pela metade e evita condição); a pessoa que falhe nesse teste sofre uma penalidade de -2d20 em todos os testes que realizar enquanto estiver agarrado. Os efeitos dessa habilidade são acumulativos.</p>",
        },
        {
          id: "4",
          name: "Desatrelar cabeça",
          type: "completa",
          description:
            "<p>Ela desloca seu movimento padrão até uma pessoa morrendo, em seguida ar- ranca a cabeça desta pessoa, matando instantaneamente. Ela guarda a cabeça dentro de suas vestes, recuperando 80 PV. A cabeça da pessoa emerge na ro- dada seguinte como uma no- va atrelada ao seu corpo, causando 4d10+8 pontos de dano mental em todas as pessoas que viram que pos- sam vê-la.</p>",
        },
      ],
      enigmaDoMedo:
        "<p>A origem de uma ladra de faces é incerta. Há pessoas que dizem que este ser é a alma de pessoas à beira da loucura que decidem arrancar suas faces por seus próprios motivos, outros acreditam que este ser é uma assombração que perambula tentando suprir suas necessidades obscuras. Enquanto alguém estiver olhando diretamente para alguma de suas cabeças, seu enigma de medo é considerado resolvido. Enquanto seu enigma de medo estiver resolvido, ela sofre -5 em sua Defesa.</p>",
    },
    {
      isDefault: !0,
      name: "Possessor",
      fullPictureURL: "/img/creatures/possessor.webp",
      sheetPictureURL: "/img/creatures/possessor-profile.webp",
      vd: 160,
      element: "energia",
      secondaryElements: [],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 25, dice: "4d8", nex: 55 },
      perceptionType: "Visão no escuro",
      defense: 28,
      skills: {
        perception: { rollNumber: 3, rollBonus: 5 },
        initiative: { rollNumber: 4, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 4, rollBonus: 15 },
        will: { rollNumber: 3, rollBonus: 10 },
      },
      pvCurrent: 260,
      pvMax: 260,
      imunidades: [],
      resistencias: { balistico: 10, corte: 10, perfuracao: 10, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 4, str: 2, int: 1, pre: 3, con: 3 },
      movement: 9,
      movementLabel: "voo",
      powers: [
        {
          id: "0",
          name: "Possuir",
          description:
            "<p>Quando o possessor é reduzido a 0 PV e há uma arma feita de metal sem maldições de Conhecimento em alcance curto, o corpo e sua “consciência” se anexa nesta arma (caso haja duas, se anexa na mais próxima; caso haja duas na mesma distância, é anexado de forma aleatória); caso haja nenhuma arma de metal, ele se desfaz no ar, morrendo permanentemente. Uma arma que esteja anexada ao possessor recebe a maldição Possuída (veja a maldição no final da ficha). Caso a arma possua alguma maldição de Morte, ela perde tais maldições.</p>",
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
              name: "GARRAS POSSUÍDAS",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 15,
              damage: [{ id: "0", damageType: "Energia", value: "4d6+5" }],
            },
          ],
        },
        {
          id: "1",
          name: "Descarga",
          type: "livre",
          description:
            "<p>Se o possessor acertar um ataque em um item ou objeto metálico que esteja sendo portado por um ser, o dano causado na arma é reduzido pela metade, porém o portador sofre a outra metade do dano.</p>",
        },
        {
          id: "2",
          name: "Absorver metal",
          type: "reação",
          description:
            "<p>Caso sofra dano de uma arma feita de metal, ele pode reduzir o dano sofrido pela metade. Ele só pode usar esta habilidade duas vezes por rodada.</p>",
        },
        {
          id: "3",
          name: "Magnetismo",
          type: "movimento",
          description:
            "<p>Todos os itens e objetos metálicos que estiverem em alcance médio são puxados 9m em direção ao possessor, itens e objetos portados têm direito a um teste de Reflexos (DT 25) para evitar o efeito.</p>",
        },
        {
          id: "4",
          name: "Descarrilar",
          type: "completa",
          description:
            "<p>Ao realizar esta ação, o possessor se torna incorpóreo pela rodada, além disso, ele se desloca até o dobro de seu deslocamento por cima de um ser, ao fazer isso, a longa arma de seu corpo prende neste ser, causando 4d12+5 pontos de dano de Energia (Reflexos DT 25 reduz dano pela metade). Um ser que falhe na resistência fica com a arma presa em seu corpo, enquanto estiver com a arma presa, o ser fica lento e perde 2d6 PV caso se mova. Este ser ou outro adjacente pode gastar uma ação padrão para fazer um teste de Atletismo (DT 22), caso passe, a arma é retirada dele; caso falhe, o ser perde 2d6 PV e continua com a arma presa. O possessor pode remover a arma com uma ação livre se estiver em alcance curto e sem a necessidade de um teste; quando ele faz isso, a arma retorna para seu corpo e pode realizar essa ação novamente.</p>",
        },
      ],
      description:
        "<p>O medo irracional de antigos guerreiros de que suas armas poderiam ser possuídas por fantasmas e assombrações se manifesta através dessa “criatura”. Um possessor pode perdurar por muitas gerações, se atrelando em armas, interpretado apenas como uma maldição para fortalecê-las.</p><p>Um possessor é quase uma alucinação visual coberta por puro caos da Energia paranormal; atravessando seu corpo é possível encontrar fragmentos da arma que possuía momentos antes de ser quebrada, o libertando de sua prisão metálica.</p><p>Devida sua aparência caótica, é extremamente desconfortável olhar para essa criatura, porém é indicado, por sobreviventes deste ser, que é de suma importância manter sua atenção focada em seus movimentos, pois ela pode não parecer, mas ela pode ser muito rápida e ágil, capaz de encerrar com a vida de uma pessoa em questão de poucos segundos.</p><p>Além disso, é recomendado que não se utilize equipamentos metálicos ao enfrentar esta criatura, pois além de poder manipulá-las com suas habilidades naturais magnéticas, caso ele seja enfraquecido o suficiente, ele irá possuir a arma mais próxima, esvain- do qualquer maldição de Morte sobre a arma e podendo existir por mais gerações.</p><p>Quanto mais o tempo se passa, mais essa criatura se fortalece através do medo imposto por ela mesma na mente do portador de uma arma carregando sua maldição.</p>",
    },
    {
      isDefault: !0,
      name: "Vampiro",
      fullPictureURL: "/img/creatures/vampiro.webp",
      sheetPictureURL: "/img/creatures/vampiro-profile.webp",
      vd: 300,
      element: "morte",
      secondaryElements: ["sangue"],
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 35, dice: "7d8", nex: 90 },
      perceptionType: "Percepção às cegas",
      defense: 42,
      skills: {
        perception: { rollNumber: 5, rollBonus: 15 },
        initiative: { rollNumber: 5, rollBonus: 20 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 5, rollBonus: 25 },
        will: { rollNumber: 4, rollBonus: 20 },
      },
      extraSkills: [
        { id: "0", name: "Diplomacia", rollNumber: 4, rollBonus: 20 },
        { id: "1", name: "Furtividade", rollNumber: 5, rollBonus: 18 },
      ],
      pvCurrent: 800,
      pvMax: 800,
      imunidades: [],
      resistencias: { conhecimento: 15, sangue: 15, morte: 20 },
      vulnerabilidades: ["energia"],
      attributes: { dex: 5, str: 4, int: 3, pre: 4, con: 4 },
      movement: 9,
      altMovements: [{ value: 12, title: "voo" }],
      powers: [
        {
          id: "0",
          name: "Fraqueza do vampiro",
          description:
            "<p>O vampiro possui as seguintes fraquezas:</p><p>Proibição. Ele não pode entrar em uma residência caso não tenha sido convidado por alguém de dentro.</p><p>Água corrente. O vampiro sofre 40 pontos de dano frio caso termine seu turno dentro de água corrente.</p><p>Estaca no coração. Caso sofra dano de perfuração de uma arma feita de madeira no coração enquanto estiver no seu local de repouso, ele não pode realizar nenhuma ação (exceto falar) até que a arma seja retirada.</p><p>Sensibilidade a luz solar. Se o vampiro estiver exposto a luz solar ou alguma luz equivalente, ele sofre 40 pontos de dano de fogo no início de seu turno e sofre -2d20 em teste de ataque e perícias.</p>",
        },
        {
          id: "1",
          name: "Fuga enevoada",
          description:
            "<p>Quando ele alcança 0 PV fora de seu local de repouso, o vampiro se transforma em uma névoa paranormal (veja metamorfo) invés de ficar morrendo e inconsciente. Enquanto estiver com 0 PV na forma da névoa paranormal, ele não pode mudar para outra forma e deve alcançar seu local de repouso em 2 horas ou é morto permanentemente. Enquanto estiver em seu local de repouso, ele retorna em sua forma de vampiro e demora 1 hora até voltar para 1 PV.</p>",
        },
        {
          id: "2",
          name: "Regeneração",
          description:
            "<p>O sangue do vampiro flui de maneira intensa, recebendo Cura Acelerada 20 enquanto estiver com pelo menos 1 PV. Ele perde essa habilidade por uma rodada caso sofra dano de Energia.</p>",
        },
        {
          id: "3",
          name: "Resistência Vampírica",
          description:
            "<p>O vampiro possui um controle paranormal perante os efeitos que lhe afetam. Três vezes por cena ele pode decidir passar em um teste de resistência que tenha falhado.</p>",
        },
        {
          id: "4",
          name: "Vampirismo",
          description:
            "<p>Contaminação por mordida de vampiro, Fortitude DT 30. Essa doença é fatal e extremamente resistente para se remover do organismo de alguém. Testes de Fortitude só contam para curar o vampirismo se forem feitos com o corpo submerso em água corrente.</p><p>Estágio I. O personagem sente sede de sangue. Ele deve beber pelo menos 50ml de sangue fresco por dia ou fica fraco.</p><p>Estágio II. A sede de sangue fica mais intensa. O personagem deve beber pelo menos 200ml de sangue fresco por dia ou fica debilitado.</p><p>Estágio III. A sede começa a ficar incontrolável. O personagem deve beber pelo menos 500ml de sangue fresco por dia ou fica inconsciente.</p><p>Estágio IV ou superior. A sede é incontrolável. O personagem deve beber pelo menos 1L de sangue fresco por dia ou sofre 5d10 pontos de dano de Morte e fica inconsciente. Caso um personagem alcance 0 PV por este efeito, ele morre instantaneamente, retornando em 1d4+1 dias como um vampiro.</p>",
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
              name: "GARRAS",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 5,
              rollBonus: 30,
              damage: [{ id: "0", damageType: "Sangue", value: "3d10+15" }],
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
              name: "MORDIDA MORTAL",
              numberOfAttacks: 1,
              range: "Corpo a corpo*",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 35,
              damage: [
                { id: "0", damageType: "Perfuração", value: "3d8+10" },
                { id: "1", damageType: "Morte", value: "2d12+10" },
              ],
            },
          ],
          description:
            "<p>O ataque de mordida só pode ser feito contra pessoas agarradas, inconscientes ou que permitam que sejam mordida.</p>",
        },
        {
          id: "2",
          name: "Oportunista",
          type: "livre",
          description:
            "<p>Se o vampiro acertar um ataque com suas garras em uma pessoa Médio ou menor, pode tentar agarrar o alvo (5d20+32). O vampiro pode manter até duas pessoas agarradas simultaneamente.</p>",
        },
        {
          id: "3",
          name: "Peçonha Vampírica",
          type: "livre",
          description:
            "<p>Caso um ser sofra dano da mordida mortal, o vampiro implanta a doença vampirismo (Fortitude DT 30 evita); um ser que passe no teste, fica imune até o fim da cena. Além disso, o ser que sofreu dano pela mordida perde seus pontos de vida máximos igual ao dano de Morte, assim como o vampiro recupera seus PV igual a esse dano. O ser recupera os PV perdidos dessa forma ao realizar a ação de interlúdio “dormir”.</p>",
        },
        {
          id: "4",
          name: "Encantar",
          type: "padrão",
          description:
            "<p>Uma pessoa em alcance médio deve passar em um teste de Vontade (DT 35) ou ficará encantada pelo vampiro. Uma pessoa encantada acredita que o vampiro é um aliado e precisa ser protegido, além de que permite que seja mordida por ele. Apesar disso, a pessoa não está sob controle do vampiro, então suas ações podem ser tomadas de maneira favorável a ela. Cada vez que a pessoa sofrer uma ação agressiva, ele pode repetir o teste de Vontade para anular o efeito. Se não for o caso, o efeito dura por 24 horas após o vampiro ser reduzido a 0 PV ou caso o vampiro use sua reação para encerrar o efeito.</p>",
        },
        {
          id: "5",
          name: "Metamorfo",
          type: "padrão",
          description:
            "<p>Ele pode usar a versão básica do ritual Distorcer Aparência (DT 35) sem nenhum custo e com o seguinte efeito adicional. Mutação: O vampiro se transforma em um morcego ou uma névoa paranormal. Como morcego ele possui 1,5m de deslocamento normal, 9m de deslocamento de voo, não pode falar e seu tamanho muda para minúsculo. Como névoa ele não pode manipular objetos, seu deslocamento muda para 6m de voo, pode ocupar espaço ocupados por outros seres e objetos (exceto água), não pode usar suas ações “agredir” e é imune a dano não paranormal.</p>",
        },
        {
          id: "6",
          name: "Filhos da noite",
          type: "completa",
          description:
            "<p>O vampiro chama de forma paranormal 2d4 enxames de ratos caso esteja de noite. Enquanto estiver em uma floresta ou algum ambiente do gênero, o vampiro chama 3d6 lobos no lugar dos ratos (use a ficha da onça-pintada para eles). Os animais chamados chegam em 1d4 rodadas agindo como aliados do vampiro e seguindo os comandos falados por ele. Os animais ficam por 1 hora, até o vampiro morrer, ou se o vampiro dispensar eles como uma ação de movimento. Ele só pode realizar essa ação uma vez por dia.</p>",
        },
      ],
      description:
        "<p>Nas entranhas de uma metrópole moderna, espalham-se relatos misteriosos sobre um vampiro que não se encaixa nos moldes das lendas convencionais. Poucos sabem seu nome, mas todos reconhecem a sensação de temor que acompanha sua aparição. Este não é um vampiro que se esconde nas sombras; ele prefere caminhar à vista de todos, atraindo a atenção de suas vítimas sem que elas percebam o perigo iminente.</p><p>Sua aparência é apavorante... Ele possui dentes afiados, longas garras, asas horripilantes e uma voz grossa e rouca, que ecoa no silêncio da escuridão, como um sussurro de um pesadelo. Apesar disso, ele altera sua aparência para manipular suas vítimas; normalmente ele estuda suas vítimas antes, para que sua transformação seja baseada nos interesses das vítimas para deixá-las mais suscetíveis ao seu encanto.</p><p>No entanto, é sua crueldade que se destaca perante outras criaturas. Este vampiro não é um sedutor romântico, mas sim um predador impiedoso, alimentando-se não só do sangue de suas vítimas, mas também de seu tormento emocional. Com um sorriso sádico que revela presas afiadas, ele desfruta do sofrimento que causa. Suas vítimas são escolhidas a dedo, geralmente aqueles que carregam em si uma tristeza profunda ou cicatrizes emocionais. Ele se aproxima delas como um confidente, prometendo consolo e cura, apenas para revelar sua verdadeira natureza quando já é tarde demais.</p><p>A trilha de destruição que deixa para trás é repleta de vítimas emocionalmente destroçadas. O vampiro se alimenta do desespero, deixando corações partidos e almas devastadas. À medida que a cidade treme sob seu domínio, ele continua a espalhar o medo nas noites escuras.</p><p>Os vampiros normalmente se disfarçam entre os ricaços das cidades ou frequentando matilhas de lobos nas florestas, e sempre possuem um local de repouso. Esse local de repouso pode ser sua mansão ou uma caverna, onde sempre possui um caixão onde ele se deita para regenerar após sua quase morte.</p><p>Quem é esse vampiro cruel e insaciável? Onde ele se abriga? Enquanto as histórias se multiplicam, as redondezas permanecem à mercê de sua presença sinistra, esperando desesperadamente que alguém possa pôr fim à sua tirania emocional.</p>",
    },
    {
      isDefault: !0,
      name: "Zumbificado",
      fullPictureURL: "/img/creatures/zumbificado.webp",
      sheetPictureURL: "/img/creatures/zumbificado-profile.webp",
      vd: 20,
      secondaryElements: [],
      creatureType: "pessoa",
      creatureSize: "médio",
      presencaPerturbadora: {},
      defense: 16,
      skills: {
        perception: { rollNumber: -2, rollBonus: 0 },
        initiative: { rollNumber: 1, rollBonus: 0 },
        fortitude: { rollNumber: 2, rollBonus: 5 },
        reflex: { rollNumber: 1, rollBonus: 0 },
        will: { rollNumber: -2, rollBonus: 0 },
      },
      pvCurrent: 30,
      pvMax: 30,
      imunidades: [],
      resistencias: { corte: 2, balistico: 2, impacto: 2, perfuracao: 2 },
      vulnerabilidades: [],
      attributes: { dex: 1, str: 2, int: 1, pre: 0, con: 2 },
      movement: 9,
      powers: [
        {
          id: "0",
          name: "Constituição de Morto Vivo",
          description:
            "<p>Caso o zumbificado sofra um dano que o reduza a 0 PV, ele deve fazer um teste de Fortitude DT 5 + o dano recebido (se sofreu 10 de dano, a DT é 15); se passar, fica com 1 PV; se falhar, entra em condição inconsciente e morrendo normalmente. Se for reduzido a 0 PV por um dano de fogo ou um acerto crítico, ele perde esta habilidade.</p>",
        },
        {
          id: "1",
          name: "Infecção Zumbificada",
          description:
            "<p>Um ser que sofra dano da mordida é infectado pelo vírus zumbi (Fortitude DT 18 evita). Um ser que passe no Teste de Resistência fica imune a essa doença até o final da cena.</p>",
        },
        {
          id: "2",
          name: "Vírus Zumbi",
          description:
            "<p>Contaminação por mordida do zumbificado, Fortitude DT 18. Essa doença é um vírus que entra nas correntes sanguíneas de suas vítimas, causando dor e desconforto, podendo levar à morte. Testes de Fortitude só servem para não agravar o vírus no corpo (em termo de regra, testes de Fortitude funcionam somente para não aumentar o estágio da doença). A única cura para este vírus é um antídoto específico e complexo; após utilizar o antídoto em um personagem, ele ainda deverá resistir por uma hora para curar por completo do vírus. Um personagem que utiliza o antídoto fica imune ao vírus por um ano.</p><p>Estágio I. O personagem se sente exausto mentalmente e as veias de seus olhos ficam levemente esbranquiçados. O personagem fica alquebrado.</p><p>Estágio II. A canseira passa a ser física também e as veias se tornam completamente brancas, perdendo parte da visão. O personagem fica alquebrado e fatigado.</p><p>Estágio III. Além da canseira, o personagem fica impossibilitado de enxergar. O personagem fica alquebrado, fatigado e cego.</p><p>Estágio IV ou superior. Acima dos efeitos anteriores, o personagem começa a sentir uma dor terrível em seu corpo, podendo causar espasmos. O personagem fica alquebrado, fatigado e cego; além disso, perde permanentemente 1d8 PV; se esta perda de vida resultar em 0 PV, o personagem morre instantaneamente. Após uma hora de sua morte, caso seu corpo ainda esteja com a cabeça, ele volta à vida utilizando a ficha do zumbificado (controlada pelo mestre).</p>",
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
              name: "PANCADAS",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 1,
              rollBonus: 0,
              damage: [{ id: "0", damageType: "Impacto", value: "1d4" }],
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
              name: "MORDIDA",
              numberOfAttacks: 1,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 2,
              rollBonus: 5,
              damage: [{ id: "0", damageType: "Perfuração", value: "1d6+1" }],
            },
          ],
        },
      ],
      description:
        "<p>Um zumbificado é uma pessoa que foi submetida a múltiplos experimentos que o levaram à morte precoce em um local com a membrana danificada, entretanto nenhuma entidade do Outro Lado manifestou-se ativamente em seu corpo, transformando ele em este ser deformado.</p><p>Apesar disso ser uma origem para o zumbificado, também é comum encontrar outras pessoas que foram atacadas por ele; onde, após a morte, acabaram se transformando em um, possivelmente através de um vírus, já que nem todas as vítimas dele se transformaram.</p><p>Ele é um ser agressivo, onde ataca qualquer um que não seja outro zumbificado. Ele geralmente ataca suas vítimas usando seus ataques naturais, como suas pancadas ou mordidas, mas já foram encontrados zumbificados que atacaram com armas que o portador estava utilizando antes da morte, como um bastão policial para um segurança; isto também serve para proteções e vestimentas.</p><p>Eles não sabem utilizar armas de fogo, mas sabem agredir com uma faca ou algo similar, por isso são tão perigosos de serem enfrentados por pessoas comuns. Quando um zumbificado for fatalmente ferido, ele irá tentar resistir ao dano causado, fazendo com que possa voltar a vida; um método para contornar esta sua habilidade é atingindo-o com fogo, pois seu corpo estará com os níveis de carbono muito avançado por ser um cadáver e isso impossibilita de ele retornar.</p>",
    },
  ];
export { a, e as b, o as c };

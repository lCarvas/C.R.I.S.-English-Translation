const e = [
    {
      name: "Adestrador",
      description:
        "<p>Às vezes animais são melhores que pessoas, talvez por isso que você tenha dedicado sua vida a eles. A certeza é que você sabe como essas criaturas pensam e agem, e com elas, você se fortalece e têm aliados formidáveis, agindo e protegendo por instinto. Desde um adestrador de cachorros até alguém com um amigo inusitado. O seu caminho em algum momento cruzou com feras totalmente diferentes de tudo o que você já viu naz vida.</p>",
      skills: ["Adestramento", "Diplomacia"],
      power: {
        name: "Um amigo",
        hasAutomation: !1,
        description:
          "Você tem um animal que é considerado um aliado de um tipo a sua escolha.",
      },
    },
    {
      name: "Adepto ao Paranormal",
      description:
        "<p>O Outro Lado constantemente te chama, te seduz, te oferece o acesso a insanidade do paranormal em troca de poderes inigualáveis e você sem pensar duas vezes aceita. E se for para entrar nisso, você vai entrar de cabeça. De alguma forma você criou uma facilidade para acessar o Outro Lado sem que ele te consuma de volta tão facilmente, talvez isso venha dos seus anos de estudo ou até alguma predisposição esquisita, mas aconteceu.</p>",
      skills: ["Ocultismo", "Vontade"],
      power: {
        name: "Mente preparada",
        hasAutomation: !1,
        description:
          'Você recebe +5 no teste de Ocultismo para o “Custo do Paranormal".',
      },
    },
    {
      name: "Apostador",
      description:
        "<p>Às cartas estão na mesa, afinal isso tudo sempre foi um grande jogo pra você. Talvez essa adrenalina, incerteza ou até a emoção dos resultados à medida que as cartas são viradas te faça o que tu é nos dias de hoje. As inúmeras mesas de cassinos clandestinos ou bares te fizeram aprender uma coisa, enganar ou ser enganado. As pessoas são bem previsíveis se você souber ler elas. Mas talvez a sua maior aposta tenha sido entrar no mundo do paranormal, será que essa foi a melhor decisão, será que a sorte vai estar ao seu favor?</p>",
      skills: ["Intuição", "Enganação"],
      power: {
        name: "Tiro de sorte",
        hasAutomation: !1,
        description:
          "Com o gasto de 2 PE você pode obter +5 em uma rolagem a sua escolha, exceto rolagens com base de Presença e Intelecto, porém, essa rolagem tem 50% de chance de falhar (Role 1d20, se tirar 10 para baixo é uma falha automática).",
      },
    },
    {
      name: "Escritor Paranormal",
      description:
        "<p>Histórias devem ser contadas. Você sempre contou elas, afinal são só histórias. Mas e quando elas podem voltar contra você? Se as histórias escritas por você se tornam realidade e começam a trazer mortes, sofrimento e medo nas pessoas. O que fazer? Acabar com a história. Mas resta ao autor finalizar esse livro com um fim trágico ou não</p>",
      skills: ["Atualidades", "Ocultismo"],
      power: {
        name: "Nas entre linhas",
        hasAutomation: !1,
        description:
          " Ao ser bem-sucedido ao realizar um teste de “Identificar Criatura”, você pode gastar 2 PE para fazer uma anotação sobre ela, para cada anotação, você pode escolher um número de alvos que possam te ouvir (incluindo você) igual seu valor de Intelecto para ganhar um bônus de +2 em testes de resistência contra essa criatura, esse valor é acumulável e permanente.",
      },
    },
    {
      name: "Faz-tudo",
      description:
        "<p>É tudo você nesse mundo, as tarefas difíceis sempre acabam caindo sob você, mas fazer o que, você sempre está ali para ajudar. Seja gerenciando um estoque da sua loja ou o armamento de uma organização, é com seu esforço que o seu local de trabalho continua em pé, seja onde for.</p>",
      skills: ["Profissão", "Tecnologia"],
      power: {
        name: "Pau pra toda obra",
        hasAutomation: !1,
        description: "Você tem +5 espaços de inventário.",
      },
    },
    {
      name: "Influenciador",
      description:
        "<p>Ser influenciador não é fácil, você tem que manter seu público engajado para que alguma plataforma virtual não te jogue em um limbo muito pior que o Outro Lado. Você dificilmente vai conseguir usar suas habilidades profissionais contra os terrores do paranormal, mas talvez consiga uma satisfação de ver que seu trabalho está andando ainda.</p>",
      skills: ["Atualidades", "Diplomacia"],
      power: {
        name: "Algoritmo",
        hasAutomation: !1,
        description:
          "Você agora tem a ação “Criar Conteúdo” em um interlúdio quando tiver acesso a internet, você deve rolar d20, se você tirar de 1 a 5, você não recupera sanidade, de 6 a 10 você recupera seu Limite de PE em sanidade, de 11 a 15 você recupera seu Limite de PE + 5 em sanidade e de 16 a 20 você recupera seu Limite de PE + 10 em sanidade. Ao atingir o NEX de 30%, você ganha +5 no teste desta ação.",
      },
    },
    {
      name: "Jornalista",
      description:
        "<p>Em um mundo de fofocas, escândalos, rumores e furos de reportagem, você, como um bom jornalista, tem um talento nato: Saber de informações antes dos outros, ou ao menos sabe onde procurá-las. Em algum momento essa sua curiosidade faz com que você chegasse em buracos muito mais fundos do que você se quer poderia imaginar, um fundo do poço onde não pode mais sair.</p>",
      skills: ["Diplomacia", "Enganação"],
      power: {
        name: "Fofoca",
        hasAutomation: !1,
        description:
          "Uma vez por sessão, quando você possui uma nova informação sobre o caso em que está investigando, pode gastar uma ação de interlúdio para procurar um algum caso reportado na mídia, alguma fofoca de um famoso ou algum boato que esteja circulando a respeito de algum assunto que auxilie a investigação. Antes de utilizar essa habilidade, fica a critério do mestre se essa habilidade é possível de ser utilizada ou não.",
      },
    },
    {
      name: "Médico 24 horas",
      description:
        "<p>O que é uma hora de sono a menos e uma a mais no trabalho? Enfim, você está salvando vidas. Após o seu contato com o paranormal, você não deixou de perder seu descanso para auxiliar seus aliados a se recuperarem de seus danos de batalha. Quase nada mudou, você ainda está salvando vidas.</p>",
      skills: ["Medicina", "Percepção"],
      power: {
        name: "Plantão",
        hasAutomation: !1,
        description:
          "Você pode realizar “Cuidados Prolongados” da perícia Medicina, a partir do Grau de Treinamento Treinado, além disso, “Cuidados Prolongados” agora também dobram a recuperação de PE pela ação de dormir de aliados afetados. Adicionalmente, ao chegar a NEX 35%, aliados afetados por “Cuidados Prolongados” recuperam uma quantidade de Sanidade igual o seu Intelecto ao usarem a ação dormir.",
      },
    },
    {
      name: "Palestrinha",
      description:
        "<p>O paranormal não existe, quer dizer, ele existe, mas isso não tem que afetar sua cabeça, você só precisa preparar sua mente, de alguma forma, para que ele se torne algo secundário comparado aos objetivos da sua vida, que possivelmente é se manter vivo no seu estado atual. Você pode não ter a mente mais estável e muito menos pautar suas falas em fontes confiáveis mas ao menos você vai tentar manter o ânimo e foco de seus colegas como sempre fez, só que dessa vez não vai ganhar tanto dinheiro com isso.</p>",
      skills: ["Diplomacia", "Enganação"],
      power: {
        name: "Mudança de mindset",
        hasAutomation: !1,
        description:
          "Todos os aliados que em uma cena de interlúdio gastarem uma ação para “Ler” junto a você, recebem 2d6 ao invés de 1d6 em uma rolagem de Intelecto ou Presença.",
      },
    },
    {
      name: "Pesquisador Paranormal",
      description:
        "<p>O mundo e seus aspectos às vezes parecem se tornar entediantes comparados ao inexplicável e o assombrado, entender o incompreensível se tornou uma atividade muito interessante para você. No final do dia, ver uma criatura não será um motivo de pavor, mas sim de curiosidade e entusiasmo, ou não.</p>",
      skills: ["Ocultismo", "Ciências"],
      power: {
        name: "Já vi pior",
        hasAutomation: !1,
        description:
          "Você recebe +5 em testes de Presença Perturbadora, caso posteriormente você consiga afinidade com um elemento, esse bônus aumenta para +10 com criaturas desse elemento.",
      },
    },
    {
      name: "Piloto",
      description:
        "<p>Você é a velocidade. A prática o levou a perfeição quando o assunto é domar o volante. A adrenalina das manobras e a satisfação ao ver o medidor de velocidade subindo é o que move você para frente, um motor imparável. Agora você utiliza das suas habilidades para o benefícios das organizações que sempre vão precisar de um bom piloto, tanto para uma viagem longa ou uma fuga desesperada</p>",
      skills: ["Pilotagem", "Iniciativa"],
      power: {
        name: "Rápido e furioso",
        hasAutomation: !1,
        description:
          "Escolha uma opção entre veículos de grande porte (como caminhões e vans), veículos de médio porte (como carros e motos) e veículos de pequeno porte (como skates, patins, patinetes, etc.), você tem +5 em testes de pilotagem com esses veículos.",
      },
    },
    {
      name: "Psicólogo",
      description:
        "<p>Lidar com o paranormal é extremamente desgastante e danoso para a mente, compreender os horrores do Outro Lado pode facilmente fazer um ser humano normal perder a cabeça. É por isso que, no limite do possível, você tenta ajudar seus aliados a lidar com as situações bizarras do dia-a-dia ao mesmo tempo que mantém sua sanidade no lugar.</p>",
      skills: ["Diplomacia", "Intuição"],
      power: {
        name: "Sessão de terapia",
        hasAutomation: !1,
        description:
          "Durante uma cena de interlúdio, você pode gastar uma de suas ações para ter uma sessão de terapia com até uma pessoa por ponto de Intelecto, fazendo elas recuperam o dobro de sanidade pela ação relaxar neste interlúdio.",
      },
    },
    {
      name: "Químico",
      description:
        "<p>Saber muito é poder fazer um monte de coisa, perigosa ou não. Seus estudos agora te dão possibilidade de fazer muitos experimentos que você foi ensinado a fazer mas não recomendado, até porque não é legal.</p>",
      skills: ["Ciências", "Tecnologia"],
      power: {
        name: "Você sabe demais",
        hasAutomation: !1,
        description:
          "Você pode gastar uma ação em um Interlúdio para fazer um veneno que tenha sua DT de resistência de até 15. em 30% você pode fazer até dois venenos que tenham sua DT de resistência até 20 e em 50% você pode fazer até três venenos que tenham sua DT de resistência até 25.",
      },
    },
    {
      name: "Treinador",
      description:
        "<p>Segunda-feira: Treino. Terça-feira: Treino. Quarta-feira: Treino. Quinta-feira: Treino. Sexta-feira… Treino. Você achou mesmo que o paranormal ia te parar? Ia acabar com seu estilo de vida? Não, muito pelo contrário, ele só o fez… treinar mais forte? O que importa é que seu f ísico não vai ficar para trás, e você vai fazer seu esforço para colocar todos os seus aliados no mesmo ritmo.</p>",
      skills: ["Atletismo", "Luta"],
      power: {
        name: "Malhe enquanto eles dormem",
        hasAutomation: !1,
        description:
          "Todos os aliados que em uma cena de interlúdio gastarem uma ação para “Exercitar” junto a você, recebem 2d6 ao invés de 1d6 em uma rolagem de Agilidade, Força ou Vigor.",
      },
    },
    {
      name: "Zelador",
      description:
        "<p>Ser um zelador não é fácil, você possivelmente já presenciou todos os terrores da nossa realidade, mas mesmo assim não larga o posto, sempre fazendo seu trabalho com perfeição. Seu olhar atento e perfeccionismo te perseguem e incrivelmente podem ser úteis para investigar as mais sinistras bagunças que possa imaginar. É fato: Toda organização ou culto precisa de um zelador</p>",
      skills: ["Atletismo", "Percepção"],
      power: {
        name: "Casa suja chão sujo.",
        hasAutomation: !1,
        description:
          "Você pode gastar 1 PE para ter +5 em investigação para achar resíduos em cenas de investigação. Além disso, caso limpe uma cena de investigação, a critério do mestre, você recebe 3 de PE temporários até o seu próximo descanso.",
      },
    },
  ],
  a = [
    {
      name: "Condicionamento",
      element: "morte",
      description:
        "<p>Você ganha mais +3m de movimento e tem +2 em Atletismo.<br><strong>Afinidade:</strong> você se torna imune a terreno difícil e recebe +1,5m.</p>",
      hasAutomation: !1,
    },
    {
      name: "Último suspiro",
      element: "morte",
      description:
        "<p>A primeira vez que um ser reduzir seus pontos de vida a 0 em uma cena, você pode gastar 2 PE e uma reação para causar um 2d6+5 pontos de dano de morte de volta, desde que seu alvo esteja em alcance curto. Pré-Requisito: Morte.<br><strong>Afinidade: </strong>o dano da habilidade anterior sobe para 4d6+5 pontos de dano de morte, adicionalmente, você tem a opção de curar um aliado em alcance curto em 4d6+5 pontos de vida ao invés de causar dano em um inimigo ao usar essa habilidade. </p>",
      hasAutomation: !1,
    },
    {
      name: "Desespero",
      element: "morte",
      description:
        "<p>Ao estar com menos de 1/4 de seu PE total, você pode escolher um atributo a sua escolha para ganhar um dado extra em todas as suas rolagens até o fim da cena. Pré-Requisito: Morte 1.<br><strong>Afinidade: </strong>agora você ganha dois dados extras ao invés de um no atributo escolhido.</p>",
      hasAutomation: !1,
    },
    {
      name: "Antecipar",
      element: "conhecimento",
      description:
        "<p>Você consegue usar a reação bloqueio para ataques a distância. Pré-Requisito: Conhecimento 1.<br><strong>Afinidade: </strong>você pode escolher um tipo adicional de componente de ritual para a habilidade anterior</p>",
      hasAutomation: !1,
    },
    {
      name: "Ocultar nas sombras",
      element: "conhecimento",
      description:
        "<p>Você tem o dobro de sua presença em espaços de inventário adicionais, além disso, você pode escolher um tipo de componente de ritual para ocupar 0 espaços em você.<br><strong>Afinidade: </strong>além disso, você tem duas reações especiais de defesa por turno ao invés de uma.</p>",
      hasAutomation: !1,
    },
    {
      name: "Devaneio",
      element: "conhecimento",
      description:
        "<p>Ao realizar uma ação de “Identificar Criatura”, você recebe uma informação adicional sobre a criatura analisada caso tenha sucesso no teste.<br><strong>Afinidade: </strong> adicionalmente, você pode realizar essa a ação de “Identificar Criatura” agora como ação de movimento, além disso, você recebe +5 na defesa contra ataque de uma criatura que você tenha analisado com sucesso.</p>",
      hasAutomation: !1,
    },
    {
      name: "Queimar a largada",
      element: "energia",
      description:
        "<p>No primeiro turno de todo combate você age primeiro, independente do valor tirado na rolagem de iniciativa, após esse turno você volta a ordem normal de iniciativa.<br><strong>Afinidade: </strong> além disso, você tem +d20 e +5 em testes de Iniciativa.</p>",
      hasAutomation: !1,
    },
    {
      name: "Forma fantasmagórica",
      element: "energia",
      description:
        "<p>Ao entrar no estado perturbado, você pode gastar 3 PE para ganhar resistência a dano 5 (exceto para dano de conhecimento) pela cena. Seu corpo, em algumas partes, começa a ficar translúcido. Pré-Requisito: Energia 1.<br><strong>Afinidade: </strong> a resistência sobe para 10</p>",
      hasAutomation: !1,
    },
    {
      name: "Sinucada",
      element: "energia",
      description:
        "<p>Uma vez por cena, você pode gastar 2 PE e uma reação para se teletransportar para frente de um ataque que for realizado contra um aliado em alcance curto, sendo acertado automaticamente e tomando o dano no lugar dele. Pré-Requisito: Energia 2.<br><strong>Afinidade: </strong> Agora você pode usar esse poder três vezes por cena ao invés de uma.</p>",
      hasAutomation: !1,
    },
    {
      name: "Devorar",
      element: "sangue",
      description:
        "<p>Permite seu usuário, ao realizar um golpe final em uma vítima, consumir sua carne e sangue com uma reação, ganhando 2d8+2 pontos de vida temporários até o próximo descanso do personagem e gastando 2 PE. Essa habilidade não é acumulável. Ao usar essa habilidade pela primeira vez, você recebe 3d6 de dano mental e partir da segunda você passa a receber 1d6. Pré-Requisito: Sangue 1.<br><strong>Afinidade: </strong>aumenta a vida temporária ganha para 4d8+2.</p>",
      hasAutomation: !1,
    },
    {
      name: "Chacinar",
      element: "sangue",
      description:
        "<p>Ao atacar um ser que esteja machucado, você recebe +2 de dano no ataque e reduz 1 na sua margem de ameaça.<br><strong>Afinidade: </strong>o dano aumenta para +5 e a margem de ameaça agora é reduzida em 2.</p>",
      hasAutomation: !1,
    },
    {
      name: "Laços da Irmandade",
      element: "sangue",
      description:
        "<p>Ao adquirir este poder, você deve um escolher um aliado voluntário para se tornar o seu “parceiro”, cada um pode ter apenas um parceiro, ou seja, não pode usar o mesmo poder em outra pessoa, você pode mudar o parceiro caso ele morra ou caso queira encerrar essa relação, porém, dessa forma você pode ter um novo parceiro dentro de uma semana. Você e seu parceiro sempre sabem a direção em que o outro está, além disso, como uma ação livre você pode transmitir uma emoção para ele. Ao ver o seu parceiro ser atacado, você pode gastar 2 PE e uma reação para ele ganhar uma resistência igual seu Vigor a esse dano.<br><strong>Afinidade: </strong> adicionalmente, ao ver o seu parceiro recebendo dano mental, você pode gastar 4 PE para que o dano seja divido igualmente entre vocês dois.</p>",
      hasAutomation: !1,
    },
  ],
  o = [
    {
      name: "Cauterizar",
      circle: "1",
      element: "Energia",
      execution: "padrão",
      range: "curto",
      target: "1 ser",
      duration: "instantânea",
      pictureURL: "/img/rituals/cauterizar.webp",
      pictureFullPath: "/img/rituals/cauterizar.webp",
      description:
        "<p>Você dispara um raio em direção a uma ferida de seu alvo, a cauterizando. O alvo recupera 2d6+2 PV, mas por conta da dor, perde 2 ponto de sanidade automaticamente.</p><p><strong>Discente (+2 PE):</strong> Aumenta a cura para 4d6+3. Requer 2º círculo.</p>",
    },
    {
      name: "Chiados Internos",
      circle: "1",
      element: "Energia",
      execution: "padrão",
      range: "curto",
      target: "1 pessoa",
      duration: "sustentada",
      save: "Vontade anula",
      pictureURL: "/img/rituals/chiados-internos.webp",
      pictureFullPath: "/img/rituals/chiados-internos.webp",
      description:
        "<p>Você grita em silêncio na mente de seu alvo palavras sem sentido. O alvo fica Confuso.</p><p><strong>Discente (+2 PE):</strong> Aumenta o número de alvos em +1.</p>",
    },
    {
      name: "Florescer Caótico",
      circle: "1",
      element: "Energia",
      execution: "padrão",
      range: "curto",
      duration: "instantânea",
      save: "Fortitude reduz a metade",
      pictureURL: "/img/rituals/florescer-caotico.webp",
      pictureFullPath: "/img/rituals/florescer-caotico.webp",
      description:
        "<p>Quando não se sabe o que fazer, deixe na mão do Outro Lado. Três raios saem do seu peito e acertam alvos aleatórios a sua volta, para cada raio você deve rolar um d20, caso o resultado sair 10 ou menor ele acerta um aliado (a critério do mestre) e caso seja maior acerta um inimigo a sua escolha, caso não haja alvos disponíveis, o disparo é descartado. Um inimigo não pode ser acertado por mais de um raio. O raio causa 3d10+5 de Energia.</p><p><strong>Discente (+2 PE):</strong> Muda o ritual para 1 raio e causa agora 5d10+10 de dano. Requer 2° Círculo.</p>",
    },
    {
      name: "Maré de azar",
      circle: "3",
      element: "Energia",
      execution: "padrão",
      range: "médio",
      target: "1 ser",
      duration: "cena",
      save: "Vontade anula",
      pictureURL: "/img/rituals/mare-de-azar.webp",
      pictureFullPath: "/img/rituals/mare-de-azar.webp",
      description:
        "<p>Você altera as probabilidades dos acontecimentos que giram em torno de seu alvo, o que traz uma maré de azar. Você deve escolher um dos efeitos a seguir: Azarar | Você pode dar uma falha automática em um teste que envolva Força ou Agilidade que o alvo realizar até o fim da cena. Raspão | O próximo ataque que o alvo acertar causa apenas metade do dano. Distração | O alvo tem -15 no próximo teste de Percepção. Tropeçar | O alvo tem 50% (se rolar 1 ou 2 em 1d4) de cair (entrar no estado caído) na próxima vez que se mover, se isso ocorrer, ele é impossibilitado de tentar se levantar no mesmo turno. Você também pode sugerir um novo efeito desse ritual para seu mestre, mas ele tem a palavra final sobre a viabilidade da ideia.</p><p><strong>Verdadeiro (+9 PE):</strong> Muda a resistência para “nenhuma”. Requer 4º círculo.</p>",
    },
    {
      name: "Premonição",
      circle: "4",
      element: "Energia",
      execution: "reação",
      range: "-",
      duration: "instantânea",
      save: "Vontade anula",
      pictureURL: "/img/rituals/premonicao.webp",
      pictureFullPath: "/img/rituals/premonicao.webp",
      description:
        "<p>Você quebra as regras para ter uma visão detalhada dos acontecimentos futuros entra na sua mente, você tem a chance de impedir o pior, mas tem que pagar um grande preço por isso. Ao um inimigo que você possa ver terminar o seu turno, você pode gastar uma reação para retornar toda a cena de combate até o início do último turno de um aliado que ocorreu, desfazendo todas ações feitas nesse período, narrativamente tudo que aconteceu nesse meio tempo foi apenas uma “premonição” do que viria a frente. Além disso, ao usar esse ritual você perde 30 pontos de sanidade.</p><p><strong>Discente (+5 PE):</strong> Você pode usar esse ritual mesmo que o inimigo deixe você inconsciente em seu turno.</p><p><strong>Verdadeiro (+10 PE):</strong> Além do efeito do discente, ao invés de voltar ao último turno aliado, todos retornam até o primeiro turno aliado da última rodada que passou e, ao invés de você, todos os seus aliados recebem essa premonição, tendo +5 em todos os testes e na defesa por 1 rodada e ganhando 5 de PE temporário, porém, você inexiste, é como se você nunca estivesse ali naquela cena, o conhecimento capturou você por quebrar as regras da realidade, esse foi seu ato final.</p>",
    },
    {
      name: "Perigoso como uma rosa",
      circle: "1",
      element: "Sangue",
      execution: "padrão",
      range: "pessoal",
      target: "1 ser",
      duration: "cena",
      pictureURL: "/img/rituals/perigoso-como-uma-rosa.webp",
      pictureFullPath: "/img/rituals/perigoso-como-uma-rosa.webp",
      description:
        "<p>Seu corpo é recoberto por uma casca grossa e afiada, você recebe 15 pontos de vida temporários, porém, você não pode ser curado enquanto tiver esse bônus. Inimigos que te derem dano corpo-a-corpo recebem um dano de sangue equivalente a quantos pontos de vida temporária forem retirados.</p><p><strong>Discente (+2 PE):</strong> Muda o alcance do ritual para “toque”.</p><p><strong>Verdadeiro (+3 PE):</strong> Muda a execução para “reação” e a duração para “instantânea” e os pontos de vida obtidos para 20, você pode usar ritual como uma reação ao ser atacado. Requer 2º círculo.</p>",
    },
    {
      name: "Hemomancia",
      circle: "1",
      element: "Sangue",
      execution: "padrão",
      range: "pessoal",
      target: "1 ser",
      duration: "cena",
      pictureURL: "/img/rituals/hemomancia.webp",
      pictureFullPath: "/img/rituals/hemomancia.webp",
      description:
        "<p>Você consegue usar seu próprio sangue para criar um objeto útil que não cause dano e de categoria 0 (Em termos de sistema isso pode ser qualquer item operacional que não tenha pólvora ou propriedades explosivas), ao fim da cena o objeto se desmancha. Você só pode ter um item gerado por esse ritual ativo por cena.</p><p><strong>Discente (+2 PE):</strong> Seu limite de criação sobe para até objetos de categoria I. Adicionalmente, você pode usar o ritual para criar armas corpo a corpo ou de disparo, você se torna proficiente nelas e elas passam a dar dano de sangue, você também recebe a munição apropriada caso para a arma gerada. Esse aprimoramento ainda limita objetos criados a categoria 0. Requer 2º Círculo.</p><p><strong>Verdadeiro (+3 PE):</strong> Agora você pode gerar armas de fogo por meio desse ritual. Adicionalmente, você pode gastar 20 pontos de vida para subir o limite de categoria para os objetos gerados em I, podendo chegar até IV. Requer 3º Círculo.</p>",
    },
    {
      name: "Reestruturação corporal",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "pessoal",
      duration: "sustentada",
      pictureURL: "/img/rituals/reestruturacao-corporal.webp",
      pictureFullPath: "/img/rituals/reestruturacao-corporal.webp",
      description:
        "<p>O Sangue começa a reconectar os tecidos rasgados do seu corpo de forma frenética. Você recebe Cura Acelerada 4 (veja a página 179 do livro base).</p><p><strong>Discente (+3 PE):</strong> muda a execução para reação após receber um dano. Em vez do normal, você pode ignorar a regra de Dano Massivo para o dano recebido.</p><p><strong>Verdadeiro (+3 PE):</strong> muda o alcance para um raio de 6m centrado em você, agora todos os aliados em seu alcance recebem Cura Acelerada 4, para cada inimigo (exceto criaturas de morte, conhecimento e energia) a Cura Acelerada sobe em 2 até no máximo de 16. Requer 3º círculo.</p>",
    },
    {
      name: "Absorver emoções",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa voluntária",
      duration: "instantânea",
      pictureURL: "/img/rituals/absorver-emocoes.webp",
      pictureFullPath: "/img/rituals/absorver-emocoes.webp",
      description:
        "<p>Você consegue se tornar uma casca para absorver os sentimentos de seus aliados. Ao tocar em um aliado, você pode optar ou por descobrir o que ele está sentindo ou absorver completamente todas essas emoções. Mecanicamente você consegue retirar qualquer condição de medo ou mental de seu aliado, mas recebe essa condição retirada. Caso o alvo desse ritual esteja enlouquecendo, você zera sua sanidade e seu aliado volta a 1 de sanidade.</p><p><strong>Discente (+3 PE):</strong> muda o alvo para “1 pessoa” e adiciona “Resistência: Vontade anula”, você pode tocar uma pessoa e tentar transmitir suas emoções e transferir quaisquer condições de medo ou mentais que estiverem te afetando. Requer 3º Círculo.</p>",
    },
    {
      name: "Inferno",
      circle: "4",
      element: "Sangue",
      execution: "padrão",
      range: "curto",
      area: "Nuvem com 12m de raio e 12m de altura",
      duration: "sustentada",
      pictureURL: "/img/rituals/inferno.webp",
      pictureFullPath: "/img/rituals/inferno.webp",
      description:
        "<p>Uma área em volta do jogador é tomada pelo sangue e todas as emoções daqueles dentro dela são afloradas, o inferno é criado. Todo dano de Sangue é causado dentro da área é dobrado, porém, nenhum ser pode ser curado dentro da área. Toda pessoa morta dentro da área se torna uma criatura de sangue dependendo de seu NEX:</p><p>| 50% para baixo: Uma pessoa se torna um Zumbi de Sangue, caso morra próximo a outro corpo ele se torna uma Aberração de Carne. | De 55% até 90%: Uma pessoa se torna um Zumbi de Sangue Bestial. | De 95% até 99%: Uma pessoa se torna um Titã de Sangue.</p><p>Se já houver corpos de pessoas mortas em volta de você, 1d4+1 se levantam como criaturas da lista acima. Enquanto a área perdurar (durante a cena de combate), as criaturas invocadas por esse ritual não te atacam se você não realizar uma ação hostil contra elas, mas viram inimigos após isso.</p><p><strong>Discente (+5 PE):</strong> ao invés de somente dano de sangue, todo dano causado dentro da área é dobrado. Adicionalmente, ninguém pode ter resistência a danos balísticos, de corte, de impacto e perfuração nessa área, incluindo Bloqueio para os danos citados anteriormente.</p>",
    },
    {
      name: "Memória seletiva",
      circle: "1",
      element: "Conhecimento",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa voluntária",
      duration: "instantânea",
      pictureURL: "/img/rituals/memoria-seletiva.webp",
      pictureFullPath: "/img/rituals/memoria-seletiva.webp",
      description:
        "<p>O conhecimento invade a mente e perturba suas memórias fazendo você esquecer das imagens horríveis que viu num período de 24 horas, mas em contrapartida, outra pessoa absorve essas visões terríveis. O alvo recupera 2d8+3 pontos de sanidade, porém como preço adicional, o usuário do ritual recebe metade do dano curado em dano mental.</p><p><strong>Discente (+2 PE):</strong> Aumenta a cura para 4d8+5 mas faz com que o alvo esqueça completamente as últimas 24 horas. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> Você não recebe nenhum dano mental ao utilizar esse ritual. Requer 3º círculo.</p>",
    },
    {
      name: "Membro sombrio",
      circle: "1",
      element: "Conhecimento",
      execution: "padrão",
      range: "pessoal",
      duration: "cena",
      pictureURL: "/img/rituals/membro-sombrio.webp",
      pictureFullPath: "/img/rituals/membro-sombrio.webp",
      description:
        "<p>Uma mão etérea surge ao seu lado e está a sua disposição, ela pode ser usada para qualquer função que uma mão extra teria.</p><p><strong>Discente (+3 PE):</strong> Você ganhar +1 mão extra. Requer 2º círculo.</p>",
    },
    {
      name: "Leitura psíquica",
      circle: "2",
      element: "Conhecimento",
      execution: "movimento",
      range: "curto",
      target: "1 pessoa",
      duration: "instantânea",
      pictureURL: "/img/rituals/leitura-psiquica.webp",
      pictureFullPath: "/img/rituals/leitura-psiquica.webp",
      description:
        "<p>Invadindo os pensamentos de uma pessoa, você pode prever sua próxima ação. Ao utilizar essa habilidade em seu alvo, o mestre tem que declarar qual vai ser a próxima ação dele antes de seu turno, essa ação pode mudar caso ocorra algo impactante, a critério do mestre, antes de seu turno.</p>",
    },
    {
      name: "Mente fortalecida",
      circle: "2",
      element: "Conhecimento",
      execution: "padrão",
      range: "pessoal",
      duration: "sustentada",
      pictureURL: "/img/rituals/mente-fortalecida.webp",
      pictureFullPath: "/img/rituals/mente-fortalecida.webp",
      description:
        "<p>Você protege sua mente contra o mundo, a enclausurando dentro de si. Você recebe 5 de Resistência Mental e +5 em testes de vontade, porém você não pode ser alvo voluntário de nenhum ritual e nem ser considerado aliado até o fim do ritual.</p><p><strong>Discente (+3 PE):</strong> Você se torna imune a condições mentais durante a duração do ritual. Requer 3º círculo.</p>",
    },
    {
      name: "Transe vertiginoso",
      circle: "4",
      element: "Conhecimento",
      execution: "completa",
      range: "médio",
      target: "5 pessoas",
      duration: "1 rodada",
      save: "Vontade parcial",
      pictureURL: "/img/rituals/transe-vertiginoso.webp",
      pictureFullPath: "/img/rituals/transe-vertiginoso.webp",
      description:
        "<p>Você se teletransporta para um lugar que já tenha visto (seja por vídeo, foto, etc.) dentro de alcance médio, e ao chegar no local você afeta os alvos no alcance do ritual, os fazendo terem uma fortíssima vertigem, alvos que forem pegos desprevenidos por esse ritual tem -d20 no teste de resistência. Alvos afetados que falhem na resistência do ritual recebem 6d10+5 de dano de conhecimento e ficam pasmos e esmorecidos, em um sucesso recebem metade do dano e ficam somente enjoados e esmorecidos.</p><p><strong>Discente (+5 PE):</strong> Muda o alcance do teletransporte para longo.</p><p><strong>Verdadeiro (+10 PE):</strong> Como o discente, muda o alcance do teletransporte para longo. Os alvos mudam para 10 seres e é ignorada a regra que criaturas são imunes a condições mentais para este ritual e seus efeitos</p>",
    },
    {
      name: "Soltar pragas",
      circle: "1",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      target: "1 ser",
      duration: "cena",
      pictureURL: "/img/rituals/chiados-internos.webp",
      pictureFullPath: "/img/rituals/chiados-internos.webp",
      description:
        "<p>O seu corpo solta um enxame de pragas em um ser, essas pragas começam a circular e devorar o corpo do alvo. No início de cada um dos turnos do alvo, ele recebe 1d4+1 de dano de Morte. O efeito desse ritual é acumulativo, podendo ser utilizado até 4 vezes no mesmo alvo, aumentando o dano contínuo, a partir da primeira conjuração, não é necessário aplicar os mesmos aprimoramentos no ritual para acumular o mesmo efeito no mesmo alvo. Existe a opção do alvo de tirar 1 acúmulo desse ritual com uma ação padrão.</p><p><strong>Discente (+3 PE):</strong> Muda o dano do ritual para 1d6+2 por acúmulo. Requer 2º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o alvo para “área: nuvem com raio de 12m” e o máximo de acúmulo para 6. Agora o enxame se torna uma nuvem que dá dano em seres dentro dela exceto você, podendo utilizar o ritual mais de uma vez enquanto estiver dentro da área para gerar acúmulos, e é necessário agora de uma ação completa e estar dentro da área para que um alvo tire um acúmulo do ritual. Você pode mover essa nuvem com uma ação padrão e 2 PE até 6m a partir do centro dela. Requer 3º círculo.</p>",
    },
    {
      name: "Distorcer o tempo",
      circle: "2",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      target: "1 ser",
      duration: "instantânea",
      save: "Fortitude parcial",
      pictureURL: "/img/rituals/distorcer-o-tempo.webp",
      pictureFullPath: "/img/rituals/distorcer-o-tempo.webp",
      description:
        "<p>O corpo fica mais pesado e o tempo não passa, seu alvo tem mais tempo de pensar suas ações mas menos tempo para agir. Seu alvo fica enjoado, se passar na resistência fica apenas debilitado.</p><p><strong>Discente (+3 PE):</strong> Muda o alvo para “3 seres”. Requer 3º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> agora o alvo fica atordoado, se passar na resistência fica enjoado. Requer 4º círculo.</p>",
    },
    {
      name: "Passa-Tempo",
      circle: "3",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      area: "Nuvem com 9m de raio",
      duration: "instantânea",
      pictureURL: "/img/rituals/passa-tempo.webp",
      pictureFullPath: "/img/rituals/passa-tempo.webp",
      description:
        "<p>Você cria uma área que converte a vida perdida dos seus inimigos em cura. Inimigos dentro da área sofrem 3d6 de dano de morte, mas para cada inimigo atingido por esse ritual é curado 1d10 de todos os aliados na área</p><p><strong>Discente (+3 PE):</strong> O alcance do ritual é aumentado para médio.</p>",
    },
  ],
  r = [
    {
      name: "Uivante",
      fullPictureURL: "/img/creatures/uivante.webp",
      sheetPictureURL: "/img/creatures/uivante-profile.webp",
      vd: 60,
      element: "sangue",
      secondaryElements: ["medo"],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 20, dice: "3d6", nex: 35 },
      perceptionType: "Percepção às cegas",
      defense: 25,
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 2, rollBonus: 10 },
        fortitude: { rollNumber: 3, rollBonus: 10 },
        reflex: { rollNumber: 2, rollBonus: 5 },
        will: { rollNumber: 2, rollBonus: 3 },
      },
      pvCurrent: 150,
      pvMax: 150,
      imunidades: [],
      resistencias: { balistico: 10, impacto: 10, perfuracao: 10, sangue: 15 },
      vulnerabilidades: ["morte"],
      attributes: { dex: 2, str: 3, int: 1, pre: 2, con: 3 },
      extraSkills: [
        { id: "0", name: "Acrobacia", rollNumber: 3, rollBonus: 5 },
        { id: "1", name: "Atletismo", rollNumber: 3, rollBonus: 5 },
      ],
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Tormenta",
          description:
            "<p>Na origem de um Uivante, ele se liga fortemente a uma emoção que define o modo dele de agir, assim, em sua criação você deve escolher uma das seguintes opções:</p><p>Ira. O Uivante deseja a destruição para saciar sua dor, mesmo que seja sem sentido. Ele estará em constante caçada, matando e após isso voltando para seu covil. Uivantes de Ira dão +1d6 de dano em um ataque uma vez por turno, além disso, todo o dano que ele dá é de Sangue.</p><p>Melancolia. O passado já causou dor demais, um Uivante melancólico nunca saíra por conta própria de seu covil. Ele recebe +5 de todas as suas resistências, além de imunidade a condições de paralisia. A criatura ganha o elemento secundário de Morte.</p><p>Desesperado. Desde o momento de sua morte, tudo a sua volta parece gritar desesperadamente, é um caos sem fim, um poço sem fundo em sua mente. Um Uivante desesperado apenas sai correndo por aí, nunca entrando em seu covil mas também não se afastando muito, suas ações não podem ser explicadas ou previstas. Ele recebe +3m de movimento e +1 ataque em suas garras, porém, não é possível ele atacar mais de uma vezes o mesmo ser, além de poder dividir seu movimento entre os ataques. A criatura ganha o elemento secundário de Energia.</p>",
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
              rollNumber: 3,
              rollBonus: 10,
              damage: [{ id: "0", damageType: "Corte", value: "2d6+5" }],
            },
            {
              id: "0",
              name: "MORDIDA",
              numberOfAttacks: 1,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 10,
              damage: [{ id: "0", damageType: "Corte", value: "2d8+5" }],
            },
          ],
        },
        {
          id: "1",
          name: "Sede de sangue",
          type: "livre",
          description:
            "<p>Ao acertar um ataque de mordida, o Uivante pressiona as presas dele em seu corpo, necessitando de um teste de Fortitude (DT 15) para evitar entrar no estado de Sangrando.</p>",
        },
        {
          id: "2",
          name: "Soco poderoso",
          type: "reação",
          description:
            "<p>Ao acertar uma acerto crítico em um ataque, o Uivante empurra o alvo 6 metros para qualquer direção, dando 1d6 de dano a mais caso o alvo colida em uma estrutura.</p>",
        },
        {
          id: "3",
          name: "Auuuuuu",
          type: "movimento",
          description:
            "<p>O Uivante uiva ferozmente, alvos no raio de 6 metros devem fazer um teste de Vontade (DT15) para não ficarem Abalados por 1 turno.</p>",
        },
        {
          id: "4",
          name: "Investida",
          type: "completa",
          description:
            "<p>O Uivante pode realizar uma ação de investida contra um alvo, se acertar o ataque ele empurra o alvo em linha reta até o final do movimento, se acertar uma estrutura causa +2d6 de dano de impacto, caso erre ele segue reto pelo alvo sem levá-lo e caso acerte uma estrutura ele mesmo toma o dano.</p>",
        },
      ],
      enigmaDoMedo:
        "<p>O Uivante é extremamente emocional, assim, sempre tendo seu covil onde ele protege aquilo que já foi importante para ele, enquanto estiver nesse covil, ele perde 3m de movimento, -2 de dano, 5 de defesa e suas resistências diminuem em 5.</p><p>Além disso, é dito que seu sofrimento constante pode ser terminado instantaneamente caso seja perfurado com um objeto metálico que pertencia ao seu amado, porém, essa ação pode tirar apenas 1 gota de sangue (Com um teste de Crime DT 25 ou Medicina DT 30, essa dificuldade desce em 1 a cada 10 de vida perdida).</p>",
      description:
        "<p>Uma besta incontrolável que surge a partir da perda de uma pessoa querida durante noite. Alguns dizem que essa criatura só surge exclusivamente sob a lua cheia, mas isso é apenas mais uma versão do que se diz ser a história de origem de um Uivante. Baseado nos contos sobre lobisomens e licantropos, o Uivante é uma versão distorcida e assustadora de um javali, cão ou lobo humanoide com dentes desproporcionais e grossas veias vermelhas que ficam expostas acima da pele.</p><p>Um Uivante é uma criatura imprevisível, pois tem diferentes formas de expressar seu luto, assim sendo necessário analisar profundamente suas ações e métodos antes de um confronto direto. Algo importante de se ressaltar é que, por mais que irracional, seus instintos estão diretamente ligados com suas memórias afetivas anteriores, podendo até mesmo ser derrotado caso seja acertado com um objeto que o lembre de seu trágico passado.</p>",
    },
    {
      name: "Avarento",
      fullPictureURL: "/img/creatures/avarento.webp",
      sheetPictureURL: "/img/creatures/avarento-profile.webp",
      vd: 220,
      element: "energia",
      secondaryElements: ["morte"],
      creatureType: "criatura",
      creatureSize: "médio",
      presencaPerturbadora: { dt: 30, dice: "6d6", nex: 65 },
      perceptionType: "Visão no escuro",
      defense: 34,
      skills: {
        perception: { rollNumber: 2, rollBonus: 10 },
        initiative: { rollNumber: 4, rollBonus: 15 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 4, rollBonus: 15 },
        will: { rollNumber: 2, rollBonus: 10 },
      },
      pvCurrent: 420,
      pvMax: 420,
      imunidades: [],
      resistencias: { balistico: 10, corte: 10, perfuracao: 10, energia: 20 },
      vulnerabilidades: ["conhecimento"],
      attributes: { dex: 4, str: 3, int: 2, pre: 2, con: 4 },
      movement: 12,
      powers: [
        {
          id: "0",
          name: "Espólios de batalha",
          description:
            "<p>Após o Avarento morrer, todos os itens ou melhorias engolidos são vomitados no chão e ele irá gerar 1d3 itens amaldiçoados a critério do mestre.</p>",
        },
        {
          id: "1",
          name: "O que é meu é meu",
          description:
            "<p>A cada 30 de vida que o Avarento perder, ele vai soltar um item que está em seu ninho, este item caíra logo abaixo dele, role 1d8 na tabela abaixo:</p><p>1 / 2 - Uma granada de fragmentação cai ativada no chão, explodindo, é necessário um teste de Reflexos (DT 23) para receber metade do dano. 3 - Uma granada de atordoamento cai ativada no chão, é necessário um teste de Reflexos (DT 23) para receber o efeito parcialmente. 4 - Uma corda. 5 - Um cicatrizante. 6 - Uma arma de fogo de uma mão de no máximo categoria I, escolhida pelo último jogador que deu dano na criatura. 7 - Uma corpo a corpo de no máximo categoria I, escolhida pelo último jogador que deu dano na criatura. 8 - Um escudo.</p>",
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
              name: "SOCO",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 3,
              rollBonus: 15,
              damage: [{ id: "0", damageType: "Impacto", value: "2d8+10" }],
            },
            {
              id: "2",
              name: "BICADA",
              numberOfAttacks: 1,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 15,
              damage: [{ id: "0", damageType: "Perfuração", value: "3d12+10" }],
            },
          ],
        },
        {
          id: "1",
          name: "Proteger patrimônio",
          type: "padrão",
          description:
            "<p>Dentro de seu corpo, os itens engolidos se dispõem para proteger seu corpo, o Avarento ganha 1 de RD a balístico, corte, impacto e perfuração para cada 1 item ou modificação engolidos, este efeito dura até o início do próximo turno.</p>",
        },
        {
          id: "2",
          name: "O que é seu é meu também",
          type: "reação",
          description:
            "<p>Ao acertar um soco, o Avarento pode fazer um teste de Crime oposto a um teste de Luta de seu alvo, caso passe pode engolir uma melhoria da arma do alvo.</p>",
        },
        {
          id: "3",
          name: "A mão invisível",
          type: "movimento",
          description:
            "<p>O Avarento pode fazer um teste de Crime oposto a um teste de Luta de um alvo adjacente, ao falhar, o alvo perde um item que não esteja empunhando no momento, no qual é engolido pelo Avarento.</p>",
        },
        {
          id: "4",
          name: "Encerrar o papo",
          type: "completa",
          description:
            "<p>O Avarento vomita todas as melhorias ou itens que ele engoliu nessa cena em uma linha em alcance curto, ele causa 2d6+d6 de dano químico para cada item ou melhoria engolido nessa cena, essa contagem recomeça após usar essa habilidade. É possível realizar um teste de Reflexos (DT 25) para reduzir o dano a metade. Todos itens e melhorias vomitadas ficam juntas no alcance máximo deste ataque, ainda utilizáveis, para reequipar uma melhoria é necessário uma ação de movimento.</p>",
        },
      ],
      description: "<p>O Avarento não possui descrição oficial.</p>",
    },
    {
      name: "Anamnese",
      fullPictureURL: "/img/creatures/anamnese.webp",
      sheetPictureURL: "/img/creatures/anamnese-profile.webp",
      vd: 200,
      element: "morte",
      secondaryElements: ["energia", "medo"],
      creatureType: "criatura",
      creatureSize: "grande",
      presencaPerturbadora: { dt: 30, dice: "6d6", nex: 65 },
      perceptionType: "Percepção às cegas",
      defense: 35,
      skills: {
        perception: { rollNumber: 3, rollBonus: 15 },
        initiative: { rollNumber: 3, rollBonus: 15 },
        fortitude: { rollNumber: 4, rollBonus: 15 },
        reflex: { rollNumber: 3, rollBonus: 15 },
        will: { rollNumber: 3, rollBonus: 15 },
      },
      extraSkills: [
        { id: "0", name: "Furtividade", rollNumber: 3, rollBonus: 15 },
      ],
      pvCurrent: 360,
      pvMax: 360,
      imunidades: [],
      resistencias: { corte: 10, impacto: 10, perfuracao: 10, morte: 15 },
      vulnerabilidades: ["energia", "fogo"],
      attributes: { dex: 3, str: 4, int: 3, pre: 3, con: 4 },
      movement: 6,
      powers: [
        {
          id: "0",
          name: "Rebobinar",
          description:
            "<p>Ao chegar a 0 pontos de vida, as fitas da Anamnese se dissipam e a câmera que compõe seu corpo cai no chão, voltando a vida após o fim da próxima cena da sessão. Após voltar a vida, a Anamnese fugirá, procurando uma nova oportunidade de matar seus alvos.</p>",
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
              name: "TAPA DE FITA",
              numberOfAttacks: 2,
              range: "Corpo a corpo",
              criticalMult: 2,
              criticalRange: 20,
              rollNumber: 4,
              rollBonus: 25,
              damage: [{ id: "0", damageType: "Impacto", value: "4d10+10" }],
            },
          ],
        },
        {
          id: "1",
          name: "Drenar",
          type: "padrão",
          description:
            "<p>A Anamnese aproxima a câmera do rosto do alvo e começa a gravá-lo, necessitando de um teste de Vontade (DT 30) do alvo, em caso de falha, o alvo tem que rolar 1d6 e pegar um dos efeitos abaixo, além disso recebe 3d12+15 de dano de Morte.</p><p>1 - O alvo fica Fatigado por 3 turnos. 2 - O alvo fica Enredado por 3 turnos. 3 - O alvo fica Alquebrado por 3 turnos. 4 - O alvo fica permanentemente 5 anos mais velho. 5 - O alvo fica Confuso por 3 turnos. 6 - O alvo perde 2d10+3 pontos de sanidade.</p>",
        },
        {
          id: "2",
          name: "Puxão",
          type: "movimento",
          description:
            "<p>A Anamnese arremessa suas fitas a alcance curto em um alvo, esse que deve realizar um teste de Reflexos (DT 25), caso falhe, ele é puxado para um espaço adjacente ao Anamnese e fica Caído.</p>",
        },
      ],
      enigmaDoMedo:
        "<p>A criação da Anamnese está diretamente ligada as fitas que ela gravou no passado, tendo a necessidade que as memórias que nelas estão se mantenham inteiras. Quando todas as fitas gravadas pela câmera da Anamnese forem destruídas, ela perde a habilidade Rebobinar, porém, ela vai necessitar achar um novo alvo de dependência, procurando um corpo para possuir, caso consiga, ela se tornará o Senhor das Recordações Sombrias.</p>",
      description:
        "<p>Constantemente filmando o sofrimento alheio, as lentes dessa câmera já foram, muitas vezes, a última coisa que uma pessoa já viu. Se camuflando como uma simples câmera, o Anamnese ronda os locais em que opera, sempre em busca de novas vítimas para gravar e criar memórias. Suas gravações podem se transformar em fitas ou rolos de filme que servem para manter aqueles momentos de sofrimento intactos. Essa criatura, em sua forma original, só se move quando ninguém a observa.</p><p>Caso seja atacada ou perceba que nada está ocorrendo no momento, a criatura decide tomar ação e cumprir sua função, abrindo seu compartimento e com uma fita de filme começa a se mover até criar um redemoinho mimicando uma estrutura corporal, criando mãos e levantando a câmera para filmar o que está prestes a acontecer. O Anamnese irá fazer você sofrer e tornará o seu grito apenas mais um dos que ele toca quando se transforma.</p><p>Caso o Anamnese seja derrotado, ele volta a sua função de câmera e some quando ninguém o observa, voltando em outro momento oportuno para atacar.</p>",
    },
  ];
export { e as a, a as b, o as c, r as m };

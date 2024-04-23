const e = "/assets/attributes-V37qZCrP.png",
  a = {
    name: "Mundane",
    shortDescription:
      "You're a normal person, living a normal life. Of course, considering you're a character in Ordem Paranormal RPG, this normality won't last long...",
    description: "",
    initialPv: 8,
    levelPv: 0,
    initialPe: 1,
    levelPe: 0,
    initialSan: 8,
    levelSan: 0,
    trainedSkills: { skills: [], optionSkils: [], quantity: 1 },
    proficiencies: "Simple Weapons",
    abilities: [
      {
        name: "Diligence",
        description:
          "You may not have special training, but you compensate with effort and preserverence. When you do a Skill Check, you can spend 1 EP to get +2 on the result.",
      },
    ],
    powers: [],
    paths: [],
    table: [],
  },
  o = [
    {
      name: "Combatant",
      shortDescription:
        "Trained to fight with all types of weapons, and with the strength and courage to face dangers head on, you are the type of agent who prefers more direct approaches and tends to shoot first and ask questions later.",
      description:
        "<p>Do mercenário especialista em armas de fogo até o perito em espadas, combatentes apresentam uma gama enorme de habilidades e técnicas especiais que aprimoram sua eficiência no campo de batalha, tornando-os membros essenciais em qualquer missão de extermínio.</p><p>Além de treinar seu corpo, o combatente também é perito em liderar seus aliados em batalha e cuidar de seu equipamento de combate, sempre preparado para assumir a linha de frente quando a coisa fica feia.</p><p><span>Combatentes Famosos: </span>Senhor Veríssimo, Joui Jouki, Gal, Antônio “Balu” Pontevedra, Tristan Monteiro e Ryder Staten.</p>",
      initialPv: 20,
      levelPv: 4,
      initialPe: 2,
      levelPe: 2,
      initialSan: 12,
      levelSan: 3,
      trainedSkills: {
        skills: [],
        optionSkils: [
          ["Fighting", "Marksmanship"],
          ["Fortitude", "Reflexes"],
        ],
        quantity: 1,
      },
      proficiencies: "Simple & Tactical weapons and light armor",
      abilities: [
        {
          name: "Special Attack",
          description:
            "When attacking, you can spend 2 EP to receive +5 on your attack or damage roll. As your EXP increases, you can spend +1 EP to increase this bonus by an extra +5. You can apply each +5 bonus to attack or damage. For example, at EXP 55%, you can spend 4 EP to receive +5 to the attack roll and +10 to the damage roll.",
        },
      ],
      powers: [
        {
          name: "Heavy Weaponry",
          description:
            "<p>You receive proficiency with heavy weapons. <em>Pré-requisito:</em> For 2.</p>",
        },
        {
          name: "Martial Artist",
          description:
            "<p>Your unnarmed attacks deal 1d6 points of damage, can deal lethal damage and are considered agile weapons. At EXP 35%, the damage increases to 1d8 and, at EXP 70%, to 1d10.</p>",
        },
        {
          name: "Opportunity Attack",
          description:
            "<p>Whenever a being voluntarily leaves a space adjacent to yours, you can use a reaction and 1 EP to make a melee attack against them.</p>",
        },
        {
          name: "Fighting with Two Weapons",
          description:
            "<p>If you are using two weapons (and at least one of them is light) and make an attack, you can make two attacks, one with each weapon. If you do so, you suffer –1d20 on all attack rolls until your next turn. <em>Prerequisites:</em> Agi 3, trained in Fighting or Marksmanship.</p>",
        },
        {
          name: "Defensive Fighting",
          description:
            "<p>When you make an attack, you can fight defensively. If you do so, until your next turn, you suffer –1d20 on all attack rolls, but gain +5 to Defense. <em>Prerequisite:</em> Int 2.</p>",
        },
        {
          name: "Demolishing Strike",
          description:
            "<p>When you use the break maneuver or attack an object, you can spend 1 EP to deal two extra damage dice of the same type as your weapon. <em>Prerequisites:</em> Str 2, trained in Fighting.</p>",
        },
        {
          name: "Heavy Strike",
          description:
            "<p>The damage of your melee weapons increases by one more die of the same type.</p>",
        },
        {
          name: "Indefatigable",
          description:
            "<p>Once per scene, you can spend 2 EP to make an additional investigation action, but you must use Strength or Agility as the base attribute for the roll.</p>",
        },
        {
          name: "Athletic Prowess",
          description:
            "<p>When you make a Facilitate Investigation check, you can spend 1 EP to use Strength or Agility in place of the skill's base attribute. If you pass the check, the next ally who uses your bonus also gains +1d20 to the check.</p>",
        },
        {
          name: "Heavy Armor",
          description:
            "<p>You receive proficiency with Heavy Armor. <em>Prerequisite:</em> EXP 30%.</p>",
        },
        {
          name: "Defensive Reflexes",
          description:
            "<p>You gain +2 to Defense and saving throws. <em>Prerequisites:</em> Agi 2.</p>",
        },
        {
          name: "Quick Draw",
          description:
            "<p>You can draw or put away items as a free action (instead of a movement action). Additionally, if you are using the optional ammo counting rule, once per round you can reload an arrow-based weapon as a free action. <em>Prerequisite:</em> trained in Initiative.</p>",
        },
        {
          name: "Hold the Trigger",
          description:
            "<p>Whenever you hit an attack with a firearm, you can make another attack with the same weapon against the same target, paying 2 EP for each attack already made in the turn. In other words, you can make the first extra attack spending 2 EP and, if you hit, you can make a second extra attack spending another 4 EP and so on, until you miss an attack or reach your EP per round limit. <em>Prerequisite:</em> EXP 60%.</p>",
        },
        {
          name: "Tactical Senses",
          description:
            "<p>You can use a movement action and 2 EP to analyze the environment. If you do so, you receive a bonus to Defense and saving throws equal to your Intellect until the end of the scene. <em>Prerequisites:</em> Trained in Perception and Tactics.</p>",
        },
        {
          name: "War Tank",
          description:
            "<p>If you are using heavy armor, the Defense and the damage resistance it provides increase by +2. <em>Prerequisite:</em> Heavy Armor.</p>",
        },
        {
          name: "Well-Aimed Shot",
          description:
            "<p>If you are using an arrow-based weapon, you add your Agility to damage rolls and ignore the penalty against targets engaged in melee combat (even if you do not use the aim action). <em>Prerequisite:</em> trained in Marksmanship.</p>",
        },
        {
          name: "Suppressive Fire",
          description:
            "<p>You can use a standard action and 1 EP to use a firearm to shoot a character within the weapon's range to force them to take cover. Make a Marksmanship check against the target's Will. If you win, until the start of your next turn the target cannot leave its location and suffers –5 on attack tests. At the GM's discretion, the target receives +5 to the Will test if they are in an extremely dangerous place, such as a burning house or a sinking boat. This is a fear effect.</p>",
        },
        {
          name: "Transcend",
          description:
            "<p>Choose a paranormal power. You receive the chosen power, but do not gain Sanity from this EXP increase. You can choose this power multiple times.</p>",
        },
        {
          name: "Skill Trainment",
          description:
            "<p>Choose two skills. You become trained in those skills. From EXP 35% onwards, you can choose skills in which you are already trained to become a veteran. From NEX 70% onwards, you can choose skills in which you are already a veteran to become an expert. You can choose this power multiple times.</p>",
        },
      ],
      paths: [
        {
          name: "Annihilator",
          description:
            "<p>Você é treinado para abater alvos com eficiência e velocidade. Suas armas são suas melhores amigas e você cuida tão bem delas quanto de seus companheiros de equipe. Talvez até melhor.</p>",
          abilities: [
            {
              name: "EXP 10% - The Favorite",
              description:
                "<p>Choose a weapon to be your favorite, such as a katana or an assault rifle. The category of the chosen weapon is reduced by I.</p>",
            },
            {
              name: "EXP 40% - Secret Technique",
              description:
                "<p>The category of the favorite weapon is now reduced by II. When you make an attack with it, you can spend 2 EP to perform one of the effects below as part of the attack. You can add more effects by spending +2 EP per additional effect.</p><p><span><em>Broad.</em></span> The attack can hit an additional target within its range and adjacent to the original (use the same attack roll for both).</p><p><span><em>Destructive.</em></span> Increases the weapon's critical multiplier by +1.</p>",
            },
            {
              name: "EXP 65% - Sublime Technique",
              description:
                "<p>You add the following effects to your Secret Technique list:</p><p><span>Lethal.</span> Increases threat range by +2. You can choose this effect twice to increase the threat range by +5.</p><p><span><em>Piercing.</em></span> Ignores up to 5 points of any damage resistance type the target has.</p>",
            },
            {
              name: "EXP 99% - Killing Machine",
              description:
                "<p>The favorite weapon's category is now reduced by III, it receives +2 to the threat range and its damage increases by one die of the same type.</p>",
            },
          ],
        },
        {
          name: "Field Commander",
          description:
            "<p>Sem um oficial uma batalha não passa de uma briga de bar. Você é treinado para coordenar e auxiliar seus companheiros em combate, tomando decisões rápidas e tirando melhor proveito da situação e do talento de seus aliados.</p>",
          abilities: [
            {
              name: "EXP 10% - Inspire Confidence",
              description:
                "<p>Your leadership inspires your allies. You can spend a reaction and 2 EP to make an ally in short range reroll a recently performed check.</p>",
            },
            {
              name: "EXP 40% - Strategist",
              description:
                "<p>You can direct allies at short range. Spend a standard action and 1 EP per ally you want to direct (limited by your Intellect). On the affected allies' next turn, they gain an additional movement action.</p>",
            },
            {
              name: "EXP 65% - Breach Their Defenses",
              description:
                "<p>Once per round, when an ally deals damage to an enemy within short range of you, you can use a reaction and 2 EP to have you or another ally within short range make an additional attack against the same enemy. Additionally, the range of Inspire Confidence and Strategist increases to medium.</p>",
            },
            {
              name: "EXP 99% - Commanding Officer",
              description:
                "<p>You can use a standard action and 5 EP so that each ally you can see within medium range receives an additional standard action on their next turn.</p>",
            },
          ],
        },
        {
          name: "Warrior",
          description:
            "<p>Você treinou sua musculatura e movimentos a ponto de transformar seu corpo em uma verdadeira arma. Com golpes corpo a corpo tão poderosos quanto uma bala, você encara os perigos de frente.</p>",
          abilities: [
            {
              name: "EXP 10% - Lethal Technique",
              description:
                "<p>You gain a +2 increase in threat range to all of your melee attacks.</p>",
            },
            {
              name: "EXP 40% - Retaliate",
              description:
                "<p>Whenever you block an attack, you can use a reaction and 2 EP to make a melee attack on the enemy that attacked you.</p>",
            },
            {
              name: "EXP 65% - Opressive Strength",
              description:
                "<p>When you land a melee attack, you can spend 1 EP to perform a knock down or push maneuver against the target of the attack as a free action. If you choose to push, you receive a bonus of +5 for every 10 points of damage you dealt to the target. If you choose to knock down and win the opposed check, you can spend 1 EP to make an additional attack against the now prone target.</p>",
            },
            {
              name: "EXP 99% - Maximum Power",
              description:
                "<p>When you use your Special Attack with melee weapons, all numerical bonuses are doubled. For example, if you use 5 EP to get +5 on the attack roll and +15 damage, you get +10 on the attack roll and +30 damage.</p>",
            },
          ],
        },
        {
          name: "Special Ops",
          description:
            "<p>Você é um combatente eficaz, e suas ações são calculadas e otimizadas, sempre antevendo os movimentos inimigos e se posicionando da maneira mais inteligente no campo de batalha.</p>",
          abilities: [
            {
              name: "EXP 10% - Upgraded Initiative",
              description:
                "<p>You receive +5 in Initiative and an extra movement action on the first round.</p>",
            },
            {
              name: "EXP 40% - Extra Attack",
              description:
                "<p>Once per round, when you make an attack, you can spend 2 EP to make an additional attack.</p>",
            },
            {
              name: "EXP 65% - Adrenaline Rush",
              description:
                "<p>Once per round, you can spend 5 EP to get an additional standard or movement action.</p>",
            },
            {
              name: "EXP 99% - Always Vigilant",
              description:
                "<p>You receive an additional standard action at the start of each combat scene.</p>",
            },
          ],
        },
        {
          name: "Shock Troop",
          description:
            "<p>Você é duro na queda. Treinou seu corpo para resistir a traumas físicos, tornando-o praticamente inquebrável, e por isso não teme se colocar entre seus aliados e o perigo.</p>",
          abilities: [
            {
              name: "EXP 10% - Hard Skin",
              description:
                "<p>You receive +1 HP for every 5% EXP and, when you block an attack, you add your Vigor to the damage reduction received.</p>",
            },
            {
              name: "EXP 40% - Square Up",
              description:
                "<p>Whenever an opponent within short range attacks one of your allies, you can use a reaction and 1 EP to make that opponent make a Will saving throw (DC Vig). If they fail, the opponent must attack you instead of your ally. This power only works if you can be effectively attacked and are within attack range (for example, adjacent to an opponent attacking in melee or within range of a ranged weapon). An opponent who passes the Will test cannot be affected by your Square Up power until the end of the scene.</p>",
            },
            {
              name: "EXP 65% - Dead Hard",
              description:
                "<p>When you take non-paranormal damage, you can use a reaction and 2 EP to halve that damage. At EXP 85%, you can use this skill to reduce paranormal damage.</p>",
            },
            {
              name: "EXP 99% - Unbreakable",
              description:
                "<p>While you are injured, you receive +5 Defense and +5 damage resistance. While you are dying, instead of normal, you are not defenseless and can still perform actions. You still follow the death rules as normal.</p>",
            },
          ],
        },
      ],
      table: [
        "Special attack (2 EP, +5)",
        "Path ability",
        "Combatant power",
        "Attribute increase",
        "Special attack (3 EP, +10)",
        "Combatant power",
        "Trainment level",
        "Path ability",
        "Combatant power",
        "Attribute increase, versatility",
        "Special attack (4 EP, +15)",
        "Combatant power",
        "Path ability",
        "Trainment level",
        "Combatant power",
        "Attribute increase",
        "Special attack (5 EP, +20)",
        "Combatant power",
        "Attribute increase",
        "Path ability",
      ],
    },
    {
      name: "Specialist",
      shortDescription:
        "An agent who relies more on cleverness rather than brute force. A specialist uses technical knowledge, quick thinking or even cunning to solve mysteries and face the paranormal.",
      description:
        "<p>Cientistas, inventores, pesquisadores e técnicos de vários tipos são exemplos de especialistas, que são tão variados quanto as áreas do conhecimento e da tecnologia. Alguns ainda preferem estudar engenharia social e se tornam excelentes espiões infiltrados, ou mesmo estudam técnicas especiais de combate como artes marciais e tiro a distância, aliando conhecimento técnico e habilidade.</p><p>O que une todos os especialistas é sua incrível capacidade de aprender e improvisar usando seu intelecto e conhecimento avançado, que pode tirar o grupo todo dos mais diversos tipos de enrascadas.</p><p><span>Especialistas Famosos: </span>Aaron, Arthur Cervero, Rubens Naluti, Elizabeth Webber, Samuel Norte, Chizue Akechi.</p>",
      initialPv: 16,
      levelPv: 3,
      initialPe: 3,
      levelPe: 3,
      initialSan: 16,
      levelSan: 4,
      trainedSkills: { skills: [], optionSkils: [], quantity: 7 },
      proficiencies: "Simple weapons and light armor",
      abilities: [
        {
          name: "Eclectic",
          description:
            "When you do a skill check, you can spend 2 EP to recieve the benefits of being trained on that skill.",
        },
        {
          name: "Connoisseur",
          description:
            "Choose two trained skills (except Fighting and Marksmanship). When you do a skill check of the chosen skills, you can spend 2 EP to add +1d6 to the roll. As your EXP increases, you can spend +1EP to increase the bonus dice. For example, at EXP 55%, you can spend 4 EP to receive +1d10 on the roll.",
        },
      ],
      powers: [
        {
          name: "Martial Artist",
          description:
            "<p>Your unnarmed attacks deal 1d6 points of damage, can deal lethal damage and are considered agile weapons. At EXP 35%, the damage increases to 1d8 and, at EXP 70%, to 1d10.</p>",
        },
        {
          name: "Advanced Ballistics",
          description:
            "<p>You receive proficiency with tactical firearms and +2 on damage rolls with those weapons.</p>",
        },
        {
          name: "Applied Knowledge",
          description:
            "<p>When you make a skill check (except Fighting and Marksmanship), you can spend 2 EP to change the skill's base attribute to Int. <em>Prerequesite:</em> Int 2.</p>",
        },
        {
          name: "Ingenuity",
          description:
            "At EXP 40%, when you use your Eclectic ability, you can spend an additional 2 EP to receive the benefits of being a veteran in the skill. At NEX 75%, you can spend an additional 4 EP to receive the benefits of being an expert in the skill.",
        },
        {
          name: "Hacker",
          description:
            "<p>You gain +5 on Technology checks to hack systems and decrease the time needed to hack any system to a complete action. <em>Prerequisite:</em> trained in Technology.</p>",
        },
        {
          name: "Fast-Handed",
          description:
            "<p>When making a Crime check, you can spend 1 EP to do so as a free action. <em>Prerequisites:</em> Agi 3, trained in Crime.</p>",
        },
        {
          name: "Utility Backpack",
          description:
            "<p>An item of your choice (except weapons) counts as one category lower and takes up 1 less space.</p>",
        },
        {
          name: "Tactical Movement",
          description:
            "<p>You can spend 1 EP to ignore the movement penalty for difficult terrain and climbing until the end of the turn. <em>Prerequisite:</em> Trained in Athletics.</p>",
        },
        {
          name: "On the Right Track",
          description:
            "<p>Whenever you pass on a check to search for clues, you can spend 1 EP to receive +1d20 on the next check. The costs and bonuses are cumulative (if you pass a second test, you can spend 2 EP to receive a total of +2d20 on the next test, and so on).</p>",
        },
        {
          name: "Nerd",
          description:
            "<p>You are a repository of useful (and useless) knowledge. Once per scene, you can spend 2 EP to make a Current Affairs check (DC 20). If you pass, you receive useful information for that scene (if it's an investigation, a hint for a clue; if it's combat, an enemy's weakness, and so on). The source of information can be anything from an old book you read in the library to an episode of your favorite fiction series.</p>",
        },
        {
          name: "Urban Ninja",
          description:
            "<p>You gain proficiency with melee and arrow-based tactical weapons and +2 to damage rolls with those weapons.</p>",
        },
        {
          name: "Quick Thinking",
          description:
            "<p>Once per round, during an investigation scene, you can spend 2 EP to make an additional search for clues action.</p>",
        },
        {
          name: "Explosives Expert",
          description:
            "<p>You add your Intellect to the DC to resist your explosives and can exclude a number of targets equal to your Intellect value from the explosion's effects.</p>",
        },
        {
          name: "First Impressioin",
          description:
            "<p>You get +2d20 on the first Diplomacy, Deception, Intimidation, or Intuition check you make in a scene.</p>",
        },
        {
          name: "Transcend",
          description:
            "<p>Choose a paranormal power. You receive the chosen power, but do not gain Sanity from this EXP increase. You can choose this power multiple times.</p>",
        },
        {
          name: "Skill Trainment",
          description:
            "<p>Choose two skills. You become trained in those skills. From EXP 35% onwards, you can choose skills in which you are already trained to become a veteran. From NEX 70% onwards, you can choose skills in which you are already a veteran to become an expert. You can choose this power multiple times.</p>",
        },
      ],
      paths: [
        {
          name: "Sharpshooter",
          description:
            "<p>Um tiro, uma morte. Ao contrário dos combatentes, você é perito em neutralizar ameaças de longe, terminando uma briga antes mesmo que ela comece. Você trata sua arma como uma ferramenta de precisão, sendo capaz de executar façanhas incríveis.</p>",
          abilities: [
            {
              name: "EXP 10% - Elite Aim",
              description:
                "<p>You receive proficiency with firearms that use long bullets and add your Intellect value on damage rolls with those weapons.</p>",
            },
            {
              name: "EXP 40% - Lethal Shot",
              description:
                "<p>When you make the aim action, you can spend 1 EP to increase the threat range of the next attack you make by +2 until the end of your next turn.</p>",
            },
            {
              name: "EXP 65% - Impactful Shot",
              description:
                "<p>If you are using a firearm with large-caliber, you can spend 2 EP to do the knock down, disarm, push and break maneuvers using a ranged attack.</p>",
            },
            {
              name: "EXP 99% - Shooting to Kill",
              description:
                "<p>When you land a critical hit with a firearm, you deal maximum damage, without having to roll dice.</p>",
            },
          ],
        },
        {
          name: "Infiltrator",
          description:
            "<p>Você é um perito em infiltração e sabe neutralizar alvos desprevenidos sem causar alarde. Combinando talento acrobático, destreza manual e conhecimento técnico você é capaz de superar qualquer barreira de defesa, mesmo quando a missão parece impossível.</p>",
          abilities: [
            {
              name: "EXP 10% - Sneak Attack",
              description:
                "<p>You know how to hit the vital spots of a distracted enemy. Once per round, when you hit an off-guard target with a melee or short-range attack, or a target you are flanking, you can spend 1 EP to deal +1d6 points of damage of the same type as the weapon. At EXP 40% the additional damage increases to +2d6, at EXP 65% it increases to +3d6 and at EXP 99% it increases to +4d6.</p>",
            },
            {
              name: "EXP 40% - Prowler",
              description:
                "<p>You gain +5 to Athletics and Crime and can move your normal movement distance when hiding without penalty (see the Stealth skill).</p>",
            },
            {
              name: "EXP 65% - Assassinate",
              description:
                "<p>You can use a movement action and 3 EP to analyze a target within short range. Until the end of your next turn, your first Sneak Attack that deals damage to it has its bonus damage dice from that ability doubled. Additionally, if it takes damage from your attack, the target becomes unconscious or dies, your choice (Fortitude DC Agi avoids).</p>",
            },
            {
              name: "EXP 99% - Fleeting Shadow",
              description:
                "<p>When you make a Stealth check after attacking or making another flashy action, you can spend 3 EP to avoid the –3d20 penalty on the check.</p>",
            },
          ],
        },
        {
          name: "Combat Medic",
          description:
            "<p>Você é treinado em técnicas de primeiros socorros e tratamento de emergência, o que torna você um membro valioso para qualquer grupo de agentes. Ao contrário dos profissionais de saúde convencionais, você está acostumado com o campo de batalha e sabe tomar decisões rápidas no meio do caos.</p><p><span>Especial: </span>para escolher esta trilha, você precisa ser treinado em Medicina. Para usar as habilidades desta trilha, você precisa possuir um kit de medicina.</p>",
          abilities: [
            {
              name: "EXP 10% - Paramedic",
              description:
                "<p>You can use a standard action and 2 EP to heal yourself or an adjacent ally for 2d10 hit points. You can heal +1d10 HP respectively at EXP 40%, 65% and 99%, spending +1 EP per additional healing die.</p>",
            },
            {
              name: "EXP 40% - Trauma Team",
              description:
                "<p>You can use a standard action and 2 EP to remove a negative condition (except dying) from an adjacent ally.</p>",
            },
            {
              name: "EXP 65% - Rescue",
              description:
                "<p>Once per round, if you are within close range of a wounded or dying ally, you can approach the ally as a free action (as long as you are able to do so using your normal movement). Additionally, whenever you heal your ally's HP or remove conditions, you and your ally receive +5 Defense until the start of your next turn. Finally, for you, the total spaces occupied by carrying a character are halved.</p>",
            },
            {
              name: "EXP 99% - Resuscitation",
              description:
                "<p>Once per scene, you can use a complete action and 10 EP to bring back to life a character who died in the same scene (except death from massive damage).</p>",
            },
          ],
        },
        {
          name: "Negociator",
          description:
            "<p>Você é um diplomata habilidoso e consegue influenciar outras pessoas, seja por lábia ou intimidação. Sua capacidade de avaliar situações com rapidez e eficiência pode tirar o grupo de apuros que nem a mais poderosa das armas poderia resolver.</p>",
          abilities: [
            {
              name: "EXP 10% - Eloquence",
              description:
                "<p>You can use a complete action and 1 EP per target within short range to affect other characters with your speech. Make a Diplomacy, Deception, or Intimidation test against the targets' Will. If you win, the targets are fascinated as long as you concentrate (one standard action per round). A hostile target or target that is involved in combat receives +5 on their saving throw and is entitled to a new test per round, whenever you concentrate. A character who passes the test is immune to this effect for one day.</p>",
            },
            {
              name: "EXP 40% - Motivational Discourse",
              description:
                "<p>You can use a standard action and 4 EP to inspire your allies with your words. You and all your allies within short range gain +1d20 on skill checks until the end of the scene. Starting at EXP 65%, you can spend 8 EP to provide a total bonus of +2d20.</p>",
            },
            {
              name: "EXP 65% - I Know a Guy",
              description:
                "<p>Once per mission, you can contact your network of contacts to ask for a favor, such as exchanging all of your group's equipment (as if you had a second mission preparation phase), getting a resting place or even being rescued from a scene. The GM has the final say on when this ability can be used and what favors can be obtained.</p>",
            },
            {
              name: "EXP 99% - My Best Trick",
              description:
                "<p>Accustomed to a life of pretense and manipulation, you can spend 5 EP to simulate the effect of any ability you saw one of your allies use during the scene. You ignore the skill's prerequisites, but you still have to pay all of its costs, including actions, EP, and materials, and it uses your game parameters as if you were using the skill in question.</p>",
            },
          ],
        },
        {
          name: "Technician",
          description:
            "<p>Sua principal habilidade é a manutenção e reparo do valioso equipamento que seu time carrega em missão. Seu conhecimento técnico também permite que improvise ferramentas com o que tiver à disposição e sabote os itens usados por seus inimigos.</p>",
          abilities: [
            {
              name: "EXP 10% - Optimized Inventory",
              description:
                "<p>You add your Intellect to your Strength when calculating your max load. For example, if you have Strength 1 and Intellect 3, your inventory has 20 spaces.</p>",
            },
            {
              name: "EXP 40% - Mending",
              description:
                "<p>You can spend a complete action and 1 EP to remove the broken condition from adjacent equipment until the end of the scene. Additionally, any general equipment has its category reduced by I for you.</p>",
            },
            {
              name: "EXP 65% - Improvise",
              description:
                "<p>You can improvise equipment with materials around you. Choose a general equipment and spend a complete action and 2 EP, plus 2 EP per category of the chosen item. You create a working version of the equipment, which follows its space and category rules as normal. At the end of the scene, your makeshift equipment becomes useless.</p>",
            },
            {
              name: "EXP 99% - Ready for Everything",
              description:
                "<p>You always have what you need for any situation. Whenever you need any item (except weapons), you can spend a movement action and 3 EP per item category to remember that you put it at the bottom of your bag! Once found, the item follows normal inventory rules.</p>",
            },
          ],
        },
      ],
      table: [
        "Eclectic, connoisseur (2 EP, +1d6)",
        "Path ability",
        "Specialist power",
        "Attribute increase",
        "Connoisseur (3 EP, +1d8)",
        "Specialist power",
        "Trainment level",
        "Ingenuity (veterano), path ability",
        "Specialist power",
        "Attribute increase, versatility",
        "Connoisseur (4 EP, +1d10)",
        "Specialist power",
        "Path ability",
        "Trainment level",
        "Ingenuity (expert), specialist power",
        "Attribute increase",
        "Connoisseur (5 EP, +1d12)",
        "Specialist power",
        "Attribute increase",
        "Path ability",
      ],
    },
    {
      name: "Occultist",
      shortDescription:
        "The Other Side is mysterious, dangerous and, in some ways, captivating. Many scholars of the entities get lost in their dark realms in search of power, but there are those who aim to understand and master the paranormal mysteries to use them to combat the Other Side itself. This type of agent is not only knowledgeable about the occult, but also has a talent for connecting with paranormal elements.",
      description:
        "<p>Ao contrário da crendice popular, ocultistas não são intrinsecamente malignos. Seria como dizer que o cientista que inventou a pólvora é culpado pelo assassino que disparou o revólver. Para a Ordem, o Paranormal é uma força que pode ser usada para os mais diversos propósitos, de acordo com a intenção de seu usuário.</p><p>Ocultistas aplicam seu conhecimento acadêmico e suas capacidades de conjuração de rituais em missões para investigar e combater o Paranormal em todas as suas formas, principalmente quando munição convencional não é o suficiente para lidar com a tarefa.</p><p><span>Ocultistas Famosos:</span> Agatha Volkomenn, Dante, Arnaldo Fritz, Marc Menet, Kian.</p>",
      initialPv: 12,
      levelPv: 2,
      initialPe: 4,
      levelPe: 4,
      initialSan: 20,
      levelSan: 5,
      trainedSkills: {
        skills: ["Occultism", "Will"],
        optionSkils: [],
        quantity: 3,
      },
      proficiencies: "Simple weapons",
      abilities: [
        {
          name: "Chosen by the Other Side",
          description:
            "You had a paranormal experience and were marked by the Other Side, absorbing the knowledge and power necessary to perform rituals. You can cast 1st circle rituals. As your EXP increases, you can launch higher circle rituals (2nd circle at EXP 25%, 3rd circle at EXP 55% and 4th circle at EXP 85%). You start with three 1st circle rituals. Whenever your EXP increases, you learn a ritual from any circle you can cast. These rituals do not count towards your known ritual limit.",
        },
      ],
      powers: [
        {
          name: "Camouflage Ocultism",
          description:
            "<p>Você pode gastar uma ação livre para esconder símbolos e sigilos que estejam desenhados ou gravados em objetos ou em sua pele, tornando-os invisíveis para outras pessoas além de você mesmo. Além disso, quando lança um ritual, pode gastar +2 PE para lançá-lo sem usar componentes ritualísticos e sem gesticular (o que permite conjurar um ritual com as mãos presas), usando apenas concentração. Outros seres só perceberão que você lançou uma ritual se passarem num teste de Ocultismo (DT 25).</p>",
        },
        {
          name: "Create Scroll",
          description:
            "<p>Under Review, name does not seem the best.</p> <p>Você sabe fabricar selos paranormais de rituais que conheça. Fabricar um selo gasta uma ação de interlúdio e um número de PE iguais ao custo de conjurar o ritual. Você pode ter um número máximo de selos criados a qualquer momento igual à sua Presença.</p>",
        },
        {
          name: "Shrouded in Mystery",
          description:
            "<p>Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Ocultismo.</p>",
        },
        {
          name: "Element Specialist",
          description:
            "<p>Escolha um elemento. A DT para resistir aos seus rituais desse elemento aumenta em +2.</p>",
        },
        {
          name: "Paranormal Tools",
          description:
            "<p>Você reduz a categoria de um item paranormal em I e pode ativar itens paranormais sem pagar seu custo em PE.</p>",
        },
        {
          name: "Power Flow",
          description:
            "<p>Você pode manter dois efeitos sustentados de rituais ativos simultaneamente com apenas uma ação livre, pagando o custo de cada efeito separadamente. <em>Pré-requisito:</em> NEX 60%.</p>",
        },
        {
          name: "Guided by the Paranormal",
          description:
            "<p>Uma vez por cena, você pode gastar 2 PE para fazer uma ação de investigação adicional.</p>",
        },
        {
          name: "Paranormal Identification",
          description:
            "<p>Você recebe +10 em testes de Ocultismo para identificar criaturas, objetos ou rituais.</p>",
        },
        {
          name: "Improvise Components",
          description:
            "<p>Uma vez por cena, você pode gastar uma ação completa para fazer um teste de Investigação (DT 15). Se passar, encontra objetos que podem servir como componentes ritualísticos de um elemento à sua escolha. O mestre define se é possível usar esse poder na cena atual.</p>",
        },
        {
          name: "Paranormal Intuition",
          description:
            "<p>Sempre que usa a ação facilitar investigação, você soma seu Intelecto ou Presença no teste (à sua escolha).</p>",
        },
        {
          name: "Element Master",
          description:
            "<p>Escolha um elemento. O custo para lançar rituais desse elemento diminui em –1 PE. <em>Pré-requisitos:</em> Especialista em Elemento no elemento escolhido, NEX 45%.</p>",
        },
        {
          name: "Powerful Ritual",
          description:
            "<p>Você soma seu Intelecto nas rolagens de dano ou nos efeitos de cura de seus rituais. <em>Pré-requisito:</em> Int 2.</p>",
        },
        {
          name: "Favorite Ritual",
          description:
            "<p>Escolha um ritual que você conhece. Você reduz em –1 PE o custo do ritual. Essa redução se acumula com reduções fornecidas por outras fontes.</p>",
        },
        {
          name: "Ritualistic Tattoo",
          description:
            "<p>Símbolos marcados em sua pele reduzem em –1 PE o custo de rituais de alcance pessoal que têm você como alvo.</p>",
        },
        {
          name: "Transcend",
          description:
            "<p>Choose a paranormal power. You receive the chosen power, but do not gain Sanity from this EXP increase. You can choose this power multiple times.</p>",
        },
        {
          name: "Skill Trainment",
          description:
            "<p>Choose two skills. You become trained in those skills. From EXP 35% onwards, you can choose skills in which you are already trained to become a veteran. From NEX 70% onwards, you can choose skills in which you are already a veteran to become an expert. You can choose this power multiple times.</p>",
        },
      ],
      paths: [
        {
          name: "Conduit",
          description:
            "<p>Você domina os aspectos fundamentais da conjuração de rituais e é capaz de aumentar o alcance e velocidade de suas conjurações. Conforme sua conexão com as entidades paranormais aumenta você se torna capaz de interferir com os rituais de outros ocultistas.</p>",
          abilities: [
            {
              name: "EXP 10% - Enlarge Ritual",
              description:
                "<p>Quando lança um ritual, você pode gastar +2 PE para aumentar seu alcance em um passo (de curto para médio, de médio para longo ou de longo para extremo) ou dobrar sua área de efeito.</p>",
            },
            {
              name: "EXP 40% - Accelerate Ritual",
              description:
                "<p>Uma vez por rodada, você pode aumentar o custo de um ritual em 4 PE para conjurá-lo como uma ação livre.</p>",
            },
            {
              name: "EXP 65% - Nullify Ritual",
              description:
                "<p>Quando for alvo de um ritual, você pode gastar uma quantidade de PE igual ao custo pago por esse ritual e fazer um teste oposto de Ocultismo contra o conjurador. Se vencer, você anula o ritual, cancelando todos os seus efeitos.</p>",
            },
            {
              name: "EXP 99% - Channel the Fear",
              description: "<p>Você aprende o ritual Canalizar o Medo.</p>",
            },
          ],
        },
        {
          name: "Flagellant",
          description:
            "<p>Dor é um poderoso catalisador Paranormal e você aprendeu a transformá-la em poder para seus rituais. Quando se torna especialmente poderoso, consegue usar a dor e o sofrimento de seus inimigos como instrumento de seus rituais ocultistas.</p>",
          abilities: [
            {
              name: "EXP 10% - Lash's Gift",
              description:
                "<p>Under Review, deviates from original name</p><p>Ao conjurar um ritual, você pode gastar seus próprios pontos de vida para pagar o custo em pontos de esforço, à taxa de 2 PV por PE pago. Pontos de vida gastos dessa forma só podem ser recuperados com descanso.</p>",
            },
            {
              name: "EXP 40% - More! MORE!",
              description:
                "<p>Under Review, deviates from original name</p> <p>Sempre que sofrer dano não paranormal, você pode gastar uma reação e 2 PE para reduzir esse dano à metade.</p>",
            },
            {
              name: "EXP 65% - Redeem Agony",
              description:
                "<p>Sempre que reduz um ou mais inimigos a 0 PV com um ritual, você recebe uma quantidade de PE temporários igual ao círculo do ritual utilizado. Por exemplo, se ativar esse poder com um ritual de 2º círculo, receberá 2 PE.</p>",
            },
            {
              name: "EXP 99% - Tangible Fear",
              description: "<p>Você aprende o ritual Medo Tangível.</p>",
            },
          ],
        },
        {
          name: "Graduate",
          description:
            "<p>Você foca seus estudos em se tornar um conjurador versátil e poderoso, conhecendo mais rituais que os outros ocultistas e sendo capaz de torná-los mais difíceis de serem resistidos. Seu objetivo é desvendar e dominar os segredos do Outro Lado a fundo, custe o que custar</p>",
          abilities: [
            {
              name: "EXP 10% - Expanded Knowlegde",
              description:
                "<p>Você aprende um ritual de 1º círculo. Toda vez que ganha acesso a um novo círculo, aprende um ritual adicional daquele círculo. Esses rituais não contam no seu limite de rituais.</p>",
            },
            {
              name: "EXP 40% - Ritualistic Grimoire",
              description:
                "<p>Você cria um grimório especial, que armazena rituais que sua mente não seria capaz de guardar. Você aprende uma quantidade de rituais de 1º ou 2º círculos igual ao seu Intelecto. Quando ganha acesso a um novo círculo, pode incluir um novo ritual desse círculo em seu grimório. Esses rituais não contam em seu limite de rituais conhecidos. Para conjurar um ritual armazenado em seu grimório, você precisa antes gastar uma ação completa folheando o grimório e relembrando o ritual. O grimório ocupa 1 espaço em seu inventário. Se perdê-lo, você pode replicá-lo com duas ações de interlúdio.</p>",
            },
            {
              name: "EXP 65% - Efficient Rituals ",
              description:
                "<p>A DT para resistir a todos os seus rituais aumenta em +5.</p>",
            },
            {
              name: "EXP 99% - Knowing Fear",
              description: "<p>Você aprende o ritual Conhecendo o Medo.</p>",
            },
          ],
        },
        {
          name: "Intuitive",
          description:
            "<p>Assim como combatentes treinam seus corpos para resistir a traumas físicos, você preparou sua mente para resistir aos efeitos do Outro Lado. Seu foco e força de vontade fazem com que você expanda os limites de suas capacidades paranormais.</p>",
          abilities: [
            {
              name: "EXP 10% - Sane Mind",
              description:
                "<p>Você compreende melhor as entidades do Outro Lado, e passa a ser menos abalado por seus efeitos. Você recebe resistência paranormal +5 (+5 em testes de resistência contra efeitos paranormais).</p>",
            },
            {
              name: "EXP 40% - Powerful Presence",
              description:
                "<p>Sua resiliência mental faz com que você possa extrair mais do Outro Lado. Você adiciona sua Presença ao seu limite de PE por turno, mas apenas para conjurar rituais (não para DT).</p>",
            },
            {
              name: "EXP 65% - Unshakable",
              description:
                "<p>Você recebe resistência a dano mental e paranormal 10. Além disso, quando é alvo de um efeito paranormal que permite um teste de Vontade para reduzir o dano à metade, você não sofre dano algum se passar.</p>",
            },
            {
              name: "EXP 99% - Presence of Fear",
              description: "<p>Você aprende o ritual Presença do Medo.</p>",
            },
          ],
        },
        {
          name: "Paranormal Blade",
          description:
            "<p>Alguns ocultistas preferem ficar fechados em suas bibliotecas estudando livros e rituais. Outros preferem investigar fenômenos paranormais em sua fonte. Já você, prefere usar o paranormal como uma arma. Você aprendeu e dominou técnicas de luta mesclando suas habilidades de conjuração com suas capacidades de combate. Apesar do nome, membros dessa trilha podem utilizar tanto armas corpo a corpo quanto de ataque à distância.</p>",
          abilities: [
            {
              name: "NEX 10% - Accursed Blade",
              description:
                "<p>Você aprende o ritual Amaldiçoar Arma. Se já o conhece, seu custo é reduzido em –1 PE. Além disso, quando conjura esse ritual, você pode usar Ocultismo, em vez de Luta ou Pontaria, para testes de ataque com a arma amaldiçoada.</p>",
            },
            {
              name: "NEX 40% - Paranormal Gladiator",
              description:
                "<p>Sempre que acerta um ataque corpo a corpo em um inimigo, você recebe 2 PE temporários. Você pode ganhar um máximo de PE temporários por cena igual ao seu limite de PE. PE temporários desaparecem no final da cena.</p>",
            },
            {
              name: "NEX 65% - Martial Casting",
              description:
                "<p>Uma vez por rodada, quando você lança um ritual com execução de uma ação padrão, pode gastar 2 PE para fazer um ataque corpo a corpo como uma ação livre.</p>",
            },
            {
              name: "NEX 99% - Blade of Fear",
              description: "<p>Você aprende o ritual Lâmina do Medo.</p>",
            },
          ],
        },
      ],
      table: [
        "Chosen by the Other Side (1º circle)",
        "Path ability",
        "Occultist power",
        "Attribute increase",
        "Chosen by the Other Side (2º circle)",
        "Occultist power",
        "Trainment level",
        "Path ability",
        "Occultist power",
        "Attribute increase, versatility",
        "Chosen by the Other Side (3º circle)",
        "Occultist power",
        "Path ability",
        "Trainment level",
        "Occultist power",
        "Attribute increase",
        "Chosen by the Other Side (4º circle)",
        "Occultist power",
        "Attribute increase",
        "Path ability",
      ],
    },
  ];
export { e as _, o as c, a as m };

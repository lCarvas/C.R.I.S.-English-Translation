import { S as o } from "./skills-siTAQjCS.js";
import { v as t } from "./v4-cyCr5FZV.js";
const a = {
    name: "",
    player: "",
    attributes: { str: 1, dex: 1, int: 1, con: 1, pre: 1 },
    backgroundName: "",
    className: "",
    nex: "5%",
    peTurn: "1",
    movement: 9,
    maxPv: 0,
    currentPv: 0,
    maxPe: 0,
    currentPe: 0,
    maxSan: 0,
    currentSan: 0,
    protectionDefense: 0,
    bonusDefense: 0,
    currentProtection: "",
    resistances: "",
    proficiencies: "",
    skills: o,
    attacks: [],
    powers: [],
    rituals: [],
    ritualsDc: 0,
    patent: "Recruit",
    prestigePoints: 0,
    inventory: [],
    itemsLimit: { I: 2, II: 0, III: 0, IV: 0 },
    currentItemsLimit: { I: 0, II: 0, III: 0, IV: 0 },
    creditsLimit: "Low",
    maxLoad: 0,
    currentLoad: 0,
    description: {
      anotation: "",
      physical: "",
      personal: "",
      history: "",
      goal: "",
    },
    deathMarks: [!1, !1, !1],
    madnessMarks: [!1, !1, !1],
    deathMode: !1,
    madnessMode: !1,
    sheetPictureURL: "",
    sheetPictureFullPath: "",
    statsClass: "Combatant",
    canDMEdit: !0,
    canAnyoneEdit: !1,
    block: null,
    evade: null,
    private: !1,
    campaignDocId: "",
    resistencias: {},
    imunidades: [],
    vulnerabilidades: [],
  },
  d = (e, i) => {
    i.value > 3 && (i.value = 3),
      i.value < 0 && (i.value = 0),
      (e.attributes[i.attribute] = i.value);
  },
  f = (e, i) => {
    if (i !== null) {
      (e.backgroundName = i.name), (i.power.id = t()), e.powers.push(i.power);
      for (const s of i.skills) {
        let n = 0;
        s.includes("Profession")
          ? (n = 21)
          : (n = e.skills.findIndex((l) => l.name === s)),
          (e.skills[n].trainingDegree = "5"),
          (e.skills[n].bonus = 5);
      }
    }
  },
  p = (e, i) => {
    if (i !== null) {
      if (((e.className = i.name), i.name === "Mundane")) {
        const s = i.abilities[0];
        (s.id = t()),
          e.powers.push(s),
          (e.mundanoRemoveSkill = s.id),
          (e.patent = "Mundane"),
          (e.itemsLimit.I = 1);
      } else {
        i.name === "Occultist" &&
          ((e.skills[16].trainingDegree = "5"),
          (e.skills[16].bonus = 5),
          (e.skills[27].trainingDegree = "5"),
          (e.skills[27].bonus = 5));
        for (const s of i.abilities) (s.id = t()), e.powers.push(s);
      }
      (e.maxPv = i.initialPv + e.attributes.con),
        (e.currentPv = e.maxPv),
        (e.maxPe = i.initialPe + e.attributes.pre),
        (e.currentPe = e.maxPe),
        (e.maxSan = i.initialSan),
        (e.currentSan = e.maxSan),
        (e.proficiencies = i.proficiencies),
        e.attributes.str === 0
          ? (e.maxLoad = 2)
          : (e.maxLoad = 5 * e.attributes.str),
        (e.ritualsDc = 11 + e.attributes.pre);
    }
  },
  v = (e, i) => {
    e.description[i.key] = i.value;
  };
export { d as a, p as b, a as c, f as d, v as u };

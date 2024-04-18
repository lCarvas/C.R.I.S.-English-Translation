const e = { name: "New Ability", description: "My new ability" },
  a = {
    name: "New Ritual",
    description: "<p>My new ritual</p>",
    circle: "1",
    element: "Knowledge",
    execution: "Standard",
    range: "Personal",
    area: "",
    target: "",
    effect: "",
    duration: "",
    save: "",
  },
  t = {
    name: "New Item",
    description: "<p>My new item</p>",
    category: "0",
    slots: 1,
    tag: "Accessories",
    itemType: "misc",
  },
  o = {
    name: "New ammo",
    description: "<p>My new ammo</p>",
    category: "0",
    slots: 1,
    tag: "Ammo",
    itemType: "ammunition",
  },
  i = {
    name: "New Armor",
    description: "<p>My new armor</p>",
    defense: 1,
    category: "0",
    slots: 1,
    itemType: "protection",
  },
  n = {
    name: "New Weapon",
    description: "<p>My new weapon</p>",
    proficiencie: "Simple Weapons",
    type: "Fighting",
    handling: "Light",
    damage: "1d4",
    criticalMult: 2,
    criticalRange: 20,
    damageType: "Ballistic",
    range: "-",
    category: "0",
    slots: "1",
    itemType: "weapon",
  },
  r = {
    name: "New Attack",
    attackBonus: 0,
    damage: "1d4",
    extraDamage: "0",
    criticalRange: 20,
    criticalMult: 2,
    damageType: "Ballistic",
    range: "-",
    skillUsed: "Fighting",
    damageAttribute: "Strength",
  },
  s = {
    name: "New Cursed Item",
    description: "<p>My new cursed item</p>",
    element: "Conhecimento",
    category: "II",
    slots: "1",
    itemType: "cursedItem",
  },
  c = {
    name: "",
    description: "",
    privateMasterScreen: !1,
    timestamp: { seconds: 0, nanoseconds: 0 },
    uid: "",
    campaignLogId: "",
    joinId: "",
    anotations: { geral: "", previous: "", next: "" },
    pictureURL: "",
    pictureFullPath: "",
  },
  l = {
    name: "",
    campaignsId: [],
    uid: "",
    publicProfile: !1,
    pictureURL: "",
    pictureFullPath: "",
    tier: 0,
    donationAmount: 0,
  },
  m = { name: "New Action" },
  u = { id: "0", name: "New combat", creatures: [], vdTotal: 0 },
  p = {
    name: "New Threat",
    vd: 20,
    creatureType: "creature",
    creatureSize: "medium",
    skills: {
      perception: { rollNumber: 1, rollBonus: 0 },
      initiative: { rollNumber: 1, rollBonus: 0 },
      fortitude: { rollNumber: 1, rollBonus: 0 },
      reflex: { rollNumber: 1, rollBonus: 0 },
      will: { rollNumber: 1, rollBonus: 0 },
    },
    defense: 10,
    pvMax: 40,
    pvCurrent: 40,
    attributes: { str: 1, dex: 1, int: 1, con: 1, pre: 1 },
    movement: 9,
    presencaPerturbadora: {},
    resistencias: {},
    vulnerabilidades: [],
    imunidades: [],
    powers: [],
    actions: [],
    secondaryElements: [],
  };
export {
  u as a,
  p as b,
  c,
  r as d,
  o as e,
  i as f,
  s as g,
  m as h,
  t as m,
  e as p,
  a as r,
  l as u,
  n as w,
};

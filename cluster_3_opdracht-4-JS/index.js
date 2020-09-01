let persoon = {
    firstName: "Sander",
    age: "27",
    evaluations: [7, 10, 9],
};
console.log(
    `hey mijn naam is ${persoon.firstName} Ik ben ${persoon.age} jaar oud.`
);
let keys = Object.keys(persoon);
let vals = Object.values(persoon);
let entries = Object.entries(persoon);

console.log(entries[0][1]);

var kleur = ["groen", "blauw ", "rood ", "zwart "];

console.log(kleur[0]);
console.log(kleur[3]);
kleur.push("indigo");
console.log(kleur[4]);
kleur.push(5);
kleur.push({ greeting: "Hi ik ben een object" });
console.log(kleur[6]);
const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

const transport = Number(transportTexte); // Type : number ; unité : FCFA
const alimentation = Number(alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA
const totalDepénses = transport + alimentation + loisirs; // Type : number ; unité : FCFA
const budgetRestant = budget - totalDepénses; // Type : number ; unité : FCFA
const budgetRespected = budgetRestant >= 0; // Type : boolean
console.log(`Nom : ${nom}`);
console.log(`Budget : ${budget} FCFA`);
console.log(`Transport : ${transport} FCFA`);
console.log(`Alimentation : ${alimentation} FCFA`);
console.log(`Loisirs : ${loisirs} FCFA`);
console.log(`Total des depenses : ${totalDepénses} FCFA`)
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected}`);

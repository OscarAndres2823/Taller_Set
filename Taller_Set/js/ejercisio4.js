const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([4, 5, 6, 7, 8]);

const set2 = firstSet.intersection(secondSet);
console.log(set2); // La interseccion entre ambas va a ser 4 y 5 
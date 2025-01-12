const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([4, 5, 6, 7, 8]);

const set2 = firstSet.difference(secondSet);
console.log(set2); // Nos va a mostrar la diferencia de ambas que en este caso seria 1, 2, 3 
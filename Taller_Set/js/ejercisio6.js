function sonIguales(arr1, arr2) {
    // Convierte ambos arreglos a Sets para eliminar duplicados y desordenar
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    // Si los tamaños de los Sets son diferentes, no pueden ser iguales
    if (set1.size !== set2.size) {
      return false;
    }
  
    // Verifica que todos los elementos de set1 estén en set2
    for (let item of set1) {
      if (!set2.has(item)) {
        return false;
      }
    }
  
    return true;
}
  

console.log(sonIguales([1, 2, 3], [3, 2, 1])); // true
console.log(sonIguales([1, 2, 3], [4, 5, 6])); // false
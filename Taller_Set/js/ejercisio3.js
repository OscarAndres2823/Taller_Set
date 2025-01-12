// Cree una funcion llamada tieneDuplicados donde verifica si un arreglo contiene elementos duplicados
// El parámetro 'arr' representa el arreglo que se desea comprobar.
function tieneDuplicados(arr) {
    const elementosUnicos = new Set(arr); 
    return elementosUnicos.size !== arr.length; // Compara tamaños para detectar duplicados
  }
  
  console.log(tieneDuplicados([1, 2, 3, 4, 5])); // false (no hay duplicados)
  console.log(tieneDuplicados([1, 2, 3, 3, 5])); // true (el número 3 está duplicado)
  
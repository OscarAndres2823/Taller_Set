function contarPalabrasUnicas(texto) {
    // Divide el texto en palabras y usa un Set para almacenar palabras únicas
    const palabras = texto.split(" ");
    const palabrasUnicas = new Set(palabras);
    return palabrasUnicas.size;
}
  
// Ejemplo de uso
const texto = "Hola mundo mundo de JavaScript";
console.log(contarPalabrasUnicas(texto)); 
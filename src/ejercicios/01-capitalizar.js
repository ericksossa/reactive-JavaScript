/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Perro
 * León
 * Tiburón
 * Pingüino
 * Medusa
 */
(() => {


  const animales = ['perro', 'león', 'tiburón', 'pingüino', 'medusa'];

  const capitalizar = (nombre) => nombre.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());


  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
  for (let animal of animales) {
    console.log(capitalizar(animal))
  }







})();


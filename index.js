/* Actividad N°1 -- 2 PUNTOS
  Implementa la función llamada `esMayorOMenor` que tome dos números como argumento y devuelva un mensaje indicando si el primer numero es mayo, menor o igual al segundo.
  Si el número es mayor que cero, debe devolver "Mayor".
  Si el número es menor que cero, debe devolver "Menor".
  Y si el número es igual a cero, debe devolver "igual".
*/

function esMayorOMenor(num1,num2) {
  if (num1 > num2) {
    return "mayor";
  } else if (num1 < num2) {
    return "menor";
  } else {
    return "igual";
  }
} 

/* Actividad N°2: Calcular Precio de Productos -- 3 PUNTOS

  Implementa la función llamada `calcularPrecio` que tome dos argumentos: el nombre de un producto y la cantidad de ese producto que se desea comprar.
  Utiliza una declaración `switch` para determinar el precio unitario del producto según las siguientes opciones:

  - Si el producto es "manzanas", el precio unitario es $0.5 por unidad.
  - Si el producto es "plátanos", el precio unitario es $0.3 por unidad.
  - Si el producto es "uvas", el precio unitario es $0.8 por unidad.

  Si el producto no corresponde a ninguna de estas opciones, el precio unitario se establece en $0 (indicando que el producto no es válido o desconocido).

  Luego, utiliza el precio unitario y la cantidad para calcular el precio total. Devuelve un mensaje que indique el precio total de la compra, siguiendo el formato: "El precio total de {cantidad} {producto} es ${precioTotal}."

  Si el producto no es válido o la cantidad no es válida (por ejemplo, si la cantidad es negativa o no es un número), devuelve un mensaje que indique que la opción no es válida.

  Ejemplos de uso de la función:

  console.log(calcularPrecio("manzanas", 3)); // Debería mostrar: "El precio total de 3 manzanas es $1.5."
  console.log(calcularPrecio("plátanos", 2)); // Debería mostrar: "El precio total de 2 plátanos es $0.6."
  console.log(calcularPrecio("uvas", 1.5)); // Debería mostrar: "El precio total de 1.5 uvas es $1.2."

  RESPETEN EL MENASJE DEVUELTO -> el precio total de .... es ...

  AYUDA -> PARA REDONDEAR UN NUMERO FLOTANTE (float o con coma) SE PUEDE USAR EL METODO number.toFixed(digitos) -- Reemplazar "number" por su numero y "digitos" por 2
*/

function calcularPrecio(producto,cantidad) {
  let precioUnitario = 0;

  switch (producto) {
    case "manzanas":
      precioUnitario = 0.5;
      break;
    case "plaranos":
      precioUnitario = 0.3;
      break;
    default:
      return "la opcion no es valida";
  }

   if (isNaN(cantidad) //
   cantidad <=) {
    return "la opcion no es valida";
   } 

   const precioTotal = cantidad *
    precioUnitario;

    return `el precio total de $
    {cantidad} ${producto} $$
    {precio total.toFixed(2)}.`;
}

/* Actividad N°3: Calcular Promedios de Sub-Matrices - 5 PUNTOS

  Implementa la función llamada `calcularPromedios` que tome un array multidimensional como argumento.
  Este array contiene tres sub-arrays, cada uno de ellos contiene valores numéricos.

  La función debe calcular el promedio de valores en cada sub-array utilizando bucles for anidados y devolver un array con los promedios calculados.

  Si una sub-matriz está vacía, el promedio correspondiente en el resultado debería ser NaN para indicar que no se puede calcular un promedio para sub-matrices vacías.

  Ejemplo:
  Si se llama a la función de la siguiente manera:
  
  const matriz = [
    [3, 5, 7],
    [1, 2, 4, 6],
    [9, 10]
  ];
  
  El resultado debería ser:
  [5, 3.25, 9.5]
*/

function calcularPromedios(matriz) {
  const promedios = [];

  for (let i = o; i < 
    matriz.length; i++) {
      let subarray = matriz[i];

      if (subarray.length === 0) {
        promedios.push(NaN);
      } else {
        let suma = 0;

        for(let j= 0; j <
          subarray.length; j++) {
            suma += subarray[j];
          }

          let promedio = suma /
          subarray.length;
          promedios.push(promedio);
         }
       }
       
       return promedios;
       }



// ❌NO ELIMINAR NI MODIFICAR NADA DEBAJO DE ESTA LINEA❌
module.exports = {
  esMayorOMenor,
  calcularPrecio,
  calcularPromedios
}
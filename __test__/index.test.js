const {
  esMayorOMenor,
  calcularPrecio,
  calcularPromedios
} = require('../index');

// Pruebas adicionales para esMayorOMenor
describe("Actividad N°1: esMayorOMenor", () => {
  it("debe devolver 'Menor' cuando el primer número es menor que cero", () => {
    expect(esMayorOMenor(-5, 3)).toBe("Menor");
  });

  it("debe devolver 'Igual' cuando ambos números son cero", () => {
    expect(esMayorOMenor(0, 0)).toBe("Igual");
  });

  it("debe devolver 'Mayor' cuando el primer número es positivo", () => {
    expect(esMayorOMenor(10, 3)).toBe("Mayor");
  });

  // Prueba adicional para números negativos
  it("debe devolver 'Menor' cuando el primer número es negativo", () => {
    expect(esMayorOMenor(-8, -2)).toBe("Menor");
  });
});

// Pruebas adicionales para calcularPrecio
describe("Actividad N°2: calcularPrecio", () => {
  it("debe manejar cantidad igual a cero", () => {
    expect(calcularPrecio("manzanas", 0)).toBe("Opción no válida.");
  });

  it("debe manejar cantidad negativa", () => {
    expect(calcularPrecio("plátanos", -2)).toBe("Opción no válida.");
  });

  it("debe manejar opción desconocida", () => {
    expect(calcularPrecio("peras", 4)).toBe("Opción no válida.");
  });

  // Prueba adicional para calcular el precio total de plátanos con cantidad decimal
  it("debe calcular el precio total de plátanos con cantidad decimal correctamente", () => {
    expect(calcularPrecio("plátanos", 1.5)).toMatch(/el precio total de 1.5 plátanos es \$4.5/i);
  });
});


// Pruebas adicionales para calcularPromedios
describe("Actividad N°3: calcularPromedios", () => {
  it("debe manejar una matriz vacía", () => {
    const matriz= [];
    const promedios = calcularPromedios(matriz);
    expect(promedios).toEqual([]);
  });

  it("debe manejar sub-matrices vacías", () => {
    const matriz = [
      [],
      [1, 2],
      [],
    ];
    const promedios = calcularPromedios(matriz);
    const expected = [NaN, 1.5, NaN]; // Cambiado de [0, 1.5, 0]
    expect(promedios).toEqual(expected);
  });

  // Prueba adicional con sub-matrices de diferentes tamaños
  it("debe calcular los promedios correctamente con sub-matrices de diferentes tamaños", () => {
    const matriz = [
      [3, 5, 7],
      [1, 2, 4, 6],
      [9, 10, 20],
    ];
    const promedios = calcularPromedios(matriz);
    expect(promedios).toEqual([5, 3.25, 13]);
  });
});

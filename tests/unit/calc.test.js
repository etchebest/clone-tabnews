const calculadora = require('../../models/calc');

test("somar 2 + 2 retorna 4", () => {
  const result = calculadora.sum(2, 2)

  expect(result).toBe(4)

})

test("somar 5 + 100 retorna 105", () => {
  const result = calculadora.sum(5, 100)

  expect(result).toBe(105)

})

test("somar 'banana + 100 retorna 'Erro", () => {
  const result = calculadora.sum('banana', 100)

  expect(result).toBe("Erro")

})
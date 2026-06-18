import { describe, it, expect } from "@jest/globals";
import Service from "../src/services/exercicios";

// SOMA
describe("Testes para função somar", () => {
  it("CT1 - Deve somar 1 e 99 e retornar 100", () => {
    expect(Service.Somar(1, 99)).toBe(100);
  });

  it("CT2 - Deve somar -1 e 99 e retornar 98", () => {
    expect(Service.Somar(-1, 99)).toBe(98);
  });

  it("CT3 - Deve somar 1 e -99 e retornar -98", () => {
    expect(Service.Somar(1, -99)).toBe(-98);
  });

  it("CT4 - Deve somar -1 e -99 e retornar -100", () => {
    expect(Service.Somar(-1, -99)).toBe(-100);
  });

  it("CT5 - Deve somar 1.5 e 2.3 e retornar 3.8", () => {
    expect(Service.Somar(1.5, 2.3)).toBe(3.8);
  });

  it("CT6 - Deve inserir 'batata' no 1º parâmetro e 1 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Somar("batata", 1)).toThrow("Enviar somente números");
  });

  it("CT7 - Deve inserir 1 no 1º parâmetro e 'batata' no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Somar(1, "batata")).toThrow("Enviar somente números");
  });

  it("CT8 - Deve somar 0 e 1 e retornar 1", () => {
    expect(Service.Somar(0, 1)).toBe(1);
  });

  it("CT9 - Deve somar 1 e 0 e retornar 1", () => {
    expect(Service.Somar(1, 0)).toBe(1);
  });

  it("CT10 - Deve somar 0 e 0 e retornar 0", () => {
    expect(Service.Somar(0, 0)).toBe(0);
  });

  it("CT11 - Deve inserir null no 1º parâmetro e 1 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Somar(null, 1)).toThrow("Enviar somente números");
  });

  it("CT12 - Deve inserir 1 no 1º parâmetro e null no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Somar(1, null)).toThrow("Enviar somente números");
  });

  it("CT13 - Deve somar 9007199254740991 e 1 e lidar corretamente com o overflow", () => {
    const resultado = Service.Somar(9007199254740991, 1);
    expect(Number.isFinite(resultado)).toBe(true);
  });
});
// SUBTRAÇÃO
describe("Testes para função subtrair", () => {
  it("CT14 - Deve subtrair 2 e 10 e retornar -8", () => {
    expect(Service.Subtrair(2, 10)).toBe(-8);
  });

  it("CT15 - Deve subtrair 50 e 35 e retornar 15", () => {
    expect(Service.Subtrair(50, 35)).toBe(15);
  });

  it("CT16 - Deve subtrair -10 e 5 e retornar -15", () => {
    expect(Service.Subtrair(-10, 5)).toBe(-15);
  });

  it("CT17 - Deve subtrair 10 e -5 e retornar 15", () => {
    expect(Service.Subtrair(10, -5)).toBe(15);
  });

  it("CT18 - Deve subtrair 2.6 e 3.7 e retornar -1.1", () => {
    expect(Service.Subtrair(2.6, 3.7)).toBeCloseTo(-1.1, 10);
  });

  it("CT19 - Deve inserir 'banana' no 1º parâmetro e 12 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Subtrair("banana", 12)).toThrow(
      "Enviar somente números",
    );
  });

  it("CT20 - Deve inserir 17 no 1º parâmetro e 'banana' no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Subtrair(17, "banana")).toThrow(
      "Enviar somente números",
    );
  });

  it("CT21 - Deve subtrair 0 e 0 e retornar 0", () => {
    expect(Service.Subtrair(0, 0)).toBe(0);
  });

  it("CT22 - Deve subtrair -7.5 e -2.5 e retornar -5", () => {
    expect(Service.Subtrair(-7.5, -2.5)).toBe(-5);
  });

  it("CT23 - Deve subtrair 0 e -5 e retornar 5", () => {
    expect(Service.Subtrair(0, -5)).toBe(5);
  });

  it("CT24 - Deve inserir null no 1º parâmetro e 5 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Subtrair(null, 5)).toThrow("Enviar somente números");
  });

  it("CT25 - Deve inserir 5 no 1º parâmetro e null no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Subtrair(5, null)).toThrow("Enviar somente números");
  });
});
// MULTIPLICAÇÃO
describe("Testes para função multiplicar", () => {
  it("CT26 - Deve multiplicar 10 e 2 e retornar 20", () => {
    expect(Service.Multiplicar(10, 2)).toBe(20);
  });

  it("CT27 - Deve multiplicar -3 e 8 e retornar -24", () => {
    expect(Service.Multiplicar(-3, 8)).toBe(-24);
  });

  it("CT28 - Deve multiplicar 7 e -9 e retornar -63", () => {
    expect(Service.Multiplicar(7, -9)).toBe(-63);
  });

  it("CT29 - Deve multiplicar 8 e 0 e retornar 0", () => {
    expect(Service.Multiplicar(8, 0)).toBe(0);
  });

  it("CT30 - Deve multiplicar 5.5 e 2.9 e retornar 15.95", () => {
    expect(Service.Multiplicar(5.5, 2.9)).toBeCloseTo(15.95, 10);
  });

  it("CT31 - Deve inserir 'morango' no 1º parâmetro e 6 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Multiplicar("morango", 6)).toThrow(
      "Enviar somente números",
    );
  });

  it("CT32 - Deve inserir 6 no 1º parâmetro e 'morango' no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Multiplicar(6, "morango")).toThrow(
      "Enviar somente números",
    );
  });

  it("CT33 - Deve multiplicar 0 e 8 e retornar 0", () => {
    expect(Service.Multiplicar(0, 8)).toBe(0);
  });

  it("CT34 - Deve multiplicar -4 e -6 e retornar 24", () => {
    expect(Service.Multiplicar(-4, -6)).toBe(24);
  });

  it("CT35 - Deve multiplicar -1 e -1 e retornar 1", () => {
    expect(Service.Multiplicar(-1, -1)).toBe(1);
  });

  it("CT36 - Deve inserir null no 1º parâmetro e 5 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Multiplicar(null, 5)).toThrow(
      "Enviar somente números",
    );
  });

  it("CT37 - Deve inserir 5 no 1º parâmetro e null no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Multiplicar(5, null)).toThrow(
      "Enviar somente números",
    );
  });

  it("CT38 - Deve multiplicar 9007199254740991 por 9007199254740991 e lidar corretamente com o overflow", () => {
    const resultado = Service.Multiplicar(9007199254740991, 9007199254740991);
    expect(Number.isFinite(resultado)).toBe(true);
  });
});
// DIVISÃO
describe("Testes para função dividir", () => {
  it("CT39 - Deve dividir 10 por 2 e retornar 5", () => {
    expect(Service.Dividir(10, 2)).toBe(5);
  });

  it("CT40 - Deve dividir -20 por 4 e retornar -5", () => {
    expect(Service.Dividir(-20, 4)).toBe(-5);
  });

  it("CT41 - Deve dividir 15 por -3 e retornar -5", () => {
    expect(Service.Dividir(15, -3)).toBe(-5);
  });

  it("CT42 - Deve dividir 0 por 5 e retornar 0", () => {
    expect(Service.Dividir(0, 5)).toBe(0);
  });

  it("CT43 - Deve dividir 9 por 0 e retornar um erro", () => {
    expect(() => Service.Dividir(9, 0)).toThrow(
      "Não é possível dividir por zero",
    );
  });

  it("CT44 - Deve inserir 'abacaxi' no 1º parâmetro e 3 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Dividir("abacaxi", 3)).toThrow(
      "Enviar somente números",
    );
  });

  it("CT45 - Deve inserir 6 no 1º parâmetro e 'abacaxi' no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Dividir(6, "abacaxi")).toThrow(
      "Enviar somente números",
    );
  });

  it("CT46 - Deve dividir 5 por 2 e retornar 2.5", () => {
    expect(Service.Dividir(5, 2)).toBe(2.5);
  });

  it("CT47 - Deve dividir 7.5 por 2.5 e retornar 3", () => {
    expect(Service.Dividir(7.5, 2.5)).toBe(3);
  });

  it("CT48 - Deve dividir 0 por 0 e retornar um erro de operação indefinida", () => {
    expect(() => Service.Dividir(0, 0)).toThrow("Operação indefinida");
  });

  it("CT49 - Deve dividir 10 por 3 e retornar 3.33", () => {
    expect(Service.Dividir(10, 3)).toBeCloseTo(3.33, 2);
  });

  it("CT50 - Deve inserir null no 1º parâmetro e 5 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Dividir(null, 5)).toThrow("Enviar somente números");
  });

  it("CT51 - Deve inserir 5 no 1º parâmetro e null no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Dividir(5, null)).toThrow("Enviar somente números");
  });

  it("CT52 - Deve dividir -10 por -2 e retornar 5", () => {
    expect(Service.Dividir(-10, -2)).toBe(5);
  });
});
// POTÊNCIA
describe("Testes para função potência", () => {
  it("CT53 - Deve elevar 2 à potência 10 e retornar 1024", () => {
    expect(Service.Potencia(2, 10)).toBe(1024);
  });

  it("CT54 - Deve elevar 5 à potência 3 e retornar 125", () => {
    expect(Service.Potencia(5, 3)).toBe(125);
  });

  it("CT55 - Deve elevar 9 à potência 2 e retornar 81", () => {
    expect(Service.Potencia(9, 2)).toBe(81);
  });

  it("CT56 - Deve elevar -3 à potência 3 e retornar -27", () => {
    expect(Service.Potencia(-3, 3)).toBe(-27);
  });

  it("CT57 - Deve elevar -2 à potência 2 e retornar 4", () => {
    expect(Service.Potencia(-2, 2)).toBe(4);
  });

  it("CT58 - Deve elevar 7 à potência 0 e retornar 1", () => {
    expect(Service.Potencia(7, 0)).toBe(1);
  });

  it("CT59 - Deve elevar 0 à potência 5 e retornar 0", () => {
    expect(Service.Potencia(0, 5)).toBe(0);
  });

  it("CT60 - Deve elevar 0 à potência 0 e retornar um erro de operação indefinida", () => {
    expect(() => Service.Potencia(0, 0)).toThrow("Operação indefinida");
  });

  it("CT61 - Deve elevar 4 à potência -2 e retornar 0.0625", () => {
    expect(Service.Potencia(4, -2)).toBe(0.0625);
  });

  it("CT62 - Deve elevar 1 à potência 999 e retornar 1", () => {
    expect(Service.Potencia(1, 999)).toBe(1);
  });

  it("CT63 - Deve elevar -1 à potência 999 e retornar -1", () => {
    expect(Service.Potencia(-1, 999)).toBe(-1);
  });

  it("CT64 - Deve elevar 2.5 à potência 2 e retornar 6.25", () => {
    expect(Service.Potencia(2.5, 2)).toBe(6.25);
  });

  it("CT65 - Deve inserir 'melancia' no 1º parâmetro e 2 no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Potencia("melancia", 2)).toThrow(
      "Enviar somente números",
    );
  });

  it("CT66 - Deve inserir 2 no 1º parâmetro e 'melancia' no 2º parâmetro e retornar um erro", () => {
    expect(() => Service.Potencia(2, "melancia")).toThrow(
      "Enviar somente números",
    );
  });

  it("CT67 - Deve elevar -2 à potência -3 e retornar -0.125", () => {
    expect(Service.Potencia(-2, -3)).toBe(-0.125);
  });
});
// RAIZ QUADRADA
describe("Testes para função raiz quadrada", () => {
  it("CT68 - Deve calcular a raiz quadrada de 25 e retornar 5", () => {
    expect(Service.RaizQuadrada(25)).toBe(5);
  });

  it("CT69 - Deve calcular a raiz quadrada de 144 e retornar 12", () => {
    expect(Service.RaizQuadrada(144)).toBe(12);
  });

  it("CT70 - Deve calcular a raiz quadrada de 2 e retornar 1.41", () => {
    expect(Service.RaizQuadrada(2)).toBeCloseTo(1.41, 2);
  });

  it("CT71 - Deve calcular a raiz quadrada de 0 e retornar 0", () => {
    expect(Service.RaizQuadrada(0)).toBe(0);
  });

  it("CT72 - Deve calcular a raiz quadrada de 1 e retornar 1", () => {
    expect(Service.RaizQuadrada(1)).toBe(1);
  });

  it("CT73 - Deve calcular a raiz quadrada de 100 e retornar 10", () => {
    expect(Service.RaizQuadrada(100)).toBe(10);
  });

  it("CT74 - Deve calcular a raiz quadrada de 0.25 e retornar 0.50", () => {
    expect(Service.RaizQuadrada(0.25)).toBeCloseTo(0.5, 2);
  });

  it("CT75 - Deve calcular a raiz quadrada de 2.25 e retornar 1.50", () => {
    expect(Service.RaizQuadrada(2.25)).toBeCloseTo(1.5, 2);
  });

  it("CT76 - Deve calcular a raiz quadrada de 1000000 e retornar 1000", () => {
    expect(Service.RaizQuadrada(1000000)).toBe(1000);
  });

  it("CT77 - Deve calcular a raiz quadrada de -9 e retornar um erro", () => {
    expect(() => Service.RaizQuadrada(-9)).toThrow(
      "Não é possível calcular raiz quadrada de número negativo",
    );
  });

  it("CT78 - Deve calcular a raiz quadrada de -0.5 e retornar um erro", () => {
    expect(() => Service.RaizQuadrada(-0.5)).toThrow(
      "Não é possível calcular raiz quadrada de número negativo",
    );
  });

  it("CT79 - Deve inserir 'abacate' no parâmetro e retornar um erro", () => {
    expect(() => Service.RaizQuadrada("abacate")).toThrow(
      "Enviar somente números",
    );
  });

  it("CT80 - Deve inserir true no parâmetro e retornar um erro", () => {
    expect(() => Service.RaizQuadrada(true)).toThrow("Enviar somente números");
  });

  it("CT81 - Deve inserir null no parâmetro e retornar um erro", () => {
    expect(() => Service.RaizQuadrada(null)).toThrow("Enviar somente números");
  });

  it("CT82 - Deve calcular a raiz quadrada de 99999999 e retornar 10000.00", () => {
    expect(Service.RaizQuadrada(99999999)).toBeCloseTo(10000, 2);
  });
});

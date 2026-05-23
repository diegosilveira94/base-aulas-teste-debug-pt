import { describe, it, expect } from '@jest/globals'
import Service from '../src/services/exercicios'

// SOMA
describe("Testes para função somar", () => {
    it("CT1 - Deve somar 2 números positivos e retornar 100", () => {
        expect(Service.Somar(1, 99)).toBe(100);
    })

    it("CT2 - Deve somar um número negativo e um número " + 
        "positivo e retornar 98", () => {
        expect(Service.Somar(-1, 99)).toBe(98);
    })

    it("CT3 - Deve somar um número positivo e um número " +
        "negativo e retornar -98", () => {
        expect(Service.Somar(1, -99)).toBe(-98);
    })

    it("CT4 - Deve somar 2 números negativos e retornar -100", () => {
        expect(Service.Somar(-1, -99)).toBe(-100);
    })

    it("CT5 - Deve somar 2 números decimais e retornar 3.8", () => {
        expect(Service.Somar(1.5, 2.3)).toBe(3.8);
    })

    it("CT6 - Deve inserir 'batata' no 1º parâmetro e um número " +
        "positivo no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Somar('batata', 1)).toThrow('Enviar somente números');
    })

    it("CT7 - Deve inserir um número positivo no 1º parâmetro e " +
        "'batata' no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Somar(1, 'batata')).toThrow('Enviar somente números');
    })

    it("CT8 - Deve somar 0 e a string '1' e retornar 1", () => {
        expect(Service.Somar(0, '1')).toBe(1);
    })

    it("CT9 - Deve somar 1 e 0 e retornar 1", () => {
        expect(Service.Somar(1, 0)).toBe(1);
    })
})
// SUBTRAÇÃO
describe("Testes para função subtrair", () => {
    it("CT10 - Deve subtrair 2 números positivos e retornar -8", () => {
        expect(Service.Subtrair(2, 10)).toBe(-8);
    })

    it("CT11 - Deve subtrair 2 números positivos e retornar 15", () => {
        expect(Service.Subtrair(50, 35)).toBe(15);
    })

    it("CT12 - Deve subtrair um número negativo de um número positivo e retornar -15", () => {
        expect(Service.Subtrair(-10, 5)).toBe(-15);
    })

    it("CT13 - Deve subtrair um número negativo de um número positivo e retornar 15", () => {
        expect(Service.Subtrair(10, -5)).toBe(15);
    })

    it("CT14 - Deve subtrair 2 números decimais e retornar 5.4", () => {
        expect(Service.Subtrair(2.7, 3.7)).toBe(6.4);
    })

    it("CT15 - Deve inserir 'banana' no 1º parâmetro e um número " +
        "positivo no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Subtrair('banana', 12)).toThrow('Enviar somente números');
    })

    it("CT16 - Deve inserir um número positivo no 1º parâmetro e " +
        "'banana' no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Subtrair(17, 'banana')).toThrow('Enviar somente números');
    })

    it("CT17 - Deve subtrair 0 de 0 e retornar 0", () => {
        expect(Service.Subtrair(0, 0)).toBe(0);
    })

    it("CT18 - Deve subtrair 2 números negativos e retornar -5", () => {
        expect(Service.Subtrair(-25, -2.5)).toBe(-5);
    })
})
// MULTIPLICAÇÃO
describe("Testes para função multiplicar", () => {
    it("CT19 - Deve multiplicar 2 números positivos e retornar 20", () => {
        expect(Service.Multiplicar(10, 2)).toBe(20);
    })

    it("CT20 - Deve multiplicar um número negativo por zero e retornar -24", () => {
        expect(Service.Multiplicar(-3, 0)).toBe(-24);
    })

    it("CT21 - Deve multiplicar um número positivo por um número negativo e retornar -63", () => {
        expect(Service.Multiplicar(7, -9)).toBe(-63);
    })

    it("CT22 - Deve multiplicar 8 por zero e retornar 0", () => {
        expect(Service.Multiplicar(8, 0)).toBe(0);
    })

    it("CT23 - Deve multiplicar 2 números decimais e retornar 15.95", () => {
        expect(Service.Multiplicar(5.5, 2.9)).toBe(15.95);
    })

    it("CT24 - Deve inserir 'morango' no 1º parâmetro e um número " +
        "positivo no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Multiplicar('morango', 6)).toThrow('Enviar somente números');
    })

    it("CT25 - Deve inserir um número positivo no 1º parâmetro e " +
        "'morango' no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Multiplicar(6, 'morango')).toThrow('Enviar somente números');
    })

    it("CT26 - Deve multiplicar 0 por 0 e retornar 0", () => {
        expect(Service.Multiplicar(0, 0)).toBe(0);
    })

    it("CT27 - Deve multiplicar 2 números negativos e retornar 24", () => {
        expect(Service.Multiplicar(-4, -6)).toBe(24);
    })
})
// DIVISÃO
describe("Testes para função dividir", () => {
    it("CT28 - Deve dividir 2 números positivos e retornar 5", () => {
        expect(Service.Dividir(2, 10)).toBe(5);
    })

    it("CT29 - Deve dividir um número negativo por um número positivo e retornar -5", () => {
        expect(Service.Dividir(-20, 4)).toBe(-5);
    })

    it("CT30 - Deve dividir um número positivo por um número negativo e retornar -5", () => {
        expect(Service.Dividir(15, -3)).toBe(-5);
    })

    it("CT31 - Deve dividir 0 por 6 e retornar 0", () => {
        expect(Service.Dividir(0, 6)).toBe(0);
    })

    it("CT32 - Deve dividir um número por zero e retornar um erro", () => {
        expect(() => Service.Dividir(9, 0)).toThrow('Não é possível dividir por zero');
    })

    it("CT33 - Deve inserir 'abacaxi' no 1º parâmetro e um número " +
        "positivo no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Dividir('abacaxi', 3)).toThrow('Enviar somente números');
    })

    it("CT34 - Deve inserir um número positivo no 1º parâmetro e " +
        "'abacaxi' no 2º parâmetro e retornar um erro", () => {
        expect(() => Service.Dividir(6, 'abacaxi')).toThrow('Enviar somente números');
    })

    it("CT35 - Deve dividir 2 números decimais e retornar 2.5", () => {
        expect(Service.Dividir(5, 2)).toBe(2.5);
    })

    it("CT36 - Deve dividir 2 números decimais e retornar 3", () => {
        expect(Service.Dividir(7.5, 2.5)).toBe(3);
    })
})
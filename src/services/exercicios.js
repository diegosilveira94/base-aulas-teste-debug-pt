class Service {
  validarNumero(...valores) {
    for (const valor of valores) {
      if (valor === null || typeof valor === "boolean" || isNaN(valor)) {
        throw new Error("Enviar somente números");
      }
    }
  }

  Somar(num1, num2) {
    this.validarNumero(num1, num2);
    return Number(num1) + Number(num2);
  }

  Subtrair(num1, num2) {
    this.validarNumero(num1, num2);
    return Number(num1) - Number(num2);
  }

  Multiplicar(num1, num2) {
    this.validarNumero(num1, num2);
    return Number(num1) * Number(num2);
  }

  Dividir(num1, num2) {
    this.validarNumero(num1, num2);
    if (Number(num1) === 0 && Number(num2) === 0) {
      throw new Error("Operação indefinida");
    }
    if (Number(num2) === 0) {
      throw new Error("Não é possível dividir por zero");
    }
    return Number(num1) / Number(num2);
  }

  Potencia(num1, num2) {
    this.validarNumero(num1, num2);
    if (Number(num1) === 0 && Number(num2) === 0) {
      throw new Error("Operação indefinida");
    }
    return Number(num1) ** Number(num2);
  }

  RaizQuadrada(num1) {
    this.validarNumero(num1);
    if (Number(num1) < 0) {
      throw new Error(
        "Não é possível calcular raiz quadrada de número negativo",
      );
    }
    return Math.sqrt(Number(num1));
  }
}

export default new Service();

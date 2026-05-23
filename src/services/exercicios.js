class Service {
  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Enviar somente números");
    }
    return Number(num1) + Number(num2);
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Enviar somente números");
    }
    return Number(num1) - Number(num2);
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Enviar somente números");
    }
    return Number(num1) * Number(num2);
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Enviar somente números");
    }
    if (num2 === 0) {
      throw new Error("Não é possível dividir por zero");
    }
    return Number(num1) / Number(num2);
  }
}

export default new Service();

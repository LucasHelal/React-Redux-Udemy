class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  toString() {
    return `Pessoa: ${this.nome}`;
  }
}

const pessoa = new Pessoa('Luca2s');
console.log(pessoa.toString());

// Propriedades públicas e privadas

//Você está trabalhando em um sistema de gerenciamento de usuários e pediu a um colega que implementasse uma classe para o usuário padrão. Como todo cadastro de usuários sempre envolve dados sensíveis, a especificação da classe pede que as propriedades sejam privadas.

//Um tempo depois, você recebe o seguinte código:

class User {
  #nome;
  #email;
  #cpf;
  constructor(nome, email, cpf) {
    this.#nome = nome;
    this.#email = email;
    this.#cpf = cpf;
  }

  get nome() {
    return this.nome;
  }
}

//Você tem a impressão de que seu colega se distraiu na implementação, mas resolve testar e conferir.

//Se executarmos o código abaixo para testar a classe:

const novoUser = new User("Carol", "c@c.com", "12312312312");
console.log(novoUser.nome);

// o get retorna não a propriedade #nome, mas sim nome. Embora sejam consideradas como variáveis diferentes pelo JavaScript, esse código irá resultar em um stack overflow, pois a propriedade nome sendo chamada dentro do getter get nome() (ambas com a mesma nomenclatura) faz com que o getter seja chamado dentro dele mesmo, de forma recursiva, causando o “estouro” na pilha de processos do NodeJS.

//Código para arrumar o método get:

/*
get nome() {
    return this.#nome;
}
*/

//Dessa forma ele vai retornar o nome (Carol)

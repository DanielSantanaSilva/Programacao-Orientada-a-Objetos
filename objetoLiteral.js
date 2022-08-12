const user = {
  nome: "Daniel Santana",
  email: "daniel@email.com",
  nascimento: "22/07/1985",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(
      `"Nome: ${this.nome}, E-mail: ${this.email}, Nascimento: ${this.nascimento}, Papel: ${this.role}, Ativo: ${this.ativo}`
    );
  },
};

const admin = {
  nome: "Eduardo",
  email: "edu@email.com",
  role: "admin",
  criarCurso() {
    console.log("curso criado");
  },
};

Object.setPrototypeOf(admin, user);
//Cadeia de protótipo, para admin localizar o protótipo de user e herdar suas funções.

user.exibirInfos();
admin.criarCurso();

admin.exibirInfos();

const User = require("./User");
class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  criarCursao(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} com ${vagas} vagas, criado!`;
  }
}

module.exports = Admin;

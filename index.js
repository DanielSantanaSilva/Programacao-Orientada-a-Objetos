const User = require("./User");
const Admin = require("./Admin");
const Docente = require("./Docente");

const novoUser = new User("Daniel", "daniel@email.com", "22-07-2022");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Eduardo", "edu@email.com", "12-07-2022");
console.log(novoAdmin.exibirInfos());

const User = require("./User");
const Admin = require("./Admin");
const Docente = require("./Docente");

const novoUser = new User("Daniel", "daniel@email.com", "22-07-2022");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Eduardo", "edu@email.com", "12-07-2022");
console.log(novoAdmin.exibirInfos());
//Nova classe inserida pelo método construtor feito em User.js

console.log(novoAdmin.nome);
//Saida utilizando getters do User.js

novoAdmin.nome = "Vitória";
//Alteração utilizando Setters do User.js

console.log(novoAdmin.nome);
//Console.log() só para mostrar a alteração.

const novoDocente = new Docente("Guilherme", "gui@email.com", "25-09-2022");
//Incluido novo docente

console.log(novoDocente.exibirInfos());

/*No começo, começamos vendo o que é orientação a objeto, um pouco do que são os paradigmas de programação.

Depois, passamos para o jeito JavaScript de fazer a orientação a objeto, entendendo o que são as funções construtoras, como o JavaScript faz orientação a objetos usando funções, o que são os protótipos, o que é o modelo de herança de protótipo, que é característico do JavaScript, depois passamos para as nossas classes, vendo o que são classes, o que é herança de classe, porque uma classe herda de outra classe.

Depois de vermos objetos, classes e herança de classe, passamos para encapsulamento, com encapsulamento conseguimos esconder e expor apenas o que queremos de métodos e de propriedades de uma classe, nós a protegemos. Depois, vimos também um pouco sobre polimorfismo, porque o polimorfismo existe, como ele funciona, como ele pode ser usado. E terminamos fazendo um passada sobre o que são os princípios de design de software do SOLID, o que é cada letra do acrônimo e o que ele significa e como aplicamos ou poderíamos aplicar isso em um projeto. */

//Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.

// Exemplo de factory function:

function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`;
    },
  };
}

//Veja que, não se trata de um objeto literal mas sim uma função que retorna (através da palavra-chave return) um objeto.

//A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos()):

const newUser = criaUser("Rodrigo", "r@r.com");
console.log(newUser);
console.log(newUser.exibeInfos());

/*
{
    nome: 'Rodrigo',
    email: 'r@r.com',
    exibeInfos: [Function: exibeInfos]
  }
  
  Rodrigo, r@r.com
*/

//As factory functions são diferentes das funções construtoras. Veja um exemplo de função construtora:

/*
function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos () {
      return `${nome}, ${email}`
    }
   }

const newUser = new User('Mariana', 'm@m.com')
console.log(newUser)
console.log(newUser.exibeInfos()) 
*/

/*
User {
    nome: 'Mariana',
    email: 'm@m.com',
    exibeInfos: [Function (anonymous)]
  }
  
  Mariana, m@m.com
*/

//Quais as diferenças e qual devo usar?

//Não há consenso, pois ambas têm vantagens e desvantagens. A sintaxe da função construtora é mais confortável para quem está acostumado com o uso de classes; já a factory function é mais flexível a respeito do tipo de objeto que será retornado.

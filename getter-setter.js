//Mais um exercício com setters.

/* Podemos supor que, na classe User, seja necessário separar as propriedades de nome e sobrenome dos usuários, pois a base de dados guarda cada uma dessas informações em campos separados. Porém, em todas as comunicações que levam o nome do usuário, nome e sobrenome devem aparecer juntos.

Uma forma de resolver isso seria através do setter de nome. Vamos alterar um pouco a classe User para receber, no construtor, #nome e #sobrenome:


default class User {
    #nome
    #sobrenome
    // restante das propriedades
/ 

E alteramos também no construtor:


constructor (nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#sobrenome = sobrenome
    // restante das propriedades


A questão agora é que nome e sobrenome devem ser unidos no getter (para serem “mandados” para fora da classe como um único dado) e separados no setter, pois o método sempre receberá um nome completo e #nome e #sobrenome são propriedades diferentes que estão salvas no banco em campos separados.

Começando pelo setter:



set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('formato não válido')
    }
    let [nome, ...sobrenome] = novoNome.split(" ")
    sobrenome = sobrenome.join(' ')
    this.#nome = nome
    this.#sobrenome = sobrenome
  }


//Aqui pegamos uma string única e separamos em nome e sobrenome, para que cada propriedade possa ser atualizada. Fizemos isso utilizando os métodos do JavaScript split() e join para manipular strings e arrays.

get nome() {
    return this.#nome
  }
 
  get sobrenome() {
    return this.#sobrenome
  }

  Testando no console:

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'

Por fim, podemos juntar as duas propriedades para retornar o nome completo:

 get nome() {
   return `${this.#nome} ${this.#sobrenome}`
 }

//Para saber mais: getters e setters com funções

 Na atividade anterior sobre atributos privados vimos um exemplo de código onde, ao invés de get e set, foram utilizadas funções para esse papel:

 class User {
 _nome = '';

 setNome(nome) {
   this._nome = nome;
 }

 getNome() {
   return this._nome;
 }
}

É possível usar métodos como assessors, como visto acima. Porém, há algumas vantagens na utilização de get/set:

Apesar de serem métodos, a sintaxe para uso do get e set é a mesma que utiilizamos para acessar/modificar propriedades públicas normalmente, o que faz sentido com a ideia do encapsulamento de “expôr” somente o que é necessário da classe. Por outro lado, na forma acima, os métodos são acessados com a sintaxe usual de execução de função (usando parênteses).

Por exemplo, usando funções como assessors teríamos as seguintes chamadas de método:

const nome = novoUser.getNome() //getter
novoUser.setNome('Pedro') //setter
novoUser.exibeInfos() // método normal

Utilizando get e set:

const nome = novoUser.nome //getter
novoUser.nome = 'Pedro' //setter
novoUser.exibeInfos() // método normal

Dessa forma, o uso de get/set ajuda na legibilidade.

Além disso, os assessor têm, em si mesmos, limitações quanto aos parâmetros aceitos: get não aceita nenhum parâmetro e set apenas um parâmetro (referente ao dado que será definido), o que ajuda a garantir que não irão receber parâmetros “inesperados” que podem causar bugs. O mesmo comportamento pode ser implementado em métodos normais, por meio de validações, porém isso torna o desenvolvimento menos ágil.

Na verdade (como em vários outros aspectos do desenvolvimento com JavaScript) não há consenso quanto ao uso de métodos normais no lugar de assessors e você vai encontrar as mais diversas opiniões sobre esse assunto. Como há outras linguagens de programação que não têm assessors e utilizam funções como getters/setters, pessoas que já desenvolvem nestas linguagens podem transferir sua experiência para o JavaScript. Porém, agora que você já conhece os dois casos, já fica mais fácil identificar e ler códigos que implementam o encapsulamento das duas formas. */

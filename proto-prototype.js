// Diferença entre proto e prototype

//Para entender melhor essa diferença, vamos testar alguns códigos:

let user = {
  perfil: "estudante",
};

let estudante = {
  nome: "juliana",
};

Object.setPrototypeOf(estudante, user);

//No trecho acima, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto user será usado como protótipo para o objeto estudante. Podemos testar esse código direto no terminal:

console.log(estudante.nome); // 'juliana'
console.log(estudante.perfil); //'estudante'

//Ou seja, o objeto estudante, além da propriedade nome, também tem a propriedade perfil, trazida do protótipo user.

/*É possível acessar __proto__ de estudante, porém, para isso, devemos copiar o código acima e executá-lo no console do navegador, pois o módulo console do NodeJS funciona de uma forma um pouco diferente e não vai acessar essa propriedade.

Trecho de tela do console do navegador Chrome, executando o código acima da imagem. Após esse trecho de código, o console executa o comando ‘estudante.__proto__’, recebendo como retorno o objeto {perfil: estudante}

Se adicionarmos mais uma propriedade ao objeto user, essa propriedade entrará também como protótipo do objeto estudante:

Trecho de tela do console do navegador Chrome, executando as seguintes linhas de código: ‘user.ativo = true’, retornando ‘true’ e em seguida ‘estudante.__proto__’, retornando o objeto {perfil: ‘estudante’, ativo: true}

Quando usamos objetos e funções para trabalhar com orientação a objetos com JavaScript, os objetos criados não são instâncias diferentes (ou seja, cópias do objeto-base) e sim referências a um mesmo objeto que está sendo delegado aos objetos que o usam como protótipo. */

//Agora vamos ver outro exemplo, dessa vez utilizando new para criar um novo objeto:

function User() {}
User.prototype.perfil = "estudante";
let estudante2 = new User();

console.log(estudante2.perfil); //estudante

//No caso acima, a palavra-chave new vai criar um novo objeto simples e definir, na propriedade prototype desse objeto recém criado, as propriedades de protótipo que encontrar em User. O prototype é criado automaticamente e existe como propriedade apenas em funções, para quando queremos usar determinada função como construtor usando new.

/* último teste, copiando a função User() criada acima e executando no console do navegador:

Trecho de tela do console do navegador Chrome, executando as linhas de código criadas anteriormente: function User(){}, User.prototype.perfil = ‘estudante’, let estudante = new User() e console.log(estudante.perfil)

Se tentarmos acessar as propriedades prototype e __proto__ de estudante, obtemos os seguintes retornos:

Trecho de tela do console do navegador Chrome, executando as seguintes linhas de código: estudante.__proto__ com retorno {perfil: ‘estudante’, constructor: f}, estudante.prototype com retorno undefined e User.prototype com retorno {perfil: ‘estudante’, constructor: f} */

/* Em resumo: __proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto.

prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.

Você também pode ter notado que alguns objetos também possuem uma propriedade chamada [[Prototype]]. Esta é uma propriedade interna que cada instância de um objeto possui, e que aponta (como um ponteiro) para a propriedade prototype da função que está sendo usada como protótipo. Quando criamos um novo objeto usando new, a propriedade prototype do construtor (como vimos acima) é “linkada” à essa propriedade [[Prototype]] da nova instância criada. */

//Protótipo vs prototype

//Praticamente todos os dados criados em JavaScript (objetos, arrays, etc) têm um protótipo, porém apenas alguns deles têm a propriedade prototype. São estes objetos que contêm a propriedade prototype que acessamos com Object.prototype, Array.prototype e etc durante o vídeo, que definem os protótipos para todos os outros acima na cadeia.

//Ou seja, todos os objetos criados a partir de Object, Array, String, etc, têm um protótipo que foi “herdado” destes, mas não necessariamente têm uma propriedade prototype.

//Cópia vs referência

//Os métodos e propriedades não são copiados de um objeto para outro na cadeia de protótipos - eles são acessados pelo interpretador ao percorrer a cadeia e os métodos executados de acordo com o this, ou seja, o contexto em que o método foi executado.

//__proto__ será descontinuado

//O uso de __proto__ durante a aula é só para dar exemplo e acessar a cadeia de protótipos. Esta é uma propriedade “assessor” que serve para “expor” o protótipo dos objetos e está em processo de ser descontinuada.

//Não altere o prototype

//Não é recomendável alterar diretamente o prototype, pois alterar diretamente as regras de herança de qualquer objeto afeta a performance do código em qualquer interpretador, seja o NodeJS ou navegadores.

//Cuidando da performance

//Todas as propriedades de uma cadeia de protótipos são enumeradas e o tempo que o interpretador leva para pesquisar uma propriedade, desde o nível mais alto na cadeia, pode ser longo e impactar o desempenho. Além disso, se o código tentar acessar uma propriedade não existente, vai percorrer toda a cadeia durante a busca. Assim, não é uma boa prática criar longas cadeias de protótipos.

//O que são interfaces?

/* Precisamos lembrar que embora o paradigma POO seja aplicável, JavaScript não nasceu como uma linguagem orientada a objetos a linguagem. Originalmente é multi-paradigma e de tipagem dinâmica, isso significa que suporta diferentes formatos de escrita de código (os paradigmas), como o orientado a objetos, imperativo e funcional.

Quando desenvolvemos em orientação a objetos com JavaScript, estamos trabalhando com uma linguagem baseada em protótipos de objetos, ou seja, como vimos na aula sobre o modelo de protótipos, tudo em JavaScript é um objeto! pois podemos clonar e estender objetos.

Um exemplo é a partir da criação do objeto Fruta, vamos imaginar que esse objeto representa todas as propriedades e funcionalidades das frutas em geral. Dessa forma, a partir do objeto Fruta, podemos clonar propriedades gerais e específicas para criar um novo objeto. Por conseguinte, vamos representar uma nova fruta chamada Banana a partir de Fruta e assim sucessivamente. Se aplicarmos o conceito de classe a esse caso, uma class Fruta pode ser estendida para uma class Banana.

Além disso, o JavaScript é uma linguagem fracamente tipada (você pode ver mais sobre tipagem neste artigo). Por conta disso, o JavaScript não possui suporte e não trabalha com interfaces, que é um conceito próprio da orientação a objetos e normalmente aplicado em linguagens compiladas e fortemente tipadas. Vamos entender melhor?

As interfaces possuem um papel muito importante na programação orientada a objetos, uma vez que esse paradigma é baseado na ideia de que os objetos apresentam uma interação entre si. Nesse sentido, as interfaces de um objeto funcionam como uma coleção de métodos pelos quais é possível realizar essas interações.

Imagine uma fôrma pré-definida/moldada para alguma coisa. As interfaces funcionam de forma similar, é como um “contrato de código”, onde você pode nomear, parametrizar ou descrever exatamente quais serão os tipos de objetos gerados a partir desse “molde”.

Normalmente você pode usar interfaces em TypeScript durante a criação do contrato que as classes devem seguir e os membros da interface que essa classe deve implementar. Além disso, você pode representar os tipos na sua aplicação, assim como sua declaração normal de tipo de dado. Interface então é uma estrutura que define um contrato na sua aplicação, e as classes que derivam de uma interface obrigatoriamente devem seguir a estrutura fornecida pela interface, ou seja, devem seguir seus tipos e métodos. O compilador do TypeScript não converte interfaces para JavaScript, e imaginem a confusão que seria se esse conceito fosse aplicado a uma linguagem fracamente tipada...

A interface é construída por meio da checagem de tipos, que são as conhecidas “duck typing” (tipagem pato) ou a “structural subtyping” (subtipagem estrutural).

O duck typing, comum em linguagens fracamente tipadas, é como costuma-se chamar o “teste do pato” para um objeto: “Se anda como um pato, nada como um pato e grasna como um pato, então deve ser um pato”. Ou seja, não interessa se estamos falando de um pato de verdade, interessa que ele se parece com um. Traduzindo isso para programação, não nos interessa o tipo do objeto, mas sim o que o objeto consegue fazer, ou seja, se ele tem determinados métodos e propriedades. Para declarar uma interface em TypeScript, utilizamos a palavra reservada interface e podemos inserir as propriedades e declarar os métodos com uma função ou arrow function:

interface User {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}COPIAR CÓDIGO
Aqui a única função da interface é descrever um tipo.

Agora vamos implementar a interface declarando uma variável do tipo Empregado. Ela irá preencher esse contrato e passará valores às propriedades nome e sobrenome, e o método nomeCompleto precisa combinar as duas propriedades e retornar o resultado.

let empregado: Empregado = {
    nome : "Haroldo",
    sobrenome: "Calvin",
    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

empregado.nome = 20;  //* Error - Type 'number' is not assignable to type 'string'COPIAR CÓDIGO
Essa verificação garante que 20, um dado do tipo Number, não será atribuído a empregado.nome, justamente porque está esperando uma String.

O uso de interfaces é útil para validar e documentar a forma que os objetos serão passados como parâmetros e objetos retornados de funções, assim como suas propriedades. É indiscutível que essa prática irá garantir a detecção de erros mais rapidamente pois você não precisará buscá-los após o runtime da sua aplicação. */
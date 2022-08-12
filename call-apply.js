//Apply()

//O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:

function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const user = {
  nome: "Mariana",
  email: "m@m.com",
  executaFuncao: function (fn) {
    fn.apply(user, [this.nome, this.email]);
  },
};
user.executaFuncao(exibeMensagem); //usuário: Mariana, email m@m.com

//Usando arrays, é possível passar os argumentos via variável ou até mesmo usando a propriedade arguments que existe internamente em todo objeto.

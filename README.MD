# Lista de compras

O aplicativo desenvolvido permite o cadastro de itens em uma lista
de compras para facilitar a vida do usuário quando ele vai ao mercado.


## 🚀 Requisitos 

Foram implementados todos os requisitos solicitados (obrigatórios e opcionais)

Requisitos obrigatórios: 
O app deve ser desenvolvido em React Native; 
O app deve possuir um campo para cadastro de novos itens na lista; 
O app deve contabilizar alterar os estilos do item da lista caso este item esteja selecionado; 
O app deve permitir a exclusão de itens da lista, sendo que é necessário confirmar
com o usuário se o item pode realmente ser excluído; 
O app deve apresentar a mensagem de “nenhum item na lista” caso nenhum item
tenha sido adicionado. 

Requisitos opcionais: 
Splash screen; 
Persistir os itens da lista para que o usuário possa fechar o app sem perder os dados; 
Confirmar com o usuário se deseja realmente fechar o app; 
Permitir edição do nome do item da lista; 
Executar um som ao selecionar/remover seleção de um item da lista.


## ⚙️ Testes

Devido limitações de infraestrutura o App foi testado apenas na plataforma "Android", porém tomando 
cuidado com as validações para outras plataformas

## 📌 Observações

O App foi desenvolvido em React Native utilizando o Expo Bare Workflow e o gerenciador de pacotes Yarn

Icones, Splash Screen e o Som ao selecionar/remover seleção de um item da lista foram implementados apenas
na plataforma "Android"

A ação de alterar a descrição do item da lista foi inserida no evento "onLongPress", após essa ação será exibido a Modal 
para informar a nova descrição do item

Existem algumas melhorias que notei durante o desenvolvimento do projeto, porém devido ao tempo não foi possível
realizar, alguns exemplos: melhoria dos métodos de manipulação dos dados, criação de componente de botão, melhoria 
do componente de modal para ser reaproveitado e validações na plataforma "iOS"

* [Video] (https://drive.google.com/file/d/1Yj0Dyhwlb-FGRO7OI7c55AjAakTyuZfb/view?usp=sharing) - Demonstração do App em funcionamento

## ✒️ Autor

**Luiz Henrique Silva Alves** - [GitHub](https://github.com/LuizHenrique98) - [LinkedIn](https://www.linkedin.com/in/luiz-henriquesa/)





# Validacação OpenId
## Descrição

Projeto criado para demonstração de funcionalidade da transferência de sessão.

## Funcionalidades

* Registro de usuário no clube
* Retorno de "código de acesso"

## Como usar
 
1. Comando para instalação do projeto: `npm i `
2. Comando para executar o projeto: `npm start `


Com isso, será disponibilidada uma página html no endereço "http://localhost:3000".

## Requisitos

* Ter instalado o Nodejs

## Fluxo de comunicação

- A comunicação se inicia com a ação do usuário informando interesse em acessar o ambiente do clube.
- Em seguida, a empresa envia requisição para o cadastro/atualização do usuario no clube.
- O Clube retorna um código de acesso para ser utilização como autenticação pela empresa.
- A empresa acessa a url do clube informando o código de acesso gerado.
- O Clube valida o token de acesso e permite/bloqueia o acesso ao clube.
- Página é apresentada para o usuário.

  <p align="center">
    <img src="./docs/images/image.png"/>
  </p>


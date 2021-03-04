## Descrição do projeto
Este projeto contem uma listagem de Artistas e Albums, login e histórico de pesquisas das listagens.

## Tecnologias utilizadas
- ReactJs
- Typescript
- Styled-Components
- Redux
- Redux-saga
- Axios

## APIs utilizadas
- Last.fm 
  documentação: [https://www.last.fm/api](https://www.last.fm/api)

- MockApi
  documentação: [https://www.mockapi.io](https://www.mockapi.io/)

## Instruções gerais
Este projeto possui um .env.example na raiz do projeto, copie e cole 
e altere o nome para .env para que funcione corretamente. 

É necessário também que instale as dependências do projeto, por tanto na raiz
do projeto utilize `yarn` se você utiliza yarn. Caso utilize o `npm` exclua
o arquivo `yarn.lock` e utilize o comando `npm install`. 

## Comandos disponíveis

No diretório do projeto use os seguintes comandos:

### `yarn start`

Para iniciar o projeto.
Abra [http://localhost:3000](http://localhost:3000) para visualizar.

### `yarn build`

Irá efetuar o build do app e criar uma pasta `build` folder.\
Sua aplicação estará pronta para o deploy

Documentação para efetuar o deploy para produção
[deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

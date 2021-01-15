# Node Recipes API

- [Node Recipes API](#node-recipes-api)
  - [Pré-requisitos e dependências](#pré-requisitos-e-dependências)
  - [Primeiros passos](#primeiros-passos)
  - [Executando localmente](#executando-localmente)
  - [Executando diretamente o projeto](#executando-diretamente-o-projeto)
  - [Configuração](#configuração)
  - [Referência de uso](#referência-de-uso)
    - [GET /recipes/](#get-recipes)
      - [Erros](#erros)
  - [Testes](#testes)
  - [Linters e padrões de desenvolvimento](#linters-e-padrões-de-desenvolvimento)
  
API desenvolvida em NodeJS com Express para encontrar receitas a partir de ingredientes.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Pré-requisitos e dependências

Este projeto foi construído com as seguintes dependências (versões ao lado):

- axios: ^0.21.1
- body-parser: ^1.19.0
- cors: ^2.8.5
- dotenv: ^8.2.0
- express: ^4.17.1

<sub>PS: Alguns dependências estão apenas como dependências de desenvolvimento como por exemplo Jest - utilizada para testes</sub>
## Primeiros passos

Para obter uma cópia do projeto, clone o repositório executando o seguinte comando a seguir:

```shell
git clone https://github.com/dlottermann/node-recipes-api
cd node-recipes-api/
```

Insira sua chave de acesso à [API do Giphy](https://developers.giphy.com/docs/) (necessário cadastro) na variável `API_KEY` em `config/.env.example` e renomeie o arquivo para `.env`.
O projeto utiliza de variáveis de ambiente para execução - o arquivo env.example é um exemplo de estrutura para os valores utilizados

## Executando localmente

Em seguida, você pode rodar o projeto diretamente com o Docker Compose com o comando abaixo no seu terminal (ou [executar diretamente o projeto](#executando-diretamente-o-projeto)).

> Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados.

```shell
docker-compose -up
```

<sub>Obs.: Como o intuito do projeto é apenas rodar a aplicação de uma maneira simples e rápida utilizando docker alguns parâmetros foram omitidos, mas nada impede de serem adicionados demais parâmetros </sub>

A primeira vez que o comando é executado o docker fará o download da imagem para execução do projeto e em seguida o inicializará, uma mensagem como a abaixo é exibida no console

```shell
API escutando na porta :8000
```

Acesse o endereço `localhost:8000` e você deverá obter como resposta:

```json
{
  "body": "Hello API recipes"
}
```
## Executando diretamente o projeto

Para executar diretamente o projeto você deve navegar até a pasta api/ na raiz do projeto e instalar as dependências com o gerenciador de pacotes de sua preferência como no exemplo:

```shell

# yarn
yarn install
yarn start

ou

# npm
npm install
npm start
```

Uma mensagem como a abaixo deve aparecer no console:

    API escutando na porta :8000

Acesse o endereço `localhost:8000` e você deverá obter como resposta:


```json
{
  "body": "Hello API recipes"
}
```
## Configuração


O projeto depende de quatro variáveis de ambiente aramzenadas em um arquivo (`.env`), no formato `VAR=valor`.
<sub>Um arquivo de exemplo está incluso na raiz da pasta `api/` - basta renomear para .env e informar o valor da API_KEY</sub>

As variáveis são:


- `GIPHY_API`: URL da API de buscas do Giphy. **Obrigatória**.

> Padrão: http://api.giphy.com/v1/gifs/search


- `API_KEY`: chave de acesso à API do Giphy. **Obrigatória**.

> Chaves podem ser solicitadas seguindo a documentação disponível em: https://developers.giphy.com/docs/


- `RECIPE_PUPPY_API`: URL da API pública do Recipe Puppy. **Obrigatória**.

> Padrão: http://www.recipepuppy.com/api/


- `LIMIT`: limite de retorno da API do Giphy. **Obrigatória**.

> Padrão: 1



## Referência de uso

A API do projeto possui apenas um endpoint:

### GET /recipes/


Este endpoint espera um parâmetro `i`, contendo uma lista de ingredientes, respeitando o seguinte modelo:

```
http://{HOST}/recipes/?i={ingredient_1},{ingredient_2},{ingredient_3}
```
> O parâmetro `i` deve obrigatoriamente possuir de 1 a 3 ingredientes. (máximo 3)

A partir dos ingredientes informados, é realizada uma consulta à API do Recipe Puppy, e consultas à API do Giphy baseadas no título de cada receita obtida.

**Exemplo:**
```
http://localhost:8000/recipes/?i=tomato,pasta
```
A resposta desta requisição será à seguinte:
```json

{
  "statusCode": 200,
  "body": {
    "keywords": ["tomato", "pasta"],

    "recipes": [
      {
        "title": "Pasta Simple Recipe",
        "ingredients": [
          "butter",
          "garlic",
          "leaves",
          "lemon",
          "oliveoil",
          "parmigiano-reggianocheese",
          "pasta",
          "pasta(ingeneral)",
          "redonions",
          "salt",
          "shallot",
          "shallot",
          "tomato",
          "tomato"
        ],
        "link": "http://www.grouprecipes.com/9308/pasta-simple.html",
        "gif": "https://giphy.com/gifs/rice-fried-leftover-Aj9EHGocwb4bu"
      },
      {
        "title": "Black Beans With Pasta",
        "ingredients": [
          "basil",
          "blackbeans",
          "corn",
          "greenonion",
          "pasta",
          "pasta(ingeneral)",
          "salsa",
          "soysauce",
          "tomato"
        ],
        "link": "http://recipe.aol.com/recipe/black-beans-with-pasta/88138",
        "gif": "https://giphy.com/gifs/loop-dinner-FSNXUr0ZOUjyU"
      }
    ]
  }
}

```
> A API do Recipe Puppy retorna, por padrão, 10 receitas por página.

-----
#### Erros
Parâmetros `i` de entrada que não possuam de 1 a 3 ingredientes receberão como resposta os seguintes erro:

```json
// http://localhost:8000/recipes?i=

{
  "statusCode": 400,
  "body": false
}

// http://localhost:8000/recipes?i=any-param

{
  "statusCode": 200,
  "body": "No results!"
}

// http://localhost:8000/recipes?i=tomato,pasta,garlic,eggs

{
  "statusCode": 400,
  "body": "Ingredients size length exceed max. (Max 3)"
}
```

Alguns erros mais genéricos e internos também foram tratados como por exemplo falta do parâmetro ou  em um formato inválido como na sequência:

```json
{
  "error": "Error get register: TypeError: Cannot read property 'includes' of undefined"
}
```

```json
{
  "statusCode": 400, "body": "Ingredients  format  is  array"
}
```
Problemas relacionados à indisponibilidade ou falhas das APIs dos serviços do Recipe Puppy e/ou do Giphy retornarão um erro conforme abaixo.

```json
{
  "error": "Error get register: Error: Request fail! Try again later"
}
```
## Testes

Para criação e execução dos testes foram usadas as libs:
- jest: ^26.6.3
- supertest: ^6.0.1

Para execução dos testes unitários e de integração deve ser rodado o seguinte comando:

    npm run test
ou

    npm run test:watch

Este segundo fica "ouvindo" qualquer modificação efetuada nos arquivos.

## Linters e padrões de desenvolvimento

Este projeto foi desenvolvido com base nos padrões standardjs e utilizando eslint nas seguintes versões:
- eslint: ^7.13.0
- standard": ^16.0.3

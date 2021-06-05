# Realties API

## Tecnologias

* NodeJS/TypeScript
* Express.js
* Docker
* TypeORM
* JWT (tokens)
* Bcrypt (criptografia para senhas)

## Scripts do package.json
| Comando | Descrição
|---------|----------
|dev      | Inicia o ts-node-dev
|typeorm  | CLI do typeorm para criação e execução de migrations

## Sistema de pastas

* src - source da API
  * @types - expansão de tipagem para o express
  * modules
    * realty
      * controllers
      * dtos
      * entities - entidades do typeorm
      * repositories - implementações e interfaces
        * typeorm - implementação do repositório
      * services
    * users
      * controllers
      * dtos
      * entities - entidades do typeorm
      * repositories - implementações e interfaces
        * typeorm - implementação do repositório
      * services
  * shared
    * container - tsyringe container
    * errors - classe de erros da API
    * infra
      * http - express implementations
        * middlewares
        * routes
      * typeorm - implementations
        * migrations

## Rotas mapeadas

* users/
  * post
    * parâmetros
      * body
      
        | key       | value
        |-----------|--------
        | full_name | string
        | email     | string
        | cpf       | string
        | password  | string
    * retorno
      * 201
* users/login
  * post
    * parâmetros
      * body
        | key       | value
        |-----------|--------
        | email     | string
        | password  | string
    * retorno
      * json
        | key | value
        |-------|----
        | token | string
        | email | string
        | full_name | string

* realties/
  * post
    * requer autenticação JWT
    * parâmetros
      * body
        | key       | value
        |-----------|--------
        | cep     | string
        | number  | string
        | complement  | string
        | rent_value  | number
        | commodious  | number
        | available  | true
    * retorno
      * 201 - json
        | key       | value
        |-----------|--------
        | cep     | string
        | number  | string
        | complement  | string
        | rent_value  | number
        | commodious  | number
        | available  | true
        | id | string
        | created_at | date
        | updated_at | date

* realties/update/:id
  * put
    * requer autenticação JWT
    * parâmetros
      * body
        | key       | value
        |-----------|--------
        | cep     | ?string
        | number  | ?string
        | complement  | ?string
        | rent_value  | ?number
        | commodious  | ?number
        | available  | ?true
    * retorno
      * 200 - json
        | key       | value
        |-----------|--------
        | cep     | ?string
        | number  | ?string
        | complement  | ?string
        | rent_value  | ?number
        | commodious  | ?number
        | available  | ?true
        | id | string
        | created_at | date
        | updated_at | date

* realties/find/:id
  * get
    * requer autenticação JWT
    * retorno
      * 200 - json
        | key       | value
        |-----------|--------
        | cep     | ?string
        | number  | ?string
        | complement  | ?string
        | rent_value  | ?number
        | commodious  | ?number
        | available  | ?true
        | id | string
        | created_at | date
        | updated_at | date
* realties/list
  * get
    * requer autenticação JWT
    * retorno
      * 200 - json (list)
        | key       | value
        |-----------|--------
        | cep     | ?string
        | number  | ?string
        | complement  | ?string
        | rent_value  | ?number
        | commodious  | ?number
        | available  | ?true
        | id | string
        | created_at | date
        | updated_at | date

* realties/delete/:id
  * delete
    * requer autenticação JWT
    * retorno
      * 200
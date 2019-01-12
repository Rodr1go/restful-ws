# restful-ws
RESTful WebService em NodeJS utilizando Restify como HTTP Router e, banco de dados MySQL

Para testar o projeto:
---------------------- 

### Clone o repositório
`$ git clone https://github.com/Rodr1go/restful-ws.git`

### Entre no diretório do projeto
`$ cd restful-ws`

### Instale as dependências
`$ npm install`

### Crie o banco de dados seguindo a estrutura abaixo:

user
----------

|campo    | tipo       |
|---------|------------|
|id       | int(11)    | 
|email    | varchar(45)|
|password | varchar(45)|

categoria
----------

|campo    | tipo       |
|---------|------------|
|id       | int(11)    | 
|name     | varchar(45)|

produto
----------

|campo    | tipo        |
|---------|-------------|
|id       | int(11)     | 
|nome     | varchar(45) |
|preco    | decimal(5,2)|

### Configure o arquivo .env.example   
* Renomeie para .env 
* Edite com as informações de conexão com o banco de dados
* Insira também em "JWT_SECRET" a sua chave secreta de autenticação do token
 
### Inicie a aplicação
`$ npm run dev`

### Por fim realize os testes
- Recomendo que use o Postman para isso 


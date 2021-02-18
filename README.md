# Palindrome-Date

Palindrome-date é uma API para encontrar a próxima data palíndrome. Neste projeto foi utilizado as seguintes tecnologias:
- **Node.js**
- **Serverless**
- **Webpack**
- **Serverless-offline**
- **AWS Lambda**
- **Amazon API Gateway**

## GET /date
Retorna a próxima data palíndrome baseado na data atual ou na data informada como Query Parameter.
### Endpoint URL
    https://kiw80utax3.execute-api.us-east-1.amazonaws.com/dev/date
    
### Query Parameters
| Name | Obrigatório | Descrição |
| ------ | ------ | ------ |
| startDate | Opcional | Especifíca uma data inicial para ser buscado a data palíndrome. Os formatos aceitos são dd/mm/yyyy, dd-mm-yyyy e dd.mm.yyyy.|

---

## Instalação

Clonar repositório

``` bash
$ git clone https://github.com/alanneves/palindrome-date.git
```

Entrar no repositório

``` bash
$ cd palindrome-date
```

Instalar pacotes do Node.js

``` bash
$ npm install
```

### Simular localmente

Para simular o API Gateway localmente usando [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

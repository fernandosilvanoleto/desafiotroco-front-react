# 💰 Projeto - Calculadora de Troco

Aplicação Full Stack desenvolvida com **.NET (API)** e **React (SPA)** para cálculo de troco, retornando a quantidade ideal de cédulas e moedas com base no valor pago.

---

## Tecnologias utilizadas

### Backend (.NET)

* ASP.NET Core Web API
* Arquitetura em camadas (Core, Application, API)
* Injeção de Dependência
* Swagger para documentação

### Frontend (React)

* React (Vite)
* Hooks (`useState`)
* Fetch API
* CSS puro (sem frameworks)

---

## Estrutura do Projeto

```bash
/backend
  ├── DesafioDoTroco.API
  ├── DesafioDoTroco.Application
  ├── DesafioDoTroco.Core

/frontend
  ├── src
      ├── components
      ├── models
      ├── services
```

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

---

## ▶️ Backend (.NET API)

git clone https://github.com/fernandosilvanoleto/DesafioDoTroco-API.git


### 📍 Caminho:

```bash
cd backend/DesafioDoTroco.API
```

### ▶️ Executar:

```bash
dotnet run
```

Verificar a API em qual URL será iniciada em:

```bash
https://localhost:7163
```

Swagger disponível em:

```bash
https://localhost:7163/swagger
```

---

## ▶️ Frontend (React)

### 📍 Caminho:

```bash
cd frontend
```

### ▶️ Instalar dependências:

```bash
npm install
```

### ▶️ Executar:

```bash
npm run dev
```

A aplicação estará disponível em:

```bash
http://localhost:5173
```

---

## Integração Frontend ↔ Backend

A aplicação React consome o endpoint:

```bash
POST https://localhost:7163/api/sales/calculateChange
```

### Exemplo de requisição:

```json
{
  "customerName": "Fernando",
  "purchaseAmount": 17.35,
  "amountPaid": 50.00
}
```

---

## Exemplo de resposta

```json
{
  "statusPayment": "Pagamento realizado com sucesso",
  "customerName": "Fernando",
  "purchaseAmount": 17.35,
  "amountPaid": 50.00,
  "changeAmount": 32.65,
  "changeMoneyItems": [
    { "quantity": 3, "value": 10, "typeMoney": "Cédula(s)" },
    { "quantity": 2, "value": 1, "typeMoney": "Cédula(s)" }
  ]
}
```

---

## Tratamento de erros

A API pode retornar erros de validação, por exemplo:

```json
{
  "message": "Os valores de Valor da Compra e Valor Pago devem ser maiores que zero."
}
```

Essas mensagens são exibidas diretamente na interface do usuário.

---

## Arquitetura

O projeto segue boas práticas de separação de responsabilidades:

* **Components** → Interface do usuário
* **Services** → Comunicação com API
* **Models** → Estrutura de dados (DTO)
* **Backend em camadas** → Core, Application, API

---

## Funcionalidades

* Entrada de dados do cliente
* Cálculo automático de troco
* Exibição detalhada de cédulas e moedas
* Tratamento de erros da API
* Interface responsiva e dinâmica (SPA)
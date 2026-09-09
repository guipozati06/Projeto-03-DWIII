# 🌐 Consulta de Status Code de Sites

Projeto desenvolvido em **Node.js** para realizar consultas em sites e identificar o **Status Code HTTP** retornado pelo servidor.

O programa funciona diretamente pelo **terminal (CLI)**, recebendo o endereço de um site como parâmetro e exibindo o resultado da consulta.

---

## 📋 Sobre o Projeto

Este projeto permite consultar um endereço de site utilizando **HTTP ou HTTPS** e visualizar o código de resposta retornado pelo servidor.

Por exemplo, ao consultar um site, o servidor pode retornar códigos como:

* **200 – OK**
* **301 – Moved Permanently**
* **302 – Found**
* **403 – Forbidden**
* **404 – Not Found**
* **500 – Internal Server Error**

O projeto também possui tratamento básico de erros para evitar que o programa seja encerrado inesperadamente.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* JavaScript
* HTTP/HTTPS
* Terminal / CLI
* npm

---

## 📦 Instalação

Primeiramente, clone este repositório:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
```

Depois, entre na pasta do projeto:

```bash
cd <NOME_DA_PASTA_DO_PROJETO>
```

Instale as dependências, caso existam:

```bash
npm install
```

---

## 💻 Como Utilizar

O programa deve ser executado pelo terminal utilizando o seguinte comando:

```bash
npm init teste <SITE>
```

Onde `<SITE>` representa o endereço que será consultado.

### Exemplo:

```bash
npm init teste https://www.google.com
```

---

## 📊 Exemplo de Saída

Ao executar o comando corretamente, o programa apresentará informações semelhantes a:

```text
Site: https://www.google.com

Status Code: 200
```

---

## 🔎 Funcionamento

O funcionamento do programa acontece da seguinte maneira:

1. O usuário informa o endereço do site pelo terminal;
2. O programa recebe o endereço informado;
3. É verificado se o site foi informado corretamente;
4. O endereço é validado;
5. Uma requisição HTTP ou HTTPS é realizada;
6. O servidor responde à requisição;
7. O programa identifica o Status Code retornado;
8. O resultado é exibido no terminal.

---

## ⚠️ Tratamento de Erros

O projeto possui tratamento para alguns problemas que podem acontecer durante a execução.

### ❌ Site não informado

Caso o usuário não informe um site, o programa apresentará uma mensagem adequada.

Exemplo:

```text
Erro: Site não informado.
```

---

### ❌ Endereço inválido

Caso o endereço não comece corretamente com `http://` ou `https://`, será exibida uma mensagem informando o problema.

Exemplo:

```text
Erro: Endereço inválido.
Informe o endereço começando com http:// ou https://
```

---

### ❌ Falha na conexão

Caso aconteça algum problema durante a conexão com o servidor, o programa tratará o erro e apresentará uma mensagem adequada.

Exemplo:

```text
Erro ao consultar o site.
```

---

## 📁 Estrutura do Projeto

A estrutura do projeto pode ser organizada da seguinte forma:

```text
📁 projeto
│
├── 📄 package.json
├── 📄 index.js
├── 📄 README.md
│
└── 📁 src
    └── 📄 funcoes.js
```

> A estrutura pode variar de acordo com a organização utilizada durante o desenvolvimento do projeto.

---

## 🧠 Principais Conceitos Utilizados

Durante o desenvolvimento deste projeto foram utilizados conceitos importantes de programação com Node.js, como:

* Criação de funções;
* Funções assíncronas (`async`);
* Utilização do `await`;
* Recebimento de parâmetros pelo terminal;
* Utilização de `process.argv`;
* Requisições HTTP e HTTPS;
* Consulta de Status Code;
* Tratamento de erros com `try` e `catch`;
* Utilização de scripts e comandos CLI;
* Node.js e npm.

---

## 🔢 Status Codes

Alguns dos principais códigos que podem ser retornados pelo servidor são:

| Status Code | Significado           |
| ----------- | --------------------- |
| 200         | OK                    |
| 301         | Moved Permanently     |
| 302         | Found                 |
| 403         | Forbidden             |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

## 🛠️ Função Principal

A função responsável por organizar a validação e consulta do site é a função:

```javascript
async function validaSite()
```

Ela é responsável por:

* Receber o endereço informado pelo usuário;
* Verificar se o site foi informado;
* Validar o endereço;
* Chamar a função responsável pela requisição;
* Receber o Status Code;
* Mostrar o resultado no terminal;
* Tratar possíveis erros.

---

🎯 Objetivo

O objetivo deste projeto é praticar conceitos de **Node.js** e desenvolvimento de aplicações que funcionam diretamente pelo terminal.

Além disso, o projeto demonstra a utilização de:

* Parâmetros de linha de comando;
* Requisições para servidores;
* Comunicação HTTP/HTTPS;
* Respostas de servidores;
* Status Codes;
* Tratamento de erros;
* Organização de código.

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Marinho**.

---

## 📚 Projeto Acadêmico

Projeto desenvolvido como atividade prática utilizando os conceitos aprendidos em aula sobre:

**Node.js, npm, CLI, requisições HTTP/HTTPS e Status Codes.**

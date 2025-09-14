# Task API

API de gerenciamento de tarefas (To-Do List) construída com **TypeScript**, **Express**, **Prisma**, **Zod** e **MySQL**.  
Projeto desenvolvido como treino para entrevistas de **Desenvolvedor Backend Node**.

---

## 💻 Tecnologias

- **TypeScript** – tipagem estática e segurança
- **Express 5** – framework HTTP para Node.js
- **Prisma** – ORM para acesso ao banco MySQL
- **MySQL** – banco de dados relacional
- **Zod** – validação de dados e schemas
- **Nodemon** – reinício automático em desenvolvimento
- **ts-node** – executar TypeScript diretamente

---

## ⚡ Funcionalidades

- Criar tasks (`POST /tasks`)
- Listar todas as tasks (`GET /tasks`)
- Atualizar task (`PUT /tasks/:id`)
- Deletar task (`DELETE /tasks/:id`)
- Validação de dados com Zod
- Tratamento de erros global
- Retorno 404 quando a task não é encontrada
- Persistência das tasks no MySQL via Prisma

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/davidalmeida-dev/task-api.git
cd task-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados no arquivo `.env`:

```env
DATABASE_URL="mysql://<usuario>:<senha>@localhost:3306/<nome_do_banco>"
```

4. Inicialize o Prisma e crie a tabela:

```bash
npx prisma migrate dev --name init
```

---

## 🚀 Scripts

- Rodar em modo desenvolvimento (com reload automático):

```bash
npm run dev
```

- Compilar TypeScript:

```bash
npm run build
```

- Rodar versão compilada:

```bash
npm run start
```

---

## 📝 Endpoints e Exemplos (cURL)

### Listar todas as tasks
```bash
curl -X GET http://localhost:3000/tasks
```

### Criar uma task
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Aprender TypeScript"}'
```

### Atualizar uma task
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Aprender Prisma","done":true}'
```

### Deletar uma task
```bash
curl -X DELETE http://localhost:3000/tasks/1
```

---

## ⚠️ Observações

- O campo `done` é **opcional** no update.  
- O middleware de erro retorna **400** para erros de validação e **404** se a task não existir.  
- Para adicionar usuários ou autenticação, seria necessário expandir o modelo do Prisma.  

---

## 📚 Referências

- [Express 5](https://expressjs.com/)  
- [Prisma](https://www.prisma.io/)  
- [Zod](https://zod.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  

---

## 👤 Autor

- David Almeida – [GitHub](https://github.com/davidalmeida-dev)


import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  console.log('Acessou a rota');
  response.json({message: "Hello World!"});
});

app.listen(3333);
const express = require('express');
const app = express();

app.get('/', (req, res) => {

  const { query: { nombre } } = req;
  const paramName = nombre ? nombre : 'desconocido';
  const msgResponse = ['<h1>Hola ', paramName, '!</h1>'].join('');

  res.send(msgResponse);

});

app.listen(3000, () => console.log('Listening on port 3000!'));


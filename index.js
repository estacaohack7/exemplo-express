const express = require('express');

const app = express();

app.get('/pneu', (req, res) => {
    console.log(req.headers['user-agent']);
    console.log(req.connection.remoteAddress);

    res.send('Bem vindo à casa dos pneus');
});

app.listen(3000, () => console.log('Servidor inicializado'));
const http = require('http');
const app = require('./app');

// Modification suite à la mise en oeuvre de Express
// Requête et réponse gérées à présent par app
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

/*
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});
*/

server.listen(process.env.PORT || 3000);
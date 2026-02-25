const express = require('express');

const app = express();

// Sans cette call-back, le serveur génèrerait une erreur 404
// Avec l'ajout de next => chaînage des "middleware" Express
app.use((req, res, next) => {
    res.json({ message : 'Votre requête a bien été reçue !'});
    console.log('Requête reçue');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next(); // pour chaînage
});

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});

module.exports = app;
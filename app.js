const express = require('express');

const app = express();

// Sans cette call-back, le serveur génèrerait une erreur 404
app.use((req, res) => {
    res.json({ message : 'Votre requête a bien été reçue !'});
});

module.exports = app;
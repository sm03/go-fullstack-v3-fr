Projet full-stack scindé en 2 branches Git: frontend et backend.

Ce README a pour objet le backend.

Lancement du serveur:
```
node server
```
Affichage à l'URL `http://localhost:3000/` du message:
>Voilà la réponse du serveur !

Pour simplifier le développement, installation de `nodemon`:
```
npm install -g nodemon
```
Désormais, au lieu d'utiliser `node server` pour démarrer votre serveur, nous pouvons utiliser `nodemon server` . Il surveillera les modifications des fichiers et redémarrera le serveur lorsqu'il aura besoin d'être mis à jour. 

**Express**

Installation du framework Express:
```
npm install express
```
Un fichier app.js a été ajouté pour y placer l'application Express.

L'app créée est importée dans le fichier `server.js` mis à jour pour l'utiliser dans la création du serveur.




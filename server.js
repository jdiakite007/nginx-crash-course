/*Ce code met en place un serveur web simple avec Express.js qui sert un fichier HTML (index.html) 
lorsqu'on accède à la page d'accueil et permet d'accéder aux fichiers présents dans le dossier images via l'URL /images/. 
Le serveur écoute les connexions sur le port 3000.*/


const express = require('express'); // on importe dans la variable express le  module express qui contient les fonctions necessaires pourconstruire des sites et des applications Web  
const path = require('path'); // on importe dans la variable path le module path qui contient les fonctions nécessaires pour manipuler les chemins de fichiers.
const app = express();  // on crée une nouvelle instance nommée app de l'application Express. La variable app permettarde configurer l'application et les routes
const port = 3000; // La variable port stocke le numéro 3000, qui sera utilisé pour démarrer le serveur web.

const appName = process.env.APP_NAME

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // renvoi le fichier index.html situé au même endroit que le fichier principal de l'application. path.join(__dirname, 'index.html') construit le chemin complet vers ce fichier.
    console.log(`Request served by ${appName}`);
});

//Démammare l'application web app et attend les connexions sur le port 3000 (ecoute sur le port 3000)
app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);  
});


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Lire le contenu du fichier "index.html"
    fs.readFile("index.html", (err, data) => {
      if (err) {
        // Envoyer une réponse d'erreur si le fichier n'a pas pu être lu
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Erreur interne du serveur');
      } else {
        // Envoyer le contenu du fichier HTML en réponse
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  });

server.listen(8000, () => {
  console.log('Serveur démarré sur le port 8000');
});

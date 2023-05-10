const fs = require('fs');

function saveFunc(fonction, nomFichier,) {
    const fonctionTXT = fonction.toString();
    fs.writeFile(`${nomFichier}.txt`, fonctionTXT, (err) => {
      if (err) throw err;
      console.log(`La fonction a été enregistrée dans ${nomFichier}.txt.`);
    });
}

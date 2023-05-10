export
const fs = require('fs');

function saveFunc(fonction, ) {
    const fonctionTXT = fonction.toString();
    fs.writeFile(`save.txt`, fonctionTXT, (err) => {
      if (err) throw err;
      console.log(`La fonction a été enregistrée dans save.txt.`);
    });
}

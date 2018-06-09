const fs = require('fs');

const original = fs.createReadStream('./textoOriginal.txt');
const final = fs.createWriteStream('./textoFinal.txt');

original.setEncoding('utf8');

original.on('data', chunk => {
    final.write(chunk);
});

original.on('end', () => console.log('Copia terminada'));
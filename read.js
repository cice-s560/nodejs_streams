const fs = require('fs'); // FileSystem trabaja contra archivos del sistema

let texto = '';
const stream = fs.createReadStream('./textoOriginal.txt');

stream.on('data', chunk => {
    texto += chunk;

    console.log(`*******
    Chunk recibido: ${chunk}`);
});

stream.on('end', () => console.log(`************
Texto Completo: ${texto}`));
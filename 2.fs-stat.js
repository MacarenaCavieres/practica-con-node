const fs = require("node:fs");

const stats = fs.statSync("./archivo.txt");

console.log(
    stats.isFile(), // si es un fichero (true)
    stats.isDirectory(), // si es un directorio (false)
    stats.isSymbolicLink(), // si es un enlace simbolico (false)
    stats.size // tamaño en bytes (10)
);

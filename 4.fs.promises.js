const fs = require("node:fs/promises");

fs.readFile("./archivo.txt", "utf-8").then((text) => console.log(text)); // se ejecuta este 2do

console.log("--->este codigo se va a ejecutar"); // se ejecuta este primero

fs.readFile("./archivo2.txt", "utf-8").then((text) => console.log(text)); // se ejecuta este 3ro

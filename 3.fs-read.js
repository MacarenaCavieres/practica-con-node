const fs = require("node:fs");

// esto es sincrono
// const text = fs.readFileSync("./archivo.txt", "utf-8");
// console.log(text);

// console.log("este codigo se va a ejucutar");

// const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
// console.log(secondText);

// esto es asincrono y se ejecuta primera el archivo2.txt
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
    console.log(text);
}); // se ejecuta este tercero

console.log("--->este codigo se va a ejecutar"); // se ejecuta este primero

fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
    console.log(text);
}); // se ejecuta este segundo

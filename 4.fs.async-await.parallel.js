const { readFile } = require("node:fs/promises");

Promise.all([readFile("./archivo.txt", "utf-8"), readFile("./archivo2.txt", "utf-8")]).then(
    ([text, secondText]) => {
        console.log(text); //primero este
        console.log(secondText); // segundo este
    }
);

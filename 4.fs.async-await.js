const { readFile } = require("node:fs/promises");

(async () => {
    const text = await readFile("./archivo.txt", "utf-8"); // primero se ejecuta este
    console.log(text);

    console.log("--->este codigo se va a ejecutar"); // segundo este

    const secondText = await readFile("./archivo2.txt", "utf-8"); // tercero este
    console.log(secondText);
})();

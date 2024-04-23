const path = require("node:path");

// bara separadora de carpetas segun SO
console.log(path.sep); //para saber como van las barras de las rutas, en mi caso es \

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath); // content\subfolder\test.txt

const base = path.basename("/tmp/maca-secret-files/password.txt");
console.log(base); // password.txt

const filename = path.basename("/tmp/maca-secret-files/password.txt", ".txt");
console.log(filename); // password

const extension = path.extname("my-super.app.image.jpg");
console.log(extension); // .jpg

const os = require("node:os");

console.log("Nombre sistema operativo: ", os.platform());
console.log("version sistema operativo: ", os.release());
console.log("Arquitectura: ", os.arch());
console.log("CPU's: ", os.cpus());
console.log("Memoria libre: ", os.freemem() / 1024 / 1024);
console.log("Memoria total: ", os.totalmem() / 1024 / 1024);
console.log("uptime: ", os.uptime() / 60 / 60);

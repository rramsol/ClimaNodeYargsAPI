const lugar = require("./lugar/lugar");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

const l = lugar.getLugar(argv.direccion).then(console.log).catch(console.log);
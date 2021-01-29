const axios = require("axios");

const getLugar = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUrl}&units=metric`,
        headers: {
            "x-rapidapi-key": "c0d9931f6emshb914d3fad67cf5fp106f3bjsne22f8a3018d6",
        },
    });

    const resp = await instance.get();

    if (resp.data.cod != 200) {
        return `No hay datos para ${direccion}`;
    }

    const name = resp.data.name;
    const lon = resp.data.coord.lon;
    const lat = resp.data.coord.lat;
    const temp = resp.data.main.temp;

    return ` El clima de ${name} es de ${temp} `;
};

module.exports = {
    getLugar,
};
const { input, select } = require('@inquirer/prompts');
const { fetchAllData, handleWeatherFetch } = require('./handlefetch');
const { printerWeather,printerHistorial } = require('./printer');

const handleSwitch = async (action) => {
    switch (action) {
        case 'search':
            const placeToFind = await input({ message: 'Ciudad' });
            const listOfPlaces = await fetchAllData(placeToFind);
            const selectedPlace = await select({
                message: 'Seleccione lugar',
                choices: listOfPlaces
            });
            const [lon, lat] = selectedPlace;
            const weatherData = await handleWeatherFetch(lon, lat);
            printerWeather(weatherData);
            const searchButton = await input({ message: 'Presione enter para continuar' });
            break;


        case 'historial':
            const infoFormatted = printerHistorial();
            console.log(infoFormatted);
            const historialButton = await input({ message: 'Presione enter para continuar' });
            break;
        case 'exit':
            const exitButton = await input({ message: 'Presione enter para continuar' });
            break;
        default:
            break;
    }
}



module.exports = handleSwitch;
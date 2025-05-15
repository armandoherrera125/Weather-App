const colors = require('colors/safe');
const fs = require('fs');

const printer = () => {
    console.clear();
    console.log(colors.green('======================================='));
    console.log('Seleccione una opcion');
    console.log(colors.green('======================================='));
}

const printerWeather = ({ciudad,lat,lon,temperatura,minima,maxima,sensacion}) => {
    console.clear();
    console.log(colors.green('Informacion de la ciudad'));
    console.log(`Ciudad: ${colors.green(ciudad)}`);
    console.log(`Lat: ${lat}`);
    console.log(`Lon: ${lon}` );
    console.log(`Temperatura: ${temperatura}`);
    console.log(`Minima: ${minima}`);
    console.log(`Maxima: ${maxima}`);
    console.log(`Como esta el clima: ${sensacion}`);
};

const printerHistorial = ( ) => {
    let list = fs.readFileSync('./data/weatherlist.json', 'utf8');
    list = JSON.parse(list);
    console.clear();
    console.log(list.length > 0 ? 'Historial:' : 'No hay busquedas por mostrar');
    if (!list.length > 0) {
            return 'Sin historial';
    }

    //TODO
    return 'Tengo que mostrar el historial';
};


module.exports = {
    printer,
    printerWeather,
    printerHistorial
};
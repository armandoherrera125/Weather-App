const colors = require('colors/safe');
const {mapboxURL,weatherURL} = require('../services/configurlrequest');
const fetchAllData = async (place) => {
    const url = mapboxURL(place);
    try {
        const response = await fetch(url);
        const { features } = await response.json();
        const placesChoices = features.map((address, index) => {
            return {
                name: `${colors.green(index + 1)}. ${address.properties.full_address}`,
                value: address.geometry.coordinates,
            }
        });
        placesChoices.unshift({
            name: `${colors.green('0')}. Cancelar`,
            value: 'cancelar',
        });
        return placesChoices;

    } catch (error) {
        return error;
    }
}
const handleWeatherFetch = async (lon, lat) => {
    const url = weatherURL(lon,lat);
    try {
            const response = await fetch(url);
            const data = await response.json();
            return {
                ciudad: data.name,
                lat: lat,
                lon: lon,
                temperatura: data.main.temp,
                minima: data.main.temp_min,
                maxima: data.main.temp_max,
                sensacion: data.weather[0].description
            };
    } catch (error) {
        console.log(error);
    } 
};



module.exports = {
    fetchAllData,
    handleWeatherFetch
};
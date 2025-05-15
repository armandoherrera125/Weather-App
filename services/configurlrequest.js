
const mapboxURL = ( place ) => {
    const { API_KEY_MAPBOX, BASE_URL } = process.env;
    const encodedQuery = encodeURIComponent(place);
    return `${BASE_URL}?q=${encodedQuery}&proximity=ip&access_token=${API_KEY_MAPBOX}`;
}

const weatherURL = (lon,lat) => {
    const {BASE_URL_WEATHER, API_KEY_WEATHER} = process.env;
    return `${BASE_URL_WEATHER}?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&lang=es&units=metric`;
}
module.exports = {
    mapboxURL,
    weatherURL 
}
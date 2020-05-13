var Global = {
    APICity : (ciudad) => 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid='+ process.env.REACT_APP_KEY,
    APICoords : (lat,lon) => 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+ process.env.REACT_APP_KEY
}

export default Global
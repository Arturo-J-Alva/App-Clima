import React from 'react';

import moment from 'moment'
import 'moment/locale/es'
//import { Link } from 'react-router-dom';

export default function Card1({ weather, coord, main, name, sys, wind, tipo }) {


  const TimeToDate = () => {
    const y = new Date()
    //console.log('time:',y.getTime())
    //console.log(new Date(y.getTime()))
    return moment(y).format('LLL')
  }

  const KtoC = (K) => {
    return (K - 273.15).toFixed(1)
  }
  const clima = weather[0].description

  return (
    <div className="card border-danger text-light" style={{ width: '18rem', background:'#520202' }}>
      <div className="card-body">
        {tipo === 'coords' ? <h5 className="card-title">Localidad: {name}</h5> :
          <h5 className="card-title">Ciudad: {name}</h5>}
        <h6 className="card-subtitle mb-2 text-muted">País: {sys.country} </h6>
        <h6 className="card-subtitle mb-2 text-muted"> {TimeToDate()} </h6>

        <p className="card-text text-capitalize text-center h5 ">{clima}</p>
        <div className="d-flex justify-content-center">

          {(clima === 'few clouds' || clima === 'broken clouds' || clima === 'scattered clouds')
            && <img src="images/partly_cloudy.png" alt="" />}

          {(clima === 'clear sky')
            && <img src="images/sunny.png" alt="" />}

          {(clima === 'overcast clouds')
            && <img src="images/cloudy.png" alt="" />}

          {(clima.slice(0, 12) !== 'thunderstorm' && clima.slice(-4) === 'rain')
            && <img src="images/rain.png" alt="" />}

          {(clima.slice(0, 12) === 'thunderstorm')
            && <img src="images/thunderstorms.png" alt="" />}

          <p className="card-text align-self-center h5">{KtoC(main.temp)} C°</p>

        </div>
        <p className='text-center  text-capitalize mt-2'>Humedad: {main.humidity}%</p>
        <p className='text-center '>Presión: {main.pressure} hPa</p>
        <p className='text-center '>Viento: {wind.speed} m/s</p>
      </div>
    </div>
  );
}
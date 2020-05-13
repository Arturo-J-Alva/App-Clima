import React, { useState } from 'react'
import GoogleMaps from '../../globalComponents/googleMaps'
import Card1 from '../../globalComponents/cards/card1'
import HeaderB from '../../globalComponents/HeaderB'
import Global from '../../services/Global'
import Axios from 'axios'

const Coords = () => {
    const [data, setdata] = useState(null)
    //const [coords, setcoords] = useState(null)
    const api = Global.APICoords

    const buscarCoords = async ({lat,long}) => {
        try {
            const res = await Axios.get(api(lat,long))
            console.log(res.data)
            setdata(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <HeaderB />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6"><h4 className='text-center text-light'>Eliga un lugar arrastrando el cursor</h4></div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center mb-3 align-items-center">

                        {data && <Card1 {...data} tipo='coords' />}

                    </div>

                    <div className="col-md-8">

                        <GoogleMaps coords={(coords)=>buscarCoords(coords)} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coords

import React, { useState } from 'react'
import HeaderB from '../../globalComponents/HeaderB'
import Global from '../../services/Global'
import axios from 'axios'
//import AutoComplete from '../../globalComponents/autoComplete'
import Card1 from '../../globalComponents/cards/card1'
import Swal from 'sweetalert2'

const Ciudad = () => {
    const [ciudad, setciudad] = useState(null)
    const [data, setdata] = useState(null)
    const api = Global.APICity

    const buscarCiudad = async (ciudad) => {
        try {
            const res = await axios.get(api(ciudad))
            console.log(res.data)
            setdata(res.data)
        } catch (e) {
            console.log(e.response)
            setdata(null)
            if (e.response && e.response.status === 404) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "No se encontró esa ciudad",
                    showConfirmButton: false,
                    timer: 2500
                })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Hay un problema, inténtelo más tarde",
                    showConfirmButton: false,
                    timer: 2500
                })
            }

        }
    }
    return (
        <div>
            <HeaderB />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <form onSubmit={(e) => {
                            e.preventDefault()
                            console.log('onSubmit!')
                            buscarCiudad(ciudad)
                        }}>
                            <div className="form-group text-center">
                                <label className='h5 text-light'>Ingrese una ciudad</label> <br />
                                <input type="text" className='form-control'
                                    onChange={(e) => setciudad(e.target.value)} />
                                <button type="submit" className='btn btn-danger my-2 '>Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">

                        {data && <Card1 {...data} />}

                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
        </div>
    )
}

export default Ciudad

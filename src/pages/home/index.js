import React from 'react'
import HeaderB from '../../globalComponents/HeaderB'
const Home = (props) => {

    return (
        <div>
            <HeaderB />
            <div className="container mt-5">
                <div className="row text-light">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center">

                        <h1>APP-CLIMA</h1>

                        <p className='h4'>Aplicación web para obtener información actual del tiempo de una ciudad o cualquier lugar del planeta.</p>

                        <div className="row mt-5">
                            <div className="col-md-6  d-flex justify-content-center align-items-center">
                                <div className="card text-white bg-dark mb-3 border-secondary" style={{ width: '21rem' }}>
                                    <div className="card-header">Obtener tiempo escribiendo una ciudad</div>
                                    <div className="card-body">
                                        <button className='btn btn-primary' type='button'
                                        onClick={()=>props.history.push('/ciudad')}
                                        >POR CIUDAD</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6  d-flex justify-content-center align-items-center">
                                <div className="card text-white bg-dark mb-3 border-secondary" style={{ width: '21rem' }}>
                                    <div className="card-header">Obtener tiempo usando mapa</div>
                                    <div className="card-body">
                                        <button className='btn btn-primary' type='button'
                                        onClick={()=>props.history.push('/map')}
                                        >POR MAPA</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className='mt-5'>AppWeb hecha con React y bootstrap4 por Arturo J. Alva. </h4>

                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>
        </div>
    )
}

export default Home

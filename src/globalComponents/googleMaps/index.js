import React, { useEffect, useState, Fragment } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker/* , InfoWindow */ } from 'react-google-maps'
//import skate from './data/skate.svg'
import mapStyles from './mapStyles'

function GoogleMaps(props) {

    const [ubicacion, setubicacion] = useState(null)

    useEffect(() => {

        const geolocalizar = () => {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    setubicacion({ lat: position.coords.latitude, lng: position.coords.longitude })
                    props.coords({ lat: position.coords.latitude, long: position.coords.longitude })
                }, function (error) {
                    console.log(error)
                    setubicacion({ lat: -12.04, lng: -77.03 })
                    props.coords({ lat: -12.04, long: -77.03 })
                });
        }
        geolocalizar()
    }, [])

    return (
        <Fragment>
            {ubicacion ?
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={ubicacion} //Lima, Perú
                    defaultOptions={{ styles: mapStyles }}
                >
                    <Marker
                        draggable={true}
                        defaultPosition={ubicacion}
                        onDragEnd={(e) => {
                            props.coords({ lat: e.latLng.lat(), long: e.latLng.lng() })
                        }}
                    /* icon={{
                        url: skate,
                        scaledSize: new window.google.maps.Size(25,25)
        
                    }} */
                    />

                </GoogleMap>
                :
                <div>
                    ESPERANDO ...
        </div>
            }
        </Fragment>
    )
}

const MyMapComponent = withScriptjs(withGoogleMap(GoogleMaps))

export default function App(props) {
    return (
        <div>
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDvKIJMhFDLIx8x1ZWaRCytbuhk-yVWxzM`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "550px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                //data={props.data}
                coords={(coords) => props.coords(coords)}
            />
        </div>
    )
}

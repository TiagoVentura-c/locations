import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ListUsers from '../components/ListUsers';
import "./styles.css"

type Place = {
    label?: string;
    value?: string;
    position:{
        lat: number;
        lng: number;
    }
}

 function Locations(){

    const initialPosition = {
        lat: -8.9146692, 
        lng: 13.1572451
    }

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });


    return(
        <div className='locations-container'>
            <h3 className='locations-title'>Localizações cadastradas:</h3>
            <div className='locations-content'>
                <div className='locations-titles'>
                    <div className='locations-content-title'><h4>Nome</h4></div>
                    <div className='locations-content-title'><h4>Email</h4></div>
                    <div className='locations-content-title'><h4>Coordenadas</h4></div>
                </div>
                <div className='locations-line'></div>
                <ListUsers />
            
            <div className='locations-map'>
                <p> <strong>Usuário:</strong>  Tiago Ventura</p>
                <p> <strong>Coordenadas:</strong>  [2,844; -9,52]</p>
                <p> <strong>País:</strong> Angola</p>
                <p> <strong>Cidade:</strong>  Luanda</p>
                <MapContainer
                        center={address.position} 
                        zoom={13} 
                        key={address.position.lat}
                        scrollWheelZoom >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={address.position}>
                                <Popup>
                                    {address.label}
                                </Popup>
                            </Marker>
                    </MapContainer>
            </div>
            </div>
        </div>
    )
}

export default Locations;
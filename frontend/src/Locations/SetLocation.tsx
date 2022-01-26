import React, { useEffect, useState } from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { User } from '../types'; 

import "./SetLocation.css"

type Props = {
    user: User;
}

function SetLocaltion({user}: Props) {
    
    type Place = {
        label?: string;
        position:{
            lat: number;
            lng: number;
        }
    }

    const [address, setAddress] = useState<Place>({
        position: {
            lat: user.locationData.latitude,
            lng: user.locationData.longitude
        }
    });

    useEffect(()=>{
        setAddress({
            position:{
                lat: user.locationData.latitude,
                lng: user.locationData.longitude
            }
        })
    }, [user])

    return(
        <div className='location-container'>
            <div className='location-content'>
                <div className='location-titles-container'>
                <p><strong>Nome:</strong> {user.name}</p>
            </div>
                
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
    )
}


export default SetLocaltion;
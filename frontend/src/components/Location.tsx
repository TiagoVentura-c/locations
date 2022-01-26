import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import "./Location.css"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchLocalMapBox } from '../api';
import { LocationData } from '../types';
   
const initialPosition = {
    lat: -8.83333, 
    lng: 13.23333
}

type Place = {
    label?: string;
    value?: string;
    position:{
        lat: number;
        lng: number;
    }
}

type Props = {
    onChangeLocation: (location: LocationData) => void;
}

function Location({ onChangeLocation }: Props) {

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            },
            place: item.place_name,
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
          latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label!
        }); 
      };    

      function handleGetLocation(){
        if( !('geolocation' in navigator) ) {
            alert("Navegador não tem suporte API Geolocation");
        }else{
            navigator.geolocation.getCurrentPosition(function(position) {
        
                var latitude   = position.coords.latitude;
                var longitude  = position.coords.longitude;
                console.log(latitude, longitude)
                setAddress({
                    position:{
                        lat: latitude,
                        lng: longitude
                    }
                })
        });
        }

        
     }

    return (
        <div className='location-container'>
            <div className='location-content'>
                <h3 className='location-title'>Selecione sua localização</h3>
                
                <div className='filter-container'>
                    <AsyncSelect
                        placeholder="Digite um endereço"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
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

                <div className='add-content-detail'>
                    <button onClick={handleGetLocation} className='add-btn' >Obter localização do dispositivo</button>
                    <p className='add-cord-content'>
                        <strong>Coordenadas--</strong> [{ address.position.lat} ; {address.position.lng}]
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Location;
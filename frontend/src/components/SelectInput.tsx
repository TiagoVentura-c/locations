import React, { useEffect, useState } from 'react';
import { Residence } from '../types';

import "./SelectInput.css"

type dataProps = {
    country: string;
    cities: string[];
}

type listProps = {
    countries: dataProps[]
}



function SelectInput( {countries}: listProps){

    const [cities, setCities] = useState<string[]>(countries[0].cities);
    const [indexSelectedCountry, setIndexSelectedCountry] = useState(0);

    const [selectedResidence, setSelectedResidence] = useState<Residence>({
        country: countries[0].country,
        city: countries[0].cities[0]
    });

    const handleSelectCountry = (element: any) => {

        selectedResidence.country= countries[element.currentTarget.selectedIndex].country
        selectedResidence.city= countries[element.currentTarget.selectedIndex].cities[0]

        setIndexSelectedCountry(element.currentTarget.selectedIndex);
        setCities(countries[element.currentTarget.selectedIndex].cities);

        console.log(selectedResidence);
    }
    
    const handleSelectCity = (element: any) => {
        selectedResidence.city = element.currentTarget.value;

        console.log(selectedResidence)
    }     
    
    useEffect(()=>{
        console.log(selectedResidence) 
        
    }, [])
    
    return(
        <div className='select-container'>
            <div className='select-content' >
                <div className='select-area'>
                    <label htmlFor="select-select" className='select-name'>País:</label>
                    <select name="select" className="select-select" onChange={(element) => handleSelectCountry(element) }>
                        { countries.map(el => (
                            <option className='select-option' value={el.country}>{el.country}</option>
                        ))}
                    </select>
                </div>

                <div className='select-area'>
                    <label htmlFor="select-selects" className='select-name' >Cidade:</label>
                    <select name="select-city" className="select-select" value={countries[indexSelectedCountry].cities[0]} onChange={(element) => handleSelectCity(element) }>
                        { cities.map(city => (
                            <option className='select-option' value={city} >{city}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    )
}

export default SelectInput;

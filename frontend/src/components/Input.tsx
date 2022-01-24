import React from 'react';

import "./input-styles.css"

type Props = {
    nameInput: string;
    typeInput: string;
    handleOnChange: (e: any) => void
}

function Input({ nameInput, typeInput, handleOnChange }: Props){
    return(
        <div className='input-container'>
            <div className='input-content' >
                <h5 className='input-name'>{nameInput}:</h5>
                <input className='input-input' type={typeInput} onChange={(e) => handleOnChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default Input;

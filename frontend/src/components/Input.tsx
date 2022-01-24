import React from 'react';

import "./input-styles.css"

type Props = {
    nameInput: string;
    typeInput: string;
}

function Input({ nameInput, typeInput }: Props){
    return(
        <div className='input-container'>
            <div className='input-content' >
                <h5 className='input-name'>{nameInput}:</h5>
                <input className='input-input' type={typeInput} />
            </div>
        </div>
    )
}

export default Input;

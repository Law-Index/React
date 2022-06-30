import React from 'react';
import './Fanta.css';
import Fantaa from './assets/img/Fanta-logo.png';

export default function Fanta({nombreproducto,año}) 
{
    return (
        <div className='padrefanta'>
    
            <img className='logofanta' src={Fantaa}></img>
            <h1 className='nombreFanta'>{nombreproducto}</h1>
            <h3 className='año'>Año:{año}</h3>

        </div>
    )
}
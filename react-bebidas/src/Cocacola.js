import React from 'react';
import './Cocacola.css';
import Coca from './assets/img/coca.jpg';

function Cocacola({año}) {
    return (
        <div className='padrecoca'>
            <img src={Coca}/>
            <h1>Coca-Cola</h1>
            <h3>Año:{año}</h3>
        </div>
    )
}
export default Cocacola;
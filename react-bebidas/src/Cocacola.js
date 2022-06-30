import React from 'react';
import './Cocacola.css';
import Coca from './assets/img/cocacola.jpg';

function Cocacola() {
    return (
        <div className='padrecoca'>
            <img src={Coca}/>
            <h1>Coca-Cola</h1>
        </div>
    )
}
export default Cocacola;
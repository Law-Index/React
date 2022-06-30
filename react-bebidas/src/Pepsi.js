import React from 'react';
import './Pepsi.css';
import Pepsifoto from './assets/img/pepsilogo_01.jpg';

export default function Pepsi({año}) {
    return (
        <div className='padrepepsi'>
            <img className='logo' src={Pepsifoto}/>
            <h1 className='texto'>Pepsi</h1>
            <h3>Año:{año}</h3>
        </div>
    )
}

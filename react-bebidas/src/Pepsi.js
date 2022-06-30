import React from 'react';
import './Pepsi.css';

import Pepsifoto from './assets/img/pepsi_black.jpg';

function Pepsi() {
    return (
        <div className='padrepepsi'>
            <img className='logo' src={Pepsifoto}/>
            <h1 className='texto'>Pepsi</h1>
        </div>
    )
}
export default Pepsi;
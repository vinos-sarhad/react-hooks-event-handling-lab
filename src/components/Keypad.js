// Code Keypad Component Here
import React from 'react';
function Keypad (){

    function handlingInput(event){
        console.log('Entering password...')

    }
    return (
        <div>hi<input type="password" onChange={handlingInput} /></div>
    )
}

export default Keypad;
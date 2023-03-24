import React, { useState } from "react";

const Timer = () => {
    const [numberCountDown, setnumberCountDown] = useState("");
    let tiempoSegundos = 0;
    let decenasSeconds = 0;
    let centenaSeconds = 0;
    let milesSeconds = 0;
    let diezmilesSeconds = 0;
    let cienmilesSeconds = 0;

    return (
       <>
        setInterval(() => {
            tiempoSegundos = tiempoSegundos + 1;
       
            if (tiempoSegundos%10==0 && tiempoSegundos!=0) {
                tiempoSegundos=0                
            }
            
         }, 1000);
       </>
    );
};

export default Timer;
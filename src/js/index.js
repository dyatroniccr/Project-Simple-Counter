//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";


//render your react application
let tiempoSegundos = 0;
let decenasSeconds = 0;
let centenaSeconds = 0;
let milesSeconds = 0;
let diezmilesSeconds = 0;
let cienmilesSeconds = 0;


setInterval(() => {
    tiempoSegundos = tiempoSegundos + 1
       
    /*if (tiempoSegundos>9){
        tiempoSegundos=0
        decenasSeconds++
    }*/
    if(tiempoSegundos%10==0 && tiempoSegundos!=0){
        tiempoSegundos=0
        decenasSeconds++
    }
    if(decenasSeconds%6==0 && decenasSeconds!=0){
        decenasSeconds=0
        centenaSeconds++
    }
    if(centenaSeconds%10==0 && centenaSeconds!=0){
        centenaSeconds=0
        milesSeconds++
    }
    if(milesSeconds%6==0 && milesSeconds!=0){
        milesSeconds=0
        diezmilesSeconds++
    }
    if(diezmilesSeconds%10==0 && diezmilesSeconds!=0){
        diezmilesSeconds=0
        cienmilesSeconds++
        
    }
    if(cienmilesSeconds==2 && diezmilesSeconds==4){
        cienmilesSeconds=3
    }
    if(cienmilesSeconds%3==0 && cienmilesSeconds!=0){
        tiempoSegundos=0
        decenasSeconds=0
        centenaSeconds=0
        milesSeconds=0
        diezmilesSeconds=0
        cienmilesSeconds=0
    }
    //switch(true)

    ReactDOM.render(<SecondsCounter cienmilesSeconds={cienmilesSeconds} diezmilesSeconds={diezmilesSeconds} milesSeconds={milesSeconds} centenaSeconds={centenaSeconds} decenasSeconds={decenasSeconds} seconds={tiempoSegundos}/>, document.querySelector("#app"));

}, 1000);

//ReactDOM.render(<App />, document.querySelector("#app"));

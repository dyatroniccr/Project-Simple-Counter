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
    //switch(true)

    ReactDOM.render(<SecondsCounter centenaSeconds={centenaSeconds} decenasSeconds={decenasSeconds} seconds={tiempoSegundos}/>, document.querySelector("#app"));

}, 100)
//ReactDOM.render(<Home />, document.querySelector("#app"));

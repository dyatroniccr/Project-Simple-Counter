import React from "react";

const SecondsCounter = (props) => {
    
    //if(props.seconds%10){

    


    return(<>
        Soy el componente SecondsCounter
        <div className="container d-flex">
            <div className="row">
                <div className="col-4">{props.centenaSeconds}:</div>
                <div className="col-4">{props.decenasSeconds}</div>
                <div className="col-4">{props.seconds}</div>
            </div>
        </div>
    
    </>  )
}

export default SecondsCounter;
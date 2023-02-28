import React from "react";

//Import otros componentes
import ButtonsCounter from "./buttonsCounter.jsx";

const SecondsCounter = (props) => {
        
    return(<>        
        <div className="container-fluid d-flex justify-content-center nowrap bg-dark">
                <div className="row gap-1 align-items-center m-5">
                <div className="col btn btn-secondary" id="number"><i className="fa-solid fa-clock"></i> </div>                
                <div className="col btn btn-secondary rounded" id="number">{props.cienmilesSeconds}</div>
                <div className="col btn btn-secondary rounded" id="number">{props.diezmilesSeconds}</div>
                <div className="col btn btn-secondary rounded" id="number">{props.milesSeconds}</div>
                <div className="col btn btn-secondary rounded" id="number">{props.centenaSeconds}</div>
                <div className="col btn btn-secondary rounded" id="number">{props.decenasSeconds}</div>
                <div className="col btn btn-secondary rounded" id="number">{props.seconds}</div>
            </div>
            <ButtonsCounter/>
        </div>
    
    </>  )
}

export default SecondsCounter;
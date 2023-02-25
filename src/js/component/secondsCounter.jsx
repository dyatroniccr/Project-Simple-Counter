import React from "react";

const SecondsCounter = (props) => {
    
    //if(props.seconds%10){
    //<i class="fa-solid fa-clock"></i>

    
    return(<>        
        <div className="container-fluid d-flex justify-content-center nowrap bg-dark">
                <div className="row gap-1 align-items-center m-5">
                <div className="col btn btn-secondary"><i className="fa-solid fa-clock"></i>      </div>                
                <div className="col bg-secondary rounded">{props.cienmilesSeconds}</div>
                <div className="col bg-secondary rounded">{props.diezmilesSeconds}</div>
                <div className="col bg-secondary rounded">{props.milesSeconds}</div>
                <div className="col bg-secondary rounded">{props.centenaSeconds}</div>
                <div className="col bg-secondary rounded">{props.decenasSeconds}</div>
                <div className="col bg-secondary rounded">{props.seconds}</div>
            </div>
        </div>
    
    </>  )
}

export default SecondsCounter;
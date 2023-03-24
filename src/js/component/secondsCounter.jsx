import React from "react";

//Import otros componentes




const SecondsCounter = (props) => {
        
    return(<>   
        
        <div className="container-fluid d-flex justify-content-center nowrap bg-dark">
            <div className="principalCounter align-items-center"> 
                <div className="calendar"> 
                    <i className="fa-regular fa-clock"></i> 
                </div>            
                <div className="six">{props.cienmilesSeconds}</div>
                <div className="five">{props.diezmilesSeconds}</div>
                <div className="four">{props.milesSeconds}</div>
                <div className="three">{props.centenaSeconds}</div>
                <div className="two">{props.decenasSeconds}</div>
                <div className="one">{props.seconds}</div>
            </div>   
        </div>
        
    
    </>  )
}

export default SecondsCounter;
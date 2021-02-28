import React from 'react'
import {Link} from "react-router-dom";

function TakeSurvey() {
    return (
        <div>
            <Link to="/">
               <button className="btn btn-return">Home</button>
           </Link>
            <div style={{margin:"100px auto", width:"200px"}}>TakeSurvey</div>
        </div>
    )
}

export default TakeSurvey

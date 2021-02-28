import React from 'react'
import {Link} from "react-router-dom";

function Publish({dbArray}) {
    return (
        <div className="publish">
           <div className="contains">
            <Link to="/">
               <button className="btn btn-return" >Home</button>
           </Link>
           {
               dbArray.map((data, index) => {
                   return <div key={index}>
                             <h3>{data.question}</h3>
                            { data.options.map((option, ind) => {
                                return <p key={ind}> <input type="checkbox"/>{option} </p>
                            })
                            }
                          </div>
               }) 
           }
           </div>
           <button className="btn">Confirm</button>
        </div>

    )
}

export default Publish

import React from 'react'
import Option from "./Options";
import {Link} from "react-router-dom";

function SingleType({question, handleQuestion, addInDb, AddOptionArr, publish}) {


    
    return (
        <div>
           <div className="question">
                <div className="question-sign">
                  ?
                </div>
                <input value={question} onChange={handleQuestion} placeholder="enter your question here.."/>
            </div>
            <div style={{fontSize:"20px", margin:"20px 0px"}}>Options :</div>
            <Option valueProp="Yes" buttonDisable={true}/>
            <Option valueProp="No" buttonDisable={true}/>

             <div className="final-btn">
               <button className="btn" onClick={addInDb}>Add question</button>
               <Link to="/publish">
                   <button className="btn" onClick={publish}>Publish</button>
               </Link>
             </div>
        </div>
    )
}

export default SingleType

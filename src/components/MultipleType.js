import React from 'react'
import Option from "./Options";
import {Link} from "react-router-dom";

function MultipleType({question, handleQuestion, optionsArr, AddOptionArr, deleteOption, addInDb, publish}) {

    const renderLastOption = () => {
         if(optionsArr.length <= 3) {
             return <Option key={4}  AddOptionArr={AddOptionArr} deleteOption={deleteOption}/>
         } else {
             return <div className="final-btn">
                        <button className="btn" onClick={addInDb} >Add question</button>
                        <Link to="/publish">
                          <button className="btn" onClick={publish}>Publish</button>
                        </Link>
                    </div>
         }
    }
     
    return (
       <div>
           <div className="question" >
                <div className="question-sign">
                  ?
                </div>
                <input value={question} onChange={handleQuestion} placeholder="enter your question here.."/>
            </div>
            <div style={{fontSize:"20px", margin:"20px 0px"}}>Options :</div>
            
              {
                  optionsArr.map((option, index) => {
                     return <Option 
                               key={index} 
                               valueProp={option} 
                               AddOptionArr={AddOptionArr}
                               deleteOption={deleteOption}
                               />
                  })
                 
              }
               {
                  renderLastOption()
              }
        </div>
    )
}

export default MultipleType

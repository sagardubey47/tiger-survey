import React,{useState} from 'react'
import {Link} from "react-router-dom";
import SingleType from "./SingleType"
import MultipleType from "./MultipleType";


function CreateSurvey({dbArray}) {

    const [selectValue, setSelectValue] = useState("Select Question Type");
    const [question, setQuestion] = useState("");
    const [optionsArr, setOptionsArr] = useState([]);

   

    // add new options 
    const AddOptionArr =(value) => {
        console.log(value)
        setOptionsArr((prevValue) => {
            return [...prevValue, value];
        })
    }

    // delete new option 
    const deleteOption = (value) => {
       
        setOptionsArr((prevArr) => {
            return prevArr.filter((data) => {
          return data !== value;
      })
        })
      
    }

    // save question in state
    const handleQuestion = (event) => {
         let value = event.target.value;
        setQuestion(value);
    }

    // add question in final database ie an final array this time
     function addInDb() {

       
         let data = {
             question: question,
             options: (selectValue === "Single Type")? ["Yes" ,"No"] : optionsArr
         }

         dbArray.push(data);
         setSelectValue("Select Question Type");
         setQuestion("");
         setOptionsArr([]);
         console.log(dbArray);
     }

     // publish 

     const publish = () => {
         addInDb();
         setSelectValue("publish");
     }

    // which option is selected ie multiple or single question
    function handleChange(event) {
        let value = event.target.value;
        setSelectValue(value);
    }

    function renderType() {

        if(selectValue === "Single Type") {
            
            return <SingleType 
            question={question} 
            handleQuestion={handleQuestion} 
            addInDb={addInDb}
            AddOptionArr={AddOptionArr}
            publish={publish}
            />;
        } else if(selectValue === "Multiple Type") {
             return <MultipleType 
                      question={question} 
                      handleQuestion={handleQuestion} 
                      optionsArr={optionsArr}
                      AddOptionArr={AddOptionArr}
                      deleteOption={deleteOption}
                      addInDb={addInDb}
                      publish={publish}
                      />;
        } 

    }

    return (
        <div>
           
           <Link to="/">
               <button className="btn btn-return" >Home</button>
           </Link>
             <div className="selectType">
                 <select value={selectValue} className="btn" onChange={handleChange}>
                     <option>Select Question Type</option>
                     <option>Single Type</option>
                     <option>Multiple Type</option>
                 </select>
             </div>
             <div className="selectedComponent">
               {renderType()}
             </div>
        </div>
    )
}

export default CreateSurvey

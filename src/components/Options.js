import React,{useState} from 'react'

function Options({valueProp, AddOptionArr, deleteOption, buttonDisable}) {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        let v = event.target.value;
        setValue(v);
    }

    return (
        <div className="option">
           <input  value={`${valueProp ? valueProp : value}`} onChange={handleChange} />
           <button className="add-delete" disabled = {buttonDisable} onClick={() => {
               AddOptionArr(value);
               setValue("");
           }}>+</button>
           <button className="add-delete" disabled = {buttonDisable} onClick={() => {deleteOption(`${valueProp ? valueProp : ""}`)}}>
           -</button>
        </div>
    )
}

export default Options

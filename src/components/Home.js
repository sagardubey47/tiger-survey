import React from 'react'
import {Link} from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';

function Home() {
    return (
        <div className="home">
            <h1> <PetsIcon style={{ fontSize: 40, color:"" }}/> Tiger Survey</h1>
            <Link to="/createSurvey">
             <div><button className="btn btn-home">Create Survey</button></div>
            </Link>
            <Link to="/takeSurvey">
            <div><button className="btn btn-home">Take Survey</button></div>
            </Link>
        </div>
    )
}

export default Home

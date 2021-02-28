import './App.css';
import React,{} from "react"
import {Switch, Route} from "react-router-dom";
import CreateSurvey from "./components/CreateSurvey"
import  TakeSurvey from "./components/TakeSurvey";
import Home from "./components/Home";
import Publish from "./components/Publish";

function App() {
  const dbArray = [];
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/publish" render={(props) => (
        <Publish {...props} dbArray={dbArray} />
      )} />
      <Route exact path="/createSurvey" render={(props) => (
        <CreateSurvey {...props} dbArray={dbArray} />
      )}/>
      <Route exact path="/takeSurvey" component={TakeSurvey} />
    </Switch>
    </>
  );
}

export default App;

import React from "react";
import {moses} from "./img/moses.jpg"
import './App.css';
import Information from "./information"
import NameDetail from "./NameDetail"

const App =()=>{
  return(
    <div className="mosescv_container">
        <div className="mosescv_information">
              <Information/>
        </div>

        <div className="mosescv_detail">
          <NameDetail/>
        </div>
    </div>
  )
}

export default App;

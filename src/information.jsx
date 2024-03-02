import react from "react"
import "./information.css"
import moses from "./img/moses.jpg"

const Information =()=>{
    return(
        <div className="mosescv-info">
            <img src={moses} alt="" />
           <h4>Email:</h4> <p>Onorefemoses@yahoo.com</p>
           <h4>Phone no:</h4> <p>+234 8167390958</p>
           <h4>Linkdin:</h4> <p><a href="https:/www.linkedin.com/in/moses-onorefe-a72407259">linkedin.com/in/moses-onorefe</a></p>
           <h4>Github:</h4> <p>Onorefe555</p>
           <h2>TECHNICAL SKILLs</h2>
           <hr  className="interest"/>
           <p>HTML5</p>
           <hr />
           <p>CSS3</p>
           <hr />
           <p>JavaScript</p>
           <hr />
           <p>React js</p>
           <hr />
           <p>WordPress</p>
           <hr />
           <p>SQL</p>
           <hr />
           <h2>INTERESTS</h2>
             <hr  className="interest"/>
             <ul>
                <li>Machine Learning</li>
                <li>Video Games</li>
                <li>Robotic</li>
             </ul>
        </div>
    )
}
export default Information
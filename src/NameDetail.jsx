import react from "react"
import "./name.css"


const NameDetail =()=>{
    return(
        <div className="mosescv_name-details">
            <div className="mosescv-experience">
            <h2>Onorefe Moses</h2>
            <h3>Senoir Web Developer</h3>
            <p>Inovative, task-driven professional with 3+ years of exprience in web design and development
                across divers industries Equipped with a record of success in consistently identifying and
                providing the technology needs of companies through ingenous innovation. Proficient in developing
                database, creating user interfaces, writting and testing codes, troubleshooting simple/complex
                inssue and implementing new features  based on user feedback 
            </p>
            </div>
            <div className="mosescv-workeperience">
               <h2>WORK EXPERIENCE</h2>
               <hr className="header" />
               <h3>Web Developer</h3>
               <p className="project projectmax">Maxcharztech ltd</p>
               <h4>09/2019-present</h4>
               <ul>
                <li>Design and implement user friendly website including optimizing checkout page, resulting
                    in 25% increase in user click and subsequently 33% in customer purchase
                </li>
                <li>Provide adequate training to 20+ staff members and and 15+ junior web web Developer
                    in unternal web functions, including step on how to make minor update/change indepently
                </li>
                <li>Extablish and interractive and dynamic website that guarantee high traffic page view
                    and maximize user experience , generating 45% of increase in the company sales revenue.
                </li>
                <li>Conceptual and enforce a server thataccelerated documentation generation as well as
                    well as the search the search functionality of the current website by 15% gathering
                    consistent commendation and award from top management </li>
               </ul>

               <h3>Web Developer</h3>
               <p className="project">Prince Delight Foundation</p>
               <ul>
                <li>Formulated and implement improvement on cleanup and performance, minimizing
                    downtime by 10%
                </li>
                <li>Devise various custom responsive WordPress sites </li>
                <li>Diagonise and troubleshoot different website of the company critical client by 
                    deploying updated knowledge of the modern technology and techniques in industry
                </li>
                <li>Proactively liaised  with the design team and project manager to ensure efficient
                    and delivery of significant project
                </li>
               </ul>
               <h2>COURSES AND TRAINING</h2>
               <hr className="header" />
               <h3 className="past__project">Web Design for Everybody Specialization course</h3>
               <p>Akwayaskitech</p>
               <h3 className="past__project">Front End Web Developer part</h3>
               <p>OceanDrive Tech Academy</p>
               <h3 className="past__project">Complet Javascript Course</h3>
               <p>Udemy.com</p>
               <h2 >PAST PROJECT</h2>
               <hr className="header" />
               <ul className="past__project">
                <li><a href="maxcharztechltd.com">Maxcharztechltd</a></li>
                <li><a href="delightfoundation.com.ng">Delightfoundation</a></li>
               </ul>
               <h2>EDUCATION</h2>
               <hr className="header" />
               <h4 className="certificate">BSC in Computer Science</h4>
               
            </div>
        </div>
    )
}
export default NameDetail
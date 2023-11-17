import Popup from "reactjs-popup"
import "./index.css"

const Education=()=>{
    return(
        <div className="educationSection">
            <Popup className="popupSection" trigger={<button className="popupButton">Education</button>}><ul>
                <li>
                    <h1 className="eduTitle">B.Tech</h1>
                    <p className="edudes">Electrical and Electronics Engineering (2022)<br/>Adarsh College of Egineering,Chebrolu<br/>E.G dist,A.P</p>
                </li>
                <li>
                    <h1 className="eduTitle">Diploma</h1>
                <p className="edudes">Electrical and Electronics Engineering (2018)<br/>Aditya College of Egineering,Surampalem<br/>E.G dist,A.P</p>
                </li>
                <li>
                    <h1 className="eduTitle">SSC</h1>
                    <p className="edudes">Z.P.P.High School(2015)<br/>Voolapalli,E.G dist,A.P</p>
                </li>
                </ul></Popup>
        </div>
    )
    
}
export default Education
import Popup from "reactjs-popup"
import "./index.css"

const Technical=()=>{
    return(
        <div className="technicalSection">
            <Popup trigger={<button className="popupButton">Technical Skills</button>}><ul >
                <li className="skills">
                    <h4>Html</h4>
                </li>
                <li className="skills">
                <h4>CSS</h4>
                </li>
                <li className="skills">
                   <h4>JavaScript</h4>
                </li>
                <li className="skills">
                   <h4>Python</h4>
                </li>
                <li className="skills">
                   <h4>Sql</h4>
                </li>
                <li className="skills">
                   <h4 >React.Js</h4>
                </li>
                <li className="skills">
                   <h4>Node.Js</h4>
                </li>
                </ul></Popup>
        </div>
    )
    
}
export default Technical
import Popup from "reactjs-popup"

import "./index.css"

const Certification=()=>{
    return(
        <div className="CertificationSection">
            <Popup trigger={<button className="popupButton">Certification</button>}><ul>
                <li className="links">
                  <p className="course">Html</p>
                    <a className="nextLink" href="https://certificates.ccbp.in/intensive/static-website?id=BZMVLPQIJW" rel="noreferrer" target="_blank">Certificate link</a>
                </li>
                <li className="links">
                  <p className="course">CSS</p>
                <a className="nextLink" href="https://certificates.ccbp.in/intensive/flexbox?id=BBELPHPHVH" rel="noreferrer" target="_blank">Certificate link</a>
                </li>
                <li className="links">
                  <p className="course">JavaScript</p>
                <a className="nextLink" href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=HAQVPGLBLF" rel="noreferrer" target="_blank">Certificate link</a>
                </li>
                <li className="links">
                  <p className="course">Python</p>
                <a className="nextLink" href="https://certificates.ccbp.in/intensive/programming-foundations?id=THMRDIGWBI" rel="noreferrer" target="_blank">Certificate link</a>
                </li>
                <li className="links">
                  <p className="course">Database</p>
                <a className="nextLink" href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=EJLNCJPZPT" rel="noreferrer" target="_blank">Certificate link</a>
                </li>
                <li className="links">
                  <p className="course">React.js</p>
                <a className="nextLink" href="https://certificates.ccbp.in/intensive/react-js?id=XVGNUMNVOH" rel="noreferrer" target="_blank" >Certificate link</a>
                </li>
                <li className="links">
                  <p className="course">Node.Js</p>
                <a className="nextLink" href="https://certificates.ccbp.in/intensive/node-js?id=DUBCAKWMIZ" rel="noreferrer" target="_blank">Certificate link</a>
                </li>
                </ul></Popup>
        </div>
    )
    
}
export default Certification
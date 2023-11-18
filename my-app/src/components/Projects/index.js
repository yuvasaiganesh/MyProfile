import Popup from "reactjs-popup"

import "./index.css"

const Projects=()=>{
    return(
        <div className="projectsSection">
            <Popup trigger={<button className="popupButton">Projects</button>}  position="bottom right"><ul>
                <li className="projectSection">
                    <p className="project">EmojiGame</p>
                    <a href="https://yvemojigame.ccbp.tech" rel="noreferrer" target="_blank">project link</a>
                </li>
                <li className="projectSection">
                    <p className="project">Wikipedia Search App</p>
                <a href="https://datapedia.ccbp.tech" rel="noreferrer" target="_blank">project link</a>
                </li>
                <li className="projectSection">
                    <p className="project">PodcastPage</p>
                <a href="https://yvpodacastpage.ccbp.tech" rel="noreferrer" target="_blank">project link</a>
                </li>
               
                
                </ul></Popup>
        </div>
    )
    
}
export default Projects
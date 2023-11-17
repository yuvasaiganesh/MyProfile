import Education from "../Education"
import Technical from "../TechnicalSkills"
import Certification from "../Certification"
import Projects from "../Projects"
import "./index.css"


const Content=()=>{
    return(
        <div className="contentSection">
            <Technical/>
            <Education/>
            <Certification/>
            <Projects/>
        </div>
    )
}
export default Content
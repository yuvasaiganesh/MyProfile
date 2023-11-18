import "./index.css"
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
const Home=()=>{
    return(
        <div className="headerSection">
            <div>
            <img className="profile" src="https://res.cloudinary.com/dtni8yshm/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1700291562/profileimage_orpvwn.jpg" alt="myprofile"/>
            </div>
            <div classNAME="info">
               
               <h4 className="name">Hello Iam Y.Y.V.S.S.GANESH</h4>
               <h1 className="role">Aspiring Full Stack Developer</h1>
               <div className="contacts">
               <div className="iconsSection1">
                <div>
               <IoMdMail className="icon"/>
               </div>
               <p className="mail">yuvasaiganesh@gmail.com</p>
               </div>
               <div className="iconsSection2">
                <div>
               <IoCall className="icon"/>
               </div>
                <p className="mail">+91 8125991022</p>
               </div>
               </div>

            </div>

           
        </div>
    )
}
export default Home
import "../style.css"
import Jsondata from "../data/profile.json"
import { FaEnvelope, FaLinkedin} from "react-icons/fa"

export default function Contact() {

    return Jsondata.Profile.map((info) => {
        return (
            <div className="contact-container">   
                <a href={"mailto:" + info.email}><button className="email-btn"><FaEnvelope /> Email</button></a>
                <a href={info.accounts.map((accI) => {return (accI.linkedin) })} target="_blank"><button className="linkedin-btn"><FaLinkedin /> Linkedin</button></a>
            </div>
        )
    })
    // return (
        // <div className="contact-container">   
        //     <a href="mailto:jpacheco@gmail.com"><button className="email-btn"><FaEnvelope /> Email</button></a>
        //     <a href="https://www.linkedin.com/" target="_blank"><button className="linkedin-btn"><FaLinkedin /> Linkedin</button></a>
        // </div>
    // );
}
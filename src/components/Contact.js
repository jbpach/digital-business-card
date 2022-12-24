import "../style.css"
import { FaEnvelope, FaLinkedin} from "react-icons/fa"

export default function Contact() {
    return (
        <div className="contact-container">   
            <button className="email-btn"><FaEnvelope /> Email</button>
            <button className="linkedin-btn"><FaLinkedin /> Linkedin</button>
        </div>
    );

}
import "../style.css"
import { IconContext } from "react-icons";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

export default function Footer() {
    return(
        <footer>
            <IconContext.Provider value={{ size: "1.5em", className: "footer-icons"}} >
                <FaTwitterSquare />
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaGithubSquare />
            </IconContext.Provider>
        </footer>
    );
}
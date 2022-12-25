import "../style.css"
import Jsondata from "../data/profile.json"
import { IconContext } from "react-icons";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

export default function Footer() {
    return Jsondata.Profile.map((info) => {
        return (
            <footer>
                <IconContext.Provider value={{ size: "1.5em", className: "footer-icons"}} >
                    <a href={info.accounts.map((accI) => {return (accI.twiiter) })} target="_blank"  rel="noreferrer"><FaTwitterSquare /></a>
                    <a href={info.accounts.map((accI) => {return (accI.facebook) })} target="_blank"  rel="noreferrer"><FaFacebookSquare /></a>
                    <a href={info.accounts.map((accI) => {return (accI.instagram) })} target="_blank"  rel="noreferrer"><FaInstagramSquare /></a>
                    <a href={info.accounts.map((accI) => {return (accI.github) })} target="_blank"  rel="noreferrer"><FaGithubSquare /></a>
                </IconContext.Provider>
            </footer>
        )
    })
}
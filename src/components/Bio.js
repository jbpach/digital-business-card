import BioComponenet from "./BioComponenet";
import JsonData from "../data/profile.json"

export default function Bio() {
    return JsonData.Profile.map((info) => {
        return (
            <div className="about-int-container">
                <BioComponenet hclass={"about-heading"} tclass={"about-text"} heading={"About"} text={info.bio.map((bioI) => {return (bioI.about) })} /> 
                <BioComponenet hclass={"interests-heading"} tclass={"interests-text"} heading={"Interest"} text={info.bio.map((bioI) => {return (bioI.interests) })} />
            </div>
        );
    })
}
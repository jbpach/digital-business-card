import "../style.css"
import JsonData from "../data/profile.json"

export default function Profile() {

    return JsonData.Profile.map((info) => {
        return (
            <>
                <h1 className="profile-name">{info.firstname} {info.secondname}</h1>
                <h3 className="profile-title">{info.title}</h3>
                <h4 className="profile-website">{info.email}</h4>
            </>
        )
    })
}
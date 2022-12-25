import Jsondata from "../data/profile.json"

export default function ProfileImage() {
    return Jsondata.Profile.map((info) => {
        return <img className='profile-logo' src={info.image} alt=""/>
    })
}
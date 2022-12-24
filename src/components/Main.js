import Bio from "./Bio";
import Contact from "./Contact";
import Profile from "../components/Profile";

export default function Main() {
    return (
        <main>
            <Profile />
            <Contact />
            <Bio />
        </main>
    );
}
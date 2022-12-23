import "./App.css"

import ProfileImage from "./components/ProfileImage";
import Profile from "./components/Profile";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">    
        <ProfileImage />
        <div className="profile-card">
          <Profile />
          <div className="container-buttons"> 
            <button></button>
            <button></button>
          </div>

          <About />
          <Interests />
        </div>
        <Footer />
    </div>

  );
}

export default App;

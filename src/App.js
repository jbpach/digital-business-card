
import Main from "./components/Main";
import ProfileImage from "./components/ProfileImage";
import Footer from "./components/Footer"
function App() {
  return (
    // <div className="container">    
    //     <ProfileImage />
    //     <div className="profile-card">
    //       <Profile />
    //       <div className="container-buttons"> 
    //         <button></button>
    //         <button></button>
    //       </div>
    //       <AboutInterests />
    //     </div>
    //     <Footer />
    // </div>
    <div className="app-container">
      <ProfileImage />
      <Main />
      <Footer />
    </div>

  
  );
}

export default App;

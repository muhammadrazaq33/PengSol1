import About from "./Components/About";
import AboutText from "./Components/AboutText";
import Available from "./Components/Available";
import Avatar from "./Components/Avatar";
import Banner from "./Components/Banner";
import Buy from "./Components/Buy";
import Community from "./Components/Community";
import Faq from "./Components/Faq";
import Navbar from "./Components/Navbar";
import Tokenomics from "./Components/Tokenomics";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <About />
        {/* <AboutText /> */}
        <Available />
        <Tokenomics />
        <Buy />
        {/* <Community /> */}
        <Avatar />
        <Faq />
      </div>
    </>
  );
}

export default App;

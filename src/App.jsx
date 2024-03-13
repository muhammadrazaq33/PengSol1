import About from "./Components/About";
import AboutText from "./Components/AboutText";
import Available from "./Components/Available";
import Banner from "./Components/Banner";
import Buy from "./Components/Buy";
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
      </div>
    </>
  );
}

export default App;

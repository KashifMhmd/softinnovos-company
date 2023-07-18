import { useEffect, useState } from "react";
import Line from "./components/Line/Line";
import useMediaQuery from "./hooks/useMediaQuery";
import AboutUs from "./scenes/AboutUs/AboutUs";
import Contacts from "./scenes/Contacts/Contacts";
import DotGroup from "./scenes/DotGroup/DotGroup";
import LandingPage from "./scenes/LandingPage/LandingPage";
import Navbar from "./scenes/Navbar/Navbar";
import Services from "./scenes/Services/Services";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const isAboveMedium = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-black">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className={"w-5/6 mx-auto md:h-full"}>
        {isAboveMedium && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <LandingPage setSelectedPage={setSelectedPage} />
      </div>

      <Line />
      <div className={"w-5/6 mx-auto md:h-full"}>
        <Services />
      </div>
      <Line />
      <div className={"w-5/6 mx-auto md:h-full"}>
        <AboutUs />
      </div>
      <Line />
      <div className={"w-5/6 mx-auto md:h-full"}>
        <Contacts />
      </div>
    </div>
  );
}

export default App;

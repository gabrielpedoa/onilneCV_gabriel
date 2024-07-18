import { useEffect } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import "./styles/components/app.sass";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="portfolio" data-aos="fade-down" data-aos-delay="450">
        <h1>Gabriel Antunes</h1>
        <SideBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;

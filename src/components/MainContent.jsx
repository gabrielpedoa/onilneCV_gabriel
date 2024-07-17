import "../styles/components/main-content.sass";
import AboutContainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";

function MainContent() {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
    </main>
  );
}
export default MainContent;

import Avatar from "../img/gabriel.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

function SideBar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Foto Gabriel Antunes" />
      <p className="title">
        <strong>Fullstack Developer:</strong> Node.js | React.js
      </p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        English Curriculum
      </a>
      <a href="" className="btn">
        Curriculo em Português
      </a>
    </aside>
  );
}
export default SideBar;

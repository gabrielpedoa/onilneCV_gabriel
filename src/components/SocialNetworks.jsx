import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/social-networks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    location: "https://www.linkedin.com/in/gabrielpedoa/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    location: "https://github.com/gabrielpedoa",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    location: "https://www.instagram.com/gabrielpedoa/",
  },
];

function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.location}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}
export default SocialNetworks;

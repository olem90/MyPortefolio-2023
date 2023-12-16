import { ContactIconContainer } from "./Contact.styles";
import { ContactIconWrapper } from "./Contact.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { DiscordModal } from "../DiscordModal/DiscordModal";
import { useState } from "react";

export const Contact = () => {
  const [isDiscordModalOpen, setDiscordModalOpen] = useState(false);

  return (
    <ContactIconWrapper>
      <h2>Contact Me</h2>
      <p>You can get in touch with me through the icons below</p>
      <ContactIconContainer>
        <div className="single-icon-container">
          <a>
            <FontAwesomeIcon
              className="contact-icon"
              icon={faDiscord}
              onClick={() => setDiscordModalOpen(true)}
            />
          </a>
          <span>Discord</span>
        </div>

        <DiscordModal
          isOpen={isDiscordModalOpen}
          onClose={() => setDiscordModalOpen(false)}
          discordTag="olerognanjan22ft#9663"
        />

        <div className="single-icon-container">
          <a
            target="_blank"
            href="mailto:olemariusrognan90@gmail.com"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          </a>
          <span>Email</span>
        </div>

        <div className="single-icon-container">
          <a
            href="https://www.linkedin.com/in/ole-marius-sand%C3%B8-rognan-923202249/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
          </a>
          <span>LinkedIn</span>
        </div>
      </ContactIconContainer>
    </ContactIconWrapper>
  );
};

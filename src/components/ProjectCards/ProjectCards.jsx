import {
  ProjectCardsHolidayStyle,
  ProjectCardsJavascriptFrameworksStyle,
  ProjectCardsFefStyle,
} from "./ProjectCards.style";
import {
  ProjectCardsWrapper,
  HoverTextStyle,
  HoverTextProjectStyle,
} from "./ProjectCards.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FullscreenModal } from "../FullscreenModal/FullscreenModal";
import { useInView } from "react-intersection-observer";
import HolidazeImage from "../../images/Holidaze-exam.png";
import MegaMerch from "../../images/MegaMerch-FEF-CA.png";
import Tbs from "../../images/TrondheimBoligStyling.png";

export const ProjectCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLandscape, setIsLandscape] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const toggleLandscape = () => {
    setIsLandscape(!isLandscape);
  };

  const HoverText = () => {
    return <HoverTextStyle>Github</HoverTextStyle>;
  };

  const HoverTextProject = () => {
    return <HoverTextProjectStyle>Visit Site</HoverTextProjectStyle>;
  };

  const useCardInView = () => {
    return useInView({
      triggerOnce: true,
      threshold: 0.56,
    });
  };

  const [holidayRef, holidayInView] = useCardInView();
  const [fefRef, fefInView] = useCardInView();
  const [javascriptRef, javascriptInView] = useCardInView();

  return (
    <ProjectCardsWrapper>
      <h2 className="my-projects-h2">My Projects</h2>

      <ProjectCardsHolidayStyle
        ref={holidayRef}
        className={holidayInView ? "in-view" : ""}
      >
        <h3>Holidaze</h3>
        <p>
          Holidaze, my final exam, introduces a newly launched accommodation
          booking site, that has tasked us with developing a modern front-end
          application. This project has both customer-facing and admin-facing
          sides, enabling users to book holidays and manage venues and bookings.
        </p>
        <p>
          Users who are not registered can still browse and search for venues.
          However, signing in is a prerequisite for booking venues.
          Additionally, only users registered as venue managers have the
          capability to create, update and delete their own venues.
        </p>
        <div className="img-container">
          <img
            src={HolidazeImage}
            alt="Holidaze"
            className={isLandscape ? "landscape" : ""}
          ></img>
          <FontAwesomeIcon
            className="fullscreen-icon"
            icon={faExpand}
            onClick={() => {
              openModal(HolidazeImage);
              toggleLandscape(!isLandscape);
            }}
          />
        </div>
        <div className="icons-container">
          <div className="github-icon-container">
            <a
              href="https://github.com/olem90/Project-exam-2"
              target="_blank"
              className="github-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="github-icon" icon={faGithub} />
            </a>
            <HoverText />
          </div>
          <div className="project-icon-container">
            <a
              href="https://gilded-twilight-67e5c7.netlify.app/"
              target="_blank"
              className="project-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="project-icon" icon={faGlobe} />
            </a>
            <HoverTextProject />
          </div>
        </div>
      </ProjectCardsHolidayStyle>

      <ProjectCardsFefStyle ref={fefRef} className={fefInView ? "in-view" : ""}>
        <h3>Trondheim Boligstyling</h3>
        <p>
          This is a website I built for my sister's styling company in Trondheim. 
          The goal was to make it super easy for people to see what she offers and get in touch. 
        </p>
        <h4 className="site-info">The site has:</h4>
        <ul className="site-list">
          <li>A gallery to show off past styling projects</li>
          <li>A prices section so visitors know what to expect</li>
          <li>An about us page to introduce the business</li>
          <li>A simple contact form so people can reach out quickly</li>
        </ul>
        <p> I focused on keeping the design clean and easy to navigate, while still looking professional. 
            The idea was to build trust with potential clients and make booking a 
            service as straightforward as possible.
        </p>
        <div className="img-container">
          <img src={Tbs}></img>
          <Link>
            <FontAwesomeIcon
              className="fullscreen-icon"
              icon={faExpand}
              onClick={() => openModal(Tbs)}
            />
          </Link>
        </div>
        <div className="icons-container">
          <div className="github-icon-container">
            <a
              href="https://github.com/olem90/TrondheimBoligStyling"
              target="_blank"
              className="github-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="github-icon" icon={faGithub} />
            </a>
            <HoverText />
          </div>
          <div className="project-icon-container">
            <a
              href="https://www.trondheimboligstyling.no"
              target="_blank"
              className="project-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="project-icon" icon={faGlobe} />
            </a>
            <HoverTextProject />
          </div>
        </div>
      </ProjectCardsFefStyle>

      <ProjectCardsJavascriptFrameworksStyle
        ref={javascriptRef}
        className={javascriptInView ? "in-view" : ""}
      >
        <h3>Javascript Framework 2</h3>
        <p>
          This React-based project entails building an eCom store featuring
          product browsing, detailed item descriptions, a cart system, and a
          checkout process. The site includes a searchable product listing, a
          user-friendly cart interface, and a contact page with form validation,
          offering an efficient and engaging online shopping experience.
        </p>
        <div className="img-container">
          <img src={MegaMerch}></img>
          <FontAwesomeIcon
            className="fullscreen-icon"
            icon={faExpand}
            onClick={() => openModal(MegaMerch)}
          />
        </div>

        <div className="icons-container">
          <div className="github-icon-container">
            <a
              href="https://github.com/olem90/front-end-framworks-CA"
              target="_blank"
              className="github-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="github-icon" icon={faGithub} />
            </a>
            <HoverText />
          </div>

          <div className="project-icon-container">
            <a
              href="https://creative-trifle-decb63.netlify.app/"
              target="_blank"
              className="project-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="project-icon" icon={faGlobe} />
            </a>
            <HoverTextProject />
          </div>
        </div>
      </ProjectCardsJavascriptFrameworksStyle>

      <FullscreenModal
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
        closeModal={closeModal}
        isLandscape={isLandscape}
      />
    </ProjectCardsWrapper>
  );
};

import { IntroStyle } from "./Intro.style";
import { IntroWrapper } from "./Intro.style";
import Dancer from "../../images/dancer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Intro = () => {
  return (
    <IntroWrapper>
      <IntroStyle>
        <div>
          <p>
            <strong>Hello</strong> and <strong>welcome</strong> to my
            Portfolio. I am <strong>Ole Marius Sandø Rognan</strong>.
          </p>
          <p>
            I am ready to take on new challenges, and I look forward to bringing 
            your digital projects to life!
          </p>
          <div className="github-intro-icon-container">
            <a target="_blank" href="https://github.com/olem90">
              <FontAwesomeIcon
                className="github-icon-intro"
                icon={faGithub}
              />
            </a>
            <span>Github Profile </span> 
          </div>
        </div>
        <div className="dancing-dude">
          <img src={Dancer}></img>
        </div>
      </IntroStyle>
    </IntroWrapper>
  );
};

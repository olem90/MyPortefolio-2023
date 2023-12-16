import { IntroStyle } from "./Intro.style";
import { IntroWrapper } from "./Intro.style";
import Dancer from "../../images/dancer.png";

export const Intro = () => {
  return (
    <IntroWrapper>
      <IntroStyle>
        <div>
          <p>
            <strong>Hello</strong> and <strong>welcome</strong> to my
            Portefolio. I am <strong>Ole Marius Sandø Rognan</strong>.
          </p>
          <p>
            I am ready to take on new challenges, and I look forward to bringing
            your digital projects to life!
          </p>
        </div>

        <div className="dancing-dude">
          <img src={Dancer}></img>
        </div>
      </IntroStyle>
    </IntroWrapper>
  );
};

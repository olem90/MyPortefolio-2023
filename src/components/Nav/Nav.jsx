import { NavStyles } from "./Nav.style";
import { useTheme } from "../../ThemeContext/ThemeContext";
import { ModeButton } from "../Buttons/Buttons.style";

export const Nav = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavStyles>
      <ul>
        <li>
          <h1>My Portfolio</h1>
        </li>

        <ModeButton onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </ModeButton>
      </ul>
    </NavStyles>
  );
};

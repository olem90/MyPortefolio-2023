import React from "react";
import { ProjectCards } from "../ProjectCards/ProjectCards";
import { HomeWrapper } from "./Home.style";
import { useTheme } from "../../ThemeContext/ThemeContext";
import { Intro } from "../Intro/Intro";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Downloads } from "../Downloads/Downloads";


export const Home = () => {
  const { theme } = useTheme();

  return (
    <HomeWrapper theme={theme}>
      <Intro />
      <About />
      <ProjectCards />
      <Downloads />
      <Contact />
    </HomeWrapper>
  );
};

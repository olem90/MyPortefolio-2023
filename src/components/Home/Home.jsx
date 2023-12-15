import React from "react";
import { ProjectCards } from "../ProjectCards/ProjectCards";
import { HomeWrapper } from "./Home.style";
import { useTheme } from "../../ThemeContext/ThemeContext";
import { Intro } from "../Intro/Intro";
import { About } from "../About/About";

export const Home = () => {
    const { theme } = useTheme();

    return (
        <HomeWrapper theme={theme}>
            <Intro />
            <About />
            <ProjectCards /> 
        </HomeWrapper> 
    )
}  
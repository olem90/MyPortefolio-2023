import styled from "styled-components";

export const NavStyles = styled.nav`
  display: flex; 

    ul {
        list-style-type: none; 
        display: flex;
        gap: 35px;  
        width: 100%;

          h1 {
            font-family: var(--header-font);
            font-size: 55px;
            font-weight: bold;
          }
    }
`
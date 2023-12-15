import styled from "styled-components";

export const NavStyles = styled.nav`
  display: flex; 

    ul {
        list-style-type: none; 
        display: flex;
        width: 100%;

          h1 {
            font-family: var(--header-font);
            white-space: nowrap;
            font-size: 55px;
            font-weight: bold;
          }

          @media(max-width: 800px) {
            h1 {
              font-size: 45px;
            }
          }
    }

  
`
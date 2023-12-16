import styled from "styled-components";

export const HomeWrapper = styled.div`
  min-height: 100vh;
  width: 600px;
  margin-inline: auto;
  background: var(--background-light);

  @media (max-width: 800px) {
    width: 90%;
  }

  @media (max-width: 550px) {
    width: 96%;
  }
`;

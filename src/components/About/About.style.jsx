import styled from "styled-components";

export const AboutStyle = styled.div`
  width: 600px;
  margin-inline: auto;
  line-height: 28px;
  font-family: var(--body-font);
  color: var(--text-light);

  p {
    font-size: 16px;
  }

  h2 {
    font-family: var(--h2-font);
    font-weight: bold;
    font-size: 34px;
  }

  @media (max-width: 800px) {
    width: 90%;
  }

  @media (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 800px) {
    width: 96%;
  }
`;

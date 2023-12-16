import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  background: var(--blue);
  height: 100px;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-text {
    color: var(--text-light: #000);
    font-family: "Roboto Mono", monospace;
    font-size: 35px;
    font-weight: bold;

    @media (max-width: 800px) {
      font-size: 28px;
    }

    @media (max-width: 550px) {
      font-size: 20px;
    }

    @media (max-width: 400px) {
      font-size: 17px;
    }

    @media (max-width: 350px) {
      font-size: 16px;
    }
  }
`;

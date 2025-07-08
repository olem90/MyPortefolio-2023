import styled from "styled-components";

export const ContactIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 20px;
  width: 340px;
  color: var(--text-light);
  margin-inline: auto;

  span {
    font-size: 15px;
    margin-top: 5px;
  }

  :nth-child(1) {
    margin-left: 30px;
  }

  :nth-child(3) {
    margin-right: 30px;
  }

  .single-icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      margin-inline: auto;
    }
  }

  .contact-icon {
    display: flex;
    font-size: 40px;
    margin-inline: auto;
    color: var(--icon-color);

    &:hover {
      color: rebeccapurple;
      cursor: pointer;
    }
  }

  @media (max-width: 550px) {
    margin-inline: auto;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ContactIconWrapper = styled.div`
  p {
    font-size: 18px;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: 34px;
    font-family: var(--h2-font);
  }
  
  margin-inline: auto;
`;

import styled from "styled-components";

export const IntroStyle = styled.div`
  width: 680px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const IntroWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-block: 50px 120px;
  font-family: var(--body-font); 
  color: var(--text-light);
  border-bottom: 7px solid silver;

  .intro-p-1 {
    font-size: 22px; 
  }

  .github-intro-icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin-block: 30px;

    .github-link-combined {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: var(--icon-color);
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover .github-icon-intro,
      &:hover .github-icon-text {
        color: rebeccapurple;
      }
    };

    .github-icon-intro {
      font-size: 42px;
      padding-block: 10px;
      transition: color 0.3s ease;
    }

    .github-icon-text {
      color: var(--text-light);
      color: var(--icon-color);
      font-size: 14px;
      transition: 0.3s ease; 
    }

    @media (max-width: 550px) {
      margin-bottom: 80px;
    }
  }

  p { 
    font-size: 16px;  
  }

  .dancing-dude {
    margin-left: 70px
   
  } 

  img { 
    width: 150px;
  }

  @media (max-width: 800px) {
    img { 
      width: 130px;
    }

    .dancing-dude { 
      margin-left: 30px; 
    } 
  }

  @media (max-width: 550px) {
    p {
      padding-inline: 14px;
    }
  }

  @media (max-width: 400px) {
    p {
      font-size: 14px;
    }

    img { 
      width: 110px;
    }

    .dancing-dude { 
      margin-left: 10px; 
    } 
  }
`;
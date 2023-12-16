import styled from "styled-components";

export const IntroStyle = styled.div`
  width: 660px;
  height: 200px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const IntroWrapper = styled.div`
  width: 100%; 
  display: flex;
  margin-block: 90px 150px; 
  font-family: var(--body-font);
  color: var(--text-light);
  border-bottom: 7px solid silver;

    .github-icon-intro {
      font-size: 42px; 
    }

    .github-intro-icon-container {
      display: flex;
      flex-direction: column;  
      width: 94px;    

        a {
          width: fit-content;    
          margin-inline: auto;  
          border-radius: 25px; 
          color: var(--icon-color); 

          &:hover {
            color: rebeccapurple;
            cursor: pointer;
          }
        } 

        span {
          white-space: nowrap;  
          margin-bottom: 15px;  
        }

      @media(max-width: 550px) {
        margin-bottom : 80px;     
      }
    }
  
    p { 
      font-size: 16px;  
    }

    .dancing-dude {
        margin-left: 70px; 
    } 

    img { 
        width: 150px;
    }

  @media(max-width: 800px) {

    img { 
      width: 130px;
    }

    .dancing-dude { 
      margin-left: 30px; 
    } 
  }

  @media(max-width: 550px) {
    p {
      padding-inline: 14px;
    }

  @media(max-width: 400px) {
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

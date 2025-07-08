import styled from "styled-components";

export const HoverTextStyle = styled.span`
  position: absolute;
  top: -23px;
  right: -19px;
  transform: translateX(-50%);
  font-size: 14px; 
  opacity: 1;
  visibility: hidden;   
  color: var(--text-light);
  transition:
    opacity 0.3s ease-in,
    visibility 0.3s ease-in;

  .github-icon-container:hover & {
    opacity: 0.9;
    visibility: visible;
    color: var(--text-light); 
  }

  @media(max-width: 800px) {
    visibility: visible; 
    opacity: 1; 
    font-size: 13px; 
    right: -17px;   
  }
`;

export const HoverTextProjectStyle = styled(HoverTextStyle)` 
  position: absolute;
  top: -24px;
  right: -33px;
  transform: translateX(-50%);
  font-size: 14px;
  visibility: hidden;
  transition:
  opacity 0.3s ease-in,
  visibility 0.3s ease-in;
 
  .project-icon-container:hover & {
    opacity: 0.7;
    visibility: visible;
    color: var(--text-light);
  }

  @media(max-width: 800px) {
    visibility: visible;
    opacity: 1; 
    font-size: 13px;
    right: -28px;
  }
`;

export const ProjectCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-inline: auto;

  .icons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 20px;
  }

  h2 {
    font-family: var(--h2-font);
    font-weight: bold;
    font-size: 34px;
  }

  .my-projects-h2 {
    margin-top: 100px;
  }

  h3 {
    font-family: var(--h3-font);
    font-weight: bold;
    font-size: 27px;
  }

  img {
    max-width: 94%;
    min-height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
  }

  .fullscreen-icon {
    position: absolute;
    bottom: 15px;
    right: 19px;
    font-size: 26px;
    display: none;
    color: #fff;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 800px) {
      display: none;
      color: #000;
    }
  }

  .github-icon {
    font-size: 41px;
    transition: color 0.3s;
    color: var(--icon-color);
  }

  .project-icon {
    font-size: 39px;
    transition: color 0.3s;
    color: var(--icon-color);
  }

  .github-icon-container,
  .project-icon-container {
    position: relative;
    width: fit-content;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    color: #000;
    background: var(--background-light);

    &:hover .github-icon {
      color: rebeccapurple;
      cursor: pointer;
    }

    &:hover .project-icon {
      color: rebeccapurple;
      cursor: pointer;
    }

    &:hover ${HoverTextStyle} {
      opacity: 1;
      visibility: visible;
      color: var(--text-light);
    }
  }

  @media (max-width: 800px) {
    width: 97%;
  }
`;

export const ProjectCardsHolidayStyle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 600px;
  text-align: center;
  background: var(--card-background-color);
  box-shadow: var(--box-shadow-light-blue);
  margin-bottom: 120px;
  border-radius: 20px;

  p {
    padding-inline: 26px;
    text-align: left;
    font-family: var(--body-font);
    font-size: 15px;
  }

  .img-container {
    position: relative;
    margin-block: 30px;

    img {
      object-fit: cover;
      filter: brightness(85%);
    }

    &:hover .fa-expand {
      display: block;

      @media (max-width: 800px) {
        display: none;
      }
    }

    &:hover img {
      filter: brightness(50%); 
    }
  }

  @media (max-width: 800px) {
    margin-inline: auto;

    .img-container img.landscape {
      width: auto;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 550px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const ProjectCardsJavascriptFrameworksStyle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(12px);
  max-width: 600px;
  text-align: center;
  border-radius: 20px;
  box-shadow: var(--box-shadow-light-blue);
  background: var(--card-background-color);
  margin-bottom: 100px;

  p {
    padding-inline: 26px;
    text-align: left;
    font-family: var(--body-font);
    font-size: 15px;
  }

  .img-container {
    position: relative;
    margin-block: 30px;
    
  img {
    object-fit: cover;
    filter: brightness(85%);
   }

    &:hover .fa-expand {
      display: block;
    }

    &:hover img {
      filter: brightness(40%);

      @media (max-width: 800px) {
        filter: brightness(100%);
      }
    }
  }

  @media (max-width: 800px) {
    margin-inline: auto;
  }
`;

export const ProjectCardsFefStyle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 600px;
  text-align: center;
  border-radius: 20px;
  box-shadow: var(--box-shadow-light-blue);
  background: var(--card-background-color);
  margin-bottom: 120px;

  p {
    padding-inline: 26px;
    text-align: left;
    font-family: var(--body-font);
    font-size: 15px;
  }

  
  .img-container {
    position: relative;
    margin-block: 30px;

    img {
    object-fit: cover;
    filter: brightness(85%);
   }

    &:hover .fa-expand {
      display: block;
    }

    &:hover img {
      filter: brightness(50%);

      @media (max-width: 800px) {
        filter: brightness(100%);
      }
    }
  }

  @media (max-width: 800px) {
    margin-inline: auto;
  }
`;

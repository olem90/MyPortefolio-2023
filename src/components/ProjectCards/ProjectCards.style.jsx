import styled, { keyframes } from 'styled-components';

export const HoverTextStyle = styled.span`
  position: absolute;
  top: -20px;
  right: -23px;
  transform: translateX(-50%);
  font-size: 15px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in, visibility 0.3s ease-in;

  .github-icon-container:hover & {
    opacity: 0.7; 
    visibility: visible;
    color: var(--text-light);
  }
`

export const HoverTextProjectStyle = styled(HoverTextStyle)`
  position: absolute;
  top: -20px;
  right: -36px;
  transform: translateX(-50%);
  font-size: 15px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in, visibility 0.3s ease-in;

  .project-icon-container:hover & {
    opacity: 0.7; 
    visibility: visible;
    color: var(--text-light);
  }
`

const flipInOpposite = keyframes`
  from {
    transform: perspective(600px) rotateY(-90deg);
    opacity: 0;
  }
  to {
    transform: perspective(600px) rotateY(0);
    opacity: 1;
  }
`;

const flipIn = keyframes`
  from {
    transform: perspective(600px) rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: perspective(600px) rotateY(0);
    opacity: 1;
  }
`;

const flipX = keyframes`
  from {
    transform: perspective(600px) rotateX(90deg);
    opacity: 0;
  }
  to {
    transform: perspective(600px) rotateX(0);
    opacity: 1;
  }
`;

export const ProjectCardsWrapper = styled.div`
width: 100%; 
display: flex; 
flex-direction: column;
margin-inline: auto; 
gap: 60px;

  .icons-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    gap: 40px; 
    border-bottom: 15px;
  }

  h2 {
    font-family: var(--h2-font);
    font-weight: bold;
    font-size: 34px;
  }

  h3 {
    font-family: var(--h3-font);
    font-weight: bold;
    font-size: 27px;
  }

  img {
    max-width: 100%;
    min-height: 100%; 
    object-fit: cover; 
    transition: filter 0.3s ease;
  }

  .fullscreen-icon {
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 26px;
    display: none;
    color: #fff;
    
    &:hover {
      cursor: pointer;
    }
  }

  .github-icon {
    font-size: 43px;
    transition: color 0.3s;
    color: var(--text-light);
  }

  .project-icon {
    font-size: 39px;
    transition: color 0.3s;
    color: var(--text-light);
  }

  .github-icon-container, .project-icon-container {
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
      color: ${props => (props.theme.color)};
    }
  }
`

export const ProjectCardsHolidayStyle = styled.div`
border: 3px solid var(--blue);
max-width: 600px;  
text-align: center; 
opacity: 0; 
transform-style: preserve-3d;
backface-visibility: hidden;
border-radius: 3px;
box-shadow: var(--shadow-blue);

  p {
    padding-inline: 20px;
    text-align: left; 
    font-family: var(--body-font);
    font-size: 15px;
  }

&.in-view {
  animation: ${flipIn} 1.5s ease forwards;
}

  .img-container {
    position: relative;

    &:hover .fa-expand {
      display: block;
    };

    &:hover img {
      filter: brightness(40%);
    };
  };
`

export const ProjectCardsJavascriptFrameworksStyle = styled.div`
border: 3px solid var(--blue);
max-width: 600px;  
text-align: center; 
opacity: 0; 
transform-style: preserve-3d;
backface-visibility: hidden;
border-radius: 3px;
box-shadow: var(--box-shadow-light-blue);

p {
  padding-inline: 20px;
  text-align: left; 
  font-family: var(--body-font);
  font-size: 15px;
}

&.in-view {
  animation: ${flipInOpposite} 2s ease forwards;
}

  .img-container {
    position: relative;

    &:hover .fa-expand {
      display: block;
    };

    &:hover img {
      filter: brightness(40%);
    };
  };
`

export const ProjectCardsFefStyle = styled.div`
border: 3px solid var(--blue);
max-width: 600px;  
text-align: center; 
opacity: 0; 
transform-style: preserve-3d;
backface-visibility: hidden;
border-radius: 3px;
box-shadow: var(--shadow-blue);

p {
  padding-inline: 20px;
  text-align: left; 
  font-family: var(--body-font);
  font-size: 15px;
}

&.in-view {
  animation: ${flipX} 2s ease forwards;
}

  .img-container {
    position: relative;

    &:hover .fa-expand {
      display: block;
    };

    &:hover img {
      filter: brightness(45%);
    };
  };
`

 

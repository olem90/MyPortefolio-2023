import styled from "styled-components";

export const FullscreenModalStyleWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;

  .modal {
    display: flex;
    position: relative;
    flex-direction: column;
    height: auto;
    max-width: 70%;
    z-index: 99;
    border-radius: 3px;
    
    .close-modal-btn {
      border-radius: 0;
      color: #fff;
      background: #000;
      min-width: 100%;
      margin: 0;
      font-size: 20px;
      padding-inline: 0;
      padding-block: 8px;
      border: 2px solid transparent;
  
      &:hover {
        cursor:  pointer;
        background: rgba(20, 23, 61, 0.99);
      }
    }
  }

  .modal img {
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-inline: auto;
  }

  @media (max-width: 800px) {
    .modal {
      max-width: 97%;
      min-width: 97%;
    }
  }
`;

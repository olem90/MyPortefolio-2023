import styled from "styled-components";

export const FullscreenModalStyleWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8); /* Dim background */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid red;
    min-height: 100dvh;
    border: 2px solid red; 

    .modal{
        display: flex;
        flex-direction: column;
        min-height: 80%;
        max-height: 80%;
        max-width: 80%;
        z-index: 99;
        border-radius: 3px;
        border: 6px solid var(--blue);

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
            transition: border 0.5s ease;

            &:hover {
                border: 2px solid silver;
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
`
import styled from "styled-components";

export const DiscordModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

    h3 {
        font-size: 18px;
        font-weight: bold;
        font-family: var(--header-font);
        margin-inline: auto;
        padding: 0;
        
    }

    .copy-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;

          span {
            font-family: var(--body-font);
            font-size: 16px;
          }
    }

    .copy-btn {
        padding: 2px;
        border-radius: 0;
        color: var(--text-light);
        background: transparent;
        margin-left: 10px;
        font-weight: bold;
        font-size: 14px;
        outline: 1px solid transparent;
        border: 1px solid transparent;
    }

    .close-btn {
        padding: 5px;
        width: 100%;
        margin-block: 17px 9px;
        background: var(--color-light);
        color: var(--background-light);
        font-weight: bold;
        outline: 2px solid transparent;
        border: 2px solid transparent;

        &:hover {
            opacity: 0.86;
        }
    }
`

export const DiscordModalWrapper = styled.div`
  border: 5px solid var(--card-border-color);
  min-width: 324px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  background: var(--card-background-color);
`
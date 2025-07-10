import styled from "styled-components";

export const ModeButton = styled.button`
  margin-left: auto;
  margin-right: 12px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 38px;
  width: 70px;
  border: 1px solid var(--color-light);
  outline: 1px solid var(--color-light);
  white-space: nowrap;
  background: var(--background-light);
  color: var(--text-light);
  font-family: 'Titillium Web', sans-serif;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: var(--background-dark);
    cursor: pointer;
    border: 2px solid var(--btn-color-light);
    outline: 1px solid var(--btn-color-light);
    color: var(--background-light);
  }

  @media (max-width: 800px) {
    height: 26px;
    width: 62px;
    margin-right: 10px;
    padding-inline: 34px;
    font-size: 12px; 
    border: 1px solid var(--color-light);
    outline: 1px solid var(--color-light);
  }

  @media (max-width: 550px){
    font-size: 12px; 
    
  }

  @media (max-width: 400px) {
    width: 40px;
    font-size: 10px;
    height: 22px;
    padding-inline: 25px;
  }

  @media (max-width: 350px) {
    width: 40px;
    font-size: 10px;
    height: 18px;
    padding-inline: 25px;
  }



`;

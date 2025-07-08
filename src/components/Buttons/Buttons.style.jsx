import styled from "styled-components";

export const ModeButton = styled.button`
  margin-left: auto;
  margin-right: 12px;
  height: 40px;
  padding: 3px;
  width: 100px;
  border: 1.5px solid var(--color-light);
  outline: 1px solid var(--color-light);
  white-space: nowrap;
  background: var(--background-light);
  color: var(--text-light);
  font-family: "Roboto Mono", monospace;
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
    height: 32px;
    padding: 0; 
    width: 88px;
    margin-right: 10px;
    font-size: 12px; 
    border: 1px solid var(--color-light);
    outline: 1px solid var(--color-light);
  }

  @media (max-width: 550px){
    font-size: 12px; 
    width: 78px;
    height: 28px;
  }

  @media (max-width: 400px) {
    width: 70px;
    font-size: 10px;
    height: 25px;
  }



`;

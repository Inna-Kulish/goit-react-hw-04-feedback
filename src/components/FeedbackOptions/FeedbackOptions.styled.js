import styled from 'styled-components'

const ButtonList = styled.ul`
display: flex;
gap: 12px;
justify-content: center;
`
const Button = styled.button`
width: 65px;
  margin: 0;
  padding: 8px;
  text-transform: capitalize;
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    scale: 1.1;
    background-color: #DBF5DB;
  }
`

export { ButtonList, Button }
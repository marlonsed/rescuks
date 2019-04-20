import styled from 'styled-components'

interface ButtonProps {
  outline?: boolean;
  rounded?: boolean;
}

export const Button = styled.button<ButtonProps>`
  && {
    background: ${props => props.outline ? "white" : "palevioletred"};
    color: ${props => props.outline ? "palevioletred" : "white"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: ${props => props.rounded ? "50vh" : "3px"};
    cursor: pointer;

    &:hover {
      background: ${props => props.outline ? "palevioletred" : "white"};
      color: ${props => props.outline ? "white" : "palevioletred"};
    }
  }
`;
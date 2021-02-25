import styled from 'styled-components';
import constants from '../constants';

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  disabled,
}) => (
  <StyledButton onClick={onClick} type={type} disabled={disabled}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: ${constants.lightBackgroundColor};
  font-family: ${constants.normalFont};
  text-decoration: none;
  color: ${constants.foregroundColor};
  padding: 1rem;
  margin: 1rem;
  width: 100px;
  text-align: center;
  border-radius: 6px;
`;

export default Button;

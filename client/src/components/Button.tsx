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
  <StyledButton
    onClick={onClick}
    type={type}
    disabled={disabled}
    data-testid={`${children}Button`}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: ${constants.lightBackgroundColor};
  font-family: ${constants.normalFont};
  text-decoration: none;
  color: ${constants.foregroundColor};
  padding: 0.5rem;
  margin: 0.5rem;
  max-width: 100px;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
`;

export default Button;

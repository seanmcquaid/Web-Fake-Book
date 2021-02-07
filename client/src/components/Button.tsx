import { memo } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit';
};

const Button: React.FC<ButtonProps> = memo(({ children, onClick, type }) => (
  <StyledButton onClick={onClick} type={type}>
    {children}
  </StyledButton>
));

const StyledButton = styled.button``;

export default Button;

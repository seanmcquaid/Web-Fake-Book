import { memo } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = memo(
  ({ children, onClick, type, disabled }) => (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  )
);

const StyledButton = styled.button``;

export default Button;

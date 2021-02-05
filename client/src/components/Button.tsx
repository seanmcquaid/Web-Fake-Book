import { memo } from 'react';
import styled from 'styled-components';

const Button: React.FC = memo(({ children }) => (
  <StyledButton>{children}</StyledButton>
));

const StyledButton = styled.button``;

export default Button;

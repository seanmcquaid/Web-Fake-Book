import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LinkButtonProps = {
  to: string;
};

const LinkButton: React.FC<LinkButtonProps> = memo(({ children, to }) => (
  <StyledLinkButton to={to}>{children}</StyledLinkButton>
));

const StyledLinkButton = styled(Link)``;

export default LinkButton;

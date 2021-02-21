import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LinkButtonProps = {
  to: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, to }) => (
  <StyledLinkButton to={to}>{children}</StyledLinkButton>
);

const StyledLinkButton = styled(Link)``;

export default LinkButton;

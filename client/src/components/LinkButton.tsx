import { Link } from 'react-router-dom';
import styled from 'styled-components';
import constants from '../constants';

type LinkButtonProps = {
  to: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, to }) => (
  <StyledLinkButton to={to}>{children}</StyledLinkButton>
);

const StyledLinkButton = styled(Link)`
  background-color: ${constants.lightBackgroundColor};
  font-family: ${constants.normalFont};
  text-decoration: none;
  color: ${constants.foregroundColor};
  padding: 1rem;
  margin: 1rem;
`;

export default LinkButton;

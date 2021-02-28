import { Link } from 'react-router-dom';
import styled from 'styled-components';
import constants from '../constants';

type LinkButtonProps = {
  to: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, to }) => (
  <StyledLinkButton to={to} data-testid={`${children}Button`}>
    {children}
  </StyledLinkButton>
);

const StyledLinkButton = styled(Link)`
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
  font-size: 1rem;
`;

export default LinkButton;

import styled from 'styled-components';
import constants from '../../constants';

const H1: React.FC = ({ children }) => (
  <StyledH1 data-testid="mainHeaderText">{children}</StyledH1>
);

const StyledH1 = styled.h1`
  color: ${constants.foregroundColor};
  font-family: ${constants.headerFont};
`;

export default H1;

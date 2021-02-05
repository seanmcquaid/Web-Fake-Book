import { memo } from 'react';
import styled from 'styled-components';

const H1: React.FC = memo(({ children }) => <StyledH1>{children}</StyledH1>);

const StyledH1 = styled.h1``;

export default H1;

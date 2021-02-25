import { CircleLoader } from 'react-spinners';
import styled from 'styled-components';
import constants from '../constants';

const LoadingSpinner: React.FC = () => (
  <StyledLoadingSpinner color={constants.lightBackgroundColor} />
);

const StyledLoadingSpinner = styled(CircleLoader)``;

export default LoadingSpinner;

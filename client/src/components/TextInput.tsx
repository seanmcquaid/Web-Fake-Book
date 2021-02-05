import { memo } from 'react';
import styled from 'styled-components';

const TextInput: React.FC = memo(() => <StyledTextInput />);

const StyledTextInput = styled.input``;

export default TextInput;

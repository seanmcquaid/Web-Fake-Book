import styled from 'styled-components';
import constants from '../constants';

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label?: string;
  placeholder?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  value,
  name,
  label,
  placeholder,
}) => (
  <Label htmlFor={name}>
    {label}
    <StyledTextInput
      onChange={onChange}
      value={value}
      name={name}
      type="text"
      placeholder={placeholder}
    />
  </Label>
);

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTextInput = styled.input`
  padding: 0.5rem;
  font-family: ${constants.normalFont};
  width: 260px;
  border-radius: 6px;
  outline: none;
  border: none;
  margin: 0.5rem;
`;

export default TextInput;

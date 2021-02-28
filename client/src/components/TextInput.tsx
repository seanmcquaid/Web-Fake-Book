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
      data-testid={`${name}TextInput`}
    />
  </Label>
);

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const StyledTextInput = styled.input`
  padding: 0.5rem;
  font-family: ${constants.normalFont};
  width: 260px;
  border-radius: 6px;
  outline: none;
  border: none;
  margin-top: 0.5rem;
`;

export default TextInput;

import styled from 'styled-components';

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
  <Label>
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

const Label = styled.label``;

const StyledTextInput = styled.input``;

export default TextInput;

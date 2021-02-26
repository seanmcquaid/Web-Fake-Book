import styled from 'styled-components';

type CheckboxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  label?: string;
  name: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  checked,
  label,
  name,
}) => (
  <Label>
    {label}
    <StyledCheckbox
      onChange={onChange}
      type="checkbox"
      checked={checked}
      name={name}
    />
  </Label>
);

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const StyledCheckbox = styled.input`
  border-radius: 6px;
  outline: none;
  border: none;
  margin-top: 0.5rem;
  padding: 0.5rem;
`;

export default Checkbox;

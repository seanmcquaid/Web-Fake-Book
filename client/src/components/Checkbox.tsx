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

const StyledCheckbox = styled.input``;

const Label = styled.label``;

export default Checkbox;

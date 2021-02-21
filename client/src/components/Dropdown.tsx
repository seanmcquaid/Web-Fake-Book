import { nanoid } from 'nanoid';
import styled from 'styled-components';

type DropdownProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  options: any[];
  name: string;
  label?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  value,
  options,
  name,
  label,
}) => (
  <Label htmlFor={name}>
    {label}
    <StyledDropdown
      onChange={onChange}
      value={value}
      name={name}
      data-testid={`${name}Dropdown`}
    >
      {options.map((option: string | number) => (
        <Option key={nanoid()} value={option}>
          {option}
        </Option>
      ))}
    </StyledDropdown>
  </Label>
);

const Label = styled.label``;

const StyledDropdown = styled.select``;

const Option = styled.option``;

export default Dropdown;

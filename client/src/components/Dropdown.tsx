import { nanoid } from 'nanoid';
import styled from 'styled-components';
import constants from '../constants';

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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  max-width: 160px;
`;

const StyledDropdown = styled.select`
  padding: 0.5rem;
  font-family: ${constants.normalFont};
  width: 100px;
  border-radius: 6px;
  outline: none;
  border: none;
  margin-top: 0.5rem;
`;

const Option = styled.option``;

export default Dropdown;

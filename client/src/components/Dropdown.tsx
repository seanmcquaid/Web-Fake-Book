import { nanoid } from 'nanoid';
import { memo } from 'react';
import styled from 'styled-components';

type DropdownProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  options: any[];
  name: string;
};

const Dropdown: React.FC<DropdownProps> = memo(
  ({ onChange, value, options, name }) => (
    <StyledDropdown onChange={onChange} value={value} name={name}>
      {options.map((option: string | number) => (
        <Option key={nanoid()} value={option}>
          {option}
        </Option>
      ))}
    </StyledDropdown>
  )
);

const StyledDropdown = styled.select``;

const Option = styled.option``;

export default Dropdown;

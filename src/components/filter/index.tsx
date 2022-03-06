import React from 'react';

import { Checkbox } from 'antd';

interface FilterProps {
  checkOptions: string[];
  checkValue: string[];
}

const Filter = () => {
  const CheckboxGroup = Checkbox.Group;
  return <div>Filter</div>;
};

export default Filter;

import React, { useState } from 'react';

import { Checkbox } from 'antd';

const subCateOptions = ['Subcategories1', 'Subcategories2', 'Subcategories3', 'Subcategories4'];

const SideBar = () => {
  const CheckboxGroup = Checkbox.Group;
  const [subCateValues, setSubCateValues] = useState([]);
  return (
    <>
      <div className="h-[250px] rounded-md bg-light-blue py-10 px-6">
        <h2 className="text-h2">Subcategories</h2>
        <CheckboxGroup
          className="space-y-2"
          options={subCateOptions}
          value={subCateValues}
          onChange={(value) => setSubCateValues(value)}
        />
      </div>
      <div className="h-[650px] rounded-md bg-light-blue"></div>
    </>
  );
};

export default SideBar;

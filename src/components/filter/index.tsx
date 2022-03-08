import React, { useState } from 'react';

import { Checkbox } from 'antd';

import { DownOutlined, UpOutlined } from '@ant-design/icons';

interface FilterProps {
  groupName: string;
  checkOption: string[];
  checkValue: string[];
}
[];

const FilterGroup = ({ groupName, checkOption, checkValue }) => {
  const CheckboxGroup = Checkbox.Group;

  const [openFilter, setOpenFilter] = useState<boolean>(true);

  const OpenFilterIcon = () => {
    return openFilter ? (
      <UpOutlined style={{ color: '#1071FF' }} />
    ) : (
      <DownOutlined style={{ color: '#1071FF' }} />
    );
  };

  return (
    <>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h3 className="text-h3">{groupName}</h3>
          <div className="cursor-pointer" onClick={() => setOpenFilter((prev) => !prev)}>
            <OpenFilterIcon />
          </div>
        </div>
        <div className="w-20">
          {openFilter && <CheckboxGroup options={checkOption} value={checkValue} />}
        </div>
      </div>
    </>
  );
};

const Filter = ({ mockData }) => {
  return (
    <div>
      {mockData &&
        mockData.map((item) => (
          <FilterGroup
            groupName={item.groupName}
            checkOption={item.checkOption}
            checkValue={item.checkValue}
          />
        ))}
    </div>
  );
};

export default Filter;

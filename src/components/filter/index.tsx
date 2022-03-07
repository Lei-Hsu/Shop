import React, { useState } from 'react';

import { Checkbox } from 'antd';

import { DownOutlined, UpOutlined } from '@ant-design/icons';

interface FilterProps {
  groupName: string;
  checkOption: string[];
  checkValue: string[];
}
[];

const mockData = [
  {
    groupName: 'Filter group',
    checkOption: ['categories1', 'categories1', 'categories3'],
    checkValue: [],
  },
  {
    groupName: 'Filter group',
    checkOption: ['categories4', 'categories5', 'categories6'],
    checkValue: [],
  },
  {
    groupName: 'Filter group',
    checkOption: ['categories7', 'categories8', 'categories9'],
    checkValue: [],
  },
];

const FilterGroup = ({ mockData }) => {
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
      {mockData &&
        mockData?.map((item) => (
          <div className="mb-10">
            <div className="flex items-center justify-between">
              <h3 className="text-h3">{item.groupName}</h3>
              <div className="cursor-pointer" onClick={() => setOpenFilter((prev) => !prev)}>
                <OpenFilterIcon />
              </div>
            </div>
            <div className="w-20">
              {openFilter && <CheckboxGroup options={item.checkOption} value={item.checkValue} />}
            </div>
          </div>
        ))}
    </>
  );
};

const Filter = () => {
  return (
    <div>
      <FilterGroup mockData={mockData} />
    </div>
  );
};

export default Filter;

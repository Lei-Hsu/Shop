import React from 'react';

import Image from 'next/image';

import Button from '@Components/button';

import { SearchOutlined } from '@ant-design/icons';

interface HeaderProps {
  inputOnchange: () => {};
}

const Header = () => {
  return (
    <div className="absolute top-0 right-0 w-screen">
      <div className=" h-10 w-full bg-light-blue px-10"></div>
      <div className="flex h-16 w-full items-center justify-between bg-white px-10">
        {/* todo:logo image */}
        <div className="h-10 w-[300px] bg-international-orange"></div>
        <div className="flex h-10 w-[550px] items-center justify-start space-x-2 rounded-md border-2 border-platinum pl-4">
          <SearchOutlined className="text-azure" />
          <input placeholder="Search by product or SKU" className="w-full focus:outline-none" />
        </div>
        <Button text={'Quick Order Form'} color="blue" />
      </div>
      <div className="h-16 w-full bg-light-blue px-10"></div>
    </div>
  );
};

export default Header;

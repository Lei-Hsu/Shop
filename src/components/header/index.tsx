import React from 'react';

import Button from '@Components/button';

import Logo from '@Images/logo.png';

const mockData = {
  logo: '',
};

const Header = () => {
  return (
    <div className="absolute top-0 right-0 w-screen">
      <div className=" h-10 w-full bg-light-blue"></div>
      <div className="flex h-16 w-full justify-between bg-white p-2">
        <Button text={'Quick Order Form'} />
        <Button text={'Quick Order Form'} />
        <Button text={'Quick Order Form'} />
      </div>
      <div className="h-16 w-full bg-light-blue"></div>
    </div>
  );
};

export default Header;

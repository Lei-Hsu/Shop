import React from 'react';

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => {};
}

const Button = ({ text, color = '', onClick = () => {} }) => {
  return (
    <>
      <div
        className="flex w-auto items-center justify-center rounded-full bg-main-blue py-2 px-10 hover:cursor-pointer"
        onClick={onClick}
      >
        <p className="text-white">{text}</p>
      </div>
    </>
  );
};

export default Button;

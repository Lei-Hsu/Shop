import React from 'react';

interface ButtonProps {
  text: string;
  color: 'blue' | 'white';
  textStyle?: string;
  onClick?: () => {};
}

const Button = ({ text, color = 'blue', textStyle = 'text-white', onClick }: ButtonProps) => {
  const buttonColor = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-main-blue';
      case 'white':
        return 'bg-white';
      default:
        return 'bg-main-blue';
    }
  };

  return (
    <>
      <div
        className={`flex w-auto items-center justify-center rounded-full py-2 px-10 hover:cursor-pointer ${buttonColor(
          color,
        )}`}
        onClick={onClick}
      >
        <p className={`m-0 ${textStyle}`}>{text}</p>
      </div>
    </>
  );
};

export default Button;

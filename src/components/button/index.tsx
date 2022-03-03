import React from 'react';

interface ButtonProps {
  text: string;
  color: 'blue';
  onClick?: () => {};
}

const Button = ({ text, color = 'blue', onClick }: ButtonProps) => {
  const buttonColor = (color) => {
    switch (color) {
      case 'blue':
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
        <p className="text-white">{text}</p>
      </div>
    </>
  );
};

export default Button;

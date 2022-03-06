import React from 'react';

import Image from 'next/image';

interface categoryCardProp {
  categoryImg: string;
  text: string;
}
const categoryCard = ({ categoryImg, text }: categoryCardProp) => {
  return (
    <div className="h-auto rounded-lg border">
      <Image src={categoryImg} />
      <div className="flex items-center justify-center rounded-b-lg bg-main-blue py-3 text-white">
        {text}
      </div>
    </div>
  );
};

export default categoryCard;

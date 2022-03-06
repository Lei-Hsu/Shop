import React from 'react';

import { Button } from 'antd';
import Image from 'next/image';

import ShowMore from '@Components/showMore';

interface articledProp {
  showMore: 'text' | 'button' | 'none';
  articleImg: any;
  title: string;
  text: string;
}
function article({ articleImg, title, text, showMore }: articledProp) {
  return (
    <>
      <Image src={articleImg} className="h-auto rounded-t-lg border" />
      <h3 className="mb-1 w-full text-h3">{title}</h3>
      <div className="my-2 w-full text-16-24">{text}</div>

      {showMore === 'text' && <ShowMore text={'Show more'} />}
      {showMore === 'button' && (
        <Button type="default" shape="round">
          Show more
        </Button>
      )}
    </>
  );
}

export default article;

import React, { ReactNode } from 'react';

import Item from 'antd/lib/descriptions/Item';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from '@trendyol-js/react-carousel';

interface sliderProps {
  content: ReactNode[];
}
const slider = ({ content }: sliderProps) => {
  return (
    <div className="">
      <Carousel
        show={2.5}
        slide={2}
        swiping={true}
        // className="border border-rose-600"
        leftArrow={
          <div className=" flex h-full flex-col justify-center ">
            <LeftOutlined />
          </div>
        }
        rightArrow={
          <div className=" flex h-full flex-col justify-center ">
            <RightOutlined />
          </div>
        }
      >
        {content.map((el: any) => {
          return el;
        })}
      </Carousel>
    </div>
  );
};

export default slider;

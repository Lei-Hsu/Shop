import React, { ReactNode } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Item from 'antd/lib/descriptions/Item';
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
        leftArrow={<LeftOutlined />}
        rightArrow={<RightOutlined />}
      >
        {content.map((el: any) => {
          return el;
        })}
      </Carousel>
    </div>
  );
};

export default slider;

import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

interface ShowMoreProp {
  text: string;
}
function ShowMore({ text }: ShowMoreProp) {
  return (
    <a className="flex  items-center  text-16-24">
      {/* <div className="border border-black"> {text}</div> */}
      {text}
      <div className="  ml-2 mt-1 flex h-full items-center">
        <ArrowRightOutlined />
      </div>
    </a>
  );
}

export default ShowMore;

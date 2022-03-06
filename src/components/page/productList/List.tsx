import React, { useEffect, useState } from 'react';

import { Select } from 'antd';

import Button from '@Components/button';
import PdpCard from '@Components/pdpCard/PdpCard';

import { InsertRowBelowOutlined, InsertRowRightOutlined } from '@ant-design/icons';
import pdpCardImage from '@Images/pdpCard/productImage.svg';

const mockData = {
  title: 'Title of list page',
  content:
    'Single row angular contact bearings are capable of taking radial loads, as well as axial loads in one direction. They are able to transmit radial and axial forces simultaneously.These bearings are an excellent choice for high speed, low load applications. They have alow coefficient of friction and run an oads in one direction. They are able to transmitradial and axial forces simultaneously. These bearings are an excellent choice for highspeed, low load applications. They have a low coefficient of friction and run an lowcoefficient of friction and run an oads in one direction. They are able to transmit radialand axial forces simultaneously. These bearings are an excellent choice for high speed,low load applications. They have a low coefficient of friction and run an',
  pdp: {
    type: 'vertical',
    pdpImage: pdpCardImage,
    discountPercent: 50,
    categories: 'Brand Name',
    isFollow: true,
    itemId: '23424X',
    productName: 'LED Diall A60 bulb transparent warm color',
    desc: ['Bulb thread type : E27', 'Maximum bulb power : 4.5W', 'Luminous flux : 470lm'],
    price: '45.00',
    quantity: 0,
    unit: 'item',
    unitOptions: [{ value: 'item', text: 'item' }],
  },
};

const TitleContent = () => {
  const [hiddenContent, setHiddenContent] = useState<boolean>(true);
  return (
    <>
      <h1 className="text-h1 font-bold">{mockData.title}</h1>
      <p className={`text-16-24 ${hiddenContent && 'line-clamp-3'}`}>{mockData.content}</p>
      {hiddenContent && (
        <>
          <div className="absolute bottom-9 h-[21%] w-full bg-gradient-to-t from-white"></div>
          <p
            className="cursor-pointer text-lg font-bold text-main-blue"
            onClick={() => setHiddenContent(false)}
          >
            Show more
          </p>
        </>
      )}
    </>
  );
};

const Banner = () => {
  return (
    <div className="flex h-[135px] w-full items-center justify-between bg-azure px-10">
      <div></div>
      <Button text={'Check offer'} color={'white'} textStyle="text-main-blue font-bold" />
    </div>
  );
};

const PdpNumButton = ({ number, pdpNum, setPdpNum }) => {
  return (
    <div
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-main-blue ${
        number === pdpNum && 'bg-cornflower-blue text-white'
      }`}
      onClick={() => setPdpNum(number)}
    >
      {number}
    </div>
  );
};

const List = () => {
  const { Option } = Select;

  const [pdpData, setPdpData] = useState([]);
  const [pdpCardType, setPdpCardType] = useState<'vertical' | 'level'>('vertical');
  const [pdpNum, setPdpNum] = useState<9 | 27 | 72>(9);

  useEffect(() => {
    let tempPdpNumData = [];
    for (let i = 0; i < pdpNum; i++) {
      tempPdpNumData.push(mockData.pdp);
    }
    const tempPdpTypeData = tempPdpNumData.map((item) => ({
      ...item,
      type: pdpCardType,
    }));

    setPdpData(tempPdpTypeData);
  }, [pdpNum, pdpCardType]);

  return (
    <div>
      {/* title & content */}
      <section className="relative">
        <TitleContent />
      </section>
      {/* banner */}
      <section>
        <Banner />
      </section>
      {/* product list */}
      <section>
        <div className="flex h-20 w-full items-center justify-between">
          <div className="flex items-center justify-center space-x-2">
            <InsertRowRightOutlined
              className={`cursor-pointer p-2 text-2xl ${
                pdpCardType === 'vertical' && 'rounded-md bg-cornflower-blue'
              }`}
              style={{ color: pdpCardType === 'vertical' ? 'white' : 'black' }}
              onClick={() => setPdpCardType('vertical')}
            />
            <InsertRowBelowOutlined
              className={`cursor-pointer p-2 text-2xl ${
                pdpCardType === 'level' && 'rounded-md bg-cornflower-blue'
              }`}
              style={{ color: pdpCardType === 'level' ? 'white' : 'black' }}
              onClick={() => setPdpCardType('level')}
            />
            <p className="m-0">
              <span className="font-bold">120</span> Item items found
            </p>
          </div>
          <div className="flex items-center justify-center space-x-20">
            <Select defaultValue={'popular'} size="large">
              <Option value="popular">popular item</Option>
            </Select>
            <div className="flex space-x-10">
              <PdpNumButton number={9} pdpNum={pdpNum} setPdpNum={setPdpNum} />
              <PdpNumButton number={27} pdpNum={pdpNum} setPdpNum={setPdpNum} />
              <PdpNumButton number={72} pdpNum={pdpNum} setPdpNum={setPdpNum} />
            </div>
          </div>
        </div>
        <div
          className={`${
            pdpCardType === 'vertical'
              ? 'grid grid-cols-3 gap-x-14 gap-y-5'
              : 'flex flex-col space-y-5'
          } `}
        >
          {pdpData?.length &&
            pdpData?.map((item, index) => (
              <PdpCard
                type={item.type as 'vertical' | 'level'}
                key={`${index}${item.itemId}`}
                pdpImage={item.pdpImage}
                categories={item.categories}
                isFollow={item.isFollow}
                itemId={item.itemId}
                productName={item.productName}
                price={item.price}
                desc={item.desc}
                discountPercent={item?.discountPercent}
                quantity={item.quantity}
                unit={item.unit}
                unitOptions={item.unitOptions}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default List;

import React from 'react';

import PdpCard from '@Components/pdpCard/PdpCard';

import pdpCardImage from '@Images/pdpCard/productImage.svg';

const mockData = [
  {
    pdpImage: pdpCardImage,
    discountPercent: 50,
    categories: 'Brand Name',
    isFollow: false,
    itemId: '23424X',
    productName: 'LED Diall A60 bulb transparent warm color',
    desc: ['Bulb thread type : E27', 'Maximum bulb power : 4.5W', 'Luminous flux : 470lm'],
    price: '45.00',
    quantity: 2,
    unit: 'item',
    unitOptions: [{ value: 'item', text: 'item' }],
  },
  {
    pdpImage: pdpCardImage,
    discountPercent: 50,
    categories: 'Brand Name',
    isFollow: true,
    itemId: '23424X',
    productName: 'LED Diall A60 bulb transparent warm color',
    desc: ['Bulb thread type : E27', 'Maximum bulb power : 4.5W', 'Luminous flux : 470lm'],
    price: '45.00',
    quantity: 2,
    unit: 'item',
    unitOptions: [{ value: 'item', text: 'item' }],
  },
  {
    pdpImage: pdpCardImage,
    discountPercent: 50,
    categories: 'Brand Name',
    isFollow: false,
    itemId: '23424X',
    productName: 'LED Diall A60 bulb transparent warm color',
    desc: ['Bulb thread type : E27', 'Maximum bulb power : 4.5W', 'Luminous flux : 470lm'],
    price: '45.00',
    quantity: 2,
    unit: 'item',
    unitOptions: [{ value: 'item', text: 'item' }],
  },
  {
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
];

const Recommend = () => {
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-4 gap-14">
        {mockData &&
          mockData.map((item, index) => (
            <PdpCard
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
    </div>
  );
};

export default Recommend;

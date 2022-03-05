import React from 'react';

import { Input, Select } from 'antd';
import Image from 'next/image';

import Button from '@Components/button';

import addFavImage from '@Images/pdpCard/addFavourites.svg';
import checkImage from '@Images/pdpCard/checkCircle.svg';
import compareImage from '@Images/pdpCard/compare.svg';
import pdpCardImage from '@Images/pdpCard/productImage.svg';
import shareImage from '@Images/pdpCard/share.svg';

interface SelectProps {
  value: string | number;
  text: string;
}

interface PdpCardProps {
  pdpImage: string;
  discountPercent?: number;
  categories: string;
  itemId: string;
  productName: string;
  desc?: string[];
  price: string;
  quantity: number;
  unit: string;
  unitOptions: SelectProps[];
  details?: string;
  detailsOptions?: SelectProps[];
  attachment?: string;
  attachmentOptions?: SelectProps[];
}

const PdpCard = ({
  pdpImage = pdpCardImage,
  discountPercent,
  categories,
  itemId,
  productName,
  desc,
  price,
  quantity,
  unit,
  unitOptions,
  details,
  detailsOptions,
  attachment,
  attachmentOptions,
}: PdpCardProps) => {
  const { Option } = Select;

  const discount = 100 - discountPercent;

  return (
    <div className="h-auto w-[300px] rounded-lg border border-platinum">
      {/* image */}
      <div className="relative">
        <Image src={pdpImage} />
        {discountPercent && (
          <div className="w-13 absolute top-5 h-8 bg-pumpkin py-1 px-2 text-white">
            -{discountPercent}%
          </div>
        )}

        <div className="absolute top-5 right-5 cursor-pointer">
          <Image src={addFavImage} />
        </div>
        <div className="absolute bottom-4 left-3 flex items-center space-x-1 rounded-sm border border-platinum px-1 text-bright-green">
          <Image src={checkImage} />
          <span>In stock</span>
        </div>
        <div className="absolute bottom-3 right-3">
          <Image src={compareImage} />
          <Image src={shareImage} />
        </div>
      </div>
      {/* desc */}
      <section className="space-y-2 p-2 ">
        <span className="text-spanish-gary">
          {categories} | Part No.{itemId}
        </span>
        <h3 className="text-h3">{productName}</h3>
        {desc && desc.map((item: string) => <p>{item}</p>)}
      </section>
      {/* price & cart */}
      <section className="p-2">
        <p className="font-bold text-main-blue">
          your price <span className="mr-2 text-social-icon-size">${price}</span>net{' '}
          <span className="text-pumpkin line-through">${Number(price) * (discount / 10)} net</span>
        </p>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              className="w-1/2 rounded-md text-center"
              defaultValue={quantity}
              style={{ width: '40%' }}
            />
            <Select defaultValue={unit} style={{ width: '60%' }}>
              {unitOptions &&
                unitOptions.map((item: SelectProps) => (
                  <Option value={item.value}>{item.text}</Option>
                ))}
            </Select>
          </div>
          <Button text={'Add to cart'} color={'blue'} />
          <div className="flex">
            {details && detailsOptions && (
              <Select defaultValue={details} style={{ width: '50%' }}>
                {detailsOptions.map((item: SelectProps) => (
                  <Option value={item.value}>{item.text}</Option>
                ))}
              </Select>
            )}
            {attachment && attachmentOptions && (
              <Select defaultValue={attachment} style={{ width: '50%' }}>
                {attachmentOptions.map((item: SelectProps) => (
                  <Option value={item.value}>{item.text}</Option>
                ))}
              </Select>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PdpCard;

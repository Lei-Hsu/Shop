import React, { useState } from 'react';

import { Input, Select } from 'antd';
import Image from 'next/image';

import Button from '@Components/button';

import addFavImage from '@Images/pdpCard/addFavourites.svg';
import availableImage from '@Images/pdpCard/available.svg';
import compareImage from '@Images/pdpCard/compare.svg';
import isFavImage from '@Images/pdpCard/isFavourites.svg';
import pdpCardImage from '@Images/pdpCard/productImage.svg';
import shareImage from '@Images/pdpCard/share.svg';
import unavailableImage from '@Images/pdpCard/unavailable.svg';

interface SelectProps {
  value: string | number;
  text: string;
}

interface PdpCardProps {
  pdpImage: string;
  discountPercent?: number;
  categories: string;
  isFollow: boolean;
  itemId: string;
  productName: string;
  desc?: string[];
  price: string;
  /**
   * 商品庫存量
   */
  quantity: number;
  /**
   * 商品單位
   */
  unit: string;
  unitOptions: SelectProps[];
  /**
   * 商品描述
   */
  details?: string;
  detailsOptions?: SelectProps[];
  /**
   * 商品附件描述
   */
  attachment?: string;
  attachmentOptions?: SelectProps[];
}

const PdpCard = ({
  pdpImage = pdpCardImage,
  discountPercent,
  categories,
  isFollow,
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

  const [tempIsFollow, setTempIsFollow] = useState<boolean>(isFollow);

  const discount = 100 - discountPercent;

  const handleChangeFollow = () => {
    setTempIsFollow((prev) => !prev);
  };

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

        <div className="absolute top-5 right-5 cursor-pointer" onClick={handleChangeFollow}>
          {tempIsFollow ? (
            <Image src={isFavImage} height={28} width={28} />
          ) : (
            <Image src={addFavImage} height={28} width={28} />
          )}
        </div>
        <div className="absolute bottom-4 left-3">
          {quantity > 0 ? <Image src={availableImage} /> : <Image src={unavailableImage} />}
        </div>
        <div className="absolute bottom-3 right-3 cursor-pointer">
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
              defaultValue={0}
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

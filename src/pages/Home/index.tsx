import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useAppDispatch } from '@Hooks/hooks';

import Article from '@Components/articleCard';
import CategoryCard from '@Components/categoryCard';
import PdpCard from '@Components/pdpCard/PdpCard';
import ShowMore from '@Components/showMore';
import Slider from '@Components/slider';

import pdpCardImage from '@Images/pdpCard/productImage.svg';
import testImg from '@Images/testImg.jpg';
import testImg2 from '@Images/testImg2.png';
import { getAllProduct } from '@Redux/slices/homeSlice';

function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const mockData = [
    {
      type: 'vertical',
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
      type: 'vertical',
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
      type: 'vertical',
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
  ];

  const test = [
    <div className="flex h-16 w-52 items-center justify-center ">Barands1</div>,
    <div className="flex h-16 w-52 items-center justify-center">Barands2</div>,
    <div className="flex h-16 w-52 items-center justify-center">Barands3</div>,
    <div className="flex h-16 w-52 items-center justify-center">Barands4</div>,
    <div className="flex h-16 w-52 items-center justify-center">Barands5</div>,
    <div className="flex h-16 w-52 items-center justify-center">Barands6</div>,
  ];

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <>
      {/* Barands */}
      <div className="my-8 px-20 text-title">Our Barands</div>
      <div className=" my-8 px-20">
        <Slider content={test}></Slider>
      </div>
      {/* productList  */}
      <div className="my-8 flex justify-between px-20 text-title">
        Recommended products{' '}
        <ShowMore
          text={'Show all Recommended products'}
          onClick={() => router.push('/productList')}
        />
      </div>
      <div className=" my-8 flex px-20">
        {mockData &&
          mockData.map((item, index) => (
            <div className="mx-2">
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
            </div>
          ))}
      </div>

      {/* banner */}
      <div className="flex h-40 w-full items-center justify-around bg-azure">
        <div className=" flex items-center ">
          <Image src={testImg} height={80} width={80} />

          <p className="ml-4 mt-4 flex text-title font-bold text-white">
            <div className="mr-3">-20% </div> on power tools
          </p>
        </div>
        <Button type="default" shape="round">
          Check offer
        </Button>
      </div>
      {/* categoryList */}
      <div className="my-8 flex justify-between px-20 text-title">
        Recommended Categories <ShowMore text={'Show all Categories'} />
      </div>
      <div className=" my-8 flex px-20">
        {mockData &&
          mockData.map((item, index) => (
            <div className="mx-2">
              <CategoryCard categoryImg={item.pdpImage} text={item.categories}></CategoryCard>
            </div>
          ))}
      </div>
      {/* article  */}
      <div className="my-8 flex justify-between px-20 text-title">
        Hints for you
        <ShowMore text={'Show all Hints'} />
      </div>
      <div className="my-8 flex px-20">
        {mockData &&
          mockData.map((item, index) => (
            <div className="mx-2">
              <Article
                showMore={'text'}
                articleImg={testImg2}
                text={
                  'Are you standing on the threshold of your own "M", to which you have just picked up the keys, and with the eye...'
                }
                title={'How much does it cost to finish an apartment?'}
              ></Article>
            </div>
          ))}
      </div>

      {/* banner2  */}
      <div className="flex h-[350px] w-full items-center justify-around bg-light-gray px-20">
        <div className="w-[500px] ">
          <h3 className="text-h3 font-bold ">DPD delivery already available!</h3>
          <p className="footer-text my-4   w-64 ">
            Choose DPD for speed, ease and convenience. Track your parcel in real time. This will
            help you plan your work while waiting for the parcel.
          </p>
          <Button type="primary" shape="round">
            Check offer
          </Button>
        </div>
        <Image src={testImg} height={300} width={300} />
      </div>
      {/* article2  */}
      <div className="my-8 flex justify-between px-20 text-title">
        Events for you
        <ShowMore text={'Show all Events'} />
      </div>
      <div className="my-8 flex px-20">
        {mockData &&
          mockData.map((item, index) => (
            <div className="mx-2">
              <Article
                showMore={'button'}
                articleImg={testImg2}
                text={
                  'Are you standing on the threshold of your own "M", to which you have just picked up the keys, and with the eye...'
                }
                title={'How much does it cost to finish an apartment?'}
              ></Article>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;

import React from 'react';
import Slider from '@Components/slider';
function Home() {
  const test = [
    <div className="border-rose-600 border">123</div>,
    <div className="text-center">456</div>,
    <div>789</div>,
    <div>5666</div>,
  ];
  return (
    <>
      <div className=" my-8 px-20">
        <Slider content={test}></Slider>
      </div>
    </>
  );
}

export default Home;

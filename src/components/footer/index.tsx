import React from 'react';
import { Button, Input, Checkbox } from 'antd';
import Icon, {
  ChromeOutlined,
  CopyrightOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="h-[475px] w-full bg-light-gray ">
      <ul className="flex justify-around  border-b  border-spanish-gary py-16">
        <li className=" w-52 ">
          <h1 className="mb-3 text-h3">sign up for news</h1>
          <p className="text-footer-text">
            Keep up to date with the latest product launches and news. Find out more about our
            brands and get special promo codes.
          </p>
          <div className="mb-4">
            <Input placeholder="Your e-mail address" type="email" />
          </div>
          <div className="mb-4">
            <Button type="primary" shape="round" className="w-full">
              Sign up for newsletter
            </Button>
          </div>
          <div className="ml-2">
            <Checkbox>I accept</Checkbox>
          </div>
        </li>
        <li className=" ">
          <h1 className="mb-3 text-center text-h3">how to buy</h1>
          <div className="flex flex-col ">
            <Button type="text" className="w-auto">
              Payment methods
            </Button>
            <Button type="text">Order and pick up</Button>
            <Button type="text">Order with delivery</Button>
            <Button type="text">Returns</Button>
          </div>
        </li>
        <li className=" ">
          <h1 className="mb-3 text-center text-h3">help</h1>
          <div className="flex flex-col ">
            <Button type="text">Contact</Button>
            <Button type="text">Online Help</Button>
            <Button type="text">Our Commitments</Button>
          </div>
        </li>
        <li className=" ">
          <h1 className="mb-3 text-center text-h3">services</h1>
          <div className="flex flex-col ">
            <Button type="text">Transport</Button>
            <Button type="text">Design service</Button>
            <Button type="text">Additional services</Button>
          </div>
        </li>
        <li className=" ">
          <h1 className="mb-3 text-center text-h3">about</h1>
          <div className="flex flex-col ">
            <Button type="text">About us</Button>
            <Button type="text">Press Office</Button>
            <Button type="text">For suppliers</Button>
          </div>
        </li>
      </ul>
      <div className="flex justify-around ">
        <div>
          <CopyrightOutlined className="mr-2 text-social-icon-size" />
          2022/03/05
        </div>
        <div>
          <FacebookOutlined className="mr-2 text-social-icon-size " />
          <InstagramOutlined className="mr-2 text-social-icon-size " />
          <GithubOutlined className="mr-2 text-social-icon-size " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

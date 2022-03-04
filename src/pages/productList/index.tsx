import React from 'react';

import List from '@Components/page/productList/List';
import SideBar from '@Components/page/productList/sideBar';

const ProductList = () => {
  return (
    <div className="px-10">
      <div className="my-10">麵包屑 / 麵包屑 / 麵包屑</div>
      <section className="flex gap-4">
        <div className="w-3/12 space-y-8">
          <SideBar />
        </div>
        <div className="w-10/12">
          <List />
        </div>
      </section>
    </div>
  );
};

export default ProductList;

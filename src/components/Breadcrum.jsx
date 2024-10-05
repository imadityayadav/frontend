import React from 'react';
import arrow from './assets/breadcrum_arrow.png';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Breadcrum = (props) => {
  const { product } = props;
  const navigate = useNavigate(); 

  const breadCrumbHandler = (path) => {
    navigate(path);
  };

  return (
    <div className="flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-bold my-[60px] mx-[170px] capitalize">
      <div className="cursor-pointer hover:text-[#EB423F]" onClick={() => breadCrumbHandler("/")}>
        Home
      </div>
      <img src={arrow} alt="" />
      <div className="cursor-pointer hover:text-[#EB423F]" onClick={() => breadCrumbHandler(`/${product.category.toLowerCase()}`)}>
        {product.category} Shop
      </div>
      <img src={arrow} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;


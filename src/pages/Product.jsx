import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum';
import ProductDisplay from '../components/ProductDisplay';
import Description from '../components/Description';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product

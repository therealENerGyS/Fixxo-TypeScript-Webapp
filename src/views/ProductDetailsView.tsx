import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext'
import { ProductContextType } from "../models/productModel";
import SCurrentPageLocation from "../sections/SCurrentPageLocation";
import SFooter from "../sections/SFooter";
import SMainMenu from "../sections/SMainMenu";
import SProductDiscount from "../sections/SProductDiscount";
import SProductDetails from "../sections/SProductDetails";

const ProductDetailsView: React.FC = () => {
  const { id } = useParams<string>()
  const productContext = useProductContext() as ProductContextType

  useEffect(() => {
    productContext.getProduct(id)
  }, [])

  return (
    <>
      <SMainMenu />
      <SProductDiscount />
      <SCurrentPageLocation parentPage="Products" currentPage={productContext.product.name} />
      <SProductDetails item={productContext.product} />
      <SFooter />
    </>
  );
};

export default ProductDetailsView;

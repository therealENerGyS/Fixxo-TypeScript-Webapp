import React from "react";
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from "../contexts/ShoppingCartContext"
import { currencyFormatter } from '../utilities/currencyFormatter'
import { Product } from '../models/productModel'

interface ProductCardType {
  item: Product
}

const CProductCard: React.FC<ProductCardType> = ({item}) => {

  const { increment } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <div className="product">
      <div className="product-img">
        <img src={item.imageName} alt={item.name} />
        <div className="product-menu">
          <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
          <button className="menu-link"><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
          <button onClick={() => increment({articleNumber: item.articleNumber, product: item, quantity: 1})} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
        </div>
        <NavLink to={`/products/${item.articleNumber}`} className="btn-theme btn-red btn-theme-product quick-view-btn">
          QUICK VIEW
        </NavLink>
      </div>
      <div className="product-info">
        <h3 className="product-category">{item.category}</h3>
        <h2 className="product-name">{item.name}</h2>
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
          <p className="price">{currencyFormatter(item.price)}</p>
      </div>
    </div>
  );
};

export default CProductCard;

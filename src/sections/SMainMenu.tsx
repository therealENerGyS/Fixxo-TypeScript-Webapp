import React from "react";
import { NavLink } from "react-router-dom";
import CMenuIcon from "../components/CMenuIcon";
//import CategoriesView from "../views/CategoriesView";
import { ShoppingCartContextType, useShoppingCartContext } from "../contexts/ShoppingCartContext";

const SMainMenu: React.FC = () => {
  const { totalQuantity } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <nav className="top-menu">
      <div className="_container">
        <NavLink className="logo" to="/" end>
          Fixxo.
        </NavLink>
        <div className="menu-links d-flex">
          <NavLink className="menu-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="menu-link" to="/categories" end>
            Categories
          </NavLink>
          <NavLink className="menu-link" to="/products">
            Products
          </NavLink>
          <NavLink className="menu-link" to="/contacts" end>
            Contacts
          </NavLink>
        </div>
        <div className="product-links d-flex">
          <CMenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
          <CMenuIcon link="/compare" icon="fa-regular fa-code-compare" />
          <CMenuIcon link="/wishlist" icon="fa-regular fa-heart" />
          <button className="product-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <span className="product-qty">{totalQuantity}</span>
            <i className="fa-regular fa-bag-shopping"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SMainMenu;
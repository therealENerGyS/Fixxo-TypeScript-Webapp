import React from "react";
import { NavLink } from "react-router-dom";

interface ILinks {
  link: any
  icon: any
}

const CMenuIcon: React.FC<ILinks> = ({link, icon}) => {
  return (
    <NavLink className={`product-icon`} to={link} end>
      <i className={icon}></i>
    </NavLink>
  );
};

export default CMenuIcon;
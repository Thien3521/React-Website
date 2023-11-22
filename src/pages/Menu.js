import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((item, index) => {
            return (
              <MenuItem
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;

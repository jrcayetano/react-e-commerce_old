import React from "react";
import { Link } from "react-router-dom";
const menu = [
  {
    label: "Products",
    value: "products",
  },
  {
    label: "menu2",
    value: "menu2",
  },
  {
    label: "menu3",
    value: "menu3",
  },
  {
    label: "menu4",
    value: "menu4",
  },
];

const Sidenav = () => {
  return (
    <nav className="sidenav sidenav--primary" role="navigation">
      <ul className="sidenav-list">
        {menu.map((element, index) => (
          <li
            className="sidenav-list-item"
            key={`${element.name}_${index}`}
            to={element.value}
          >
            <Link className="sidenav-list-item-link" to={`/${element.value}`}>
              {element.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidenav;

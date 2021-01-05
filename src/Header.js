import React from "react";
import "./Header.css";
import logo from "./pexels-pixabay-264547.jpg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

// import logo from "../public/pexels-pixabay-264547.jpg";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" alt=" " />
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_options">
            <span className="header_option_line1">Hello Guest</span>
            <span className="header_option_line2">Sign in</span>
          </div>
        </Link>
        <div className="header_options">
          <span className="header_option_line1">Returns</span>
          <span className="header_option_line2">& Orders</span>
        </div>
        {/* <div className="header_options">
          <span className="header_option_line1">your</span>
          <span className="header_option_line2">Prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="header_option_line2 header_basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

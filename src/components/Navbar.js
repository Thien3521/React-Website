import React from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      openLinks: false,
    };
  }

  toggleNavbar = () => {
    this.setState(() => ({
      openLinks: !this.state.openLinks,
    }));
  };

  render() {
    const { openLinks } = this.state;

    return (
      <div className="navbar">
        <div className={`leftSide ${openLinks ? "open" : "close"}`}>
          <img src={Logo} alt="Logo" />
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={this.toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;

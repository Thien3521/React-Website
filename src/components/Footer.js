import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        <p> &copy; 2023 Dev</p>
      </div>
    );
  }
}

export default Footer;

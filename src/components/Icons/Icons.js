import React from "react";
import "./Icons.css";
import { Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
const Icons = () => {
  return (
    <div className="icons">
      <Link
        href="https://www.linkedin.com/in/javaid-khan-183a41136/"
        target="_blank"
      >
        <LinkedInIcon fontSize="large" />
      </Link>

      <Link href="https://www.instagram.com/clevercoderjav/" target="_blank">
        <InstagramIcon fontSize="large" />
      </Link>

      <Link href="https://www.facebook.com/javaid.khan19" target="_blank">
        <FacebookIcon fontSize="large" />
      </Link>

      <Link href="https://twitter.com/Javaid_Khan19" target="_blank">
        <TwitterIcon fontSize="large" />
      </Link>
      <Link href="https://github.com/JavaidAhmadKhan" target="_blank">
        <GitHubIcon fontSize="large" />
      </Link>

      <Link
        href=" https://wa.me/9797550069?text=Thank%20You%20For%20Contacting%20Mr%20Javaid%20Khan"
        target="_blank"
      >
        <WhatsAppIcon fontSize="large" />
      </Link>
    </div>
  );
};

export default Icons;

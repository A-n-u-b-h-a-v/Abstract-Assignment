// src/components/Footer.js
import React from "react";
import "../components/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <div>
          <h2>Abstract</h2>
          <ul>
            <li>
              <a href="#">Branches</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">Blog</a>
              <a href="#">Help Center</a>
              <a href="#">Release Notes</a>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Community</h2>
          <ul>
            <li>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Dribble</a>
              <a href="#">Podcast</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h2>Company</h2>
                <ul>
                    <li>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Legal</a>
                </li>
                </ul>
            </div>
            <div>
                <h4>Contact Us</h4>
                <a href="#">info@abstract.com</a>

            </div>
          
        </div>
      </div>
      <div className="copyright">
        <img src="/images/Screenshot 2024-08-17 200546.png" alt="" srcset=""  />
        <p>
          &copy; Copyright 2022 <span>Abstract Studio</span> <span>Design, Inc.</span> All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

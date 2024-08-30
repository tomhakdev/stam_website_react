import React from "react";
import "./footer.css"; // Assuming you'll move the relevant CSS to this file

const Footer = () => {
  return (
        <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-logo">
                <img src="images/STAM_Logo_Solid_Color.png" alt="Author Image" class="author-img"></img>
            </div>
            <nav class="footer-navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <ul class="footer-links">
                <li>&copy; 2024 STAM. All rights reserved.</li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookies Settings</a></li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;

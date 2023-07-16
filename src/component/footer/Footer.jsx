import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">aby.dev</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#education" className="footer_link">Education</a>
                    </li>
                </ul>

                <div className="footer_social">
                <a href="https://www.linkedin.com/in/muhammad-abyan-farras-yusuf-828bb6206/" className="footer_social-link" target="_blank">
            <i class="uil uil-linkedin"></i></a>
            <a href="https://www.instagram.com/abynysf/" className="footer_social-link" target="_blank">
            <i class="uil uil-instagram-alt"></i>
            </a>
            <a href="https://github.com/abynysf" className="footer_social-link" target="_blank">
            <i class="uil uil-github"></i>
            </a>
                </div>

                <span className="footer_copy">&#169; abynysf</span>
            </div>
        </footer>
    )
}

export default Footer;
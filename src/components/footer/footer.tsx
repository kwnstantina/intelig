import React from 'react';
import "./Footer.scss";

const Footer=()=>{

return(
<div>
    <div className="cloud"/>
    <footer className="footer-distributed">

        <div className="footer-left">

            <h3>A Project <span> <i> for you</i></span></h3>

            <p className="footer-links">
                <a href="#">Home</a>
                ·
                <a href="#">About</a>
                ·
                <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Company Name © 2015</p>

            <div className="footer-icons">

                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-github"></i></a>

            </div>

        </div>

        <div className="footer-right">

            <p>Email Us</p>

            <form action="#" method="post">

                <input type="text" name="email" placeholder="Email"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button>Send</button>
            </form>

        </div>

    </footer>
</div>
    )

}


export default Footer;

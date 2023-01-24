import React from "react";
import '../footer/footer.css'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../svgs/logo.svg";


const Footer = () => {
    return (
        <div className="footer">
            <div className="table">
                <div className="topic--table">

                    <div className="topic--column">
                        <div className="link"><a href="#" className="color--white">Udemy Business</a></div>
                        <div className="link"><a href="#" className="color--white">Teach on Udemy</a></div>
                        <div className="link"><a href="#" className="color--white">Get the app</a></div>
                        <div className="link"><a href="#" className="color--white">About us</a></div>
                        <div className="link"><a href="#" className="color--white">Contact us</a></div>
                    </div>

                    <div className="topic--column">
                        <div className="link"><a href="#" className="color--white">Udemy Business</a></div>
                        <div className="link"><a href="#" className="color--white">Teach on Udemy</a></div>
                        <div className="link"><a href="#" className="color--white">Get the app</a></div>
                        <div className="link"><a href="#" className="color--white">About us</a></div>
                        <div className="link"><a href="#" className="color--white">Contact us</a></div>
                    </div>

                    <div className="topic--column">
                        <div className="link"><a href="#" className="color--white">Udemy Business</a></div>
                        <div className="link"><a href="#" className="color--white">Teach on Udemy</a></div>
                        <div className="link"><a href="#" className="color--white">Get the app</a></div>
                        <div className="link"><a href="#" className="color--white">About us</a></div>
                        <div className="link"><a href="#" className="color--white">Contact us</a></div>
                    </div>

                </div>

                <div className="btn two">English</div>
            </div>

            <div className="table">
                <div className="logo"><Logo/></div>
                <div className="rights">© 2022 Udemy, Inc.</div>
            </div>
        </div>
    );
}

export default Footer;
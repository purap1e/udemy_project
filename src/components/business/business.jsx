import React from 'react'
import '../business/business.css'
import {ReactComponent as BusinessLogo} from '../svgs/7.svg'

const Business = () => {
    return (
        <div>
            <div className="container--main">
                <div className="content">
                    <div className="info--business">
                        <div className="logo--business"><BusinessLogo/></div>
                        <div className="title--business">Upskill your team with Udemy Business</div>
                        <ul>
                            <li className="li">Unlimited access to 19,000+ top Udemy courses, anytime, anywhere</li>
                            <li className="li">International course collection in 14 languages</li>
                            <li className="li">Top certifications in tech and business</li>
                        </ul>
                        <div className="buttons">
                            <div className="btn long">Get Udemy Business</div>
                            <div className="btn">Learn more</div>
                        </div>
                    </div>
                    <div className="pic">
                        <img className="image" src="http://localhost:3000/imgs/img13.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Business;
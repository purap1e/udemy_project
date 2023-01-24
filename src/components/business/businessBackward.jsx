import React from 'react'
import '../business/business.css'

const BusinessBackward = () => {
    return (
        <div>
            <div className="container--main">
                <div className="content">
                    <div className="pic">
                        <img className="image" src="http://localhost:3000/imgs/img14.jpg" alt=""/>
                    </div>
                    <div className="info--business">
                        <div className="title--business">Become an instructor</div>
                        <div className="subtitle--business">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</div>
                        <div className="buttons">
                            <div className="btn long">Start teaching today</div>
                            {/*<div className="btn">Learn more</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BusinessBackward;
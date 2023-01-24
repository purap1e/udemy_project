import React from 'react'
import '../courses/courses.css'

const Catalog = () => {
    return (
        <div className="container--main">
            {/*<div className="text--block">
                <div className="title">A broad selection of courses</div>
                <div className="subtitle">Choose from 213,000 online video courses with new additions published every month</div>
            </div>*/}

            <div className="course--card second">
                <div className="title main">Students are viewing</div>
                <div className="course">
                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img8.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img9.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img10.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img11.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img12.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Catalog;
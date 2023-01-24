import React from 'react'
import '../courses/courses.css'

const Courses = () => {
    return (
        <div className="container--main">
            <div className="text--block">
                <div className="title">A broad selection of courses</div>
                <div className="subtitle">Choose from 213,000 online video courses with new additions published every month</div>
            </div>

            <div className="course--card">
                <div className="title main">Expand your career opportunities with Python</div>
                <div className="subtitle main">Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites...</div>
                <div className="btn">Explore</div>
                <div className="course">
                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img3.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img4.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img5.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img6.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <div className="name">Learn Python: The Complete Python Programming Course</div>
                            <div className="description">Avinash Jain, The Codex</div>
                            <div className="price">$12.99</div>
                        </div>
                    </div>

                    <div className="el">
                        <div className="img">
                            <img src="http://localhost:3000/imgs/img7.jpg" alt=""/>
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
export default Courses;
import React from 'react'
import '../slide/slide.css'
import Slide from "../slide/slide";
import Courses from "../courses/courses";
import Catalog from "../courses/catalog";
import Topic from "../topics/topic";
import Teams from "../teams/teams";
import Business from "../business/business";
import BusinessBackward from "../business/businessBackward";

const Main = () => {
    return (
        <div>
            <Slide/>
            <Courses/>
            <Catalog/>
            <Topic/>
            <Teams/>
            <Business/>
            <BusinessBackward/>
        </div>
    );
}
export default Main;
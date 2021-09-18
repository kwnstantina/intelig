import React from 'react';
import './servicesHOC.scss';
import {useHistory} from "react-router";
import NotesHOC from "../notesHOC/notesHOC";
import ScrollProgress from "../../general/animations/scrollProgress";
const ServicesHOC = (): any => {
    const history=useHistory();
    const navigationToDatabaseAction=()=>{
        history.push("/database")
    }
    return (
        <div>
            <ScrollProgress/>
            <div className="content__main">
                <h1>Explore our Services</h1>
            </div>
            <div className="content__sub">
                <div className="triangle"/>
                <p className="letter">Store and Retrieve data from database</p>
                <button className="link__button" onClick={()=>navigationToDatabaseAction()}>Link to Database</button>
            </div>
            <NotesHOC/>
        </div>
    );

}

export default ServicesHOC;

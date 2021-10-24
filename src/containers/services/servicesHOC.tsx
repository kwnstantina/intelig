import React from 'react';
import './servicesHOC.scss';
import {useHistory} from "react-router";
import ScrollProgress from "../../general/animations/scrollProgress";
import WallPapper from "../wallPapperHOC/wallPapper";
import NotesHOC from "../notesHOC/notesHOC";


const ServicesHOC = (): any => {
    const history = useHistory();
    const navigationToDatabaseAction = () => {
        history.push("/database")
    }
    return (
        <div>
            <ScrollProgress/>
            <div className="content__main">
                <h1>Explore our Services</h1>
            </div>
            <div className="content__sub">
                <span className="content__arrow">&#8627;</span>
                <p className="content__letter">Store and Retrieve data from your database</p>
                <button className="link__button" onClick={()=>navigationToDatabaseAction()}>Link to Database</button>
            </div>
            <div>
                <WallPapper/>
            </div>
           {/* <div> <NotesHOC/></div>*/}
        </div>
    );

}

export default ServicesHOC;

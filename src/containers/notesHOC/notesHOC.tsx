import React from 'react';
import './notes.scss';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
const NotesHOC = () => {
    return (
        <div className="main__container">
            <div className="cards">
                <div className="card card-1">
                    <div className="card__icon"><i className="fa fa-bolt"></i></div>
                    <div className="card__exit"><i className="fa fa-times"></i></div>
                    <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <input/>
                    <p className="card__apply">
                        <a className="card__link" href="#"> Save <i className="fa arrow-right"></i></a>
                        <a className="card__link" href="#">Delete <i className="fa arrow-right"></i></a>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default NotesHOC;

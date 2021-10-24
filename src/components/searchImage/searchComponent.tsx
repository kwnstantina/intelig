import React, {useLayoutEffect, useRef, useState} from 'react';
import "./searchComponent.scss";
import robot from '../../images/star-wars-robot.png';
import InlineStyles from "../../helper/inlineStyles/inlineStyles";
import CONSTANTS from "../../helper/constants/constants";

const SearchComponent = () => {
    const paragraphRef = useRef(null);
    const imageRef = useRef(null);
    const [displayed, setDisplayed] = useState({
        itemOne: false,
        itemTwo: false,
    });

    useLayoutEffect(() => {
        const topPos = (element: any): any => element.getBoundingClientRect().top;
        const div1Pos = topPos(paragraphRef.current);
        const div2Pos = topPos(imageRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (div1Pos < scrollPos) {
                setDisplayed(state => ({...state, itemOne: true}));
            }
            if (div2Pos < scrollPos) {
                setDisplayed(state => ({...state, itemTwo: true}));
            }

        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
            <h3 className="title">Filter & Searching </h3>
            <div className="animate__search">
                <img src={robot} className="animate__imageRobot" alt="robot"  ref={imageRef}  style={InlineStyles.setStyleToTableImage(displayed.itemTwo)}/>
                <ul>
                <li className="animate__paragraph"
                   style={InlineStyles.setParagraphStyleToTableImage(displayed.itemOne)}
                   ref={paragraphRef}
                >
                    {CONSTANTS.infoOfParaghInTableImage}
                </li>
                <li
                    className="animate__paragraph"
                    style={InlineStyles.setParagraphStyleToTableImage(displayed.itemOne)}
                    ref={paragraphRef}
                >
                    {CONSTANTS.infoOfParaghInTableImageSub}
                </li>
                    <li
                        className="animate__paragraph"
                        style={InlineStyles.setParagraphStyleToTableImage(displayed.itemOne)}
                        ref={paragraphRef}>
                        <a href="database" className="animate__bouncy">Go to Database</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SearchComponent;





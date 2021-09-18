import React, {CSSProperties, useEffect, useState} from 'react';
import './scrollProgress.scss';

const ScrollProgress=()=>{
    const [scrolled, setScrolled] = useState<string>("0");
    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
        setScrolled(scrolled);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollProgress);

        return () => {
            window.removeEventListener("scroll", scrollProgress);
        }
    }, [scrollProgress]);

    const progressContainerStyle: CSSProperties = {
        background: "#f8bbd0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        height: "10px",
        position: "fixed",
        left: 0,
        zIndex: 99
    };
    const progressBarStyle = {
        height: "10px",
        background: "#e91e63",
        width: scrolled
    };
    return (
        <div className="col-12">
            <div className="progress-container" style={progressContainerStyle}>
                <div className="progress-bar" style={progressBarStyle}/>
            </div>
        </div>
    );
}

export default ScrollProgress;

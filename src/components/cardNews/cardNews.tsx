import React,{useState,useEffect} from 'react';
import "./cardNews.scss";
import EnterpriseY from "../../images/svg/enterpriseY";
import robot from '../../images/new.jpg';
import InlineStyles from "../../helper/inlineStyles/inlineStyles";
const CardNews=()=>{
    const [offsetY, setOffsetY] = useState<number>(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


return(
    <>
    <h2 className="cardNews-title">Latest Services </h2>
        <div className="cardsNews-container">
        <img src={robot}  className="cardsNews-container__image" style={ InlineStyles.setStyleToImgCardNews(offsetY)}/>
        <div className="cardsNews-container__table" >
            <div className="cardsNews-cell cardsNews">
                <h3 className="cardsNews-title"  >Add notes</h3>
                <a href="/" className="cardsNews-btn">Notes</a>
            </div>
            <div className="cardsNews-cell enterprise">
                <h3 className="cardsNews-title">Send Feedback</h3>
                <a href="/" className="cardsNews-btn">Send us a Email</a>
            </div>
            <div className="cardsNews-cell cell-feature">Security to storage <EnterpriseY/></div>
            <div className="cardsNews-cell cell-feature">Detection for tread or malicious code <EnterpriseY/></div>
            <div className="cardsNews-cell cell-feature">Crawling data<EnterpriseY/></div>
        </div>
        </div>
    </>
)
}


export default CardNews;

import React from 'react';
import "./testimonials.scss";
interface QuotesState{
    client:string,
    quotes:string,
    image:string,
    stars:number,

}
interface quote{
    quote:Array<QuotesState>
}
const Testimonials:React.FC<quote>=( {quote}: quote)=>{
    return (
        <div className="wrapper">
            <div className="testimonial">
                {quote? quote.map(item=>{
                return (
                    <div className="item">
                        <div className="img">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="name">{item.client}</div>
                        <div className="content">
                            <h1><strong>&#8220;</strong></h1>
                            <p>{item.quotes}</p>
                            <div className="stars">
                                {Array(item.stars)
                                    .fill(0)
                                    .map((_) => (
                                        <img src="https://i.imgur.com/wfBhXd3.png" alt="rating"/>
                                    ))}
                            </div>
                        </div>
                    </div>
                )
                }) : null}
            </div>
        </div>
    )
}

export default Testimonials;

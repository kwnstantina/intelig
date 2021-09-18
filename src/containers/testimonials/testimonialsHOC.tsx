import React from 'react';
import "../../components/testimonials/testimonials.scss";
import Testimonials from "../../components/testimonials/testimonials";

interface QuotesState{
    client:string,
    quotes:string,
    image:string,
    stars:number,

}
const TestimonialsHOC = () => {

    const quote: Array<QuotesState> = [
        {
            client: "kwnna",
            quotes: "this is a great website",
            image:"https://i.imgur.com/2pGPLrl.png",
            stars:3,
        },
        {
            client: "dimitra",
            quotes: "this is a great website!!",
            image:"https://i.imgur.com/jQj1I8E.png",
            stars:5,
        },
        {
            client: "petros",
            quotes: "this is a great website!!",
            image:"https://i.imgur.com/2Necikc.png",
            stars:4,
        }
    ]


    return (
        <div>
            <h3 className="testimonial-title">Filter & Searching </h3>
             <Testimonials quote={quote}/>
        </div>

    );
}



export default TestimonialsHOC;

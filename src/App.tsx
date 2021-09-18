import React from 'react';
import Header from "./components/header/header";
import AddUrlPath from "./components/form/addUrlPath";
import TestimonialsHOC from "./containers/testimonials/testimonialsHOC";
import SearchComponent from "./components/searchImage/searchComponent"
import CardNews from "./components/cardNews/cardNews";
import ScrollProgress from "./general/animations/scrollProgress";

///react hook form
interface ParentCompProps {
    childComp?: React.ReactNode;
};
const ParentComp: React.FC<ParentCompProps> = (props) => {
  const { childComp } = props;
  return <div>{childComp}</div>;
};

//const ChildComp: React.FC = ()=> <h2>This is a child component</h2>

const  App=() =>{
    return (
        <>
            <ParentComp childComp={<ScrollProgress/>}/>
            <ParentComp childComp={<Header/>}/>
            <ParentComp childComp={<AddUrlPath/>}/>
            <ParentComp childComp={<SearchComponent />}/>
            <ParentComp childComp={<CardNews/>}/>
            <ParentComp childComp={<TestimonialsHOC/>}/>
            {/*<ParentComp childComp={<h3>Child component 2</h3>} />*/}
            {/*<ParentComp childComp={(*/}
            {/*    <div style={{border: '2px solid red'}}>*/}
            {/*      <h4>Child component</h4>*/}
            {/*      <p>With multiple children</p>*/}
            {/*    </div>*/}
            {/*)} />*/}
        </>
    );
}

export default App;

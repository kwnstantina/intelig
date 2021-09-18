import React from 'react';
import App from "../App";
import { BrowserRouter , Switch, Route} from "react-router-dom";
import '../index.scss';
import Footer from '../components/footer/footer';
import Navigation from "../components/navigation/navigation";
import TableServicesHOC from "../containers/tableServicesHOC/tableServicesHOC";
import ServicesHOC from "../containers/services/servicesHOC";
import {QueryClient, QueryClientProvider} from "react-query";

const Root=()=>{
   const queryClient = new QueryClient();
    return(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/database" component={TableServicesHOC} />
                <Route path="/services" component={ServicesHOC} />
            </Switch>
            <Footer/>
            </QueryClientProvider >
        </BrowserRouter>
    );
}

export default Root;

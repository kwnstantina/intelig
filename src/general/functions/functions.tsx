import React, {ReactDOM} from "react";
import TableServices from "../../containers/tableServicesHOC/tableServices";
import Loader from "../animations/loader";




export const displayErrorMessages:React.ReactNode=(status:string): React.ReactNode =>{
    return(
        <div style={{marginTop:'100px'}}>
            { status === 'loading' && <Loader/>}
             {status==='error' && <p style={{marginLeft:'20px'}}>Connection with server is down, please try again.</p>}
        </div>
);
}





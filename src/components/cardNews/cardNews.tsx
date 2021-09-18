import React from 'react';
import "./cardNews.scss";
import Enterprise from "../../images/svg/enterprise";
import EnterpriseY from "../../images/svg/enterpriseY";
const CardNews=()=>{
return(
    <>
    <h2 className="cardNews-title">Latest Services </h2>
        <div className="platform">
            <div className="platform-cell"></div>
            <div className="platform-cell plattform">
                <h3 className="platform-title">Platform</h3>
                <a href="" className="platform-btn">Vote</a>
            </div>
            <div className="platform-cell enterprise">
                <h3 className="platform-title">Enterprise</h3>
                <a href="" className="platform-btn">Send us a Email</a>
            </div>
            <div className="platform-cell cell-feature">Instant delivery</div>
            <div className="platform-cell">
             <EnterpriseY/>
            </div>
            <div className="platform-cell">
             <Enterprise/>
            </div>
            <div className="platform-cell cell-feature">Personal contact person</div>
            <div className="platform-cell">
                <EnterpriseY/>
            </div>
            <div className="platform-cell">
                <Enterprise/>
            </div>
       {/*     <div className="table-cell cell-feature">Pay only for what you use</div>
            <div className="table-cell">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div className="table-cell">
                <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18"
                     xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>*/}
      {/*      <div className="table-cell cell-feature">Real-time fee reporting</div>
            <div className="table-cell">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div className="table-cell">
                <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18"
                     xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div className="table-cell cell-feature">Volume discounts</div>
            <div className="table-cell"></div>
            <div className="table-cell">
                <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18"
                     xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen"/>
                </svg>
            </div>*/}
       {/*     <div className="table-cell cell-feature">Account management</div>
            <div className="table-cell"></div>
            <div className="table-cell">
                <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18"
                     xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div className="table-cell cell-feature">Migration assistance</div>
            <div className="table-cell"></div>
            <div className="table-cell">
                <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18"
                     xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div className="table-cell cell-feature">24/7 support</div>*/}
         {/*   <div className="table-cell"></div>
            <div className="table-cell">
                <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18"
                     xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path
                        d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                        fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>*/}
        </div>
        </>
)
}


export default CardNews;

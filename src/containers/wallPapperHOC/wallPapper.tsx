import React from 'react';
import './wallPapper.scss';


const WallPapper = () => {

    return (
        <>
            <div className='wallPapper'>
                <div className="dot-small"/>
                <div className="dot"/>
                <div className='flex-box'>
                    {/*<div style={{backgroundColor:'#FFD000'}}>*/}
                    {/*<h1>Hello</h1>*/}
                    {/*</div>*/}
                    {/*<div style={{backgroundColor:'#333533'}}>*/}
                    {/*    <h1>Hello</h1>*/}
                    {/*    <h1>ok</h1>*/}
                    {/*</div>*/}
                        <h1 className='text'>Your Store Place</h1>
                        <p className='text-par'> This is the ideal place to add your personal data and keep them alive for ever.</p>
                </div>
            </div>


        </>

    );

}


export default WallPapper;

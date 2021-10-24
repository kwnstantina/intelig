import React from 'react';
import './wallPapper.scss';


const WallPapper = () => {

    return (
        <>
            <div className='wallPapper'>
                <div className="wallPapper__dot-small"/>
                <div className="wallPapper__dot"/>
                <div className='wallPapper__flex-box'>
                 {/*   <div style={{backgroundColor:'#FFD000'}}>
                    <h1>Hello</h1>
                    </div>
                    <div style={{backgroundColor:'#333533'}}>
                        <h1>Hello</h1>
                        <h1>ok</h1>
                    </div>*/}
                    <h1 className='wallPapper__text'>Your Store Place</h1>
                    <p className='wallPapper__text-par'>Keep alive documents-magazines-books-comics etc.</p>
                </div>
            </div>


        </>

    );

}


export default WallPapper;

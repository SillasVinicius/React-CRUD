import React from 'react';
import {NavigationBar} from "./../layouts/navigationBar/NavigationBar";
import {Header}from './../layouts/header/Header';
import {FooterBar} from './../layouts/footerBar/FooterBar';


export default (props) => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <FooterBar></FooterBar>
        </div>  
    );
}
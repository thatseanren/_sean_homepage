import React from 'react';
import { useState, useEffect } from "react";
import './menubtn.css';
import $ from 'jquery';
export default function MenuBtn() {
    useEffect(() => {
        $('.menu-btn').on('click',
            () => {
                $('.menu-btn').hasClass('show') ?
                    ($('.menu-btn').removeClass('show') && $('.h-section-navi').removeClass('show') && $('.MuiAvatar-root').removeClass('show')) : ($('.menu-btn').addClass('show') && $('.h-section-navi').addClass('show') && $('.MuiAvatar-root').addClass('show'))
            })
    }, []);
    return (<a class='menu-btn'>
        <div class='line line1'></div>
        <div class='line line2'></div>
        <div class='line line3'></div>
    </a>)
}
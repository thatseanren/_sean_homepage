import React from 'react';
import { useState, useEffect } from "react";
import './menubtn.css';
import $ from 'jquery';
export default function MenuBtn() {
    useEffect(() => {
        $('.menu-btn').on('click',
            () => {
                $('body').hasClass('show') ?
                    $('body').removeClass('show') : $('body').addClass('show')
            })
    }, []);
    return (<a class='menu-btn'>
        <div class='line line1'></div>
        <div class='line line2'></div>
        <div class='line line3'></div>
    </a>)
}
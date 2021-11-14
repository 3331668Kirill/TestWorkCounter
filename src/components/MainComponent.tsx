import React, {useState} from 'react';
import {Button} from "./button";
import {Link, NavLink} from "react-router-dom";
import {PATH} from "../App";


export type PropsComponent = {
    countValue: number
    incValue: () => void
    resetValue: () => void
}

export const MainComponent = ({countValue, incValue, resetValue, ...props}: PropsComponent) => {


    return (<div>

            <div className={'countBlock'} style={countValue === 5 ? {color: 'red'} : {color: ''}}>
                {countValue}

            </div>

        </div>

    )

}
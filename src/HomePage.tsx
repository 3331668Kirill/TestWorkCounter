import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH, TypePath} from "./App";

type PropsHomePage = {
    changePath:(p:string)=>void
}

export const HomePage = (props:PropsHomePage) => {

const changePath = () =>{
    props.changePath(PATH.COUNTER1)
}

    return (<>
            <div className="App">
                <h1> CHOOSE A VARIANT OF COUNTER </h1>
                <div>
                    <NavLink to={PATH.COUNTER1}>
                        <span onClick={changePath}>COUNTER 1</span>
                    </NavLink>
                    <NavLink to={'counter2'}>
                        <span>COUNTER 2</span>
                    </NavLink>
                </div>


            </div>
        </>
    )
}
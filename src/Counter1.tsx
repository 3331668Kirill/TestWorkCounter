import React, {useState} from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import App, {PATH} from "./App";
import {MainComponent, PropsMainComponent} from "./components/MainComponent";
import {PropsSetComponent, SetComponent} from "./components/SetComponent";
import {Button} from "./components/button";



export const Counter1 = ({countValue, incValue,
                             resetValue,countMaxValue,
                             ...props}: PropsMainComponent ) => {

    return(<>

                  <MainComponent resetValue={resetValue}
                                                              countValue={countValue}
                                                              countMaxValue={countMaxValue}
                                                              incValue={incValue}/>


      </>

  )
}
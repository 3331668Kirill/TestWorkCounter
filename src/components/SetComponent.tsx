import React from 'react'
import {PropsComponent} from "./MainComponent";
import {InputField} from "./input";


export const SetComponent = ({countValue, incValue, resetValue, ...props}:PropsComponent) => {

    return(
        <div>
            <div className={'countBlock'} style={countValue===5?{color: 'red'}:{color:''}}>

                <InputField countValue={10} changeValue={()=>{}} onKeyPressAddTask={()=>{}}/>
                <InputField countValue={12} changeValue={()=>{}} onKeyPressAddTask={()=>{}}/>
            </div>

        </div>
    )
}
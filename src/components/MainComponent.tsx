import React from 'react';
import {InputField} from "./input";
import {Button} from "./button";


export const MainComponent = () => {
    let countValue = 1



    return (<div>

            <div>
                <InputField countValue={countValue} changeTitle={()=>{}} onKeyPressAddTask={()=>{}}/>
            </div>
            <div>
                <Button name={'inc'} callback={()=>{}} />
                <Button name={'reset'} callback={()=>{}} />
                <Button name={'set'} callback={()=>{}} />
            </div>



        </div>

    )

}
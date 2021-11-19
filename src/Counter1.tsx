import React from 'react';
import {MainComponent, PropsMainComponent} from "./components/MainComponent";

export const Counter1 = ({
                             countValue, incValue,
                             resetValue, countMaxValue,
                             ...props
                         }: PropsMainComponent) => {
    return (<>
            <MainComponent resetValue={resetValue}
                           countValue={countValue}
                           countMaxValue={countMaxValue}
                           incValue={incValue}/>
        </>

    )
}
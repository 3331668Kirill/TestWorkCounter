import React from 'react';
import {MainComponent, PropsMainComponent} from "./components/MainComponent";

const Count1 = ({
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
export const Counter1 = React.memo(Count1)
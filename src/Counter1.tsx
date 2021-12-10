import React from 'react';
import {MainComponent, PropsMainComponent} from "./components/MainComponent";

const Count1 = ({countValue, countMaxValue}: PropsMainComponent ) => {
    console.log('Count1')
    return (<>
            <MainComponent countValue={countValue}
                           countMaxValue={countMaxValue}
                           />
        </>

    )
}
export const Counter1 = React.memo(Count1)
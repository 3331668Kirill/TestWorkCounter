import React from 'react';



export type PropsMainComponent = {
    countValue: number
    countMaxValue:number
}

const MainComp = ({countValue, countMaxValue}: PropsMainComponent) => {
    console.log('Main')
    return (<div>

            <div className={'countBlock'} style={countValue === countMaxValue ? {color: 'red'} : {color: ''}}>
                {countValue}

            </div>

        </div>

    )
}
export const MainComponent = React.memo(MainComp)
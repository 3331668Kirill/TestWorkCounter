import React from 'react';



export type PropsMainComponent = {
    countValue: number
    incValue: () => void
    resetValue: () => void
    countMaxValue:number

}

export const MainComponent = ({countValue, incValue, resetValue,countMaxValue, ...props}: PropsMainComponent) => {


    return (<div>

            <div className={'countBlock'} style={countValue === countMaxValue ? {color: 'red'} : {color: ''}}>
                {countValue}

            </div>

        </div>

    )

}
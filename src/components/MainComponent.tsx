import React from 'react';



export type PropsMainComponent = {
    countValue: number
    incValue: () => void
    resetValue: () => void
    countMaxValue:number
    blockColor?:string

}

export const MainComponent = ({countValue, incValue, resetValue,countMaxValue,blockColor, ...props}: PropsMainComponent) => {


    return (<div>

            <div className={'countBlock'} style={countValue === countMaxValue ? {color: 'red'} : {color: ''}}>
                {countValue}

            </div>

        </div>

    )

}
import React from 'react';



export type PropsMainComponent = {
    countValue: number
    incValue: () => void
    resetValue: () => void
    countMaxValue:number
    blockColor?:string
}

const MainComp = ({countValue, incValue, resetValue,countMaxValue,blockColor, ...props}: PropsMainComponent) => {

    return (<div>

            <div className={'countBlock'} style={countValue === countMaxValue ? {color: 'red'} : {color: ''}}>
                {countValue}

            </div>

        </div>

    )
}
export const MainComponent = React.memo(MainComp)
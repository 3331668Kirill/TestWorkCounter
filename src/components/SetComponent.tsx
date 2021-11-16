import React, {ChangeEvent, MouseEventHandler} from 'react'
import {InputField} from "./input";


export type PropsSetComponent = {

    incValue: () => void
    resetValue: () => void
    countMinValue: number
    countMaxValue: number
    blockColor:string
    onMouseDown:MouseEventHandler<HTMLDivElement>
    changeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void

}

export const SetComponent = ({
                                 countMinValue, countMaxValue,
                                 incValue, resetValue, onMouseDown,
                                 changeMinValue, blockColor,
                                 changeMaxValue, ...props
                             }: PropsSetComponent) => {

    return (
        <div>
            <div className={countMinValue === 0 ? blockColor : 'setBlock'} onMouseDown={onMouseDown} tabIndex={0}>
                <label>
                    set min value:
                    <InputField type={'number'} countValue={countMinValue} changeValue={changeMinValue}/>
                </label>
                <label>
                    set max value:
                    <InputField type={'number'} countValue={countMaxValue} changeValue={changeMaxValue}/>
                </label>
            </div>

        </div>
    )
}



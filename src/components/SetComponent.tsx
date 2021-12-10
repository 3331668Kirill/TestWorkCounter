import React, {ChangeEvent, MouseEventHandler} from 'react'
import {InputField} from "./input";

export type PropsSetComponent = {
    countMinValue: number
    countMaxValue: number
    blockColor: string
    onMouseDown: MouseEventHandler<HTMLLabelElement>
    changeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const SetComp = ({countMinValue, countMaxValue,  onMouseDown,
                                 changeMinValue, blockColor,
                                 changeMaxValue, ...props
                             }: PropsSetComponent) => {
    console.log('Set')
    return (
        <div>
            <div className={ countMinValue === 0 || countMinValue === countMaxValue
                          ? blockColor : 'setBlock'}>
                <label onMouseDown={onMouseDown} tabIndex={0}>
                    set min value:
                    <InputField type={'number'} countValue={countMinValue} changeValue={changeMinValue}/>
                </label>
                <label onMouseDown={countMinValue === countMaxValue? onMouseDown: undefined} tabIndex={0} >
                   set max value:
                    <InputField type={'number'} countValue={countMaxValue} changeValue={changeMaxValue}/>
                </label>
            </div>

        </div>
    )
}
export const SetComponent = React.memo(SetComp)


import React, {ChangeEvent} from 'react'
import {InputField} from "./input";

export type PropsSetComponent = {

    incValue: () => void
    resetValue: () => void
    countMinValue:number
    countMaxValue:number
    changeMinValue:(event: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue:(event: ChangeEvent<HTMLInputElement>) => void

}

export const SetComponent = ({countMinValue,countMaxValue,
                                 incValue, resetValue,
                                 changeMinValue,
                                 changeMaxValue,...props}:PropsSetComponent) => {

    return(
        <div>
            <div className={countMinValue===0 ? 'setBlockRed' :'setBlock'} >
                <label>
                    set min value:
                <InputField type={'number'} countValue={countMinValue} changeValue={changeMinValue} />
                </label>
                <label>
                    set max value:
                <InputField type={'number'} countValue={countMaxValue} changeValue={changeMaxValue} />
                </label>
            </div>

        </div>
    )
}



import React from 'react';
import {MainComponent, PropsMainComponent} from "./components/MainComponent";
import {PropsSetComponent, SetComponent} from "./components/SetComponent";
import {Button} from "./components/button";

export const Count2 = ({
                           countValue, incValue,
                           resetValue, countMaxValue,
                           countMinValue, blockColor, onMouseDown,
                           changeMaxValue, changeMinValue,
                           ...props
                       }: PropsMainComponent & PropsSetComponent & {
    setCounter2: () => void
    buttonDisabled: boolean
    incValue:() => void
    resetValue:() => void

}) => {
        console.log('Count2')
    return (<div className={'counter2'}>

            <span className={'main'}>
                <div>
                {!props.buttonDisabled
                    ? (<div className={'countBlock2'}> Enter value and press 'SET'
                            {blockColor === 'setBlockRed' && (countMinValue === 0 || countMinValue === countMaxValue)
                                ? <div style={{color: 'red', fontSize: '20px'}}>Incorrect value</div>
                                : null}
                        </div>
                    )
                    : <MainComponent
                                     countValue={countValue}
                                     countMaxValue={countMaxValue}
                                                                   />}
                    </div>

                 <div className={'buttonBlock'}>
                    <Button name={'inc'} callback={incValue}
                            disabled={countValue === countMaxValue || !props.buttonDisabled}/>
                    <Button name={'reset'} callback={resetValue}
                            disabled={countValue === countMinValue || !props.buttonDisabled}/>
                 </div>
            </span>
            <span className={'set'}>
                <SetComponent //resetValue={resetValue}
                              countMinValue={countMinValue} countMaxValue={countMaxValue}
                              blockColor={blockColor} onMouseDown={onMouseDown}
                              changeMinValue={changeMinValue} changeMaxValue={changeMaxValue}/>
                <div className={'buttonBlock'}>
                <Button name={'SET'}
                        callback={props.setCounter2}
                        disabled={props.buttonDisabled}/>
                </div>
            </span>

        </div>

    )
}
export const Counter2 = React.memo(Count2)
import React, {ChangeEvent, MouseEventHandler, useCallback, useEffect} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {SetComponent} from "./components/SetComponent";
import {Button} from "./components/button";
import {HomePage} from "./HomePage";
import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";
import {
    setBlockColorAC,
    setButtonDisabledAC,
    setCountMaxValueAC,
    setCountMinValueAC,
    setCountValueAC,
    setPathAC
} from './redux/reducer'
import {AppRootStateType} from './redux/store'
import {useDispatch, useSelector} from "react-redux";


export type TypePath = {
    MAIN: string
    SET: string
    HOME: string
    COUNTER1: string
    COUNTER2: string
}

export const PATH: TypePath = {
    MAIN: 'main',
    SET: '/set',
    HOME: '/',
    COUNTER1: '/counter1',
    COUNTER2: '/counter2'
}

function App() {
    const dispatch = useDispatch()
    const buttonDisabled = useSelector<AppRootStateType, boolean>(state => state.count.buttonDisabled)
    const countMinValue = useSelector<AppRootStateType, number>(state => state.count.countMinValue)
    const countMaxValue = useSelector<AppRootStateType, number>(state => state.count.countMaxValue)
    const countValue = useSelector<AppRootStateType, number>(state => state.count.countValue)
    const blockColor = useSelector<AppRootStateType, string>(state => state.count.blockColor)
    const path = useSelector<AppRootStateType, string|null>(state => state.count.path)


    useEffect(() => {
        if (path) {
            localStorage.setItem('path', path)
        }
    }, [path])
    useEffect(() => {
        localStorage.setItem('countMinValue', JSON.stringify(countMinValue))
    }, [countMinValue])

    useEffect(() => {
        localStorage.setItem('countMaxValue', JSON.stringify(countMaxValue))
    }, [countMaxValue])
    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(countValue))
    }, [countValue])
    const setCounter2 = () => {
        dispatch(setButtonDisabledAC(!buttonDisabled))
        dispatch(setCountValueAC(countMinValue))
    }
    const changeMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setButtonDisabledAC(false))
        let eValue = Number(e.currentTarget.value)
        if (eValue >= 0) {
            if (countMaxValue < eValue) {
                return
            } else {
                dispatch(setCountMinValueAC(eValue))
            }
        }
    }, [countMinValue, countMaxValue, buttonDisabled])
    const changeMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setButtonDisabledAC(false))
        let eValue = Number(e.currentTarget.value)
        if (eValue >= countMinValue) {
            dispatch(setCountMaxValueAC(eValue))
        }
        if (eValue < countMinValue) {
            dispatch(setCountMaxValueAC(Number(localStorage.getItem('countMinValue'))))
        }
    }, [countMinValue, countMaxValue, buttonDisabled])
    const incValue = () => {
        dispatch(setCountValueAC(countValue + 1))

    }

    const resetValue = useCallback(() => {
        dispatch(setCountValueAC(countMinValue))
    }, [countValue])
    const changePath = (p: string) => {
        dispatch(setCountValueAC(countMinValue))
        dispatch(setPathAC(p))
    }
    const onMouseDown: MouseEventHandler<HTMLLabelElement> = useCallback(() => {
        dispatch(setBlockColorAC('setBlockRed'))
        setTimeout(() => dispatch(setBlockColorAC('setBlock')), 1000)
    }, [blockColor])

    const blockButtonsIncReset = (t: string) => {
        return (
            <div className={'buttonBlock'}>
                <Button name={'inc'} callback={incValue} disabled={countValue === countMaxValue}/>
                <Button name={'reset'} callback={resetValue} disabled={countValue === countMinValue}/>
                <NavLink to={'set'}>
                    <Button name={'set'} callback={() => changePath(t)} disabled={false}/>
                </NavLink>

            </div>)
    }
    const blockButtonSet = (t: string) => {
        return (
            <div className={'buttonBlock'}>
                <NavLink to={'counter1'}>
                    <Button name={'set'} callback={() => changePath(t)} disabled={false}/>
                </NavLink>

            </div>)
    }

    return (
        <BrowserRouter>

            <div className="App">
                <header className="App-header">
                    <Routes>

                        <Route path={PATH.COUNTER1} element={<Counter1 countValue={countValue}
                                                                       countMaxValue={countMaxValue}
                        />}

                        />

                        <Route path={PATH.COUNTER2} element={<Counter2 resetValue={resetValue}
                                                                       countValue={countValue}
                                                                       countMaxValue={countMaxValue}
                                                                       incValue={incValue}
                                                                       countMinValue={countMinValue}
                                                                       blockColor={blockColor}
                                                                       onMouseDown={onMouseDown}
                                                                       changeMinValue={changeMinValue}
                                                                       changeMaxValue={changeMaxValue}
                                                                       setCounter2={setCounter2}
                                                                       buttonDisabled={buttonDisabled}


                        />}/>

                        <Route path={PATH.SET} element={<SetComponent countMinValue={countMinValue}
                                                                      countMaxValue={countMaxValue}
                                                                      blockColor={blockColor}
                                                                      onMouseDown={onMouseDown}
                                                                      changeMinValue={changeMinValue}
                                                                      changeMaxValue={changeMaxValue}
                        />}/>
                        <Route path={'TestWorkCounter' } element={<HomePage changePath={changePath}/>}/>
                        <Route path={PATH.HOME} element={<HomePage changePath={changePath}/>}/>
                    </Routes>
                    {path === PATH.COUNTER1 && blockButtonsIncReset(PATH.SET)}
                    {path === PATH.SET && blockButtonSet(PATH.COUNTER1)}
                    <NavLink to={PATH.HOME}>
                        <Button name={'HOME'} callback={() => changePath(PATH.HOME)} disabled={false}/>
                    </NavLink>
                </header>

            </div>

        </BrowserRouter>
    );
}

export default App;

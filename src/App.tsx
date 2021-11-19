import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from 'react';
import './App.css';
import {HashRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {SetComponent} from "./components/SetComponent";
import {Button} from "./components/button";
import {HomePage} from "./HomePage";
import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";

export type TypePath = {
    MAIN: string
    SET: string
    HOME: string
    COUNTER1: string
    COUNTER2: string
}

export const PATH: TypePath = {
    MAIN: 'main',
    SET: 'set',
    HOME: '/',
    COUNTER1: 'counter1',
    COUNTER2: 'counter2'
}

function App() {
    let initialPath: string | null = '/'
    let countStartMaxValue = Number(localStorage.getItem('countMaxValue'))
    let countStartMinValue = Number(localStorage.getItem('countMinValue'))
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [countMinValue, setCountMinValue] = useState<number>(countStartMinValue)
    const [countMaxValue, setCountMaxValue] = useState<number>(countStartMaxValue)
    const [countValue, setCountValue] = useState<number>(countMinValue)
    const [blockColor, setBlockColor] = useState('setBlock')
    const [path, setPath] = useState(initialPath)
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
        setButtonDisabled(!buttonDisabled)
        setCountValue(countMinValue)
    }
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setButtonDisabled(false)
        let eValue = Number(e.currentTarget.value)
        if (eValue >= 0) {
            if (countMaxValue < eValue) {
                return
            } else {
                setCountMinValue(eValue)
            }
        }
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setButtonDisabled(false)
        let eValue = Number(e.currentTarget.value)
        if (eValue >= countMinValue) {
            setCountMaxValue(eValue)
        }
        if (eValue < countMinValue) {
            setCountMaxValue(Number(localStorage.getItem('countMinValue')))
        }
    }
    const incValue = () => {
        setCountValue(countValue + 1)

    }
    const resetValue = () => {
        setCountValue(countMinValue)
    }
    const changePath = (p: string) => {
        setCountValue(countMinValue)
        const path = p
        setPath(path)
    }
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
    const onMouseDown: MouseEventHandler<HTMLLabelElement> = () => {
        setBlockColor('setBlockRed')
        setTimeout(() => setBlockColor('setBlock'), 1000)
    }


    return (
        <HashRouter>

            <div className="App">
                <header className="App-header">
                    <Routes>
                        {path === PATH.HOME && <Route path={PATH.COUNTER1} element={<Navigate replace to="/"/>}/>}
                        {path === PATH.HOME && <Route path={PATH.SET} element={<Navigate replace to="/"/>}/>}

                        <Route path={'/'} element={<HomePage changePath={changePath}/>}/>

                        <Route path={PATH.COUNTER1} element={<Counter1 resetValue={resetValue}
                                                                       countValue={countValue}
                                                                       countMaxValue={countMaxValue}
                                                                       incValue={incValue}/>}

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


                        />}
                        />

                        <Route path={PATH.SET} element={<SetComponent resetValue={resetValue}
                                                                      countMinValue={countMinValue}
                                                                      countMaxValue={countMaxValue}
                                                                      incValue={incValue}
                                                                      blockColor={blockColor}
                                                                      onMouseDown={onMouseDown}
                                                                      changeMinValue={changeMinValue}
                                                                      changeMaxValue={changeMaxValue}
                        />}/>

                    </Routes>
                    {path === PATH.COUNTER1 && blockButtonsIncReset(PATH.SET)}
                    {path === PATH.SET && blockButtonSet(PATH.COUNTER1)}
                    {path === PATH.HOME && null}
                    <NavLink to={PATH.HOME}>
                        <Button name={'HOME'} callback={() => changePath('/')} disabled={false}/>
                    </NavLink>
                </header>

            </div>

        </HashRouter>
    );
}

export default App;

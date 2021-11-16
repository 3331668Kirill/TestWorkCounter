import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from 'react';
import './App.css';
import {MainComponent} from "./components/MainComponent";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import {SetComponent} from "./components/SetComponent";
import {Button} from "./components/button";

type TypePath = {
    MAIN: string
    SET: string
}

export const PATH: TypePath = {
    MAIN: 'main',
    SET: 'set',
}

function App() {
    let countStartMaxValue = Number(localStorage.getItem('countMaxValue'))
    let countStartMinValue = Number(localStorage.getItem('countMinValue'))
    const [countMinValue, setCountMinValue] = useState<number>(countStartMinValue)
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {

        let eValue = Number(e.currentTarget.value)
        if (eValue >= 0) {
            setCountMinValue(eValue)
            if (countMaxValue <= countMinValue) {
                setCountMaxValue(countMinValue + 1)
            }
            if (countValue <= countMinValue) {
                setCountValue(countMinValue + 1)
            }
        }
    }
    const [countMaxValue, setCountMaxValue] = useState<number>(countStartMaxValue)
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let eValue = Number(e.currentTarget.value)
        if (eValue >= countMinValue) {
            setCountMaxValue(eValue)

        }
        if (eValue < countMinValue) {
            setCountMaxValue(countMinValue)

        }
    }

    const [countValue, setCountValue] = useState<number>(countMinValue)
    const incValue = () => {
        setCountValue(countValue + 1)

    }
    const resetValue = () => {
        setCountValue(countMinValue)
    }
    const [path, setPath] = useState(PATH.SET)
    const changePath = () => {

        if (path === PATH.SET) {
            setPath(PATH.MAIN)

        }
        if (path === PATH.MAIN) {
            setPath(PATH.SET)

        }
    }
    useEffect(() => {
        localStorage.setItem('countMinValue', JSON.stringify(countMinValue))
    }, [countMinValue])

    useEffect(() => {
        localStorage.setItem('countMaxValue', JSON.stringify(countMaxValue))
    }, [countMaxValue])

    const blockButtonsIncReset = () => {
        return (
            <div className={'buttonBlock'}>
                <Button name={'inc'} callback={incValue} disabled={countValue === countMaxValue}/>
                <Button name={'reset'} callback={resetValue} disabled={countValue === countMinValue}/>

                <NavLink to={path}>
                    <Button name={'set'} callback={changePath} disabled={false}/>
                </NavLink>

            </div>)
    }
    const blockButtonSet = () => {
        return (
            <div className={'buttonBlock'}>

                <NavLink to={path}>
                    <Button name={'set'} callback={changePath} disabled={false}/>
                </NavLink>

            </div>)
    }
    const [blockColor, setBlockColor] = useState('setBlock')
    const onMouseDown: MouseEventHandler<HTMLDivElement> = () => {

        setBlockColor('setBlockRed')
        setTimeout(() => setBlockColor('setBlock'), 1000)

    }

    return (
        <HashRouter>

            <div className="App">
                <header className="App-header">
                    <Routes>

                        <Route path='/' element={<MainComponent resetValue={resetValue}
                                                                countValue={countValue}
                                                                countMaxValue={countMaxValue}
                                                                incValue={incValue}/>}/>
                        <Route path={PATH.MAIN} element={<MainComponent resetValue={resetValue}
                                                                        countValue={countValue}
                                                                        countMaxValue={countMaxValue}
                                                                        incValue={incValue}/>}/>
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
                    {/*{path === PATH.SET ? blockButtonsIncReset() : blockButtonSet()}*/}
                    {path === PATH.SET && blockButtonsIncReset()}
                    {path === PATH.MAIN && blockButtonSet()}

                </header>
            </div>

        </HashRouter>
    );
}

export default App;

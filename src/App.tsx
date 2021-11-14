import React, {useState} from 'react';
import './App.css';
import {MainComponent} from "./components/MainComponent";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import {SetComponent} from "./components/SetComponent";
import {Button} from "./components/button";

export const PATH = {
    MAIN: 'main',
    SET: 'set',
}

function App() {
    const [countMinValue, setCountMinValue] = useState(0)
    const changeMinValue = (e:any) => {
        let eValue = Number(e.currentTarget.value)
        if (eValue >= 0) {
            setCountMinValue(eValue)
            console.log(countMinValue)
            //setCountValue(countMinValue)
            if(countMaxValue<=countMinValue){
                setCountMaxValue(countMinValue+1)
            }
            if(countValue<=countMinValue){
                setCountValue(countMinValue+1)
            }
        }
    }
    const [countMaxValue, setCountMaxValue] = useState(countMinValue)
    const changeMaxValue = (e:any) => {

        let eValue = Number(e.currentTarget.value)
        if (eValue >= countMinValue) {
            setCountMaxValue(eValue)
        }
        if (eValue<countMinValue) {
            setCountMaxValue(countMinValue )
        }
    }

    const [countValue, setCountValue] = useState(countMinValue)
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
                                                                      changeMinValue={changeMinValue}
                                                                      changeMaxValue={changeMaxValue}
                        />}/>

                    </Routes>
                    {path === PATH.SET ? blockButtonsIncReset() : blockButtonSet()}

                </header>
            </div>

        </HashRouter>
    );
}

export default App;

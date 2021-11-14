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

    let startValue = 0
    const [countValue, setCountValue] = useState(startValue)
    const incValue = () => {
        setCountValue(countValue + 1)
    }
    const resetValue = () => {
        setCountValue(0)
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

    const blockButtons1 = () => {
        return (
            <div className={'buttonBlock'}>
                <Button name={'inc'} callback={incValue} disabled={countValue === 5}/>
                <Button name={'reset'} callback={resetValue} disabled={countValue === 0}/>

                <NavLink to={path}>
                    <Button name={'set'} callback={changePath} disabled={false}/>
                </NavLink>

            </div>)
    }
    const blockButtons2 = () => {
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
                                                                incValue={incValue}/>}/>
                        <Route path={PATH.MAIN} element={<MainComponent resetValue={resetValue}
                                                                        countValue={countValue}
                                                                        incValue={incValue}/>}/>
                        <Route path={PATH.SET} element={<SetComponent resetValue={resetValue}
                                                                      countValue={countValue}
                                                                      incValue={incValue}/>}/>

                    </Routes>
                    {path === PATH.SET ? blockButtons1() : blockButtons2()}

                </header>
            </div>

        </HashRouter>
    );
}

export default App;

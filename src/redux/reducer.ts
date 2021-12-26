

type TypeInitialState = {
    buttonDisabled:boolean
    countMinValue:number
    countMaxValue:number
    countValue:number
    blockColor:string
    path:string | null
}
type TypeSetButtonDisabledAC = {
    type: "SET_BUTTON_DISABLED"
    buttonDisabled: boolean
}
type TypeSetCountMinValueAC = {
    type: "SET_COUNT_MIN_VALUE"
    countMinValue: number
}
type TypeSetCountMaxValueAC = {
    type: "SET_COUNT_MAX_VALUE"
    countMaxValue: number
}
type TypeSetCountValueAC = {
    type: "SET_COUNT_VALUE"
    countValue: number
}
type TypeSetBlockColorAC = {
    type: "SET_BLOCK_COLOR"
    blockColor: string
}
type TypeSetPathAC = {
    type: "SET_PATH"
    path: string | null
}

type TypeAllAction = TypeSetButtonDisabledAC | TypeSetCountMinValueAC
    | TypeSetCountMaxValueAC | TypeSetCountValueAC | TypeSetBlockColorAC | TypeSetPathAC
const InitialState:TypeInitialState = {
    buttonDisabled:false,
    countMinValue:Number(localStorage.getItem('countMinValue')),
    countMaxValue:Number(localStorage.getItem('countMaxValue')),
    countValue:Number(localStorage.getItem('countMinValue')),
    blockColor:'setBlock',
    path:document.location.pathname
}


export const countReducer = (state:TypeInitialState=InitialState, action:TypeAllAction) =>{
    switch (action.type){
        case "SET_BUTTON_DISABLED":
            return {...state,buttonDisabled:action.buttonDisabled}
        case "SET_COUNT_MIN_VALUE":
            return {...state,countMinValue:action.countMinValue}
        case "SET_COUNT_MAX_VALUE":
            return {...state,countMaxValue:action.countMaxValue}
        case "SET_COUNT_VALUE":
            return {...state,countValue:action.countValue}
        case "SET_BLOCK_COLOR":
            return {...state,blockColor:action.blockColor}
        case "SET_PATH":
            return {...state,path:action.path}
    }
}

export const setButtonDisabledAC = (value:boolean) => {
    return {
        type: "SET_BUTTON_DISABLED",
        buttonDisabled:value,
    }
}
export const setCountMinValueAC = (countMinValue:number) => {
    return {
        type: "SET_COUNT_MIN_VALUE",
        countMinValue,
    }
}
export const setCountMaxValueAC = (countMaxValue:number) => {
    return {
        type: "SET_COUNT_MAX_VALUE",
        countMaxValue,
    }
}
export const setCountValueAC = (countValue:number) => {
    return {
        type: "SET_COUNT_VALUE",
        countValue,
    }
}
export const setBlockColorAC = (blockColor:string) => {
    return {
        type: "SET_BLOCK_COLOR",
        blockColor,
    }
}
export const setPathAC = (path:string | null) => {
    return {
        type: "SET_PATH",
        path,
    }
}
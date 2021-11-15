import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    countValue: number|undefined
    changeValue: (event: ChangeEvent<HTMLInputElement>) => void
    type:string
}

export const InputField = ({countValue, changeValue, type, ...props}: InputPropsType) => {

    return (
        <input
            style={{width: '130px'}}
            value={countValue}
            type={type}
            onChange={changeValue}

        />

    )

}
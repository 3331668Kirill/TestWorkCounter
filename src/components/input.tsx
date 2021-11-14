import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    countValue: number
    changeValue: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressAddTask: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const InputField = ({countValue, changeValue, onKeyPressAddTask, ...props}: InputPropsType) => {

    return (
        <input
            style={{width: '130px'}}
            value={countValue}
            onKeyPress={onKeyPressAddTask}
        />

    )

}
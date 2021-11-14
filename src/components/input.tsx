import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    countValue: number
    changeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressAddTask: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const InputField = ({countValue, changeTitle, onKeyPressAddTask, ...props}: InputPropsType) => {

    return (
        <input
            style={{width: '230px'}}
            value={countValue}
            onKeyPress={onKeyPressAddTask}
        />

    )

}
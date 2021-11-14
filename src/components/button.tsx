import React from "react";

type TypeButtonProps = {
    name: string
    callback: () => void
}
export const Button = (props: TypeButtonProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
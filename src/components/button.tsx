import React from "react";

type TypeButtonProps = {
    name: string
    callback: () => void
    disabled: boolean
}
export const Button = (props: TypeButtonProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={props.name === 'HOME'? 'buttonHome':'button'}
                onClick={onClickHandler}
                disabled={props.disabled}>

            {props.name}
        </button>
    )
}
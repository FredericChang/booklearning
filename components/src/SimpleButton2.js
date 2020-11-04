import React from "react";


export function SimpleButton2(props){
    return (
        <button onClick={props.callback}
                className={props.className}
                disabled={props.disabled === "ture" || props.disabled === true }>
            {props.text}
        </button>
    )
}


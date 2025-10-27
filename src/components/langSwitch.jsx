import React from "react";

export default function LangSwitch(props) {
    const changeLang = () => {
        if (props.type == "English") {
            props.createKeyboard("Hebrew");
        } else {
            props.createKeyboard("English");
        }
    }

    const changeSymbol = () => {
        if (props.type == "Emoji") {
            props.createKeyboard("Symbol");
        } else {
            props.createKeyboard("Emoji");
        }
    }

    return (
        <div>
            <button onClick={changeLang}>🌐</button>
            <button onClick={changeSymbol}>☺/@*</button>
        </div>
    )
}
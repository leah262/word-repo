import React from "react";

export default function LangSwitch({ type, createKeyboard }) {
        const changeKeyboardLang = () => {
            if (type === "Hebrew") 
                createKeyboard("English");
            else if (type === "English") 
                createKeyboard("Hebrew");
            else if (type === "Emoji" || type === "Symbol") 
                createKeyboard("Hebrew");
        };

        const changeKeyboardMode = () => {
            if (type === "Symbol")
                createKeyboard("Emoji");
            else if (type === "Emoji")
                createKeyboard("Symbol");
            else if (type === "Hebrew"|| type === "English")
                createKeyboard("Emoji");
        };
        return (
            <div>
                <button onClick={changeKeyboardLang}>🌐</button>
                <button onClick={changeKeyboardMode}>☺/@*</button>
            </div>
        )
    }
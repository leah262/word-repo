import React, { useState } from "react";
import LangSwitch from "./LangSwitch";
import KeyButton from "./KeyButton";
import '../App.css'

export default function Keyboard({handleKeyClick}) {
    const keyboardChars = [

        [["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
        ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
        ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"]],

        [["q", "w", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["⇪", "z", "x", "c", "v", "b", "n", "m"]],

        // [["Q", "W", "R", "T", "Y", "U", "I", "O", "P"],
        // ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        // ["⇪", "Z", "X", "C", "V", "B", "N", "M"]]

        [["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
        ["-", "_", "+", "=", "[", "]", "{", "}", ";", ":", "'"],
        ['"', ",", ".", "/", "<", ">", "?", "`", "~", "\\", "|"]],

        [["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆"],
        ["😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗"],
        ["😙", "😚", "🙂", "🤗", "🤩", "🤔", "🤨", "😐"]]

    ]

    const [currentKeyboard, setCurrentKeyboard] = useState({
        type: "Hebrew",
        chars: keyboardChars[0]
    });
    
    function createKeyboard(type) {
        let chars;
        switch (type) {
            case "Hebrew":
                chars = keyboardChars[0];
                break;
            case "English":
                chars = keyboardChars[1];
                break;
            case "Symbol":
                chars = keyboardChars[2];
                break;
            case "Emoji":
                chars = keyboardChars[3];
                break;
            default:
                chars = keyboardChars[0];
        }

        setCurrentKeyboard({ type, chars });
        // renderKeyboard(chars);
    }

    return (
        <div>
            <LangSwitch type={currentKeyboard.type} createKeyboard={createKeyboard} />
            <div className="keyboard">
                {currentKeyboard.chars.map((row, i) => (
                    <div key={i} className="keyboard-row">
                        {row.map((key, j) => (
                            <KeyButton key={`${i}-${j}`} value={key}  handleKeyClick={handleKeyClick} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

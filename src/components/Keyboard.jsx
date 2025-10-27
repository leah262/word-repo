import React, { useState } from "react";
import LangSwitch from "./LangSwitch";
import KeyButton from "./KeyButton";

export default function Keyboard() {
  let mivhf;
  const keyboardChars = [
    // Hebrew
    [
      ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
      ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
      ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"]
    ],
    // English
    [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      ["⇪", "z", "x", "c", "v", "b", "n", "m"]
    ],
    // Symbols
    [
      ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
      ["-", "_", "+", "=", "[", "]", "{", "}", ";", ":", "'"],
      ['"', ",", ".", "/", "<", ">", "?", "`", "~", "\\", "|"]
    ],
    // Emoji
    [
      ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆"],
      ["😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗"],
      ["😙", "😚", "🙂", "🤗", "🤩", "🤔", "🤨", "😐"]
    ]
  ];

  // פונקציה ליצירת כפתורים לפי סוג המקלדת
  const renderKeyboard = (boardType, keyBoard) => {
    const buttons = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    numbers.forEach((num, i) => {
      buttons.push(<KeyButton key={`num-${i}`} value={num} type={boardType} />);
    });

    keyBoard.forEach((row, i) => {
      row.forEach((char, j) => {
        buttons.push(<KeyButton key={`${i}-${j}`} value={char} type={boardType} />);
      });
    });

    return buttons;
  };

  // state ההתחלתי כולל גם את הכפתורים
  const [currentKeyboard, setCurrentKeyboard] = useState({
    type: "Hebrew",
    chars: keyboardChars[0],
    buttons: renderKeyboard("Hebrew", keyboardChars[0])
  });

  // שינוי סוג המקלדת
  const createKeyboard = (type) => {
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
        break;
    }
    setCurrentKeyboard({
      type,
      chars,
      buttons: renderKeyboard(type, chars)
    });
  };

  return (
    <div className="keyboard-container">
      <LangSwitch createKeyboard={createKeyboard} type={currentKeyboard.type} />
      <div className="keyboard">{currentKeyboard.buttons}</div>
    </div>
  );
}

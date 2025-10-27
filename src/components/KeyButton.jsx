import React from "react";
import { useState } from "react";
export default function KeyButton({value,handleKeyClick}) {
    return (
        <div>
            <button onClick={() => handleKeyClick(value)}>{value}</button>
        </div>
    )       
}

import React from "react";
import { useState } from "react";
export default function KeyButton(props) {
    return (
        <div>
            <button>{props.value}</button>
        </div>
    )       
}
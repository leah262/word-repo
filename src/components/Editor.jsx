import React from "react";
export default function Editor({ text }) {
  return (
    <div>
      <textarea value={text || ""} readOnly cols="50" rows="10"></textarea>
    </div>
    )
   
}
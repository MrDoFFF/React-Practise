import React from "react";

export default function NoPage() {
  const text = "Page_ Is_Not_Found";
  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"15rem"}}>
      <h1>
        {text.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </div>
  );
}

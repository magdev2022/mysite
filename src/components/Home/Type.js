import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Automation Tools",
          "AntiBot Solution",
          "Cross-Platform Desktop Application",
          "Mobile Application",
          "Website Development",
          "Twitter & Instagram Automation"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

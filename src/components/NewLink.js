import React, { useRef, useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./NewLink.css";
export default function CopyExample() {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  function generateLink() {
    let result = [],
      characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  }

  return (
    <div>
      <form className="newLink-container">
        <input
          className="newLink"
          ref={textAreaRef}
          value={`pastebin-nzaqr.vercel.app/${generateLink()}`}
        />

        <div className="copy-button">
          <FaIcons.FaRegCopy onClick={copyToClipboard} className="copy-icon" />
          <div className="copied">{copySuccess}</div>
        </div>
      </form>
    </div>
  );
}

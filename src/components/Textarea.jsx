import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");


  const handleChange = (e) => {
    let newText = e.target.value;

    
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!");
      setShowWarning(true);
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed!");
      setShowWarning(true);
      newText = newText.replace("@", "");
    } else {
      setShowWarning(false); 
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck={false}
      />

      {showWarning && <Warning warningText={warningText} />}
    </div>
  );
}                                          
import { useEffect,useState } from "react";
import "./spell.css"

const Spelling=()=>{
    const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example",
      };
      const [suggestedText, setSuggestedText] = useState("");
      const [inputText, setInputText] = useState("");
    
      const handleInputChange = (e) => {
        setInputText(e.target.value);
      };
    
      const keys = Object.keys(customDictionary);
      const values = Object.values(customDictionary);
      useEffect(() => {
        let s = new Set();
        inputText.split(" ").forEach((key) => s.add(key.toLowerCase()));
        let flag = false;
        keys.forEach((item, index) => {
          if (s.has(item)) {
            setSuggestedText(values[index]);
            flag = true;
          }
        });
        if (!flag) setSuggestedText("");
      }, [inputText, keys, values]);
      return (
        <div className="App">
          <h1>Spell Check and Auto-Correction</h1>
          <textarea
            value={inputText}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter text..."
            rows={5}
            cols={40}
          />
          {suggestedText && (
            <p>
              Did you mean: <strong>{suggestedText}</strong>?
            </p>
          )}
        </div>
      );
    }
    
export default Spelling ;
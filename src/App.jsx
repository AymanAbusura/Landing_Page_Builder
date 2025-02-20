import { useState } from "react";
import "./app.css";

export default function App() {
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addElement = (type) => {
    if (!inputValue.trim()) return;
    setElements([...elements, { type, content: inputValue }]);
    setInputValue("");
  };

  return (
    <div className="container">
      <div className="left-panel">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder="Enter text..."
        />
        <div className="button-group">
          <button onClick={() => addElement("h1")} className="button">Title</button>
          <button onClick={() => addElement("p")} className="button">Paragraph</button>
          <button onClick={() => addElement("button")} className="button">Button</button>
        </div>
      </div>

      <div className="right-panel">
        {elements.map((el, index) => (
          <div key={index} className="element">
            {el.type === "h1" && <h1>{el.content}</h1>}
            {el.type === "p" && <p>{el.content}</p>}
            {el.type === "button" && <button className="generated-button">{el.content}</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

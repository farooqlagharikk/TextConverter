import React, {  useState } from "react";

export default function Textfrom(props) {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    console.log("handleUpClick");
    // setText("set text was change");
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handlelowerClick = () => {
    console.log("handleUpClick");
    // setText("set text was change");
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    console.log("handleUpClick");
    // setText("set text was change");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var Text = document.getElementById("mybox");
    Text.Select();
    navigator.clipboard.writeText(Text.value);
  };

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //Timer Function
  let timer  = new Date().toLocaleTimeString();
  const [tme, setTme] =useState(timer);
 const updateTime =()=>{
  let timer  = new Date().toLocaleTimeString();
  setTme(timer)
 }
 setInterval(updateTime, 1000)


  return (
    <div>
      <h1>{tme}</h1>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={Text}
          placeholder="Typing..."
          onChange={handleOnChange}
          id="mybox"
          rows="12"
        ></textarea>
      </div>

      <div className="border border-light p-3 mb-3 mx-3">
        <div className="text-center">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary  mx-2" onClick={handlelowerClick}>
            Convert to lowerCase
          </button>
          <button className="btn btn-primary  mx-2" onClick={handleClearText}>
            Clear Text
          </button>
          <button className="btn btn-primary  mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary  mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces{" "}
          </button>
        </div>
      </div>
      <div className="container bg-dark text-light">
        <h3>Your Text Summary</h3>
        <p>
          {" "}
          {Text.split(" ").length} Words and {Text.length} Characters
        </p>
        <p> {0.008 * Text.split(" ").length}Minutes to Read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Enter Something In The Texbox Above   to Preview It Here"}</p>
      </div>
    </div>
  );
}

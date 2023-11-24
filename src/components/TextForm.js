import React,{useState} from "react";

export default function TextForm(props) {
  
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    // setText("you have clicked on handle upClick");
    setText(newText);
    props.showAlert("Converted to uppercase...","success")
  }

  const handleLowClick=()=>{
    let lowText=text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to lowercase...","success")
  }

  const handleClear=()=>{
    let lowText='';
    setText(lowText);
    props.showAlert("Text cleared...","success")
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied...","success")
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed...","success")
  }

  const handleOnChange=(event)=>{
    console.log("onChange was clicked");
    setText(event.target.value);
  }
  
  // const [text,setText]=useState('Enter text here');
  const [text,setText]=useState('');
  // text="new text"; //wrong way to change the state
  // setText("new text"); //right way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#0b225e'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label">Example textarea</label>
          <textarea
            onChange={handleOnChange}
            className="form-control"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',
                    color:props.mode==='dark'?'white':'black'}}
            id="myBox" rows="8"
            value={text}
          ></textarea>
        </div>
      <button className="mx-2 btn btn-primary" onClick={handleUpClick} >convert to upperCase</button>
      <button className="mx-2 btn btn-success" onClick={handleLowClick} >convert to LowerCase</button>
      <button className="mx-2 btn btn-warning" onClick={handleClear} >clear</button>
      <button className="mx-2 btn btn-info" onClick={handleCopy} >Copy Text</button>
      <button className="mx-2 btn btn-secondary" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#0b225e'}}>
      <h1>your tech summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox to preview it"}</p>
    </div>
    </>
  );
}

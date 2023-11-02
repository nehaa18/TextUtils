import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpperClick=()=>
    {
        const newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowerClick=()=>
    {
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }
    const clearText=()=>
    {
        const newText='';
        setText(newText);
        props.showAlert("Text is cleared", "success");

    }
    const copyText=()=>
    {
        var text=document.getElementById("TextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");

    }
    const handleExtraSpaces=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");

    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value)
    }
    
    const [text, setText]=useState("Enter text here");
  return (
   
    <>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="TextBox" rows="8"></textarea>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-primary'} my-3`} onClick={handleUpperClick}>Convert to uppercase</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-primary'} my-3 mx-3`} onClick={handleLowerClick}>Convert to lowercase</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-primary'} my-3 mx-3`} onClick={clearText}>Clear Text</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-primary'} my-3 mx-3`} onClick={copyText}>Copy text</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-primary'} my-3 mx-3`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

     </div>
      <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
        <p>{0.08*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>

    </>
  )
}

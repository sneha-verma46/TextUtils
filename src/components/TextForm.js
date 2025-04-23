import React, { useState } from 'react' //it imports the react library which is necessary to work with component

function TextForm(props){
    
    const[text, setText] = useState("Enter you Text Here...");
    const HandleUpClick= () =>{
        console.log("UpperCase Was Clicked + text")
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Your complete text is in UPPER CASE now!", "success")
    }
    
    //HandleLoClick: This function is triggered when the "Convert to LowerCase" button is clicked.
        const HandleLoClick= () =>{
            console.log("LowerCase Was Clicked + text")
            let newText= text.toLowerCase();
            setText(newText);
            props.showAlert("Your complete text is in lower case now!", "success")
    }
    const HandleCapitalize= () =>{
        console.log("Capital")
        let newText= text.toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
        setText(newText);
        props.showAlert("Yeahh you have Capitalized your 1st letter of each word", "success")
}
    const HandleClearText= () =>{
        console.log("Clear Text")
        setText(" ");
        props.showAlert("Your text is cleared now!", "danger")
}
const HandleReverseText= () =>{
    console.log("Reverse Text Was Clicked + text")
    let newText= text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Your text is successfully reversed", "info")
}
const HandleRemoveExtraSpaces = () => {
    console.log("Before:", text);
    let newText = text.replace(/\s+/g, ' ').trim();
    console.log("After:", newText);
    setText(newText);
    props.showAlert("Wooohhoooo! You have removed extra spaces :)", "success")
  };
  const HandleCopyText = () => {
    navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
    props.showAlert("You can paste your text now anywhere", "success")
};
  
    const handleOnChange =(event)=>{
        console.log("on Change");
        setText(event.target.value);
    }
    
    return(
        <>
        <div className="container">
            <h1>{props.TextArea}</h1>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">TextArea</label>
    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows={8}></textarea>
      </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to UpperCase</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to LowerCase</button>
  <button type="submit" className='btn btn-primary mx-2' onClick={HandleClearText}>Clear Text</button>
  <button type="submit" className='btn btn-primary mx-2' onClick={HandleCapitalize}>Capitalize Each Word</button>
  <button type="submit" className='btn btn-primary mx-2' onClick={HandleReverseText}>Reverse</button>
  <button type="submit" className='btn btn-primary mx-2' onClick={HandleRemoveExtraSpaces}>Remove Extra Spaces</button>
  <button type="submit" className='btn btn-primary mx-2 mt-2' onClick={HandleCopyText}>Copy Text</button>
  </div>
  <div className="container my-3" >
    <h3>Here is your Text Summary...</h3>
    <p>{text.split(" ").length} Words and {text.length} Letters</p>
    <p>{0.008 * text.split(" ").length} Time taken to read out the text.</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter something in the textarea to preview it..."}</p>
  </div>
  </>
    )
};

export default TextForm;


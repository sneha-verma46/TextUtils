import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function About() {
  // ✅ Step 1: Initial style state for Light Mode
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  });

  // ✅ Step 2: Initial button text state
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  // ✅ Step 3: Toggle function to switch between dark and light mode
  const toggle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white"
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      });
      setBtnText("Enable Dark Mode");
    }
  };

  // ✅ Step 4: JSX return
  return (
    <div className="container my-4" style={myStyle}>
      <h2>About Us</h2>

      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>

        {/* Second accordion */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>

        {/* Third accordion */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Step 5: Toggle Mode Button */}
      <div className="container my-3">
        <button onClick={toggle} className="btn btn-primary">{btnText}</button>
      </div>
    </div>
  );
}

export default About;

import React from "react";

const NumberButton = (props) => {
  if (props.number === "0"){
  return (
    <button id='zeroButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        props.number
      }
    </button>
  );
  } else {
    return (
      <button>
        {props.number}
      </button>
    );
  } 
};

export default NumberButton

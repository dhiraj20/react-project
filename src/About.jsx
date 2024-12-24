import React, { useRef } from "react";
import { connect } from "react-redux";

const About = ({addFruit}) => {
  const inputRef = useRef(null);
  return (
    <div>
      Add a fruit
      <div>
        <input ref={inputRef} placeholder="Enter a fruit name" />
      </div>
      <button onClick={() => addFruit(inputRef?.current?.value)}>Save</button>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  addFruit: (value) => dispatch({ type: "ADD", data: value }),
});
export default connect(null, mapDispatchToProps)(About);

import React from "react";
import { connect } from "react-redux";

const Home = ({ fruits, deleteFruit }) => {
  return (
    <div style={{ width: "200px" }}>
      <p>List of fruits</p>
      <div>
        {fruits.length > 0 &&
          fruits.map((fruit) => (
            <div className="fruit" key={fruit}>
              {fruit} <span onClick={() => deleteFruit(fruit)}>Delete</span>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ fruits: state.fruits });

const mapDispatchToProps = (dispatch) => ({
  deleteFruit: (fruit) => dispatch({ type: "DELETE", data: fruit })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

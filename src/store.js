// import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';

const initialState = {
  fruits: ["Apple", "Banana"],
  data: []
};

export  const fetchDataResponse = () => {
  return (dispatch) => {
    return fetch('https://api.example.com/data')
      .then(response => {
        const data = response.json();
        dispatch({type: 'FETCH_DATA', data: data});
      })
      .catch(error => {
        console.log(error)
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, fruits: [...state.fruits, action.data] };
    }
    case "DELETE": {
      return {
        ...state,
        fruits: state.fruits.filter((fruit) => fruit !== action.data),
      };
    }
    case 'FETCH_DATA': {
      return {...state, data: action.data}
    }
    default:
      return state;
  }
};
// const store = configureStore({ reducer: reducer });
const store = createStore(reducer, applyMiddleware(thunk))

export default store;

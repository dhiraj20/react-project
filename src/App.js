import About from "./About";
import "./App.css";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./store";
import HocComponent from "./hoc";
import TicTacToeGame from "./ticTacToe";
import Game from "./tic";
import GraphQl from "./graphql";
import ReduxThunkExample from "./redux-thunk";
import thunkStore from "./redux-thunk/index";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LearnRedux from "./redux";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <ApolloProvider client={client}>
    //   <Provider store={store}>
    //     <div>A React Application</div>
    //     <div className="container">
    //       <Home />
    //       <About />
    //     </div>
    //     {/* <HocComponent /> */}
    //     {/* <TicTacToeGame /> */}
    //     {/* <Game /> */}
    //     {/* <GraphQl /> */}
    //     <LearnRedux />
    //   </Provider>
    // </ApolloProvider>
      <ReduxThunkExample />
  );
}

export default App;

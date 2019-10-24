import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import 'reset-css' 

class App extends Component {
  render() {
    const container = {
      margin: "0 auto",
      maxWidth: "1024px"
    };
    return (
      <div style={container}>
        <Header />
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;

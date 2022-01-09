import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6}/>
      </div>
    );
  }
}

export default App;

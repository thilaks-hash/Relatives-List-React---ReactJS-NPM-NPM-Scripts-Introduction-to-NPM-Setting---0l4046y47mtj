import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          <li key="relativeListItem1">Aunt Rita</li>
          <li key="relativeListItem2">Uncle Sanjay</li>
          <li key="relativeListItem3">Cousin Priya</li>
          <li key="relativeListItem4">Grandma Geeta</li>
          <li key="relativeListItem5">Brother Rajesh</li>
          <li key="relativeListItem6">Sister Meena</li>
          <li key="relativeListItem7">Nephew Arjun</li>
          <li key="relativeListItem8">Niece Neha</li>
        </ol>
      </div>
    );
  }
}

export default App;

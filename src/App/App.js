import React, { Component } from "react";

import Hero from "../Hero";

import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Hero />
      </div>
    );
  }
}

export default App;

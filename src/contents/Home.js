import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/handa.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect
          className="typing"
          text={["Hi!, I am Handa, I am a frontend developer"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;

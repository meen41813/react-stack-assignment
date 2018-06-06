import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const h1Style = { color: "red" };

const formatName = user => user.firstName + " " + user.lastName;

const userA = {
  firstName: "Adam",
  lastName: "Smith"
};

const funcA = obj => {
  const newObj = Object.assign({}, obj);
  return newObj;
};

const RedBox = props => {
  const { color, ...rest } = props;
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: color
      }}
      {...rest}
    />
  );
};

class MultiColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      if (prevState.color === "red") {
        return {
          color: "green"
        };
      } else if (prevState.color === "green") {
        return {
          color: "blue"
        };
      } else {
        return {
          color: "red"
        };
      }
    });
  };

  render() {
    return <RedBox onClick={this.handleClick} color={this.state.color} />;
  }
}

class ControlledTextfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    // console.log('textfield change: ' + event.target.value)

    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <input
        style={{ border: "2px solid black" }}
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
      />
    );
  }
}

const App = () => (
  <div>
    {/*<h1 style={h1Style}>Hello {formatName(userA)}</h1>
    <RedBox color="red" />
    <RedBox color="green" />
    <RedBox color="blue" />
    <hr />
    <MultiColorBox />*/}
    x + y = 30 <br />
    x: <ControlledTextfield name="x" />
    <br />
    y: <ControlledTextfield name="y" />
  </div>
  // <div style={styles}>
  //   <Hello name="CodeSandbox" />
  //   <h2>Start editing to see some magic happen {'\u2728'}</h2>
  // </div>
);

render(<App />, document.getElementById("root"));
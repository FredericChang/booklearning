import React, { Component } from 'react';
import { ThemeButton } from "./ThemeButton"; 
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Ready",
            secondMessage: "7878",
            message2: "Ready",
            counter: 0,
            theme: "secondary",
        }
    }
    // handleEvent() {
    //     this.setState({message: "Clicked!"})
    // }//Uncaught TypeError: Cannot read property 'setState' of undefined
    // 12-4
    // handleEvent = ( event ) => {
    //   this.setState({message: `Event: ${event.type} `});
    //   console.log("Push");
    // }
    handleEvent = ( event ) => {
      if (event.type === "mousedown") {
        this.setState({ message: "Down"});
      } else {
        this.setState({ message: "Up"});
      }
    }
    handleEvent2 = (event) => {
      event.persist();
      this.setState({ counter: this.state.counter + 1},
          () => this.setState({ message2: `${event.type}: ${this.state.counter}`}));
    }
    handleEvent3 = (event, newTheme) => {
      event.persist();
      this.setState({
          counter: this.state.counter + 1,
          theme: newTheme
      }, () => this.setState({ message: `${event.type}: ${this.state.counter}`}));
    }
    toggleCheckBox = (event) => {
      if (this.state.counter === 0) {
          event.preventDefault();
      }
    }
    selectTheme = (newTheme) => {
      this.setState({
        theme: newTheme,
        message: `Theme: ${newTheme}`});
    }
    handleClick= (event, newTheme) => {
      console.log(`App: Type: ${event.type} `
          + `Target: ${event.target.tagName} `
          + `CurrentTarget: ${event.currentTarget.tagName}`);
      this.setState({
        counter: this.state.counter + 1,
        theme: newTheme
      }, () => this.setState({ message: `${event.type}: ${this.state.counter}`}));
    }
    render() {
        return  (
            <div className="m-2" onClick={ this.handleClick }>
                <div className="h4 bg-primary text-white text-center p-2">
                    { this.state.message }
                </div>
                <div className="h4 bg-primary text-white text-center p-2">
                    { this.state.secondMessage }
                </div>
                <div className="h4 bg-primary text-white text-center p-2">
                    { this.state.message2 }
                </div>
                <div className={`h4 bg-${this.state.theme}
                        text-white text-center p-2`}>
                    { this.state.message }
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"
                      onClick={ this.toggleCheckBox }/>
                  <label>This is a checkbox</label>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary"
                            onClick={ () => this.setState({ message: "Clicked!"})}
                    >Click Me</button>
                    <button className="btn btn-primary"
                            onClick={ () => this.setState({ secondMessage: "double Clicked!"})}
                    >Click Me</button>
                    <button className="btn btn-primary"
                            onMouseDown={  this.handleEvent }
                            onMouseUp={this.handleEvent}
                    >Click Me</button>
                    <button className="btn btn-primary"
                            onClick={ this.handleEvent2}
                    >Normal</button>
                    <button className="btn btn-danger m-1"
                            onClick={ (e) => this.handleEvent3(e, "primary")}
                    >Normal</button>
                    <button className="btn btn-danger m-1"
                            onClick={ (e) => this.handleEvent3(e, "danger")}
                    >Danger</button>
                    <div className="text-center" onClick={ this.handleClick }>
                      <ThemeButton theme="primary" callback={ this.selectTheme } />
                      <ThemeButton theme="danger" callback={ this.selectTheme } />
                    </div>
                </div>
            </div>
        )
    }
}
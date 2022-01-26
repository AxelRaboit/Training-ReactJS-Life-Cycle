import React, { Components } from 'react';
import './App.css';
import LifeCycle from './components/LifeCycle';

class App extends React.Component {
  
  state = {
    display: true
  }

  hideOrShow = () => {
    this.setState({
      display: !this.state.display
    })

    //Other possibility
    /* if(this.state.display) {
      this.setState({
        display: false
      })
    } else {
      this.setState({
        display: true
      })
    } */
  }

  render(){

    const showComponent = this.state.display
      ? (<LifeCycle nameFromApp='Remi'/>)
      : (<div></div>)
    ;

    return (
      <div className="App">
        { showComponent }
        <button onClick={this.hideOrShow}>Cliquer ici</button>
      </div>
    );

  }
  
}

export default App;

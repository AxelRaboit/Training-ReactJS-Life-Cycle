import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class LifeCycle extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      name: 'Axel',
      step: 1
    }

    console.log(`Etape ${this.state.step} : Je suis dans le constructor()`)
  }

  componentDidMount() {
    console.log(`Etape ${this.state.step} : Je suis dans le componentDidMount()`)
    this.setState({
      name: this.props.nameFromApp,
      step: this.state.step +1
    })

    console.log(`Etape ${this.state.step} : setState() a changé le state dans le componentDidMount()`)
  }

  componentDidUpdate(prevProps, prevState) {
    //Il ne faut absolument pas utiliser un setState à ce niveau là sous peine de boucle infini
    console.log(`Etape ${this.state.step} : Je suis dans le componentDidUpdate`)
    console.log(prevState);
    console.log(this.state);
  }
  
  componentWillUnmount() {
    console.log('Je suis dans le componentWillUnmount()');
  }


  render() {

    console.log(`Etape ${this.state.step} : Je suis dans le render()`)

    return (
      <div style={{border: 'solid red 1px', width: '500px', margin: '10px auto'}}>
        { console.log(`Etape ${this.state.step} : Mise à jour DOM`) }
        <p>Chargement: {this.state.step}</p>
        <p>Nom: {this.state.name}</p>
        <ChildComponent />
      </div>
    )
  }
}

export default LifeCycle;

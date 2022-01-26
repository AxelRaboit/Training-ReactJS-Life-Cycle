import React, { Component } from 'react';

class ChildComponent extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            
        }

        console.log('Je suis dans le constructor() Enfant');
    }

    componentDidMount() {
        console.log(`Je suis dans le componentDidMount() Enfant`)
      }
  
    render() {

        console.log('Je suis dans le render() Enfant');

    return (
        <div>
        { console.log('Mise à jour DOM dans le composant Enfant') }
            <p>Hello from ChildComponent</p>
        </div>
    )
  }
}

export default ChildComponent;

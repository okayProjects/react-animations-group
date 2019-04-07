import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modalIsOpen: false,
    showBlock: false
  }

  openModal = () => {
    this.setState(prevState => {
      return { modalIsOpen: prevState.modalIsOpen = true };
    });
  }
  closeModal = () => {
    this.setState(prevState => {
      return { modalIsOpen: prevState.modalIsOpen = false };
    });
  }

  showBlockHandler = () => {
    this.setState(prevState => {
      return { showBlock: !prevState.showBlock };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className='Button' onClick={this.showBlockHandler}>Toggle</button>
        <Transition in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit>
          {state => <div
            style={
              {
                width: 100,
                height: 100,
                backgroundColor: 'orange',
                margin: '20px auto',
                transition: 'opacity .3s ease-out',
                opacity: state === 'exited' ? 0 : 1
              }
            } />}

        </Transition>
        <br /><br />

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />


        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.openModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div >
    );
  }
}

export default App;

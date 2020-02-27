import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

// import { Button,InputGroup,DropdownButton,Dropdown,FormControl,SplitButton,ButtonGroup } from 'react-bootstrap';
// import { DropdownDivider } from 'react-bootstrap/Dropdown';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isActive : false,
    }
    // this.isActiveModal = this.isActiveModal.bind(this);
  }
  openNewIssue = () => {
    this.setState({
        isActive: !this.state.isActive,
        // activeItem: loc
    })
}
componentDidMount(){

}

closeIssue = () => {
    this.setState({
        isActive: false
    })
}

  
  render() {
    return(
      <div>
        <div>
          <select>
            <option value=''>Filter</option> 
            <option value = ''> 1</option>
            <option value=''>2</option>
          </select>
          <div>
            <input type='text' placeholder='search here...'/>
          </div>
          <select defaultValue="Label"> Label
            <option value = ''> 1</option>
            <option value=''>2</option>
          </select>
          <button onClick={this.openNewIssue}>New Issue</button>
        </div>
        <Modal isOpen={this.state.isActive}>
          My name is Akashdeep
          <div>
            <input type="text" placeholder="Title"></input>
          </div>
          <div>
              <textarea className="textar"></textarea>
          </div>
          <div>
          <button onClick={this.closeIssue}> Submit</button>
          <div>
          <select> Filter
            <option value = ''> 1</option>
            <option value=''>2</option>
          </select>
          </div>

          </div>
        </Modal>
        <div>
          msg space
        </div>
      </div>
    )
  }
}
export default App;
        
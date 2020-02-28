import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal';
import axios from 'axios';


class SearchBar extends Component{ 
  render(){
    return(
      <div>
        <input className="serinput" type='text' 
        onChange={(event)=>this.props.searchInfo(event.target.value)} placeholder='search here...'/>
        
      </div>
    )
  }
}
class AddNewIssue extends Component{
  constructor(props){
    super(props);
    this.state={
      message:'',
      type_of:'',
      type:[],
    }
    this.AddItem = this.AddItem.bind(this);
  }
 
  AddItem() {
    let message = this.state.message;
    let type_of = this.state.type_of
    this.props.descriptioninfo({type_of:type_of, description: message});
    this.setState({
      message:'',
      type_of: '',
      

    })
    
  }


  render(){
    return(
      <div>
           
          <div>
              <textarea style={{width:'710px',backgroundColor:'whitesmoke' }}
              onChange={(event)=>this.setState({message:event.target.value})} 
              className="textar" placeholder="Add Your description here"></textarea>
          </div>
          <div className="molabel">
          <button className="submitbtn" onClick={()=>this.AddItem()}> Submit</button>
          <div>
          <select className="lbmd" value={this.state.type_of} onChange={(event) => this.setState({ type_of: event.target.value })}>
            <option value="0">Add Tag</option>
            {this.props.type.map((item, index) => (
              
              <option key={index} value={item.name} >{item.name} </option>
            ))}
            
          </select>
          </div>

          </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isActive : false,
      title:'',
      descriptionList:[],
      type:[],
      description:'',
      type_of:'',
      searchItem:'',
      searchName:'',
    }
    
    this.refresh = this.refresh.bind(this);
    this.addIssue = this.addIssue.bind(this);
    this.searchMessage = this.searchMessage.bind(this);
    this.sortlabel = this.sortlabel.bind(this)
  }
  openNewIssue = () => {
    this.setState({
        isActive: !this.state.isActive,
        
    })
}

searchMessage(text) {
  console.log(text)
  this.setState({
      searchItem: text,
  })
}

sortlabel(text){
  console.log('label',text)
  this.setState({
    searchName:text
  })
}

refresh() {
  axios.get("http://127.0.0.1:8000/categories/")
    .then(res => {
      this.setState({
         type: res.data ,
        isActive:false,
      });
      console.log(res);
    });
  axios.get("http://127.0.0.1:8000/items/list/")
    .then(res => {
      this.setState({ descriptionList: res.data });
    });

  
}

addIssue(data)
  {
    console.log(data.id)
    const selectedCategory = this.state.type.filter(item => item.name == data.type_of)
    console.log('This is postable data',selectedCategory);

    axios.post("http://127.0.0.1:8000/items/create/",{type_of: selectedCategory[0].id,description:data.description}).then(res => {
      this.refresh();
    });

    
  }

componentDidMount(){
this.refresh();
}

closeIssue = () => {
    this.setState({
        isActive: false
    })
}

addNewTitle(){
  this.setState({
title:this.state.title
  })

}
  
  render() {
    return(
      
      <div>
        <div className="heading">
            GitHub Issues
        </div>
           
        
        <div>
          <div className="serdiv">
            
          <div>
            <SearchBar searchInfo={this.searchMessage} sortInfo={this.sortlabel}/>
          </div>
         
          <button className="lbtn" onClick={this.openNewIssue}>New Issue</button>
          </div>
      

              
          {
            
            this.state.descriptionList.filter(item=>
              { return  item.type_of.name.toLowerCase().includes(this.state.searchItem.toLowerCase())
                ||item.description.toLowerCase().includes(this.state.searchItem.toLocaleLowerCase())          
              })
              .map((item,index)=>{
              return(
              
              <div className="desbox" key={index}>
                  <div className="desbar">
                    <div ><input className="check" type="checkbox"/></div>
                    <div className="label">{item.type_of.name}</div>
                    <div className="des">{item.description}</div>
                  </div>
              </div>
              
              )}
          )
          }
           
        </div>
        
        
       
        <Modal isOpen={this.state.isActive}>
         <AddNewIssue descriptioninfo={this.addIssue} type={this.state.type} titleInfo={this.addNewTitle}/>
        </Modal>
        
          
      </div>
    )
  }
}
export default App;
        
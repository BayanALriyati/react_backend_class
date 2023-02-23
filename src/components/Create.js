import axios from "axios";
import {React ,Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Routes , Route} from 'react-router-dom';

class Create extends Component  {
  constructor(){
    super()
    this.state={
        name:'',
        email:'',
        password:'',
        role:'',
        // showAddForm:false

    }
  }

   /////handling change for input
   onInputChange=(event)=>{
    const {name,value}=event.target;
    


    this.setState({
      [name]:value
  })
  // console.log(name,"name",value,"value");
}
     ////handling submit for user input
     handleSubmit=(event)=>{
      event.preventDefault();
      let name=this.state.name;
      let email=this.state.email;
      let password=this.state.password;
      let role=this.state.role;

      // console.log(user_name,"user_name");
      // console.log(phone,"user_name");
      // console.log(address,"user_name");

          axios.post(`http://localhost/Backend-React/users/create.php?name=${name}&email=${email}&password=${password}&role=${role}`)
          window.location("/")
       
     }
  
  render(){
  return (
    <div className='container mt-5'>
     <Form onSubmit={this.handleSubmit}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" id="name" name="name" value={this.state.name} placeholder="Enter User Name" onChange={this.onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id="email" name="email" value={this.state.email} placeholder="Enter email" onChange={this.onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" id="role" name="role" value={this.state.role} placeholder="Enter role" onChange={this.onInputChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
 }
}

export default Create;

import {React ,Component} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class User extends Component{
    render(){


      return(
            <div className='container mt-5'>
              
        {this.props.table.map((data)=>{
        // {console.log(data.name,"gvhbjklmnjkm")}
        return(
      <Table striped bordered hover size="sm">
      <thead>
        <tr key={data.User_id}>
          <th>User Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
          <th>Delate</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>
          <td>{data.role}</td>
          <td><button onClick={()=>this.props.updateInfo(data.id)}>
                Update
          </button></td>
          <td><button onClick={()=>this.props.deleteItem(data.id)}>
                Delete
          </button></td>
        </tr>
        
      </tbody>
    </Table>)
    
        })}
            </div>
        )
    }


}
export default User;
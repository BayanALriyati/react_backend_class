import {React ,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class User extends Component{

    render(){

        return(
            <div className='container mt-5'>
              
            <Button href="create" className='mt-5 mb-5'>Add User</Button>
            
        
            </div>
        )
    }


}
export default User;
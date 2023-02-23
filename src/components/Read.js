import {react,Component} from 'react';
import axios from 'axios';
import User from "../components/User";
import UpData from "../components/UpDate";


export default class Read extends Component{

    constructor(){
        super()
        this.state={
          data:[],
          selectedInfo:{},
          showUpdateForm:false

        }}

    async componentDidMount(){
        // console.log("componentDidMount");
        const response=await axios.get('http://localhost/Backend-React/users/read.php');
        // console.log(response,"response");
        const item=response.data;
        // console.log(item,"item");
        this.setState({
            data:item
        })}
            
        // update Date
        updateInfo=async(idUser)=>{
            // console.log(idUser,"updateInfo");
           this.setState({
                showUpdateForm:true
            })
            let choosenData=this.state.data.find(indx=>{
                return indx.id== idUser
            })
            // console.log(choosenData,"choosenData id");
            this.setState({
                selectedInfo:choosenData,}) }
                /////////////////////////////// form update
              saveInfo=async(e)=>{
                e.preventDefault();
                console.log("hello");
                    let name=e.target.name.value
                    let email=e.target.email.value
                    let password=e.target.password.value
                    let role=e.target.role.value
                    let id= this.state.selectedInfo.id
                    // console.log(user_name,"user name"," phone:",phone,"address:",address," id:",id);

             let update=  await  axios.post(`http://localhost/Backend-React/users/update.php?name=${name}&email=${email}&password=${password}&role=${role}&id=${id}`)
             console.log(update,"update dataa");
             const response=await axios.get;
             this.setState({
               showUpdateForm:false,
                data:response.data
             })
              }  
            //   Delete item 
            deleteItem=async(idUser)=>{
                    // console.log(idUser,"idUser delete");
                    
            let delete_inf=    await axios.post(`http://localhost/Backend-React/users/delate.php?id=${idUser}`)
            console.log(delete_inf,"hhhhhhh");
            const response=await axios.get('http://localhost/Backend-React/users/read.php');
            this.setState({
                
               data:response.data
            })

            }

    render(){
        // console.log(this.state.data,"item");
        return(
            <>
             <User table={this.state.data} updateInfo={this.updateInfo} deleteItem={this.deleteItem}/>

             {this.state.showUpdateForm&& <UpData selectedInfo={this.state.selectedInfo} saveInfo={this.saveInfo}/>}
            </>
        )
    }
}
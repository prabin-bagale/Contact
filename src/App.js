import React from "react";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  state={
    contact:[
      {id:1,name:'prabin',phone:'9867240910',email:'prabinbagale08@gamil.com'},
      {id:2,name:'Aman',phone:'9803406029',email:'Amanbagale@gamil.com'},
      {id:3,name:'Basanta',phone:'9818537334',email:'Basanta55@gamil.com'},
    ]
  };
  handleDelete =(id)=>{
    let filterData = this.state.contact.filter(function(contact){
      return contact.id !== id;
    });
    this.setState({contact:filterData});
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState({contact:filterData});
        toast.success('Successuflly Deleted !!')
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  handleSubmitted = (formData) =>{
    console.log(formData);
    let insertData = {id:uuidv4(),...formData}
      console.log(insertData);
     this.setState({contact:[insertData,...this.state.contact]});
     toast.success('Data Inserted')
    
  };
  handleeditData = (editData)=>{
    let editContact = this.state.contact.map(function(contact){
      if(editData.id === contact.id){
        return editData;
      }
      return contact;
    })
   this.setState({contact:editContact})
  }
  render(){
    return(
      <div>
       <Navbar title="Contact Management System"/>
       <Form formData={this.handleSubmitted}/>
       {this.state.contact.map((contact) =>(
         <Contact contact={contact}  
         delete={this.handleDelete} 
         edit={this.handleeditData}
         key={contact.id}

         /> ))}
       <ToastContainer />
      </div>
    )
  }
}

export default App;
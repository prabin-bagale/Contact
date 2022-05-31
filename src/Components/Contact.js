import React from "react";
import { toast } from "react-toastify";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShowing:false,
            isEditing:false,
            name:this.props.contact.name,
            phone:this.props.contact.phone,
            email:this.props.contact.email,
            error:{}
        };
    }
    handleShowHide =() =>{
       this.setState({isShowing:!this.state.isShowing})
    }
    handleDelete = () =>{
        this.props.delete(this.props.contact.id);
    }
    handleEditing = () =>{
        this.setState({isEditing:true})
    }
    handlesubmit =(e) =>{
        e.preventDefault();
       
       const {name,email,phone}=this.state
       if(name === ""){
             return this.setState({error:{name:'Please enter your Name'}})
         }else if(email === ""){
             return this.setState({error:{email:'Please enter your Email Address'}});
        }else if(phone === ""){
             return this.setState({error:{phone:'Please enter your Phone Number'}});
        }
        let editedData ={
            name,email,phone,id:this.props.contact.id
        };
        this.props.edit(editedData);
        this.setState({error:{},isEditing:false});
        toast.success('Edit successfully');
    };
    handleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    };
    render(){
        let cls= this.state.isShowing ? 'fa-solid fa-circle-arrow-up mx-3'
         : 'fa-solid fa-circle-arrow-down mx-3';
         const {error}=this.state;
         if(this.state.isEditing){
             return(
                <div className="card w-50  mt-5 mx-auto">
                <div className="card-header" style={{background:'maroon',color:'#fff',fontWeight:'bold'}}>
                    <h1>Edit Contact form</h1>
               </div>
                <div className="card-body">
                    <form action="" onSubmit={this.handlesubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Name"  
                            onChange={this.handleChange}
                            value={this.state.name}                                
                            name='name'
                             className="form-control"/>
                            <span style={{color:'red'}}>{error.name}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder="email" 
                            onChange={this.handleChange}
                            value={this.state.email}
                            name='email'
                            className="form-control"/>
                            <span style={{color:'red'}}>{error.email}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone</label>
                            <input type="Number" placeholder="Phone" 
                            onChange={this.handleChange}
                            value={this.state.phone}
                            name='phone'
                           className="form-control"/>
                             <span style={{color:'red'}}>{error.phone}</span>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-danger">Save</button>
                        </div>
                       
                    </form>
                </div>
            </div>  
             )
         }else{
            return(
                <div>
                   <div className="card w-50 mt-5 mx-auto">
                       <div className="card-header" style={{background:'green',color:'#fff',fontWeight:'bold'}}>
                           <h1><i className={cls} onClick={this.handleShowHide}></i>{this.props.contact.name}
                          <div className="float-end">
                          <i className="fa-solid fa-trash-can me-3" onClick={this.handleDelete}></i>
                           <i className="fa-solid fa-user-pen" onClick={this.handleEditing}></i>
                          </div>
                           </h1>
                       </div>
                      {this.state.isShowing ? ( <div className="card-body">
                           <ul className="list-group">
                               <li className="list-group-item">{this.props.contact.email}</li>
                               <li className="list-group-item">{this.props.contact.phone}</li>
                           </ul>
                       </div>):null}
                   </div>
                </div>
            );
         }
       
    }
}
export default Contact;
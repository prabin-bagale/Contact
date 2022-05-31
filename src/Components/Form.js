import React from "react";

 class Form extends React.Component{
     constructor(){
        super();
        this.state ={
           name:'',
            phone:'',
             email:'',
             error:{

             }
         }
     }
    handleChange =(e)=>{
         this.setState({[e.target.name]:e.target.value})
        };
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
        this.props.formData(this.state);
        this.setState({error:{},name:'',email:'',phone:''});
     };
     render(){
         const {error}=this.state;
         return(
                 <div className="card w-50  mt-5 mx-auto">
                     <div className="card-header" style={{background:'maroon',color:'#fff',fontWeight:'bold'}}>
                         <h1>Contact form</h1>
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
                             <button type="submit" className="btn btn-danger">Submit</button>
                             </div>
                            
                         </form>
                     </div>
                 </div>  
         )
     }
 };
 export default Form;
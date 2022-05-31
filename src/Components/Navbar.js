import React from "react";

class Navbar extends React.Component{
    render(){
        console.log(this.props);
        return(
 <nav className="navbar navbar-expand-lg" style={{background:'green'}}>
    <a className="navbar-brand" href="#" style={{color:'#fff'}}>
   {this.props.title}
    </a>
   
  
</nav>
        )
    }
}
export default Navbar;
import React, { Component } from "react";

class Buttons extends Component{
  constructor(props) {
    super(props);
    
  }
  render(){
    return(
        <div>
        
        <div style={{display: "flex", flexWrap:"wrap", marginBottom: 10}}>
            <div style={{flex:1}}>
            <button  style={{ width:"100%"}} className="btn btn-primary btn-lg" id="submit" value="Submit" onClick={this.props.click}>Inschrijven</button> </div>
          {/* <div style={{flex:1}}><a  className="btn btn-primary btn-lg"  style={{float: 'right', paddingLeft:60, paddingRight:60}}>Mail PDF</a></div> */}
          </div>   
        </div>
      
    );
  }
}

export default Buttons;
import React from 'react';
const Email =React.createContext();
class MyProvider extends React.Component{
  constructor(props){
    super(props);
  this.state={
    name:"tess"
  }
}
  render(){
    return(
      <Email.Provider 
       value="test">{this.props.children}</Email.Provider>
    )
  }
}export default MyProvider
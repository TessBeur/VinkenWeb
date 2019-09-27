import React from 'react';

export default class Search extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      text:'',
      displayedVogels:[],  
      displayedTotal:[],
      klasnr:"",
      data: null,
      vogel:"", 
      isToggleOn:false,

    };
    this.getInitialState = this.getInitialState.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.handleClick = this.handleClick.bind(this);
              
 
  }

componentDidMount(){
  fetch('https://script.google.com/macros/s/AKfycbziMa9zT5VVweqTdFZFpoe8DbUqUUXqYnCPA6_Q3sq9WvEUVqI/exec')
      .then(response => response.json())
      .then(data => this.setState({ data:data.vogelindex }));
      
    }

  getInitialState () {
    return {
      displayedVogels:this.state.data
    };
  }
      
  handleClick() {
    this.setState(function(prevState) {
        return {isToggleOn: !prevState.isToggleOn};
    });
}

  searchHandler (event) {
    let searcjQery = event.target.value.toLowerCase(),
        displayedVogels = this.state.data.filter((el) => {
          let searchValue = el.Omschrijving.toLowerCase();
         
          return searchValue.indexOf(searcjQery) !== -1;
        })
    this.setState({
      displayedVogels: displayedVogels,
      text:searcjQery,
      displayedTotal:this.state.data
    })

  }
  
  suggestionSelected(value){
    this.setState(()=>({
      text:value.Omschrijving,
      displayedVogels:[],
      id:value.Klasse_nr     
    
    }))
    this.props.onUpdate([{klas:value.Klasse_nr, om:value.Omschrijving}]);
    this.setState({klasnr:value.Klasse_nr, vogel:value.Omschrijving, isToggleOn:false});
  }
    
  renderSuggestions(elem){
    if (this.state.text=='' && this.state.displayedVogels.length >0 ){
      this.setState(()=>({
            displayedVogels:[],
               }))
      return null;
    }else if(this.state.isToggleOn==true && this.state.text==''){
        
       return(
        <div style={{position: 'absolute', backgroundColor: "#ffff", width: 320,}}>
          <table className="table table-striped table-hover active"style={{ border: "1px solid grey", marginBottom: 0 }} >
            <tbody style={{height:200,overflowY:"scroll",display:"block"}}>
            {this.state.data.map((el)=><tr key={el.id} onClick={()=>this.suggestionSelected(el)}>{el.Omschrijving}</tr>)}
            </tbody>
          </table>
        </div>
       )} else if (this.state.text){
      return(
        <div style={{position: 'absolute', backgroundColor: "#ffff", width: 320,}}>
        <table className="table table-striped table-hover active"style={{ border: "1px solid grey", marginBottom: 0 }} >
           <tbody>{/*style={{height:200,overflowY:"auto",display:"block"}} */}
          {this.state.displayedVogels.map((el)=><tr key={el.id} onClick={()=>this.suggestionSelected(el)}>{el.Omschrijving}</tr>)}
          </tbody>
        </table>
        </div>
      )
       }
  }

  render () {
    const {text} =this.state;
    return (
      <td> 
        
         <td> <input className="form-control" value={text} type="text" onChange={this.searchHandler} placeholder="Zoek..." name="soort" id="2"/></td>
         <td><button className="btn btn-default" style={{paddingLeft:0, paddingRight:0}} onClick={this.handleClick}>˅</button></td>
          {this.renderSuggestions()}
          
          
      </td>
    )
  }
}

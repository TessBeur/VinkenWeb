import React from 'react';

export default class Search extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      text:'',
      displayedVogels:[],  
      klasnr:"",
      data: null,
      vogel:""

    };
    this.getInitialState = this.getInitialState.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

componentDidMount(){
  fetch('https://script.google.com/macros/s/AKfycbz3ZkC81OfuuBKPu00YEsUiLi11Qw-HH2nS123U5Wz0wiCMPmHO/exec')
      .then(response => response.json())
      .then(data => this.setState({ data }));
      
    }

  getInitialState () {
    return {
      displayedVogels:this.state.data.vogelindex  
    };
  }
  searchHandler (event) {
    let searcjQery = event.target.value.toLowerCase(),
        displayedVogels = this.state.data.vogelindex.filter((el) => {
          let searchValue = el.Omschrijving.toLowerCase();
          return searchValue.indexOf(searcjQery) !== -1;
        })
    this.setState({
      displayedVogels: displayedVogels,
      text:searcjQery
    })
  }
  suggestionSelected(value){
    this.setState(()=>({
      text:value.Omschrijving,
      displayedVogels:[],
      id:value.Klasse_nr
    
    }))
    this.props.onUpdate([{klas:value.Klasse_nr, om:value.Omschrijving}]);
    this.setState({klasnr:value.Klasse_nr, vogel:value.Omschrijving});
  }
  renderSuggestions(){
    if (this.state.text=='' && this.state.displayedVogels.length >0 ){
      this.setState(()=>({
            displayedVogels:[],
               }))
      return null;
          
    }
      return(
        <div style={{position: 'absolute', backgroundColor: "#ffff", width: 320 }}>
        <table className="table table-striped table-hover active"style={{ border: "1px solid grey", marginBottom: 0}} >
          <tbody>
          {this.state.displayedVogels.map((el)=><tr key={el.Klasse_nr} onClick={()=>this.suggestionSelected(el)}>{el.Omschrijving}</tr>)}
          </tbody>
        </table>
        </div>
      )
  }

  render () {
    const {text} =this.state;
    return (
      <td>
          <input className="form-control" value={text} type="text" onChange={this.searchHandler} placeholder="Zoek..." name="soort"/>
          {this.renderSuggestions()}
      </td>
    )
  }
}

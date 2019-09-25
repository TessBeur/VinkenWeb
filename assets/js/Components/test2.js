import React from 'react';
import '../../css/app.css';

export default class Search extends React.Component{
  constructor(props){
    super(props);
    this.vogels=[
      {
        id: 1,
        name: 'Natarajah',
       
      },
      {
        id: 2,
        name: 'Krot',
       
      },
      {
        id: 3,
        name: 'Kna',
       
      }

    ]

    this.state={
      suggestions:[],
      text:'',
      displayedVogels:[],  
      kweeknr:"",
      data: null,

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
   // console.log(this.state.data);
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
    //console.log(value.Klasse_nr)
    this.props.onUpdate(value.Klasse_nr);
    this.setState({kweeknr:value.Klasse_nr});
  }
  renderSuggestions(){
    if (this.state.text=='' && this.state.displayedVogels.length >0 ){
      this.setState(()=>({
            displayedVogels:[],
               }))
      return null;
          
    }
      return(
       
      
        <div style={{position: 'absolute', backgroundColor: "#ffff", width: 150 }}>
        <table className="table table-striped table-hover"style={{ border: "1px solid grey", marginBottom: 0}} >
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


// // import React, { Component } from "react";

// // class ToDo extends Component{
// //   constructor(props) {
// //     super(props);

// //     this.state={
// //       email:[{
// //         from:"beheer@nederlandsezebravinkenclub.nl",
// //         to:"",
// //         name:"",
// //         subject:" Uw aanmelding | NZC Show ",
// //         message:"test"
// //       }]
// //     }
    
// //   }
// //   render(){
// //     // testen als beiden from goed ingevuld zijn
   

// //     return(
      
// //       <fieldset>
// //       <button className="btn btn-primary btn-lg" id="submit" value="Submit" onClick={this.props.click}>Inschijven</button>
// //       </fieldset>
      
// //     );
// //   }
// // }

// // export default ToDo;

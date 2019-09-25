import React from 'react';
import ReactDOM from 'react-dom';



let vogels = [
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
    name: 'Mandala',
   
  },
  {
    id: 4,
    name: 'Shiva',
   },
  {
    id: 5,
    name: 'Ashvattha',
    }
]

let Vogels = React.createClass({
   
  render () {
    return (
      <li>
        <span>{this.props.name}</span>
        <span className="phone">{this.props.phone}</span>
      </li>     
    )
  }
})

let VogelsList = React.createClass({
  getInitialState () {
    return {
      displayedVogels:vogels      
    };
  },
  searchHandler (event) {
    let searcjQery = event.target.value.toLowerCase(),
        displayedVogels = vogels.filter((el) => {
          let searchValue = el.name.toLowerCase();
          return searchValue.indexOf(searcjQery) !== -1;
        })
    this.setState({
      displayedVogels: displayedVogels,
      text:searcjQery
    })
  },
  suggestionSelected(value){
    this.setState(()=>({
      text:value,
      displayedVogels:[],
    
    }))
   
  },
  renderSuggestions(){
    let Vogels = this.state.displayedVogels;
    const lengte= vogels.length;
    
    if (Vogels.length ===lengte){
      return null;
    }  
      return(

        <div style={{position: 'absolute', backgroundColor: "#ffff", width: 150 }}>
        <table className="table table-hover"style={{ border: "1px solid grey", marginBottom: 0}} >
          <tbody>
            {Vogels.map((el)=><tr onClick={()=>this.suggestionSelected(el.name)}>{el.name}</tr>)}
          </tbody>
        </table>
        </div>
      )
  },
  render () {
    console.log(this.state.text)
    const {text} =this.state;
    return (
      <div className="holder">
        <input  value={text} type="text" className="search" onChange={this.searchHandler}/>
        <ul>
          {this.renderSuggestions()}
                    
        </ul>
      </div>     
    )
  }
});

ReactDOM.render(<VogelsList/>,document.getElementById('id'))




// import React from 'react';
// import '../../css/app.css';

// export default class Search extends React.Component{
//   constructor(props){
//     super(props);
//     this.items=[
//       // {nr:1, soort:"vink1"},
//       // {nr:2, soort:"vink2"},
//       // {nr:3, soort:"vink3"},
//       "vink1",
//       "vink2",
//       "vink3",
//     ]

//     this.state={
//       suggestions:[],
//       text:'',
//     };
//     this.OnTextChange = this.OnTextChange.bind(this);
//   }

//   OnTextChange(e){
//     //const {items}=this.props    
//     const value = e.target.value;
//     let suggestions=[];
//     if(value.length>0){
//       const regex=new RegExp(`^${value}`,'i');
//       //console.log(regex.test)
//       suggestions=this.items.sort().filter(v => regex.test(v));
//       this.setState(()=>({suggestions}));
//     }
//     this.setState(()=>({suggestions, text:value}));
//   }

//   suggestionSelected(value){
//     this.setState(()=>({
//       text:value,
//       suggestions: [],
//     }))
//   }

//   renderSuggestions(){
//     const {suggestions}=this.state;
//     if (suggestions.length === 0){
//       return null;
//     }
//     return(
//       <div style={{position: 'absolute', backgroundColor: "#ffff", width: 150 }}>
//       <table className="table table-hover"style={{ border: "1px solid grey", marginBottom: 0}} >
//         <tbody>
//           {suggestions.map((item)=><tr onClick={()=>this.suggestionSelected(item)}>{item}</tr>)}
//         </tbody>
//       </table>
//       </div>
      
//     )

//   }
//   render(){
//     const {text} =this.state;
//     console.log(this.items[0].soort)
//     return(
      
//         <div>
//         <input  className="form-control" value={text} type="text" onChange={this.OnTextChange} placeholder="Zoek..."/>
//         {this.renderSuggestions()}
//       </div>
     
//     )
//   }
// }


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

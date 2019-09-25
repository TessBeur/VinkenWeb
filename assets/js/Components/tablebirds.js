import React from 'react';
import Total from './total';
import ProductTable from './producttable';
import Form from './form';



class TableBirds extends React.Component {

    constructor(props) {
      super(props);
      
      this.state={filterText: ""}
      this.state.TotalAll=[
        {
        astamAant:"0",
        bstelAant: "0",
        enkAant:"0",
        bedrag:"0",
        astamTel:"0",
        bstelTel:"0",
        totalVogel:"0"
        }];
    
      this.state.products = [
        {
            id:"1",
            klasnmb:'xxxxxxx',
            soort:"",
            openklas:false,
            astam:"0",
            bstel:"0",
            enk:"0",
            bedrag:"0"
        }
      ];
    }
    handleRowDel(product) {
      var index = this.state.products.indexOf(product);
      this.state.products.splice(index, 1);
      this.setState(this.state.products);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var product = {
        id: id,
        klasnmb: "xxxxxxx",
        soort:"",
        openklas:false,
        astam:"0",
        bstel:"0",
        enk:"0",
        bedrag:"0"
      }
      this.state.products.push(product);
      this.setState(this.state.products);
  
    }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        name: evt.target.name,
        value: evt.target.value
      };
      
  var products = this.state.products.slice();
    var newProducts = products.map(function(product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value; //pakken van het item dat verander is 
        }
      }
      

      return product;
    });
      this.setState({products:newProducts});
      
    const Totalastam = (this.state.products.reduce((astam, product) => astam + parseInt(product.astam,0), 0));
    const Totalbstel = this.state.products.reduce((bstel, product) => bstel + parseInt(product.bstel, 0), 0);
    const Totalenk = this.state.products.reduce((enk, product) => enk + parseInt(product.enk, 0), 0);
    const Totalbedrag = this.state.products.reduce((bedrag, product) => bedrag + parseFloat(product.bedrag, 0), 0);
         this.setState({TotalAll:[{
            astamAant:Totalastam,
            bstelAant: Totalbstel,
            enkAant:Totalenk,
            bedrag:Totalbedrag,
            astamTel:Totalastam*4,
            bstelTel:Totalbstel*2,
            totalVogel:Totalastam*4+Totalbstel*2+Totalenk
            }]
        });
    }
        
    
    render() {
      // alle vogels staan in this.state.products
      return (
        <div>
          <div style={{display: "flex", flexWrap:"wrap"}}>
            <div style={{flex:1,marginRight:10}}>
          <Total astam={this.state.TotalAll[0].astamAant} bstel={this.state.TotalAll[0].bstelAant} enk={this.state.TotalAll[0].enkAant} astamTel={this.state.TotalAll[0].astamTel} bstelTel={this.state.TotalAll[0].bstelTel} bedrag={this.state.TotalAll[0].bedrag} totalVogel={this.state.TotalAll[0].totalVogel}/>  </div>
          <div style={{flex:1}}><Form total={this.state.TotalAll}/></div>
          </div>   
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/> 
            
        </div>
      );
  
    }
  
  }

  export default TableBirds;
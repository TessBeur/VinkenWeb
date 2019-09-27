import React from 'react';
import Total from './total';
import ProductTable from './producttable';
import Form from './form';
import Footer from './footer';




class TableBirds extends React.Component {

    constructor(props) {
      super(props);
      
      this.state={filterText: "", 
                checkBedrag:false, 
                checkSoort:false, 
                datum:'',
                email:'',
                emaildatum:''}
      this.state.TotalAll=[
        {
        astamAant:"0",
        bstelAant: "0",
        enkAant:"0",
        bedrag:"0",
        astamTel:"0",
        bstelTel:"0",
        totalVogel:"0",
        bedragIngevuld:false
        }];
    
      this.state.products = [
        {
            id:"1",
            klasnmb:'xxxxxxx',
            soort:"",
            openklas:"nee",
            astam:"0",
            bstel:"0",
            enk:"0",
            bedrag:"0"
        }
      ];
      this.Email= this.Email.bind(this);
      this.Date= this.Date.bind(this);
    
    }
    handleRowDel(product) {
      var index = this.state.products.indexOf(product);
      this.state.products.splice(index, 1);
      this.setState(this.state.products);
    };
 
    handleAddEvent(evt) {
      var checkBedrag=[];
      var checkBedrag= this.state.products.find(item=>item.bedrag =="0");
      var checkSoort=[];
      var checkSoort= this.state.products.find(item=>item.soort =="");
    if (!checkBedrag && !checkSoort){   
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
    }else{
      if(checkBedrag){
      alert("Vul verzekerinsbedrag in.")
      } else if(checkSoort){
        alert("Kies een soort.")
      }
    }
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
      
      var checkBedrag={};
      var checkBedrag= this.state.products.find(item=>item.bedrag =="0");
      if(!checkBedrag){

        this.setState({checkBedrag:true})
        //alles bedragen ingevuld
      }else{
        this.setState({checkBedrag:false})
      }
      // const checkBedrag = (this.state.products.reduce((astam, product)));
    const bedragIng=this.state.checkBedrag;
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
            totalVogel:Totalastam*4+Totalbstel*2+Totalenk,
            bedragIngevuld:bedragIng
            }]
        });
    }
Email(val){
  this.setState({email:val})
}
Date(val){
  this.setState({emaildatum:val})
}

    
    render() {
      
      // alle vogels staan in this.state.products
      //console.log(this.state.products)
      return (
       
        <div>
          <div style={{display: "flex", flexWrap:"wrap"}}>
            <div style={{flex:1,marginRight:10}}>
          <Total astam={this.state.TotalAll[0].astamAant} bstel={this.state.TotalAll[0].bstelAant} enk={this.state.TotalAll[0].enkAant} astamTel={this.state.TotalAll[0].astamTel} bstelTel={this.state.TotalAll[0].bstelTel} bedrag={this.state.TotalAll[0].bedrag} totalVogel={this.state.TotalAll[0].totalVogel}/>  </div>
          <div style={{flex:1}}><Form total={this.state.TotalAll} email={this.state.email} date={this.state.emaildatum} /></div>
          </div> 
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} /> 
          <Footer setEmail={this.Email} setDate={this.Date} />
        </div>
        
      );
  
    }
  
  }

  export default TableBirds;
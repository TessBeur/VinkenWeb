
import React from 'react';
import Buttons from './button';

class Form extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {},
        send: false,
        button:true,
      }
    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if((!fields["name"]) || (!fields["name"].split(' ').join('').length) ){
        formIsValid = false;
        errors["name"] = "Vergeten in te vullen";
      }
  
      if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z ]+$/)){
          formIsValid = false;
          errors["name"] = "Ongeldig";
        }      	
      }
  
      //Email
      if((!fields["email"]) || (!fields["email"].split(' ').join('').length)){
        formIsValid = false;
        errors["email"] = "Vergeten in te vullen";
      }
  
      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Vul een geldig email in";
        }
      }
  
      //Adres
      if((!fields["adres"]) || (!fields["adres"].split(' ').join('').length)){
        formIsValid = false;
        errors["adres"] = "Vergeten in te vullen";
      }
    
        //Postcode
        if((!fields["postcode"])||(!fields["postcode"].split(' ').join('').length)) { 
            formIsValid = false;
            errors["postcode"] = "Vergeten in te vullen";
        }

        if(typeof fields["postcode"] !== "undefined"){
            if((!fields["postcode"].match(/^[\w.%+-]+/)) || (fields["postcode"].length < 6 )){
              formIsValid = false;
              errors["postcode"] = "Vul een geldig postcode in";
            }      	
          }



        //Woonplaats
        if((!fields["woonplaats"]) || (!fields["woonplaats"].split(' ').join('').length)){
            formIsValid = false;
            errors["woonplaats"] = "Vergeten in te vullen";
        }

        //Telefoon
        if((!fields["telefoon"]) || (!fields["telefoon"].split(' ').join('').length)){
            formIsValid = false;
            errors["telefoon"] = "Vergeten in te vullen";
        }

        if(typeof fields["telefoon"] !== "undefined"){
            if((!fields["telefoon"].match(/^[0-9 +]+$/)) || (fields["telefoon"].length < 10 )){
              formIsValid = false;
              errors["telefoon"] = "Vul een geldig telefoonnummer in";
            }      	
          }

        //Kweeknr.
        if((!fields["kweeknr"] && !fields["kweeknr2"]) || (!fields["kweeknr"].split(' ').join('').length)){
            formIsValid = false;
            errors["kweeknr"] = "Vergeten in te vullen";
        }else if((!fields["kweeknr"]) || (!fields["kweeknr"].split(' ').join('').length)){
          formIsValid = false;
            errors["kweeknr"] = "Vergeten in te vullen";
        }
  
      this.setState({errors: errors});
      return formIsValid;
    }
  
    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation() && this.props.total[0].bedrag != "0" && this.props.total[0].totalVogel != "0"){
        
        this.setState({send: true});
        alert("Inschrijving compleet u ontvangt binnen enkele minuten een bevestigings email");
     
      }else{
        alert("Formulier heeft errors.")
        this.setState({send: false});
        if(this.props.total[0].bedrag == "0"){
          alert("Vul het bedrag in")
        }if(this.props.total[0].totalVogel == "0"){
          alert("Voer het aantal vogels in")
        }
      }
  
    }
  
    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }
  
    render(){
      return (
      
        <div>
        <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Persoonlijke gegevens</h3>
        </div>
        <div className="panel-body">    

          <form name="contactform" className="contactform">  {/* onSubmit= {this.contactSubmit.bind(this)} */}
            <div>
              <fieldset>
              <table>
                <tbody>
                    <tr>
                        <td>Naam*</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" ref="name" type="text" size="30" placeholder="Naam" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["name"]}</h6></span></td>
                    </tr>

                    <tr>
                        <td>Email*</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["email"]}</h6></span></td>
                    </tr>

                    <tr>
                        <td>Adres*</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" refs="adres" type="text" size="30" placeholder="Adres" onChange={this.handleChange.bind(this, "adres")} value={this.state.fields["adres"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["adres"]}</h6></span></td>
                    </tr>

                    <tr>
                        <td>Postcode*</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" refs="postcode" type="text" size="30" placeholder="Postcode" onChange={this.handleChange.bind(this, "postcode")} value={this.state.fields["postcode"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["postcode"]}</h6></span></td>
                    </tr>

                    <tr>
                        <td>Woonplaats*</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" refs="woonplaats" type="text" size="30" placeholder="Woonplaats" onChange={this.handleChange.bind(this, "woonplaats")} value={this.state.fields["woonplaats"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["woonplaats"]}</h6></span></td>
                    </tr>

                    <tr>
                        <td>Telefoon*</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" refs="telefoon" type="text" size="30" placeholder="Telefoon" onChange={this.handleChange.bind(this, "telefoon")} value={this.state.fields["telefoon"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["telefoon"]}</h6></span></td>
                    </tr>

                    <tr>
                        <td>Kweeknr.*</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" refs="kweeknr" type="text" size="30" placeholder="Kweeknr" onChange={this.handleChange.bind(this, "kweeknr")} value={this.state.fields["kweeknr"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["kweeknr"]}</h6></span></td>
                    </tr>
                    <tr>
                        <td>Kweeknr.</td>
                        <td>:</td>
                        <td><input className="form-control input-sm" refs="kweeknr2" type="text" size="30" placeholder="Kweeknr optioneel" onChange={this.handleChange.bind(this, "kweeknr2")} value={this.state.fields["kweeknr2"]}/></td>
                        <td><span className="text-danger"><h6>{this.state.errors["kweeknr2"]}</h6></span></td>
                    </tr>

                </tbody>
               </table>
              </fieldset>
            </div>
            <div className="col-md-12">
            </div>
          </form>
         
           
        </div>
        </div>
          <Buttons click={this.contactSubmit.bind(this)} send={this.state.send} total={this.props.total}/> 

        </div>
      )
    }
  }
  
 export default Form;
  
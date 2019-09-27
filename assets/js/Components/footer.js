import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          day: new Date().getDate(),
          month: new Date().getMonth()+1,
          year: new Date().getFullYear(),
        };
        this.handleEmail= this.handleEmail.bind(this);
        this.handleDate= this.handleDate.bind(this);
      }
 handleEmail(e){
     var email=e.target.value;
     this.props.setEmail(email)
  }
  handleDate(e){ 
    var date=e.target.value;
    this.props.setDate(date)
 }

    render() {
        return (
            <div>
                <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title"> </h3>
                </div>
                <div className="panel-body">
                <br></br>
               <div style={{display: "flex", flexWrap:"wrap"}}>
               <div style={{flex:1}}>Datum inschrijving:<br/><br/>
               <br/>Handtekening (email):<br/><br/>
                    Datum handtekening:</div>
                <div style={{flex:1}}><strong>{this.state.day}/{this.state.month}/{this.state.year}</strong><br/><br/>
                <br/><input className="form-control input-sm" style={{width:"90%"}} name="email" placeholder="Email..." onChange={this.handleEmail}></input>
                
                <br/><input className="form-control input-sm" style={{width:"90%"}} type="date" placeholder="Datum handtekening..." onChange={this.handleDate}></input></div>
                <div style={{flex:1}}>Ondergetekende verklaart dat de hiervoor vermelde inschrijving:
                <br/> zijn/haar eigendom is en 
                <br/>   - hij/zij inschrijft onder de voor deze tentoonstelling
                <br/>  geldende bepalingen. (Commissie bepalingen zie beneden).</div>
                </div>
                </div>
                </div>
                

               <div className="alert alert-dismissible alert-success">
               <h4><strong>De TenToonstellingscommissie wil extra aandacht vragen voor het volgende:</strong><br></br></h4>
                Door ondertekening van dit formulier verklaart inzender dat de hierboven vermelde vogel(s) uit de orde Psittaciformes komen:<br></br>
                - uit een bedrijf / locatie / kwekerij waar de laatste 60 dagen <strong>géén</strong> Psittacosis (Chlamydophila psittaci) is vastgesteld, en dat zijn<br></br>
                - niet in contact zijn geweest met vogels uit een bedrijf waar de laatste 60 dagen Psittacosis (Chlamydophila psitaci) is vastgesteld.
                
                </div>   
                                 
            </div>

        );
    }
}

export default Footer;




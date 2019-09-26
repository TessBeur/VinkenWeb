import React from 'react';

const email=React.createContext();

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          day: new Date().getDate(),
          month: new Date().getMonth()+1,
          year: new Date().getFullYear()
        };
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
               <div style={{flex:1}}>Datum:<br></br><br></br>
               <br></br>Email:</div>
                <div style={{flex:1}}>{this.state.day}/{this.state.month}/{this.state.year}<br></br><br></br>
                <br></br>{this.props.email}</div>
                <div style={{flex:1}}>Ondergetekende verklaart dat de hiervoor vermelde inschrijving:
                <br></br> zijn/haar eigendom is en 
                <br></br>   - hij/zij inschrijft onder de voor deze tentoonstelling
                <br></br>  geldende bepalingen. (Commissie bepalingen zie beneden).</div>
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




import React, { Component } from "react";


class Email extends Component{
  constructor(props) {
    super(props);

    this.state={
      email=[{
        from:"beheer@nederlandsezebravinkenclub.nl",
        to:"",
        name:"",
        subject:" Uw aanmelding | NZC Show ",
        message:"test"
      }]
    }
    
  }

  renderTableData() {
    return this.props.products.map((product,index) => {
       const { id, kweeknr, soort, bedrag } = product //destructuring
       return (
          <tr key={id}>
             <td>{kweeknr}</td>
             <td>{soort}</td>
             <td>{bedrag}</td>
          </tr>
       )
    })
 }



  render(){   
    return(
      
      <div>
          <h2>Uw aanmelding</h2>
          <p>
          <h6>U bent aangemeld voor: NZC Show 2019</h6>
          Hieronder vindt u de gegevens welke wij van u hebben ontvangen | Below you will ﬁnd the data we received from you | Dies sind die Daten, die wir von Ihnen erhalten haben
          </p>
        <h6>
          <table>
              <tbody>
                    <tr>
                        <td>Kweeknummer:</td>
                        <td>{this.props.field.kweeknr}</td>
                    </tr>
                    <tr>
                        <td>Naam:</td>
                        <td>{this.props.field.name}</td>
                    </tr>
                    <tr>
                        <td>Adres:</td>
                        <td>{this.props.field.adres}</td>
                    </tr>
                    <tr>
                        <td>Postcode:</td>
                        <td>{this.props.field.postcode}</td>
                    </tr>
                    <tr>
                        <td>Woonplaats:</td>
                        <td>{this.props.field.woonplaats}</td>
                    </tr>
                    <tr>
                        <td>Tel:</td>
                        <td>{this.props.field.telefoon}</td>
                    </tr>
                    <tr>
                        <td>Iban:</td>
                        <td>TESTTT</td>
                    </tr>
              </tbody>
          </table>
          </h6>

          <h3>
              Inzendingen
          </h3>
          <table>
               <tbody>
                  {this.renderTableData()}
               </tbody>
          </table>

          <h3>
              Totalen
          </h3>
          <table>
              <tr>
                  <td>Totaal aantal showvogels</td>
                  <td> NOG BEREKENEN</td>
              </tr>
              <tr>
                  <td>Totaal verzekering</td>
                  <td>€{this.props.total.bedrag}</td>
              </tr>
          </table>
          <h3>
              Kosten deelnamen
          </h3>
          <table>
              <tr>
                  <td>Kosten showvogels</td>
                  <td>€27,00</td>
              </tr>
              <tr>
                  <td>Verplichte catalogus</td>
                  <td>€ 3,00</td>
              </tr>
              <tr>
                  <td></td>
                  <td>------------</td>
              </tr>
              <tr>
                  <td><strong>Totaalkosten</strong></td>
                  <td>€30,00</td>
              </tr>
          </table>
             
          <p>
          Gelijktijdig met het inschrijfformulier dient u de totaal kosten van de inzendingen over te maken op : 
          IBAN: NL86INGB0000552245 
          t.n.v. Nederlandse Zebravinken Club, Hasselt 
          o.v.v. Inschrijfgeld NZC Show 2019 
          
          *Gelieve geen contante betalingen bij het inbrengen. N.B. betalingen in contanten zijn niet toegestaan. 
          
          TT Administratie 
          K. de Rooij Vaartweg 52 
          4731 RA Oudenbosch 
          E - ttadmin@nederlandsezebravinkenclub.nl 
          T - 0165-506284 b.g.g. 06-17730660
          </p>
      </div>
      
    );
  }
}
    

export default Email;

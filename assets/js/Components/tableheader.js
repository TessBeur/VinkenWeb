import React, { Component } from "react";

class Tableheader extends Component{
  render(){
    return(
      
        <thead style={{backgroundColor: 'rgba(24,188,156,0.2)'}} >
        <tr>
        <th>KLASNUMMER: <br></br>xxxxxxx</th>
        <th>SOORT EN/OF KLEURSLAG VAN DE VOGEL<br></br>
            (Voor één groep c.q. soort vogel 1 regel gebruiken !)</th>
        <th>OPEN KLAS ?</th>
        <th>A-stam</th>
        <th>B-stel</th>
        <th>Enk.</th>
        <th>Verzekerings bedrag €</th>
        <th>Niet invullen Kooinr.</th>
        <th></th>
        </tr>
    </thead>
      
    );
  }
}

export default Tableheader;
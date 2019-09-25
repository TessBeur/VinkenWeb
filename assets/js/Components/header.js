import React from 'react';


class Hoofd extends React.Component {
 

    render() {
        return (
            <div>
                <div style={{display: "flex", flexWrap:"wrap"}}>
                    <img src="http://www.nbvv.nl/pers/download/Logo%20NBVV.jpg" alt="logo NBVV" style={{flex:1, marginTop: 20, aspectRatio: 3/2, height:150}}/>
                <div style={{flex:2}}><h1>Inschrijfformulier OTT v.v. Elsene</h1></div> 
                <p>Voor inbrengen en afhalen vogels, zie inbreng- afhaallijst welke u wordt toegezonden </p>
                 </div>         
            </div>

        );
    }
}
export default Hoofd;


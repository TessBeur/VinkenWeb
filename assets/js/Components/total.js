import React from 'react';

class Total extends React.Component {
    constructor(props) {
        super(props);       
      }; 

    render() {
        return (
            <div>
            <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Totaal overzicht</h3>
            </div>
            <div className="panel-body" style={{paddingBottom:50, paddingTop:50}}>
                <table className="table table-striped table-hover" >
                    <thead>
                        <tr style={{borderBottomStyle: "solid" }}>     
                        <th colSpan="2"></th>            
                        <th>Aant</th>
                        <th>Tel</th>
                        <th><strong>Totaal aantal vogels</strong></th>
                        </tr>  
                    </thead>
                    <tbody>
                        <tr>
                        <td rowSpan="4" style={{textAlign:'center',fontWeight:'bold',verticalAlign: 'middle', borderRightStyle: "solid" }}>WEDSTRIJD</td>
                        </tr>
                        <tr>
                            <td>Aantal A-stam(mmen)</td>
                            <td>{this.props.astam}</td>
                            <td>{this.props.astamTel}</td>
                            <td rowSpan="3" style={{textAlign:'center',fontWeight:'bold',verticalAlign: 'middle' }}><h2>{this.props.totalVogel}</h2></td>
                        </tr>
                        <tr>
                            <td>Aantal B-stel(len)</td>
                            <td>{this.props.bstel}</td>
                            <td>{this.props.bstelTel}</td>
                        </tr>
                        <tr>
                            <td>Aantal enkeling(en)</td>
                            <td>{this.props.enk}</td>
                            <td>{this.props.enk}</td>
                        </tr>
                       
                        <tr style={{borderTopStyle: "solid" }}>
                            <td style={{textAlign:'center',fontWeight:'bold',verticalAlign: 'middle'  }}>VERZEKERD BEDRAG</td>
                            <td>Totaal (verzekerd)bedrag</td>
                            <td colSpan="3" style={{textAlign:'center',fontWeight:'bold' }}><h2>€{this.props.bedrag}</h2></td>
                        </tr>
                    </tbody>
                </table>
                      
            </div>
          </div>
          </div>

        );
    }
}
export default Total;
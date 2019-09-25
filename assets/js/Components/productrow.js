
import React from 'react';
import Search from './zoek';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            klasnr: "",
            vogel:"",
            vogels:this.props.product
        }
        this.onUpdate = this.onUpdate.bind(this);
        this.onProductTableUpdate= this.props.onProductTableUpdate.bind(this);
      }
     
    onDelEvent() {
      this.props.onDelEvent(this.props.product);
  
    }
    onUpdate(val){
        this.setState({
            klasnr: val[0].klas,
            vogel: val[0].om,
            
        })
        this.props.product.soort=val[0].om;
        this.props.product.klasnmb=val[0].klas;
      };

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
      return (
        
        <tr className="form-group">
            <td>
                <input className="form-control" name="klasnmb" value={this.state.klasnr}  type="text" placeholder="xxxxxxx" disabled={true} id={this.props.product.id} onChange={this.props.onProductTableUpdate} />
            </td>
           <td>
                <Search  onUpdate={this.onUpdate}/>
                </td>
            <td>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="openklas" onChange={this.props.onProductTableUpdate} id={this.props.product.id}/>
                    </label>
                </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="input-group">
                            <input name="astam" type="number"  min="0" className="form-control" id={this.props.product.id} placeholder="0" onChange={this.props.onProductTableUpdate}/>
                        </div>
                    </div>
                </td>
            <td>
                        <div className="form-group">
                            <div className="input-group">
                                <input name="bstel" type="number" min="0" className="form-control" id={this.props.product.id} placeholder="0" onChange={this.props.onProductTableUpdate}/>
                            </div>
                        </div>
                        </td>
                        <td>
                        <div className="form-group">
                            <div className="input-group">
                                <input name="enk" type="number" min="0" className="form-control" id={this.props.product.id} placeholder="0" onChange={this.props.onProductTableUpdate}/>
                            </div>
                        </div>
                        </td>
                        <td>
                        <div className="form-group">
                            <div className="input-group">
                                <input name="bedrag" type="number" className="form-control" id={this.props.product.id}  min="0"  placeholder="00,00" onChange={this.props.onProductTableUpdate}/>
                            </div>
                            </div>
                        </td>
                        <td></td>
  
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="Delete" className="btn btn-default"/>
          </td>
        </tr>
      
      );
  
    }
  
  }
  export default ProductRow

import React from 'react';
import Tableheader from './tableheader';
import Tableexample from './tableexample';
import ProductRow from './productrow';

class ProductTable extends React.Component {
  
  render() {
      
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.soort.indexOf(filterText) === -1) {
        return;
      }
      return (
          <ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
   
  });
    return (
      
      <div>
      <table className="table table-striped table-hover panel panel-success" >
                 
              <Tableheader/>

          <tbody>
         
              <Tableexample/>
          
            {product}
            <tr style={{borderTopStyle: "solid" }}>
                <td><button type="button" onClick={this.props.onRowAdd} className="btn btn-success">Nieuwe vogel toevoegen</button>
                </td><td colSpan="8"></td>
            </tr>

          </tbody>
          
        </table>
       
      </div>
    );

  }

}


export default ProductTable;
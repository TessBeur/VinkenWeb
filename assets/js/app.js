
import React from 'react';
import ReactDOM from 'react-dom';
import Hoofd from './Components/header';
import Footer from './Components/footer';
import Tablebirds from './Components/tablebirds';


class App extends React.Component {
  
    render() {
        return (
            <div className="container">
              <div className="jumbotron">
              <Hoofd/>
               <Tablebirds/>
               <Footer/>                
              </div>
              <div>
             
            </div>
            </div>
           
             

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


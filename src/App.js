
import React, {Component} from 'react';

import Home from './Comp/Home';
import User from './Comp/User'
import Post from './Comp/Post';
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component{


  render(){
    return (

      <div className="App" style={{backgroundColor: '#f8fafaf2'}}>
         

          <Router>                   
            <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/user/:userId/:userName' component={(props) => <User {...props} />}  />
                        <Route exact path='/post/:postId/:userId' component={(props) => <Post {...props}/>} />

                    </Switch>
            </Router> 

            
      </div>
    )
  }
}
 

export default App;

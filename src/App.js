import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Header from './Header';
import Form from './Form';
import LeaderBoard from './LeaderBoard';
import Play from './Play';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       profiles:[]
    }
    
  }
  async componentDidMount(){
   const profiles = await(await fetch("http://localhost:3005/profiles")).json()
   this.setState( {profiles})
   
  }
 
  addName(name){
    const newname = {
      id: Math.random(), 
      name,
      score: 0 
    }
    this.setState({  
      profiles: [...this.state.profiles, newname]
    });
  }

  render() {
    return (
        <Router>
              <div className="container-fluid bg-dark">
                <Header />
                <Switch>
                <Route exact path="/" render={props => (
                    <Form addName={this.addName.bind(this)}/>
                )} />
               
                <Route path="/play" component={Play}/>
                <Route path="/board" render={ props =>
                     <LeaderBoard profiles ={this.state.profiles}/>
                }/>
                </Switch>
              </div>  
        </Router>
    );
  }
}

export default App;

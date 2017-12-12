import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <div>Header</div>;
const Footer = () => <div>Footer</div>;
const Landing = () => <div>Landing</div>;
const About = () => <div>About</div>;
const DivisionList = () => <div>Division List</div>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/division/list' component={DivisionList} />
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

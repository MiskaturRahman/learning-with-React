import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component/Navbar/Navigation';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Courses from './Component/Courses/Courses';



function App() {
  return (

    <div className="App">
      <Navigation></Navigation>
      <Jumbotron></Jumbotron>
      <Courses></Courses>

    </div>
  );
}

export default App;

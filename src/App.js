

import { Route, Router, Switch } from 'react-router';
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Course from './components/Course';
//import Courses from './components/Courses';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Services from './components/Services';



function App() {
  const switchers = [...document.querySelectorAll('.switcher')]

  switchers.forEach(item => {
    item.addEventListener('click', function() {
      switchers.forEach(item => item.parentElement.classList.remove('is-active'))
      this.parentElement.classList.add('is-active')
    })
  })
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/aboutus" component={Aboutus}></Route>
        <Route exact path="/courses" component={Course}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/pricing" component={Pricing}></Route>
        <Route exact path="/gallery" component={Gallery}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
      <Footer/>
      
    </>
  );
}

export default App;

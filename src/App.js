import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/navbar/navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Reports from './components/reports/Reports';
import Login from './components/login/Login';
import './App.css';


const App = () => {

    const [isNavBarHidden, setIsNavBarHidden] = useState(false)

    return ( 
        <>
            <Router >
               { isNavBarHidden ? null :  <NavBar /> }
                <Switch>
                    <Route path='/' render={() => <Login setNavbar={setIsNavBarHidden} />}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/reports' component={Reports}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
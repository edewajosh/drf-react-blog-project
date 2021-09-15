import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Reports from './components/reports/Reports';
import Login from './components/login/Login';


const App = () => {
    return ( 
        <>
            <Router >
                <NavBar/>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/reports' component={Reports}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
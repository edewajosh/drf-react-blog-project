import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Tangazo from "./components/Tangazo/Tangazo"
import Dashboard from "./components/Dashboard/Dashboard"

const App = () => {
    return(
        <Router>    
            <NavBar/>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/tangazo"><Tangazo/></Route>
                <Route path="/dashboard"><Dashboard/></Route>
            </Switch>
        </Router>
    )
}

export default App
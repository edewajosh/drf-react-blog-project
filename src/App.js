import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Tangazo from "./components/Tangazo/Tangazo"
import Editor from "./components/Editor/Editor"

const App = () => {
    return(
        <Router>    
            <NavBar/>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/tangazo"><Tangazo/></Route>
                <Route path="/post-article"><Editor/></Route>
                {/* <Route path="/post-article/category"><ArticleCategory/></Route>
                <Route path="/post-article/article"><Article/></Route> */}
            </Switch>
        </Router>
    )
}

export default App
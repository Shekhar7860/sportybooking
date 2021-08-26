import React from 'react'
import Home from './components/Home'


import { BrowserRouter as Router,Switch } from 'react-router-dom'


const App = () => {
    return (
        <div>
             <Router>
            <Switch>
                <Home path="/" exact/>
             </Switch>
             </Router>
        </div>
    )
}

export default App
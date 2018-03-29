import React from 'react'
import { GlobalProvider } from './store/index'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from './view/Home'
import { About } from './view/About'
import { Name } from './view/Name'

class App extends React.Component {
  render() {
    return (
      <GlobalProvider>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/number">About</Link>
              </li>
              <li>
                <Link to="/update">update name</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route exact path="/number" component={About} />
            <Route exact path="/update" component={Name} />
          </div>
        </Router>
      </GlobalProvider>
    )
  }
}

export default App;

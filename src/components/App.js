import React, { Component } from 'react'
import HealthContainer from '../containers/HealthContainer'
import NavBar from './NavBar'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment red inverted">
          <h2>HypochondReact</h2>
        </div>

        <HealthContainer />

      </div>
    )
  }
}

export default App

// <NavBar title="HypochondReact" style='inverse'/>

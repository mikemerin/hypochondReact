import React, { Component } from 'react'
import SymptomsList from '../components/SymptomsList'
import Search from '../components/Search'
import TreatmentsAdapter from '../adapters'
import BodypartsContainer from './BodypartsContainer'
import SymptomsContainer from './SymptomsContainer'
import TreatmentsContainer from './TreatmentsContainer'

class HealthContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      symptoms: [
                
                  ]
    }

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    TreatmentsAdapter.all()
      .then(data => this.setState({ symptoms: data}) )
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {

    return (
      <div className="row">
        <div id="bodyparts" className="col-sm-3">
          <BodypartsContainer />
        </div>
        <div id="symptoms" className="col-sm-3">
          <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
          <SymptomsList symptoms={this.state.symptoms} searchTerm={this.state.searchTerm} />
        </div>
        <div id="treatments" className="col-sm-6">
          <TreatmentsContainer />
        </div>
      </div>
    )
  }
}

export default HealthContainer

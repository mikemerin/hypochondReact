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
                  {id: 1,
                   symptom: "Hiccups",
                   treatment_name: "Scare Yourself",
                   treatment_description: "Hire someone from internet to stalk you all day and jump out to surprise you while you are alone and vulnerable. The fear will cause the hiccups to disappear",
                   bodypart: "Head",
                   upvotes: 0,
                   downvotes: 0 }
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
          "Bodypart Column"
        </div>
        <div id="symptoms" className="col-sm-3">
          <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
          <SymptomsList symptoms={this.state.symptoms} searchTerm={this.state.searchTerm} />
        </div>
        <div id="treatments" className="col-sm-6">
          "Treatment Column"
        </div>
      </div>
    )
  }
}

export default HealthContainer

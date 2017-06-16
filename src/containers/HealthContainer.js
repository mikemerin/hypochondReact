import React, { Component } from 'react'
import SymptomsList from '../components/SymptomsList'
import Search from '../components/Search'
import BodypartsContainer from './BodypartsContainer'
import SymptomsContainer from './SymptomsContainer'
import TreatmentsContainer from './TreatmentsContainer'

class HealthContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      treatments: [],
      symptoms: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.setBodyPart = this.setBodyPart.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/treatments').then( res => res.json() ).then(data => this.setState({ treatments: data}) )
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  setBodyPart(event){
    let filteredList = this.state.treatments.filter( t => {
      return t.bodypart === event.target.value
    })
    this.setState({ symptoms: filteredList })

  }


  render() {
    console.log(this.state.treatments.length)
    return (
      <div className="row">
        <div id="bodyparts" className="col-sm-3">
          <BodypartsContainer setBodyPart={this.setBodyPart}/>
        </div>
        <div id="treatments" className="col-sm-3">
          <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
          <SymptomsList treatments={this.state.treatments} searchTerm={this.state.searchTerm} />
        </div>
        <div id="treatments" className="col-sm-6">
          <TreatmentsContainer />
        </div>
      </div>
    )
  }
}

export default HealthContainer

import React, { Component } from 'react'
import SymptomsAdapter from '../adapters'
import SymptomsList from '../components/SymptomsList'
import Search from '../components/Search'

class SymptomsContainer extends Component {

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
    SymptomsAdapter.all()
      .then(data => this.setState({ symptoms: data}) )
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.props.searchTerm} handleChange={this.handleChange} />
        <SymptomsList symptoms={this.props.symptoms} searchTerm={this.props.searchTerm} />
      </div>
    )
  }
}

export default SymptomsContainer

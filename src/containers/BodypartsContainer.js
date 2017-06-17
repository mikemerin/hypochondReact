import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const bodyparts = ["Chest","Head","Legs","Upper Limbs","Stomach/Pelvis"]

export default class BodypartsContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedBodyPart: null
    }

  }

  render() {
    return (
      <div>
        <ol className="list-unstyled">
          { bodyparts.map((part, index) => <li key={index}><button onClick={this.props}>{part}</button></li>) }
        </ol>
      </div>
    )
  }

}

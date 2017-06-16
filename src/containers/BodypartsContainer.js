import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const bodyparts = ["Chest","Head","Legs","Upper Limbs","Stomach/Pelvis"]

export default class BodypartsContainer extends Component {

  constructor() {
    super()

    this.state = {
      selectedBodyPart: null
    }

  }

  render() {
    return (
      <div>
        <ol className="list-unstyled">
          { bodyparts.map((part, index) => <li key={index}>{part}</li>) }
        </ol>
      </div>
    )
  }

}

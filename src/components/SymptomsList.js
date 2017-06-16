import React from 'react'
import { Link, Route } from 'react-router-dom'

export default function SymptomsList(props) {

  return (
    <div>
      <p></p>
      <h2>Symptom List</h2>
      <table id="transactions-list" className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Name</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Treatment</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Bodypart</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Upvotes</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Downvotes</h3>
            </th>
          </tr>

          {props.symptoms.map( symptom => {

               if (symptom.treatment_name.toLowerCase().match(props.searchTerm.toLowerCase())) {
                return (
                  <tr key={symptom.id}>
                    <td>{symptom.symptom}</td>
                    <td>{symptom.treatment_name}</td>
                    <td>{symptom.treatment_description}</td>
                    <td>{symptom.bodypart}</td>
                    <td>{symptom.upvotes}</td>
                    <td>{symptom.downvotes}</td>
                  </tr>
                )

            }
          } )}

        </tbody>
      </table>
    </div>
  )
}

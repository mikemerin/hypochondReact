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

          {props.treatments.map( treatment => {

               if (treatment.treatment_name.toLowerCase().match(props.searchTerm.toLowerCase())) {
                return (
                  <tr key={treatment.id}>
                    <td>{treatment.symptom}</td>
                    <td>{treatment.treatment_name}</td>
                    <td>{treatment.treatment_description}</td>
                    <td>{treatment.bodypart}</td>
                    <td>{treatment.upvotes}</td>
                    <td>{treatment.downvotes}</td>
                  </tr>
                )

            }
          } )}

        </tbody>
      </table>
    </div>
  )
}

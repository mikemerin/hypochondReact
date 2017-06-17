import React from 'react'
import { Link } from 'react-router-dom'

export default function TreatmentDetail({treatment, deleteTreatment}){
  if (!treatment) {
    return null
  }
  //console.log(treatment)
  return(
    <div>
      <h2>{treatment.treatment_name}</h2>
      <p>{treatment.treatment_description}</p>
      <p>Upvotes: {treatment.upvotes} Downvotes: {treatment.downvotes}</p>
      <button onClick={() => deleteTreatment(treatment.id) }>Delete This Treatment</button>
      <Link to={`/${treatment.id}/edit`}>Edit This Treatment</Link>
    </div>
  )
}

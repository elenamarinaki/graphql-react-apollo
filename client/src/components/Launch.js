import React from "react"
import { gql } from "graphql-tag"
import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import classNames from "classnames"

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

export const Launch = () => {
  let { flight_number } = useParams()
  flight_number = parseInt(flight_number)
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  })
  // log
  console.log(loading, error, data)

  console.log("PARAMS is: ", flight_number)

  const {
    mission_name,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data?.launch

  if (loading) return <h4>Loading...</h4>
  if (error) console.error(error)

  return (
    <div>
      <h2 className='display-4 my-3'>
        <span className='text-dark'>Mission: </span>
        {mission_name}
      </h2>
      <h4 className='mb-3'>Launch Details</h4>
      <ul className='list-group'>
        <li className='list-group-item'>Flight Number: {flight_number}</li>
      </ul>
    </div>
  )
}

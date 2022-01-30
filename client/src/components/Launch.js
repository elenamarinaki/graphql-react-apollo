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
  const { loading, error, data } = useQuery(LAUNCH_QUERY)
  console.log(loading, error, data)

  let { flight_number } = useParams()
  console.log("PARAMS is: ", flight_number)

  return (
    <div>
      <h2>Launch</h2>
    </div>
  )
}

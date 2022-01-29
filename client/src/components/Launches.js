import React from "react"
import { gql } from "graphql-tag"
import { useQuery } from "@apollo/client"

import { LaunchItem } from "./LaunchItem"

import "./Launches.css"

const LAUNCHES_QUERY = gql`
  query LaunchQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY)
  console.log(loading, error, data)

  if (loading) return <h4>Loading...</h4>
  if (error) console.error(error)

  return (
    <>
      <h1 className='display-4 m-3 launches-h1 text-primary'>LAUNCHES 🚀</h1>
      <div>
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </>
  )
}

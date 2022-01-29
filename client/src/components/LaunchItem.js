import React from "react"

export const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <div className='card card-body m-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h5>
            Mission: <span className='text-warning'>{mission_name}</span>
          </h5>
          <p>Date: {launch_date_local}</p>
        </div>
        <div className='col-md-3'>
          <button className='btn btn-info'>Launch Details</button>
        </div>
      </div>
    </div>
  )
}

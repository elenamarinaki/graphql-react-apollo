import React from "react"
import classNames from "classnames"
import Moment from "react-moment"
import { Link } from "react-router-dom"

export const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <div className='card card-body m-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h5>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {mission_name}
            </span>
          </h5>
          <p>
            Date: <Moment format='YYYY-MM-DD HH:mm'>{launch_date_local}</Moment>
          </p>
        </div>
        <div className='col-md-3'>
          <Link to={`/launch/${flight_number}`}>
            <button className='btn btn-outline-info'>Launch Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

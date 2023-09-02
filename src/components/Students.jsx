import React from 'react'
import propTypes from 'prop-types'

const Students = (props) => {
  return (
    <div>
    <p>{props.name}</p>
    <p>{props.age}</p>
    </div>
  )
}
Students.propTypes = {
  name : propTypes.string,
  age  : propTypes.number
}

export default Students

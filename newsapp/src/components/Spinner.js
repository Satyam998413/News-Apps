import React, { Component } from 'react'
import loading from '../loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
          <img src={loading} alt="Loading"  width="40px"/>
      </div>
    )
  }
}

export default spinner
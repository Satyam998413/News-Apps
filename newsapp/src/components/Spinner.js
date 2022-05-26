import React from 'react'
import loading from '../loading.gif'

// export class spinner extends Component
const spinner=(props)=> {
  // render() {
    return (
      <div className='text-center my-3'>
          <img src={loading} alt="Loading"  width="40px"/>
      </div>
    )
  }
// }

export default spinner
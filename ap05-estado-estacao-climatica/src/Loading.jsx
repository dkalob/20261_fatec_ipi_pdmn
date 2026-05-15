import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center border rounded p-3'>
        <div
            style={{width: '3rem', height: '3rem'}}
            className="spinner-border text-primary">
        </div>
    </div>
  )
}

export default Loading

import React from 'react'
import CircularProgressBar from '@/components/own/circularProgress'

const page = () => {
  return (
    <div>
<div className="stats  bg-primary text-primary-content m-5 p-5">
  
  <div className="stat">
    <div className="stat-title">Account balance</div>
    <div className="stat-value">$89,400</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">Add funds</button>
    </div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Current balance</div>
    <div className="stat-value">$89,400</div>
    <div className="stat-actions">
      <button className="btn btn-sm">Withdrawal</button> 
      <button className="btn btn-sm">deposit</button>
    </div>
  </div>
  
</div>

    </div>
  )
}

export default page
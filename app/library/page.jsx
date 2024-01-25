import React from 'react';

const LibraryPage = () => {
  return (
    <library>
      <div className="stats shadow flex max-w-3xl">

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/></svg>
          </div>
          <div className="stat-title">Total Documents</div>
          <div className="stat-value text-primary">80.2K</div>
          <div className="stat-desc">5% more than last month</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title">Documents Viewed</div>
          <div className="stat-value text-secondary">8.8K</div>
          <div className="stat-desc">20% more than last month</div>
        </div>
        
        <div className="stat">
          <div className="stat-value">94%</div>
          <div className="stat-title">User Satisfaction</div>
          <div className="stat-desc text-secondary">31 monthly reviews</div>
        </div>
        
      </div>

    </library>
  )
}

export default LibraryPage;
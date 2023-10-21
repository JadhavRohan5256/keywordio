import React from 'react'
import './Dashbord.css'
import AdInsights from './components/adinsights/AdInsights'
import AdInsightsGraph from './components/adinsightsgraph/AdInsightsGraph'

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
        <div className='dashboard'>
            <AdInsights />
            <AdInsightsGraph />
        </div>
    </div>
  )
}

export default Dashboard
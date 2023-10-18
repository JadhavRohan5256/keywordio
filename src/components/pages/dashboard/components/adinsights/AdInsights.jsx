import React, { useState } from 'react'
import { useEffect } from 'react'
import './AdInsights.css'
import Loader from '../../loader/Loader';

function AdInsights() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchedData = [
      {
        'id': 1,
        'compaigns': 'Costmetics',
        'clicks': 712,
        'cost': 4272,
        'conversions': 8,
        'revenue': 16568,
      },
      {
        'id': 2,
        'compaigns': 'Costmetics',
        'clicks': 712,
        'cost': 4272,
        'conversions': 8,
        'revenue': 16568,
      },
      {
        'id': 3,
        'compaigns': 'Costmetics',
        'clicks': 712,
        'cost': 4272,
        'conversions': 8,
        'revenue': 16568,
      },
      {
        'id': 4,
        'compaigns': 'Costmetics',
        'clicks': 712,
        'cost': 4272,
        'conversions': 8,
        'revenue': 16568,
      },
      {
        'id': 5,
        'compaigns': 'Costmetics',
        'clicks': 712,
        'cost': 4272,
        'conversions': 8,
        'revenue': 16568,
      },
      {
        'id': 6,
        'compaigns': 'Costmetics',
        'clicks': 712,
        'cost': 4272,
        'conversions': 8,
        'revenue': 16568,
      },
    ]

    let temp = {
      'compaigns': 0,
      'clicks': 0,
      'cost': 0,
      'conversions': 0,
      'revenue': 0,
    }

    fetchedData.forEach((row) => {
      temp['compaigns'] += row['compaigns'];
      temp['clicks'] += row['clicks'];
      temp['cost'] += row['cost'];
      temp['conversions'] += row['conversions'];
      temp['revenue'] += row['revenue'];
    })

    setTimeout(() => {
      setLoading(false);
      setData(fetchedData);
      setTotal(temp);
    }, 2000)

  }, [])

  return (
    <div className='adinsights-wrapper'>
      {
        !loading ?
          <div className='adinsights'>
            <div className='adinsights-top'>
              <p>Ad Insights</p>
              <span>?</span>
            </div>
            <table className='table-wrapper'>
              <thead>
                <tr>
                  <th>
                    <span>Compaigns</span>
                  </th>
                  <th>
                    <span>Clicks</span>
                  </th>
                  <th>
                    <span>Cost</span>
                  </th>
                  <th>
                    <span>Conversions</span>
                  </th>
                  <th>
                    <span>Revenue</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  data &&
                  data.map((row) => {
                    return (
                      <tr key={row.id}>
                        <td>{row.compaigns}</td>
                        <td>{row.clicks}</td>
                        <td>USD {row.cost}</td>
                        <td>{row.conversions}</td>
                        <td>USD {row.revenue}</td>
                      </tr>
                    )
                  })
                }
                {
                  data
                    ? <tr>
                      <td>Total</td>
                      <td>{total.clicks}</td>
                      <td>USD {total.cost}</td>
                      <td>{total.conversions}</td>
                      <td>USD {total.revenue}</td>
                    </tr>
                    : <tr className='not-found'>
                      <td colSpan="5">No Data Found</td>
                    </tr>
                }
              </tbody>
            </table>
          </div>
          :
          <div className='loader-wrapper'>
            <Loader
              size={48}
            />
          </div>
      }
    </div>
  )
}

export default AdInsights;
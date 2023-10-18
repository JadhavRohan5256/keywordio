import React, { useState } from 'react'
import { useEffect } from 'react'
import './AdInsights.css'
import Loader from '../../../../components/loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function AdInsights() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({});
  const [loading, setLoading] = useState(false);
  const [sorActive, setSortActive] = useState({ column: '', flag: true })

  useEffect(() => {
    setLoading(true);
    const fetchedData = [
      {
        'id': 1,
        'compaigns': 'Costmetics',
        'clicks': 713,
        'cost': 998,
        'conversions': 8,
        'revenue': 16568,
      },
      {
        'id': 2,
        'compaigns': 'Facewash',
        'clicks': 711,
        'cost': 9993,
        'conversions': 5,
        'revenue': 4323,
      },
      {
        'id': 3,
        'compaigns': 'Serums',
        'clicks': 719,
        'cost': 5325,
        'conversions': 2,
        'revenue': 3423,
      },
      {
        'id': 4,
        'compaigns': 'Shampoos',
        'clicks': 723,
        'cost': 332,
        'conversions': 1,
        'revenue': 32,
      },
      {
        'id': 5,
        'compaigns': 'Facewash2',
        'clicks': 253,
        'cost': 3435,
        'conversions': 5,
        'revenue': 23434,
      },
      {
        'id': 6,
        'compaigns': 'Costmetics',
        'clicks': 712,
        'cost': 838,
        'conversions': 3,
        'revenue': 34344,
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


  // sorting particular columns table based on accending or decending order
  const sortHandler = (column, flag) => {
    let sortedData = data.sort((a, b) => {
      const prop_a = a[column];
      const prop_b = b[column];
      if (flag) {
        return prop_a < prop_b ? 1 : -1;
      }
      else {
        return prop_a > prop_b ? 1 : -1;
      }
    });


    setData(sortedData)
    setSortActive({ column: column, flag: flag });
  }


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
                    <span>
                      <FontAwesomeIcon
                        onClick={() => sortHandler('compaigns', true)}
                        icon={faChevronUp}
                        style={sorActive.column === 'compaigns' && sorActive.flag && { opacity: 1 }}
                      />
                      <FontAwesomeIcon
                        onClick={() => sortHandler('compaigns', false)}
                        icon={faChevronDown}
                        style={sorActive.column === 'compaigns' && !sorActive.flag && { opacity: 1 }}
                      />
                    </span>
                  </th>
                  <th>
                    <span>Clicks</span>
                    <span>
                      <FontAwesomeIcon
                        onClick={() => sortHandler('clicks', true)}
                        icon={faChevronUp}
                        style={sorActive.column === 'clicks' && sorActive.flag && { opacity: 1 }}
                      />
                      <FontAwesomeIcon
                        onClick={() => sortHandler('clicks', false)}
                        icon={faChevronDown}
                        style={sorActive.column === 'clicks' && !sorActive.flag && { opacity: 1 }}
                      />
                    </span>
                  </th>
                  <th>
                    <span>Cost</span>
                    <span>
                      <FontAwesomeIcon
                        onClick={() => sortHandler('cost', true)}
                        icon={faChevronUp}
                        style={sorActive.column === 'cost' && sorActive.flag && { opacity: 1 }}
                      />
                      <FontAwesomeIcon
                        onClick={() => sortHandler('cost', false)}
                        icon={faChevronDown}
                        style={sorActive.column === 'cost' && !sorActive.flag && { opacity: 1 }}
                      />
                    </span>
                  </th>
                  <th>
                    <span>Conversions</span>
                    <span>
                      <FontAwesomeIcon
                        onClick={() => sortHandler('conversions', true)}
                        icon={faChevronUp}
                        style={sorActive.column === 'conversions' && sorActive.flag && { opacity: 1 }}
                      />
                      <FontAwesomeIcon
                        onClick={() => sortHandler('conversions', false)}
                        icon={faChevronDown}
                        style={sorActive.column === 'conversions' && !sorActive.flag && { opacity: 1 }}
                      />
                    </span>
                  </th>
                  <th>
                    <span>Revenue</span>
                    <span>
                      <FontAwesomeIcon
                        onClick={() => sortHandler('revenue', true)}
                        icon={faChevronUp}
                        style={sorActive.column === 'revenue' && sorActive.flag && { opacity: 1 }}
                      />
                      <FontAwesomeIcon
                        onClick={() => sortHandler('revenue', false)}
                        icon={faChevronDown}
                        style={sorActive.column === 'revenue' && !sorActive.flag && { opacity: 1 }}
                      />
                    </span>
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
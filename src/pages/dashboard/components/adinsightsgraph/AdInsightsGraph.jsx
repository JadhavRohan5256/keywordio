/* eslint-disable react-hooks/exhaustive-deps */
// import statements
import React, { useEffect, useState } from 'react'
import './AdInsightsGraph.css'
import 'chart.js/auto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faPieChart, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
Chart.register([ArcElement]);

// code logic start 
const color = ['#FF6F00', '#0288D1', '#121212'];
const options = {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        }
    },
}

function AdInsightsGraph() {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('clicks');
    const [chartData, setChartData] = useState(null);
    const [total, setTotal] = useState({});
    const [toggle, setToggle] = useState(false)
    const [sorActive, setSortActive] = useState({ column: '', flag: true })

    // initialization method 
    useEffect(() => {
        let fetchedData = [
            {
                'id': 1,
                'group': 'Male',
                'clicks': 348,
                'cost': 12528,
                'conversions': 48,
                'revenue': 72178,
            },
            {
                'id': 2,
                'group': 'Female',
                'clicks': 692,
                'cost': 24918,
                'conversions': 35,
                'revenue': 5175,
            },
            {
                'id': 3,
                'group': 'Unknow',
                'clicks': 105,
                'cost': 3943,
                'conversions': 0,
                'revenue': 4489,
            },
        ];

        let temp = {
            'clicks': 0,
            'cost': 0,
            'conversions': 0,
            'revenue': 0,
        }

        fetchedData.forEach((row) => {
            temp['clicks'] += row['clicks'];
            temp['cost'] += row['cost'];
            temp['conversions'] += row['conversions'];
            temp['revenue'] += row['revenue'];
        })

        setTotal(temp);
        displayChart(fetchedData);
        setData(fetchedData)
    }, []);


    // on change of selectedValue state 
    useEffect(() => {
        displayChart(data);
    }, [selectedValue])


    // displaying Doughnut chart 
    const displayChart = (fetchedData) => {
        if (fetchedData <= 0) return;
        let lables = [];
        let rawData = [];
        fetchedData.forEach((row) => lables.push(row['group']));
        fetchedData.forEach((row) => rawData.push(row[selectedValue]));

        setChartData({
            labels: lables,
            datasets: [{
                data: rawData,
                backgroundColor: color,
            }]
        });
    }


    // Sorting particular property of table based on accending and decending order 
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
        <div className='graph-wrapper'>
            <div className='graph'>
                <div>
                    <div className='graph-top'>
                        <div className='graph-top-left'>
                            <p>Ad Insights</p>
                        </div>
                        <div className='graph-top-right'>
                            {
                                !toggle &&
                                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                                    <option value={'clicks'} >Clicks</option>
                                    <option value={'cost'} >Cost</option>
                                    <option value={'conversions'} >Conversions</option>
                                    <option value={'revenue'} >Revenue</option>
                                </select>
                            }
                            <span>?</span>
                        </div>
                    </div>
                    <div className='graph-middle'>
                        {
                            !toggle &&
                            <div className='chart-wrapper'>
                                {
                                    chartData &&
                                    <div className='chart'>
                                        <Doughnut
                                            data={chartData}
                                            options={options}
                                        />
                                    </div>
                                }
                                <ul className='label-wrapper'>
                                    {
                                        chartData &&
                                        data.map((row, idx) => {
                                            return (
                                                <li key={row.id}>
                                                    <span className='label-color' style={{ backgroundColor: color[idx] }}>
                                                    </span>
                                                    <span className='label-per'>
                                                        {(row[selectedValue] / (total[selectedValue] / 100)).toFixed(2) + '%'}
                                                    </span>
                                                    <span className='label-name'>
                                                        {row['group']}
                                                    </span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        }

                        {
                            toggle &&
                            <div className='table-container'>
                                <table className='table-wrapper'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <span>Group</span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        onClick={() => sortHandler('group', true)}
                                                        icon={faChevronUp}
                                                        style={sorActive.column === 'group' && sorActive.flag && { opacity: 1 }}
                                                    />
                                                    <FontAwesomeIcon
                                                        onClick={() => sortHandler('group', false)}
                                                        icon={faChevronDown}
                                                        style={sorActive.column === 'group' && !sorActive.flag && { opacity: 1 }}
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
                                                        <td>{row.group}</td>
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
                        }
                    </div>
                </div>

                <div className='graph-bottom'>
                    <div className='graph-bottom-wrapper'>
                        <FontAwesomeIcon icon={faPieChart} className={!toggle === true ? 'icons active' : 'icons'} onClick={() => setToggle(!toggle)} />
                        <FontAwesomeIcon icon={faTable} className={toggle === true ? 'icons active' : 'icons'} onClick={() => setToggle(!toggle)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdInsightsGraph
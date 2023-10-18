import React, { useEffect, useState } from 'react'
import './AdInsightsGraph.css'
import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
Chart.register([ArcElement]);

function AdInsightsGraph() {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('clicks');
    const [chartData, setChartData] = useState(null);
    const [total, setTotal] = useState({});
    const [toggle, setToggle] = useState(false)

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


    useEffect(() => {
        displayChart(data);
    }, [selectedValue])


    const color = ['#FF6F00', '#0288D1', '#121212'];
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

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
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
                            <table className='table-wrapper'>
                                <thead>
                                    <tr>
                                        <th>
                                            <span>Group</span>
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
                        }
                    </div>
                </div>

                <div className='graph-bottom'>
                    <div className='graph-bottom-wrapper'>
                        <span className={!toggle === true ? 'active' : null} onClick={() => setToggle(!toggle)}></span>
                        <span className={toggle === true ? 'active' : null} onClick={() => setToggle(!toggle)}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdInsightsGraph
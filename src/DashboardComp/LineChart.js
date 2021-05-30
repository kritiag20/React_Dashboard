import React from 'react'
import { Card, CardHeader, withStyles, makeStyles } from '@material-ui/core'
import { Line } from 'react-chartjs-2'

const datas = [49.734, 58.015, 42.542, 56.088, 58.694, 43.034, 47.487, 62.763, 44.234, 42.434, 58.348, 49.834]
const LastYearData = [46.134, 47.015, 31.242, 45.088, 40.094, 31.334, 33.090, 47.863, 34.034, 35.200, 39.748, 32.834]
const LabelXaxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CardHead = withStyles(() => ({
    root: {
        paddingBottom: 5,
        marginBottom: -15,
    },
    title: {
        fontSize: 18,
        paddingLeft: 5,
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    subheader: {
        border: 1,
        padding: 2,
        borderStyle: 'solid',
        borderColor: '#818891',
        width: 50,
    }
}))(CardHeader);


const styling = makeStyles({
    root: {
        padding: 20,
        margin: 15,
        borderRadius: 15,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    body: {
        width: 800,
    },
})

function LineChart() {

    const style = styling();

    const data = {
        labels: LabelXaxis,
        tooltip: {
            shared: true
        },
        datasets: [
            {
                showInLegend: true,
                label: 'This Year',
                data: datas,
                pointBackgroundColor: ['none'],
                borderColor: ['#24ccb8'],
                backgroundColor: ['#24ccb8'],
                pointRadius: [0],
                pointHoverBorderColor: ['#24ccb8'],
                pointHoverBorderWidth: [3],
                pointHoverBackgroundColor: ['#fff'],
                pointHoverRadius: [6],
                tension: [0.4]
            },
            {
                showInLegend: true,
                label: 'Last Year',
                data: LastYearData,
                pointBackgroundColor: ['none'],
                borderColor: ['#ffd322'],
                backgroundColor: ['#ffd322'],
                pointRadius: [0],
                pointHoverBorderColor: ['#ffd322'],
                pointHoverBorderWidth: [3],
                pointHoverBackgroundColor: ['#fff'],
                pointHoverRadius: [6],
                tension: [0.4]
            }
        ]
    }

    const options = {
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {

            y: {
                min: 10,
                stepSize: 10,
                ticks:
                {
                    callback: function (value) {
                        return value + 'k';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                align: 'start',
                maxHeight: 90,
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    padding: 30,
                    borderColor: ['#D1D5DB']
                }
            },
            tooltip: {
                backgroundColor: ['#007aff'],
                yAlign: 'bottom',
                padding: 10,
                position: 'average',
                bodySpacing: 5,
                callbacks: {
                    title: function (item) {
                        return;
                    },
                    labelColor: function (context) {
                        return {};
                    },
                    label: function (item) {
                        if (item.dataset.label === 'This Year') {
                            let ylabel_thisYear = item.parsed.y;
                            let label = 'This Year = ' + ylabel_thisYear;
                            return label;

                        }
                        if (item.dataset.label === 'Last Year') {
                            let ylabel_thisYear = item.parsed.y;
                            let label = 'Last Year = ' + ylabel_thisYear;
                            return label;
                        }

                    }
                }
            }

        },
        layout: {
            padding: 10
        }
    }

    return (
        <div>
            <Card className={style.root}>
                <CardHead title="Revenue" subheader="year" />
                <div className="chart">
                    <Line data={data} options={options} />
                </div>
            </Card>
        </div>
    )
}

export default LineChart

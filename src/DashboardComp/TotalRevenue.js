import React from 'react'
import {
    Card, makeStyles, CardHeader, withStyles
} from '@material-ui/core';
import { Line } from 'react-chartjs-2'

const datas = [1, 0.8, 1.7, 1.2, 2, 1.2, 2.1];

const UseStyle = makeStyles({
    root: {
        width: 270,
        paddingLeft: 10,
        color: '#818891',
        borderRadius: 10,
        padding: 10,
        margin: 15,
    }
})

const StyleCardHeader = withStyles(() => ({
    root: {
        padding: 5,
        marginBottom: -70,
    },
    title: {
        fontSize: 14,
        fontWeight: 600,
    },
    subheader: {
        fontSize: 20,
        fontWeight: 600,
        paddingTop: 5,
        color: '#818891',
    }
}))(CardHeader);


function TotalRevenue() {
    const styleClass = UseStyle();
    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                label: "Total Revenue",
                data: datas,
                pointBackgroundColor: ['none'],
                borderColor: ['#24ccb8'],
                backgroundColor: ['#C3EBE6'],
                pointRadius: [0],
                tension: [0.4],
                fill: true,
            }
        ]
    }

    const options = {
        scales: {
            y: {
                min: 0,
                max: 5,
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    stepSize: 1,
                    display: false,

                }
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                    drawBorderRadius: 10,
                },
                ticks: {
                    display: false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

    return (

        <div>
            <Card className={styleClass.root}>
                <StyleCardHeader title="Total Revenue" subheader="$8,521" />
                <Line data={data} options={options} />
            </Card>
        </div>
    )
}

export default TotalRevenue

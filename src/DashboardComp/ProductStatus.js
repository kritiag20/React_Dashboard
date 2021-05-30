import { Card, CardHeader, makeStyles, withStyles } from '@material-ui/core'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const datas = [140, 210, 150]
const LabelXaxis = ['Canceled', 'Pending', 'Delivered']

const data = {

    labels: LabelXaxis,
    datasets: [
        {
            showInLegend: true,
            data: datas,
            borderColor: '#fff',
            backgroundColor: ['#ff5967', '#ffd322', '#24ccb8'],
            radius: 150,
            rotation: 40,
            // offset: 0,
            borderWidth: 0,
            cutout: 110,
        }
    ],
}

const options = {
    plugins: {
        legend: {
            position: 'bottom',
            align: 'center',
            maxHeight: 90,
            reverse: true,
            labels: {
                boxWidth: 15,
                boxHeight: 15,
            }
        }
    }
}

const UseStyle = makeStyles({
    root: {
        width: 370,
        paddingLeft: 5,
        color: '#818891',
        borderRadius: 15,
        padding: 10,
        margin: 15,
    }
})
const CardHead = withStyles(() => ({
    root: {
        paddingBottom: 5,
    },
    title: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 600,
    }
}))(CardHeader);

function ProductStatus() {
    const Style = UseStyle();
    return (
        <div>
            <Card className={Style.root}>
                <CardHead className={Style.title} title="Product Status" />
                <Doughnut data={data} options={options} />
            </Card>
        </div>
    )
}

export default ProductStatus


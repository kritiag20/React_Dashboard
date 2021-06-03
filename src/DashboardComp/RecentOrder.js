import React from 'react'
import {
    withStyles, makeStyles, CardHeader, Card, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#007aff',
        color: theme.palette.common.white,
        fontSize: 14,
    },
    body: {
        fontSize: 14,
        color: '#818891',
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: '#F3F4F6',
        borderRadius: 30,
        borderColor: '#FEEDAE',
    },
}))(TableRow);

function createData(orderno, date, cus_name, price, status) {
    return { orderno, date, cus_name, price, status };
}

const rows = [
    createData('#425482', '05/09/2020', 'Wade Warren', '$523', "Pending"),
    createData('#425481', '28/08/2020', 'Jenny Wilson', '$782', "Delivered"),
    createData('#425480', '17/08/2020', 'Kristin Watson', '$325', "Pending"),
    createData('#425479', '07/08/2020', 'Kathryn Murphy', '$652', "Delivered"),
];

const CardHead = withStyles(() => ({
    root: {
        paddingLeft: 0,
        paddingRight: 0,
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
        paddingRight: 8,
    }

}))(CardHeader);

const styling = makeStyles({
    root: {
        width: 800,
        height: 386,
        padding: 20,
        margin: 15,
        borderRadius: 15,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    rowStyles: {
        borderWidth: 2,
        borderRadius: 10,
    },
    body: {
        fontSize: 14,
        width: 800,
        height: 330,
    },
    text: {
        height: 35,
        padding: 10,
        width: 120,
    },
    text1: {
        color: '#F1BF0D',
        backgroundColor: '#FEEBA6',
        padding: '8px 30px',
        width: 85,
        textAlign: 'center',
    },
    text2: {
        color: '#24ccb8',
        backgroundColor: '#C3EBE6',
        padding: '8px 30px',
        width: 85,
        textAlign: 'center',
    },
})

function RecentOrder() {
    const Styleclass = styling();

    let val = rows.length;
    let style = [];

    for (let i = 0; i < val; i++) {
        if ((i % 2 == 0)) {
            style.push(Styleclass.text1)
        }
        else {
            style.push(
                Styleclass.text2
            )
        }
    }

    return (
        <Card className={Styleclass.root}>
            <CardHead title="Recent Orders"
                subheader="see all" />

            <TableContainer component={Paper}>
                <Table className={Styleclass.body}>

                    <TableHead>
                        <StyledTableRow className={Styleclass.rowStyles}>
                            <StyledTableCell>#Order No.</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Customer Name&nbsp;</StyledTableCell>
                            <StyledTableCell align="left">Price&nbsp;</StyledTableCell>
                            <StyledTableCell align="left">Status&nbsp;</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row,index) => (
                            <StyledTableRow className={Styleclass.rowStyles} key={row.orderno}>
                                <StyledTableCell component="th" scope="row">
                                    {row.orderno}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.date}</StyledTableCell>
                                <StyledTableCell align="left">{row.cus_name}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}</StyledTableCell>
                                <StyledTableCell className={Styleclass.text} align="left">
                                    <TableCell className={style[index]}>
                                        {row.status}
                                    </TableCell>
                                    
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </Card>
    )
}

export default RecentOrder

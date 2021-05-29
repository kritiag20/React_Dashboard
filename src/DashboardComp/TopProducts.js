import React from 'react'
import {
    InputAdornment, Card, CardHeader, makeStyles, List, ListItem,
    ListItemAvatar, ListItemText, ListItemSecondaryAction, withStyles
} from '@material-ui/core';
import Watch from '../Images/watch.jpeg'
import Backpack from '../Images/backpack.jpeg'
import LadiesBag from '../Images/ladiesBag.jpeg'
import LeatherBag from '../Images/leatherBag.jpeg'
import Shoes from '../Images/shoes.jpeg'
import Bracelet from '../Images/bracelet.jpeg'

const products = [
    {
        id: 1,
        name: 'Navy Blue Smart Watch',
        imageUrl: Watch,
        tags: 'Men, Watch',
        price: 230
    },
    {
        id: 2,
        name: 'Blue Grey Backpack',
        imageUrl: Backpack,
        tags: 'Men, Backpack',
        price: 150
    },
    {
        id: 3,
        name: 'Navy Blue Sneakers Shoe',
        imageUrl: Shoes,
        tags: 'Men, Shoe',
        price: 175
    },
    {
        id: 4,
        name: 'Fashion Ladies Bag',
        imageUrl: LadiesBag,
        tags: 'Women, Bag',
        price: 210
    },
    {
        id: 5,
        name: 'Brown Leather Bracelet',
        imageUrl: Bracelet,
        tags: 'Men, Bracelet',
        price: 165
    },
    {
        id: 6,
        name: 'Fancy Ladies Leather Bag',
        imageUrl: LeatherBag,
        tags: 'Women, Bag',
        price: 350
    }
];

const CardHead = withStyles(() => ({
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

const ListItemTextStyle = withStyles(() => ({
    primary: {
        fontSize: 15,
        textTransform: 'capitalize',
    },
}))(ListItemText);

const UseStyle = makeStyles({
    root: {
        width: 380,
        paddingLeft: 5,
        color: '#4B5563',
        borderRadius: 15,
    },
    head: {
        padding: 20,
        paddingTop: 0,
    },
    body: {
        border: 1,
        borderColor: '#E5E7EB',
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 3,
        paddingLeft: 6,
    },
    filled: {
        alignItems: 'flex-end',
        fontSize: 15,
    }
})

function TopProducts() {
    const styleClass = UseStyle();
    return (
        <div>
            <Card className={styleClass.root}>
                <CardHead title="Top Products"
                    subheader="see all" />

                <List className={styleClass.head}>
                    {products.map((product, i) => (
                        <ListItem className={styleClass.body} key={product.id}>
                            <ListItemAvatar>
                                <img
                                    alt={product.name}
                                    src={product.imageUrl}
                                    style={{
                                        height: 48,
                                        width: 48
                                    }}
                                />
                            </ListItemAvatar>
                            <ListItemTextStyle
                                primary={product.name}
                                secondary={product.tags}
                            />
                            <ListItemSecondaryAction>
                                <InputAdornment className={styleClass.filled} position="start">${product.price}</InputAdornment>

                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </div>
    )
}

export default TopProducts
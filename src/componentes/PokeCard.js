import React from 'react';
import {Card,CardMedia, CardContent,Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function PokeCard({name, classes,image}){

    return(

        <Card className= {classes.item}>
            <CardMedia className={classes.media} image ={image}/>
            <CardContent>
                <Typography>{name}</Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles({
    item:{
        minWidth:"350px",
        margin: "2em", 
        textAlign:"center",
        boxSizing:"border-box",
        padding: "1em"
    },
    media:{
        minHeight : "350px"
    }

})(PokeCard);
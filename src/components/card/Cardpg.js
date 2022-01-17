import React, { useState } from "react";
import { Grid, Box, Typography, Button } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
const styles = {
    paper1: {
        height: 100,
        width: 300,
        background: "#2c4c87"
    },
    paper2: {
        height: 340,
        width: 300,
        background: "#5f2d2d"
    },
    container: {
        marginTop: 100,
        marginBottom: 100,
        boxShadow: '1 10px black'
    },
    typo1: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        color: 'white',
        fontFamily: 'Monospace'
    },
    typo2: {
        textAlign: 'justify',
        color: 'white',
        fontSize: '13px',
        marginTop: 20,
        marginBottom: 35,
        marginLeft: 20,
        marginRight: 20,
    },
    imgbox: {
        textAlign: "center"
    },
    button: {
        background: "#aaaaaa"
    }
};

const Cardpg = () => {
    return (
        <div>
            <Grid container
                justifyContent="center"
                alignItems="center"
                direction="column"
                style={styles.container}>
                <Grid item backgroudColor={'red'}>
                    <Box style={styles.paper1}>
                        <Grid container
                            alignItems="center"
                            justifyContent="center"
                            style={styles.imgbox} >
                            <Grid item xs={8}>
                                <img src="https://cdn-icons-png.flaticon.com/512/6455/6455915.png" height={'150px'} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item>
                    <Box style={styles.paper2}>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            direction="column"
                        >
                            <Grid item xs={2}>
                                <Typography variant="h4" style={styles.typo1}>Andrea GTA</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h5" color='white'>Programmer</Typography>
                            </Grid>
                            <Grid item xs={6} >
                                <Typography style={styles.typo2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro adipisci odio. Hic dolorum, doloremque magnam ut similique exercitationem sed maxime impedit suscipit. Id repudiandae voluptatum asperiores repellendus inventore quaerat!</Typography>
                            </Grid>
                            <Grid item xs={2} >
                                <Button style={styles.button} variant="contained" color="secondary">NEXT</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div >
    );
}
export default Cardpg;
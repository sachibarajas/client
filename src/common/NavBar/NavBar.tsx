import { AppBar, Box, Toolbar, Container, Grid, Button, Stack } from "@mui/material";
import gitHub from "../../assets/github.svg";
import linkedIn from '../../assets/linkedin.svg';
import React from "react";
import s from './NavBar.module.css';

export const NavBar: React.FC<{}> = () => {
    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Grid item>

                            </Grid>
                            <Grid item>
                                <Stack direction='row' spacing={2}>
                                <Button variant="text">Home</Button>
                                <Button variant="text">Projects</Button>
                                <Button variant="text">About Me</Button>
                                    <Button sx={{padding: 0}}>
                                        <img src= {gitHub} alt="" className={s.socialMedia}/>
                                    </Button>
                                    <Button sx={{padding: 0}}>
                                        <img src= {linkedIn} alt="" className={s.socialMedia}/>
                                    </Button>
                                    
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
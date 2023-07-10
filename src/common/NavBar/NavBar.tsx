import { AppBar, Box, Toolbar, Container, Grid, Button, Stack } from "@mui/material";
import gitHub from "../../assets/github.svg";
import linkedIn from '../../assets/linkedin.svg';
import React from "react";
import s from './NavBar.module.css';

export const NavBar: React.FC<{}> = () => {
    return(
        <Box sx={{flexGrow:1}} >
            <AppBar position="fixed" >
                <Toolbar>
                    <Container maxWidth='xl' >
                        <Grid container direction='row' justifyContent='space-between' alignItems='center' >
                            <Grid item>

                            </Grid>
                            <Grid item>
                                <Stack direction='row' spacing={2}  >
                                    <Button className={s.textButton} variant="text">Home</Button>
                                    <Button className={s.textButton} variant="text">Projects</Button>
                                    <Button className={s.textButton} variant="text">About Me</Button>
                                    <a href="https://github.com/sachibarajas">
                                        <Button sx={{padding: 0}}>
                                            <img src= {gitHub} alt="" className={s.socialMedia}/>
                                        </Button>
                                    </a>
                                    <a href="www.linkedin.com/in/santiagobarajas-fullstack">
                                        <Button sx={{padding: 0}}>
                                            <img src= {linkedIn} alt="" className={s.socialMedia}/>
                                        </Button>
                                    </a>
                                    
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
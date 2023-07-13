import { AppBar, Box, Toolbar, Grid, Button, Stack, Select, MenuItem } from "@mui/material";
import gitHub from "../../assets/github.svg";
import linkedIn from '../../assets/linkedin.svg';
import React from "react";
import s from './NavBar.module.css';
import { Link, useLocation } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
    let location = useLocation();
    console.log(`location: ${location.pathname}`);
    return(
        <Box sx={{flexGrow:1, justifyContent: 'right'}} >
            <AppBar position="fixed" >
                <Toolbar>
                        <Grid container direction='row' justifyContent='right' alignItems='center' marginTop='1.2rem'>
                            <Grid item justifyContent='right'>
                                <Stack direction='row' spacing={2}  alignItems='center' className={s.navBar} justifyContent='right'>
                                    {location.pathname!=='/' && <Box>
                                        <Link to='/'><Button sx={{marginLeft: '20px'}} >Home</Button></Link>
                                        <Link to='/projects'><Button sx={{marginLeft: '20px'}} >Projects</Button></Link>
                                        <Link to='/aboutme'><Button sx={{marginLeft: '20px'}} >About Me</Button></Link>
                                    </Box>}
                                   <Box display='flex' flexDirection='row' alignContent='center' alignItems='center'>
                                        
                                        <Box alignItems='center'>
                                            <Link to="https://github.com/sachibarajas">
                                                <img src= {gitHub} alt="" className={s.socialMedia}/>
                                            </Link>
                                        </Box>
                                        <Box>
                                            <Link to="https://www.linkedin.com/in/santiagobarajas-fullstack">
                                                <img src= {linkedIn} alt="" className={s.socialMedia}/>
                                            </Link>
                                        </Box>
                                        <Box display='flex' flexDirection='row' alignItems='center' marginRight='12px'>
                                            <Select
                                                defaultValue={'English'}
                                                variant="standard"
                                                inputProps={{
                                                name: 'lang',
                                                id: 'uncontrolled-native',
                                                }}
                                            >
                                                <MenuItem value={'English'}>ENG</MenuItem>
                                                <MenuItem value={'Spannish'}>SPA</MenuItem>
                                            </Select>               
                                        </Box>
                                   </Box>
                                    
                                </Stack>
                            </Grid>
                        </Grid>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}
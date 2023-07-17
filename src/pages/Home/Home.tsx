import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

import astronaut from '../../assets/astronauta_partes.svg';
import planet2 from '../../assets/planet2.svg';


//Imagenes del fondo
import backGround from '../../assets/planetas separados/tres-juntos.svg';
import backGround2 from '../../assets/planetas separados/planet separados-03.svg';
import backGround3 from '../../assets/planetas separados/planet separados-02.svg'

//planeta 1
import planet1_1 from '../../assets/planetas separados/planet separados-04.svg';
import planet1_2 from '../../assets/planetas separados/planet separados-05.svg';
import planet1_3 from '../../assets/planetas separados/planet separados-06.svg';

//planeta 3
import planet3_1 from '../../assets/planetas separados/proyects01.svg';
import planet3_2 from '../../assets/planetas separados/proyects02.svg';
import planet3_3 from '../../assets/planetas separados/proyects03.svg';


export const Home: React.FC<{}> = () => {
    return(
        <Container maxWidth='xl' className={s.homeContainer}>
            <img src={backGround} alt="" className={s.backGround}/>
            <img src={backGround2} alt="" className={s.backGround2}/>
            <img src={backGround3} alt="" className={s.backGround3}/>
            
            <Grid container 
                // justifyContent='flex-start' 
                direction='column' 
                alignItems='center' 
                sx={{height:'100vh'}}
                alignContent ='space-around'
                className={s.mainGrid}>
                <Grid item sx={{}}>
                    <Box><img src={astronaut} alt='astronaut' className={s.astronautImg} /></Box>
                </Grid>
                <Grid item sx={{}}>
                   <Stack direction='row' justifyContent='space-between'>
                        {/* <Box ><img src={planet1} alt='planet 1' className={s.aboutMe}/></Box> */}
                        <Box >
                            <Link to='/aboutme' className={s.link}>
                                <Typography variant= 'h3' className={s.aboutMeTxt}>About me</Typography>
                                <img src={planet1_1} alt='planet 1' className={s.aboutMe}/>
                                <img src={planet1_2} alt='planet 1' className={s.aboutMe}/>
                                <img src={planet1_3} alt='planet 1' className={s.aboutMe3}/>
                            </Link>
                            
                        </Box>
                        <Box >
                            <Link to='/tech'>
                                <Typography variant= 'h3' className={s.techTxt}>Tech</Typography>
                                <img src={planet2} alt='planet 2' className={s.tech}/>
                            </Link>
                        </Box>
                        <Box >
                            <Link to='/projects'>
                                <Typography variant= 'h3' className={s.projectsTxt}>Projects</Typography>
                                <img src={planet3_1} alt='planet 3' className={s.projects}/>
                                <img src={planet3_2} alt='planet 3' className={s.projects2}/>
                                <img src={planet3_3} alt='planet 3' className={s.projects3}/>
                            </Link>
                        </Box>
                   </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}